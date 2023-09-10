import { notFound, redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { Button } from "@/components/ui/button"

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { username: string }
}) {
  const { userId } = auth()

  const usernames = await prismadb.user
    .findMany({
      select: {
        username: true,
      },
    })
    .then((users) => users.map((u) => u.username))

  if (!usernames.includes(params.username)) {
    return notFound()
  }

  if (!userId) {
    return (
      <>
        <div className="flex h-16 w-full items-center justify-between bg-black">
          <h1>Youre not signed in - but here is someones page</h1>
          <Button>sign in</Button>
        </div>
        {children}
      </>
    )
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
  } else {
    console.log("DEBUG: THIS IS NOT YOUR PAGE")
    return (
      <>
        <div>This will be someone elses user page navbar</div>
        {children}
      </>
    )
  }
}
