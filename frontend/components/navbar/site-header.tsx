import Link from "next/link"

import { siteConfig } from "@/config/site"
import { fontMono } from "@/lib/fonts"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import Hamburger from "../hamburger"
import { ThemeToggle } from "../theme-toggle"
import MainNav from "./main-nav"

export function SiteHeader() {
  return (
    <header
      id="site-header"
      className="absolute z-50 w-full bg-transparent py-5"
    >
      <div className="flex h-16 items-center px-[2rem] max-lg:flex-row-reverse max-lg:justify-between">
        <div
          id="mobile-nav"
          className="flex items-center justify-between max-lg:w-full"
        >
          <div className="lg:hidden flex flex-row items-center gap-2">
            <Link
              href="/sign-up"
              target="_blank"
              rel="noreferrer"
              className={`${buttonVariants({ size: "sm" })} whitespace-nowrap`}
            >
              Sign Up
            </Link>
          </div>
          <Link
            href="/"
            className="flex items-center space-x-2 active:scale-95"
          >
            <Icons.logo className="h-8 w-8 transition-all max-lg:h-10 max-lg:w-10 max-md:active:scale-95" />
            <span
              className={`${fontMono.className} inline-block font-light uppercase tracking-[.4em] transition-colors max-lg:hidden`}
            >
              {siteConfig.logo}
            </span>
          </Link>
          <Hamburger />
        </div>
        <MainNav />
      </div>
    </header>
  )
}
