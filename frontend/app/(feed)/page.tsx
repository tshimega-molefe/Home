import { FC } from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

import { cn } from "../../lib/utils"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="text-2xl flex flex-col gap-6">
      <h1>This is a feed containing many accounts</h1>

      <Link
        href="/s/timmy"
        passHref
        className={`${cn(buttonVariants({ variant: "default", size: "lg" }))}`}
      >
        Go to timmy's page
      </Link>
      <Link
        href="/s/angel"
        passHref
        className={`${cn(buttonVariants({ variant: "default", size: "lg" }))}`}
      >
        Go to angelique's page
      </Link>
    </div>
  )
}

export default page