import { notFound, redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { Button } from "@/components/ui/button"

export default async function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { username: string; storeId: string }
}) {
  const { userId } = auth()

  if (!userId) {
    return (
      <>
        <div className="flex h-16 w-full items-center justify-between bg-black">
          <h1>Youre not signed in - but here is someones store</h1>
          <Button>sign in</Button>
        </div>
        {children}
      </>
    )
  }

  // Fetch the store from the database that belongs to the username

  const store = await prismadb.store.findFirst({
    where: {
      ownerId: userId,
    },
  })

  if (!store) {
    console.log("STORE DOES NOT EXIST")
    redirect("/")
  }

  // Fetch all usernames from the database

  const usernames = await prismadb.user
    .findMany({
      select: {
        username: true,
      },
    })
    .then((users) => users.map((u) => u.username))

  // Check if the username from params is in the database
  if (!usernames.includes(params.username)) {
    return notFound()
  }

  // Fetch the logged-in user's data
  const user = await prismadb.user.findFirst({
    where: {
      externalId: userId,
    },
  })

  // Check if the logged-in user is found in the database
  if (!user) {
    return (
      <>
        <div className="flex h-16 w-full items-center justify-between bg-black">
          <h1>Error fetching your details</h1>
          <Button>sign in</Button>
        </div>
        {children}
      </>
    )
  }

  if (user.username === params.username) {
    console.log("DEBUG: THIS IS MY PAGE")
    return (
      <>
        <div>This will be the current user page navbar</div>
        {children}
      </>
    )
  }

  if (user.username !== params.username && user) {
    console.log("DEBUG: THIS IS NOT YOUR PAGE")
    return (
      <>
        <div>This will be someone elses user page navbar</div>
        {children}
      </>
    )
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

  if (store && store.ownerId === userId) {
    console.log("STORE DOES EXIST, And its yours")

    return (
      <>
        <div>This will be the current user page navbar</div>
        {children}
      </>
    )
  }
}
