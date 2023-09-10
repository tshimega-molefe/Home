import { FC } from "react"
import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

const FeedNavBar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit border-b z-10 border-muted py-5 shadow-xl bg-background">
      <div className="flex h-16 items-center px-[2rem] justify-between">
        <div className="flex flex-row space-x-4 items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 active:scale-95"
          >
            <Icons.logo className="h-10 w-40 transition-all max-lg:hidden max-lg:h-10 max-lg:w-28 max-md:active:scale-95" />
            <Icons.icon className="h-10 w-10 transition-all max-md:active:scale-95 lg:hidden" />
          </Link>

          <div className="relative">
            <Input
              placeholder="Search..."
              className="border-primary text-primary placeholder:dark:text-primary/60 h-10 bg-transparent max-lg:text-primary placeholder:text-muted-foreground pr-8"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              aria-hidden="true"
              className="absolute right-0 top-[10px] mr-1"
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
        </div>
        <div className="flex flex-row space-x-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton afterSignInUrl="/">
              <Button variant="default" size="sm" className="whitespace-nowrap">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default FeedNavBar
