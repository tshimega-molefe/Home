"use client"

import { FC } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Modal from "@/components/modals/modal"

import { store } from "../../../lib/store"

interface pageProps {
  params: { username: string }
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <div className="flex flex-col gap-6 text-2xl">
      <h1>This is one user&apos;s account</h1>
      <Link
        href="/s/angel/shop/electronics"
        passHref
        className={`${cn(buttonVariants({ variant: "default", size: "lg" }))}`}
      >
        Go to angelique&apos;s shop
      </Link>
      <Link
        href="/s/angel/posts/slug"
        passHref
        className={`${cn(buttonVariants({ variant: "default", size: "lg" }))}`}
      >
        Go to angelique&apos;s post
      </Link>
    </div>
  )
}

export default page
