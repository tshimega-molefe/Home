import Link from "next/link"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function Feed({
  children,
  params,
}: {
  children: React.ReactNode
  params: { userId: string }
}) {
  const { userId } = auth()

  console.log(`DEBUG: The logged in userId is ${userId}`)

  if (!userId) {
    console.log("DEBUG: You're not signed in")

    return (
      <div className="min-h-screen w-full flex flex-col justify-between py-96 items-center bg-[#01A8BC] bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500">
        <Link
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          href={`/user2`}
        >
          This is other users' link
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col justify-between py-96 items-center bg-[#01A8BC] bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500">
      <Link
        className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        href={`/${userId}`}
      >
        This is tshimegas link
      </Link>
    </div>
  )
}
