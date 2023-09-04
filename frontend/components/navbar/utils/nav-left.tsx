"use client"

import { FC, useState } from "react"
import Link from "next/link"

interface NavLeftProps {
  main: string
  submain: string
  path: string
  path2: string
  href: string
  viewBox?: string
  stroke?: string
  strokeWidth?: number
  strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined
  strokeLinejoin?: "round" | "inherit" | "miter" | "bevel" | undefined
  circleCX?: number
  circleCY?: number
  circleR?: number
  circleCX2?: number
  circleCY2?: number
  circleR2?: number
  fill?: string
}

const NavLeft: FC<NavLeftProps> = ({
  main,
  submain,
  path,
  path2,
  href,
  viewBox,
  stroke,
  strokeWidth,
  fill,
  strokeLinecap,
  strokeLinejoin,
  circleCX,
  circleCY,
  circleR,
  circleCX2,
  circleCY2,
  circleR2,
}) => {
  const [focus, setFocus] = useState<boolean>(false)
  return (
    <Link
      href={`${href}`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className="flex cursor-pointer items-center space-x-3 py-3"
    >
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
        version="1.1"
        viewTarget={viewBox}
        width="24"
        data-view-component="true"
        className={` mr-3 transition duration-100 ease-in  ${
          focus ? "text-blue-600" : "text-primary"
        }`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      >
        {circleCX && circleCY && circleR && (
          <>
            <circle cx={circleCX} cy={circleCY} r={circleR} />
            <circle cx={circleCX2} cy={circleCY2} r={circleR2} />
          </>
        )}
        <path d={path}></path>
        <path d={path2}></path>
      </svg>
      <div
        className={`${
          focus ? "text-blue-600" : "text-primary/40"
        } text-[14px] transition duration-100 ease-in`}
      >
        <div
          className={`font-semibold capitalize transition duration-100 ease-in  ${
            focus ? "text-blue-600" : "text-primary"
          } text-base leading-5`}
        >
          {main}
        </div>
        {submain}
      </div>
    </Link>
  )
}

export default NavLeft
