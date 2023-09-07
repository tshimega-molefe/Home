import { notFound, redirect } from "next/navigation"
import { auth, useUser } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

export default async function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const store = await prismadb.store.findFirst({
    where: {
      ownerId: userId,
    },
  })

  if (!store) {
    console.log("STORE DOES NOT EXIST")
    redirect("/")
  }

  if (!userId && !store) {
    console.log("STORE DOES EXIST, but its not yours")
    return (
      <>
        <div>This will be someone else store page navbar</div>
        {children}
      </>
    )
  }

  if (userId && !store) {
    console.log("STORE DOES EXIST, but youre signed in")

    return (
      <>
        <div>
          This will be someone else store page navbar && I can interact with the
          store
        </div>
        {children}
      </>
    )
  }

  if (userId && store && store.ownerId === userId) {
    console.log("STORE DOES EXIST, And its yours")

    return (
      <>
        <div>This will be the current user page navbar</div>
        {children}
      </>
    )
  }
}
