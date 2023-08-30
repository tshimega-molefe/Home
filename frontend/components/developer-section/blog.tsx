"use client"

import { FC, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ai, business, team } from "@/assets"
import { motion } from "framer-motion"

import HoverCard from "@/components/product-section/hover-card"

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered1, setHovered1] = useState<boolean>(false)
  const [hovered2, setHovered2] = useState<boolean>(false)
  return (
    <div className="w-full flex flex-col">
      <HoverCard backgroundColor="#ffa28b" direction="" left="0">
        <div className="flex-1 flex-col justify-between p-8 sm:p-10 md:flex md:space-y-20 lg:py-16 lg:pl-16 lg:pr-32 ">
          <div className=" mb-6 text-sm font-light text-muted-foreground md:text-base space-y-2">
            <span className="font-medium text-primary text-xl md:text-3xl">
              The principles of scaling a business
            </span>
            <div className="flex flex-row space-x-2 items-center">
              <Link href="/" className="hover:underline">
                Chiara Crystal
              </Link>
              <p>Sep 14, 2023</p>
            </div>
          </div>
          <div>
            <Link
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href="/"
              className=" inline-block font-semibold text-primary md:text-xl"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` mb-[3px] ml-3 inline-block text-primary transition duration-300 ease-in ${
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
                  className={` text-primary transition duration-150 ease-in ${
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
                } h-[2.5px]  origin-left rounded-full bg-primary transition duration-300 ease-in`}
              ></div>
            </Link>
          </div>
        </div>
        <div className="shadow-3xl z-[1] flex-1 overflow-hidden rounded-s-lg">
          <div className="box-shadow-card-mktg mx-3 max-sm:mb-4 sm:mb-12 md:mb-8 rounded-lg bg-transparent sm:mx-10 md:ml-0 md:mt-10">
            <div className="">
              <div className="mb-0 overflow-x-auto p-2 ">
                <Link
                  href="/"
                  passHref
                  className="flex items-center relative max-sm:h-[60vw] sm:h-96 md:h-80 rounded-lg overflow-hidden active:scale-95 transition-transform duration-100"
                >
                  <Image
                    src={business}
                    alt="blog-image"
                    className="object-cover"
                    fill
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HoverCard>
      <HoverCard backgroundColor="#ffa28b" direction="" left="0">
        <div className="flex-1 flex-col justify-between p-8 sm:p-10 md:flex md:space-y-20 lg:py-16 lg:pl-16 lg:pr-32 ">
          <div className=" mb-6 text-sm font-light text-muted-foreground md:text-base space-y-2">
            <span className="font-medium text-primary text-xl md:text-3xl">
              A letter from our founder: The future of Swift
            </span>
            <div className="flex flex-row space-x-2 items-center">
              <Link href="/" className="hover:underline">
                Tshimega Molefe
              </Link>
              <p>Sep 30, 2023</p>
            </div>
          </div>
          <div>
            <Link
              onMouseEnter={() => setHovered1(true)}
              onMouseLeave={() => setHovered1(false)}
              href="/"
              className=" inline-block font-semibold text-primary md:text-xl"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` mb-[3px] ml-3 inline-block text-primary transition duration-300 ease-in ${
                  hovered1 ? "translate-x-0 " : "-translate-x-1"
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
                  className={` text-primary transition duration-150 ease-in ${
                    hovered1 ? " opacity-100" : "opacity-0 "
                  }`}
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
              <div
                className={` ${
                  hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"
                } h-[2.5px]  origin-left rounded-full bg-primary transition duration-300 ease-in`}
              ></div>
            </Link>
          </div>
        </div>
        <div className="shadow-3xl z-[1] flex-1 overflow-hidden rounded-s-lg">
          <div className="box-shadow-card-mktg mx-3 max-sm:mb-4 sm:mb-12 md:mb-8 rounded-lg bg-transparent sm:mx-10 md:ml-0 md:mt-10">
            <div className="">
              <div className="mb-0 overflow-x-auto p-2 ">
                <Link
                  href="/"
                  passHref
                  className="flex items-center relative max-sm:h-[60vw] sm:h-96 md:h-80 rounded-lg overflow-hidden active:scale-95 transition-transform duration-100"
                >
                  <Image
                    src={team}
                    alt="blog-image"
                    className="object-cover"
                    fill
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HoverCard>
      <HoverCard backgroundColor="#ffa28b" direction="" left="0">
        <div className="flex-1 flex-col justify-between p-8 sm:p-10 md:flex md:space-y-20 lg:py-16 lg:pl-16 lg:pr-32 ">
          <div className=" mb-6 text-sm font-light text-muted-foreground md:text-base space-y-2">
            <span className="font-medium text-primary text-xl md:text-3xl">
              The impact of AI, and how we implement it ethically
            </span>
            <div className="flex flex-row space-x-2 items-center">
              <Link href="/" className="hover:underline">
                Ronny Okello
              </Link>
              <p>Oct 3, 2023</p>
            </div>
          </div>
          <div>
            <Link
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
              href="/"
              className=" inline-block font-semibold text-primary md:text-xl"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` mb-[3px] ml-3 inline-block text-primary transition duration-300 ease-in ${
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
                  className={` text-primary transition duration-150 ease-in ${
                    hovered2 ? " opacity-100" : "opacity-0 "
                  }`}
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
              <div
                className={` ${
                  hovered2 ? "w-11/12 scale-100" : "w-0 scale-0"
                } h-[2.5px]  origin-left rounded-full bg-primary transition duration-300 ease-in`}
              ></div>
            </Link>
          </div>
        </div>
        <div className="shadow-3xl z-[1] flex-1 overflow-hidden rounded-s-lg">
          <div className="box-shadow-card-mktg mx-3 max-sm:mb-4 sm:mb-12 md:mb-8 rounded-lg bg-transparent sm:mx-10 md:ml-0 md:mt-10">
            <div className="">
              <div className="mb-0 overflow-x-auto p-2 ">
                <Link
                  href="/"
                  passHref
                  className="flex items-center relative max-sm:h-[60vw] sm:h-96 md:h-80 rounded-lg overflow-hidden active:scale-95 transition-transform duration-100"
                >
                  <Image
                    src={ai}
                    alt="blog-image"
                    className="object-cover"
                    fill
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HoverCard>
    </div>
  )
}

export default Blog
