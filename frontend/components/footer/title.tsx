"use client"

import { FC, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"

interface TitleProps {}

const Title: FC<TitleProps> = ({}) => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    <div className="overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto relative z-[2]">
        <div className="flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col">
          <div className="py-3 mb-2 flex flex-col justify-center items-center">
            <h2 className="px-4 mb-4 md:w-9/12 mx-auto lg:text-5xl md:text-4xl text-3xl font-bold text-primary">
              Change it, influence it, build your own things other people can
              use
            </h2>
            <p className="mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto md:w-7/12">
              Swift Stack is a home to people who passionately think about how
              to make life better for others. Become part of the Stack; whether
              you use our software, or you just want to build.
            </p>
            <div className="lg:ml-5 flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5 lg:mt-20">
              <Link
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                href="#consultation"
                className={`${cn(
                  buttonVariants({ variant: "default", size: "lg" })
                )}`}
              >
                Book a consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` ml-2 transition ease-in duration-150 ${
                    hovered ? "translate-x-2 " : "-translate-x-0"
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
                    className={`  transition ease-in duration-150 ${
                      hovered ? " opacity-100" : "opacity-0 "
                    }`}
                    stroke="currentColor"
                    d="M1.75 8H11"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </Link>
              <Link
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
                href="/onboarding"
                className={`${cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}`}
              >
                Create an account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` ml-2 transition ease-in duration-150 ${
                    hovered1 ? "translate-x-2 " : "-translate-x-0"
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
                    className={` text-primary transition ease-in duration-150 origin-right ${
                      hovered1 ? " opacity-100" : "opacity-0 "
                    }`}
                    stroke="currentColor"
                    d="M1.75 8H11"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title
