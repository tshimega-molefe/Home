"use client"

import { FC, useEffect, useState } from "react"
import { animated, useSpring } from "@react-spring/web"

interface HoverCardProps {
  children: React.ReactNode
  backgroundColor: string
  direction: string
  left: string
}

const calc = (x: number, y: number): [number, number, number] => [
  -(y - window.innerHeight / 2) / 360,
  (x - window.innerWidth / 2) / 240,
  1.02,
]

const trans = (x: number, y: number, s: number): string =>
  `perspective(900px) rotateX(${-x}deg) rotateY(${-y}deg)`

const HoverCard: FC<HoverCardProps> = ({
  children,
  backgroundColor,
  direction,
  left,
}) => {
  const [hovered, setIsHovered] = useState(false)
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 6000, friction: 1000 },
  }))

  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMousePosition = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event
      setCursorCoords({ x, y })
    }

    window.addEventListener("mousemove", handleMousePosition)

    return () => {
      window.removeEventListener("mousemove", handleMousePosition)
    }
  }, [])

  const calcTranslate = (
    coordinate: number,
    containerSize: number,
    itemSize: number
  ) => (coordinate / containerSize) * (containerSize - itemSize)

  const translateX =
    typeof window !== "undefined"
      ? calcTranslate(cursorCoords.x, window.innerWidth, 600)
      : 0
  const translateY =
    typeof window !== "undefined"
      ? calcTranslate(cursorCoords.y, window.innerHeight, 500)
      : 0

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX: x, clientY: y } = event
    set({ xys: calc(x, y) })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] })
    setIsHovered(false)
  }

  return (
    <animated.div
      className="mb-3 overflow-hidden rounded-xl md:mb-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: springProps.xys.to(trans) }}
    >
      <div
        className={`relative z-[1] h-full rounded-xl border-[0.5px] border-[#30363d] bg-card/80 shadow-xl dark:bg-card md:flex ${direction} justify-between`}
      >
        {children}
        <div
          className={`back absolute bottom-[50px]  z-[-1] h-[1000px] w-[500px] border-none ${
            hovered ? "opacity-95" : "opacity-0"
          } `}
          style={{
            transform: `translateX(${translateX}px) translateY(${
              2 * translateY
            }px)`,
            background: backgroundColor,
            borderRadius: "100%",
            mixBlendMode: "soft-light",
            left: left,
            willChange: "transform",
            transition: "transform 0.2s cubic-bezier",
          }}
        ></div>
      </div>
    </animated.div>
  )
}

export default HoverCard
