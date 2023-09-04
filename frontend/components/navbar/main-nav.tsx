"use client"

import { FC } from "react"
import Link from "next/link"
import { selectNavState } from "@/features/nav/nav"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { ThemeToggle } from "../theme-toggle"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import DevelopersNav from "./developers-nav"
import ProductNav from "./product-nav"
import SolutionsNav from "./solutions-nav"

interface MainNavProps {}

const MainNav: FC<MainNavProps> = ({}) => {
  const dispatch = useAppDispatch()
  const showNav = useAppSelector(selectNavState)

  return (
    <div
      id="laptop-nav"
      className={`top-24 z-40 flex w-full transition duration-200 ease-in max-lg:absolute ${
        showNav
          ? "max-lg:translate-x-0 max-lg:scale-100"
          : "max-lg:max-h-0 max-lg:translate-y-1/4 max-lg:scale-y-50"
      }`}
    >
      <div className="flex overflow-y-auto max-lg:max-h-[500px] max-lg:w-[320px] max-lg:flex-col max-lg:rounded-lg max-lg:bg-background max-md:transition-all max-sm:mx-auto max-sm:w-8/12 sm:ml-auto lg:mb-0 lg:w-full lg:items-center lg:justify-between">
        <nav className="my-0 px-3 text-[15.5px] max-lg:px-5 max-lg:py-10 lg:px-6">
          <ul
            className={`flex overflow-y-auto font-light tracking-wider max-lg:h-auto max-lg:flex-col max-lg:space-y-6 max-lg:text-base max-lg:text-muted-foreground lg:items-center lg:space-x-6`}
          >
            <SolutionsNav />
            <ProductNav />
            <DevelopersNav />
            <Link
              href="/pricing"
              className="flex items-center p-1 max-lg:font-semibold hover:lg:text-primary/50"
            >
              Pricing
            </Link>
          </ul>
        </nav>
        <div className="mb-3 items-center px-3 text-left max-lg:flex-col lg:mb-0 lg:flex lg:space-x-4 lg:px-0">
          <div className="relative mb-2 max-lg:ml-2 max-lg:mr-4 lg:mb-0 lg:flex">
            <Input
              placeholder="Search Swift Stack"
              className="glass border-primary bg-primary/20 text-background placeholder:text-muted-foreground max-lg:h-10 max-lg:bg-background max-lg:text-primary max-lg:placeholder:text-muted-foreground lg:pr-8"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              aria-hidden="true"
              className="absolute right-0 top-[8px] mr-1 max-lg:hidden"
            >
              <path
                fill="none"
                stroke="#979A9C"
                opacity=".4"
                d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
              ></path>
              <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
            </svg>
          </div>
          <div className="mb-2 max-lg:ml-2 max-lg:mr-4 lg:mb-0 lg:flex"></div>
          <div className="relative mb-2 max-lg:ml-2 max-lg:mr-4 lg:mb-0 lg:hidden ">
            <ThemeToggle />
          </div>
          <div className="max-lg:hidden">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton afterSignInUrl="/">
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
          <div className=" relative max-lg:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav
