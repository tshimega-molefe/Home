"use client"

import { FC, useState } from "react"
import Link from "next/link"

import HoverCard from "../product-section/hover-card"

interface VideoPlayerProps {}

const VideoPlayer: FC<VideoPlayerProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className="relative z-[1]">
      <HoverCard backgroundColor="#939aff" direction="" left="0">
        <div className="flex w-full items-center justify-center max-md:py-5 md:py-5">
          <Link
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            href="/dashboard"
            className="inline-block py-1 text-xl font-medium text-[#7d8590] md:text-2xl"
          >
            Go to dashboard
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={` mb-[2px] ml-3 inline-block text-[#7d8590] transition duration-300 ease-in  ${
                hovered ? "translate-x-0 " : "-translate-x-1"
              }`}
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              ></path>
              <path
                className={` text-[#7d8590] transition duration-150 ease-in ${
                  hovered ? " opacity-100" : "opacity-0 "
                }`}
                stroke="currentColor"
                d="M1.75 8H11"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
            <div
              className={` ${
                hovered ? "w-11/12 scale-100" : "w-0 scale-0"
              } h-[2.5px]  origin-left rounded-full bg-[#7d8590] transition duration-300 ease-in`}
            ></div>
          </Link>
        </div>
      </HoverCard>
    </div>
  )
}

export default VideoPlayer
