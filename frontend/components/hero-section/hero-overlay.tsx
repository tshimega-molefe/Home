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
      className="absolute z-40 flex w-full flex-col gap-4 max-lg:bottom-[30rem] max-lg:items-start max-lg:pr-10 md:items-center md:gap-12 lg:bottom-1/2 lg:left-1/2 lg:max-w-fit lg:-translate-x-1/2 lg:gap-20"
    >
      <Link
        href="/s/username/shop"
        className="copilot inline-block rounded-full border-[1px] border-primary transition-all duration-150 hover:scale-105 active:scale-95 dark:border-neutral-500 max-md:mr-4"
      >
        <div className="flex items-center px-10 py-2">
          <Icons.shopping className="mr-4 w-auto shrink-0 grow-0 text-primary max-md:mr-3 max-md:h-4 max-md:w-4 md:h-6 md:w-6" />
          <div className="pr-3 md:mr-2 md:pl-2 md:pr-5">
            <div className="text-base font-medium leading-5 text-primary max-md:text-sm">
              Introducing Swift Shopping&copy;
            </div>
            <div className="text-base text-muted dark:text-muted-foreground max-md:text-xs">
              Sell products with your Stack account
            </div>
          </div>
          <div className="ml-auto">
            <Icons.chevronRight className="text-primary" />
          </div>
        </div>
      </Link>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter text-primary transition-all duration-500 max-md:mr-4 md:whitespace-nowrap md:text-5xl lg:text-7xl lg:leading-[1.2em]">
        One account,
        <br className="md:hidden" /> for everything.
      </h1>
      <span className="text-base font-normal text-muted transition-all duration-500 dark:text-muted-foreground">
        Let Stack do all the work.
      </span>

      <div className="flex max-md:w-full max-md:flex-col max-md:gap-4 md:flex-row">
        <div className="max-md:w-full">
          <HeroForm />
        </div>
        <span className="border border-primary/30 max-md:hidden md:mx-4 md:border-l" />
        <Link
          href="#consultation"
          rel="noreferrer"
          className={`${buttonVariants({
            variant: "secondary",
            size: "sm",
          })} group text-center active:scale-95 dark:bg-background hover:dark:bg-background/60 max-md:mr-6`}
        >
          Schedule a product demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` arrow-symbol-mktg ml-3 -translate-x-1 text-primary transition duration-150 ease-in group-hover:translate-x-0`}
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
              className={` text-primary opacity-0 transition duration-150 ease-in group-hover:opacity-100`}
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
