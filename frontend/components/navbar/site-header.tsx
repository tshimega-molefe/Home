import Link from "next/link"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"

import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import Hamburger from "../hamburger"
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
          <div className="flex flex-row items-center gap-2 lg:hidden">
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
            {/* <Link
              href="/sign-up"
              target="_blank"
              rel="noreferrer"
              className={`${buttonVariants({ size: "sm" })} whitespace-nowrap`}
            >
              Sign Up
            </Link> */}
          </div>
          <Link
            href="/"
            className="flex items-center space-x-2 active:scale-95"
          >
            <Icons.logo className="h-10 w-40 transition-all max-lg:hidden max-lg:h-10 max-lg:w-28 max-md:active:scale-95" />
            <Icons.icon className="h-10 w-10 transition-all max-md:active:scale-95 lg:hidden" />
          </Link>
          <Hamburger />
        </div>
        <MainNav />
      </div>
    </header>
  )
}
