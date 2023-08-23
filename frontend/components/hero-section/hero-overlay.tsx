"use client"

import { FC } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Icons } from "../icons"
import { buttonVariants } from "../ui/button"
import { Input } from "../ui/input"
import { HeroForm } from "./hero-form"

interface HeroOverlayProps {}

const HeroOverlay: FC<HeroOverlayProps> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.0 }}
      className="absolute flex md:max-w-fit w-full flex-col items-start md:gap-6 gap-4 bottom-[20rem] lg:bottom-[28rem] max-md:pr-10 z-40"
    >
      {/* <Link
        href="/sea-point"
        className="border-[1px] border-neutral-600 copilot rounded-full inline-block active:scale-95 transition-all duration-150 hover:scale-105 max-md:mr-4 truncate"
      >
        <div className="flex items-center py-2 px-10">
          <Icons.waves className="w-auto flex-grow-0 flex-shrink-0 mr-4 max-md:mr-3 text-[#f8fafc] max-md:w-4 max-md:h-4 md:h-6 md:w-6" />
          <div className="md:pr-5 pr-3 md:mr-2 md:pl-2">
            <div className="font-medium text-[#f8fafc] text-base max-md:text-sm leading-5">
              Introducing SeaPoint&trade;
            </div>
            <div className="text-[#f8fafc]/40 max-md:text-xs text-base">
              Purchase Real Estate with Crypto
            </div>
          </div>
          <div className="ml-auto">
            <Icons.chevronRight className="text-[#f8fafc]" />
          </div>
        </div>
      </Link> */}
      <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold leading-tight tracking-tighter lg:leading-[1.2em] transition-all duration-500 text-[#f8fafc] max-md:mr-4">
        Enterprise Software Solutions
        <br /> Built by Swift.
      </h1>
      <span className="text-base font-normal text-[#f8fafc]/60 transition-all duration-500">
        Think Fast.
      </span>

      <div className="max-md:w-full flex md:flex-row max-md:flex-col max-md:gap-4">
        <div className="max-md:w-full">
          <HeroForm />
        </div>
        <span className="border md:border-l border-[#f8fafc]/30 md:mx-4 max-md:hidden" />
        <Link
          href="/consultation"
          rel="noreferrer"
          className={`${buttonVariants({
            variant: "secondary",
            size: "sm",
          })} text-center max-md:mr-6 group dark:bg-background hover:dark:bg-background/60 active:scale-95`}
        >
          Book a consultation
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` arrow-symbol-mktg text-primary ml-3 transition ease-in duration-150 group-hover:translate-x-0 -translate-x-1`}
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
              className={` text-primary transition ease-in duration-150 group-hover:opacity-100 opacity-0`}
              stroke="currentColor"
              d="M1.75 8H11"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default HeroOverlay
