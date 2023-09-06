import { notFound } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"
import { ToastAction } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"

// This function runs at build time and generates static routes for each user.

export async function generateStaticParams() {
  "use server"
  try {
    const users = await prismadb.user.findMany({
      select: {
        username: true,
      },
    })

    return (
      users?.map(({ username }) => ({
        username,
      })) || null
    )
  } catch (error: unknown) {
    console.log(`[USER_PAGE]: ${getErrorMessage(error)}`)
  }
}

export default async function User({
  params: { username },
}: {
  params: { username: string }
}) {
  let dbUser = null
  try {
    dbUser = await prismadb.user.findFirst({
      where: {
        username: username,
      },
    })
  } catch (error: unknown) {
    console.log(`[USER_PAGE]: ${getErrorMessage(error)}`)
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: getErrorMessage(error),
      action: (
        <ToastAction altText="Try again" onClick={() => generateStaticParams()}>
          Please try again
        </ToastAction>
      ),
    })
    return null
  }

  const { user } = auth()

  if (!user && !dbUser) {
    notFound()
  }

  if (!user && dbUser) {
    return (
      <div className="min-h-screen justify-center items-center">
        <p>Welcome to {dbUser.username}&apos;s page</p>
      </div>
    )
  }

  if (user && dbUser && user.username === dbUser.username) {
    return (
      <div className="min-h-screen items-center justify-center">
        <h1>This page belongs to {dbUser.name}</h1>
      </div>
    )
  }

  return null
}
