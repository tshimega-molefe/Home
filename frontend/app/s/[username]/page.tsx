"use client"

import { FC } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Modal from "@/components/modals/modal"

interface pageProps {
  params: { username: string }
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <div className="text-2xl flex flex-col gap-6">
      <h1>This is one user's account</h1>
      <Link
        href="/s/angel/dashboard"
        passHref
        className={`${cn(buttonVariants({ variant: "default", size: "lg" }))}`}
      >
        Go to angelique's page
      </Link>
    </div>
  )
}

export default page
