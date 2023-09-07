import { notFound, redirect } from "next/navigation"
import { auth, useUser } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { userId: string }
}) {
  const { userId } = auth()

  console.log(`DEBUG: The logged in userId is ${userId}`)

  if (!userId) {
    console.log("DEBUG: You do not have a valid username")
    redirect("/")
  }

  if (!userId) {
    console.log("DEBUG: You are not signed in")
    redirect("/sign-in")
  }

  const user = await prismadb.user.findFirst({
    where: {
      id: userId,
    },
  })

  if (!user) {
    console.log("DEBUG: You are not signed in")
    redirect("/")
  }

  if (!userId) {
    return (
      <div className="min-h-screen w-full bg-slate-800 flex items-center justify-center">
        <div>This will be someone else's user page navbar</div>
        {children}
      </div>
    )
  }

  if (userId == user.id) {
    return (
      <div className="min-h-screen w-full bg-slate-800 flex items-center justify-center">
        <div>This will be the current user page navbar</div>
        {children}
      </div>
    )
  }
}
