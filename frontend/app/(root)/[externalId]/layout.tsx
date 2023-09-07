import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const user = await prismadb.user.findFirst({
    where: {
      externalId: userId,
    },
  })

  if (!user) {
    console.log("DEBUG: You are not signed in")
    redirect("/")
  }

  if (user && !userId) {
    return (
      <>
        <div>This will be someone else's user page navbar</div>
        {children}
      </>
    )
  }

  if (userId === user.externalId) {
    return (
      <>
        <div>This will be the current user page navbar</div>
        {children}
      </>
    )
  }
}
