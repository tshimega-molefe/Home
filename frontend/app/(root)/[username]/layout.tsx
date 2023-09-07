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

  if (!userId) {
    return (
      <>
        <div className="bg-black w-full h-16 flex justify-between items-center">
          <h1>You're not signed in - but here is someone's page</h1>
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
        <div className="bg-black w-full h-16 flex justify-between items-center">
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
        <div>This will be someone else's user page navbar</div>
        {children}
      </>
    )
  }
}
