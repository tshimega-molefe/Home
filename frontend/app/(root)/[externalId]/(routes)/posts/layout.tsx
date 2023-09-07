import { notFound, redirect } from "next/navigation"
import { auth, useUser } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

export default async function PostLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth()

  if (!userId) {
    redirect("/sign-in")
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
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
        <div>This will be someone else's store page navbar</div>
        {children}
      </>
    )
  }

  if (userId && !store) {
    console.log("STORE DOES EXIST, but you're signed in")

    return (
      <>
        <div>
          This will be someone else's store page navbar && I can interact with
          the store
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
