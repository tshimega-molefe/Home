import Link from "next/link"
import { auth, useAuth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export default async function Feed() {
  const { userId } = auth()

  if (!userId) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#01A8BC] bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500">
        <Link
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          href={`/randomUrl`}
        >
          This is a {`randomUrl`}
        </Link>
      </div>
    )
  }

  const user = await prismadb.user.findFirst({
    where: {
      externalId: userId,
    },
  })

  if (!user) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#01A8BC] bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500">
        <Button variant="secondary" size="lg">
          Error fetching your account details
        </Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between bg-[#01A8BC] bg-opacity-100 py-96 dark:bg-opacity-30 dark:transition-opacity dark:duration-500">
      <Link
        className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        href={`/${user.username}`}
      >
        This is {`${user.username}`} page
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        href={`/randomUrl`}
      >
        This is a {`randomUrl`}
      </Link>
      {/* <Link
        className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        href={`/${userId}/store/${storeId}`}
      >
        This is tshimegas store
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        href={`/${userId}/posts/${postId}`}
      >
        This is tshimegas store
      </Link> */}
    </div>
  )
}
