import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export default async function User({
  params,
}: {
  params: { username: string }
}) {
  // Get the userId of the current signed in user
  const { userId } = auth()

  // Fetch all usernames from the database
  const usernames = await prismadb.user
    .findMany({
      select: {
        username: true,
      },
    })
    .then((users) => users.map((u) => u.username))

  if (!userId || !usernames.includes(params.username)) {
    return notFound() // redundant check, because of layout check
  }

  if (!userId) {
    return (
      <>
        <div className="flex h-16 w-full items-center justify-between bg-black">
          <h1>Youre not signed in - navbar</h1>
          <Button>sign in</Button>
        </div>
      </>
    ) // redundant check, because of layout check
  }
  // Fetch the logged-in user's data
  const user = await prismadb.user.findFirst({
    where: {
      externalId: userId,
    },
  })

  if (!user) {
    return (
      <>
        <div className="flex h-16 w-full items-center justify-between bg-black">
          <h1>Error fetching your details</h1>
          {/* ask to sign in */}
          <Button>sign in</Button>
        </div>
      </>
    )
  }

  // this is only if the user.username === params.username
  if (user.username === params.username) {
    return (
      <div className="flex flex-col gap-10 min-h-screen w-full items-center justify-center bg-red-600">
        <h1 className="text-4xl font-bold">Welcome back {user.firstName}</h1>
        <Link
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          href={`/`}
        >
          To {`tshimegamolefe`} store
        </Link>
      </div>
    )
  } else {
    // fetch other user data
    const otherUser = await prismadb.user.findFirst({
      where: {
        username: params.username,
      },
    })

    if (!otherUser || !usernames.includes(params.username)) {
      return notFound() // redundant check because of the layout check
    }

    const otherUserId = otherUser.id

    if (!otherUserId) {
      return (
        <>
          <div className="flex h-16 w-full items-center justify-between bg-black">
            <h1>Error fetching other user id</h1>
            {/* ask to sign in */}
            <Button>Return to Home</Button>
          </div>
        </>
      )
    }

    const otherUserStores = await prismadb.store.findMany({
      where: {
        ownerId: otherUser.id,
      },
    })

    return (
      <div className="flex flex-col gap-10 min-h-screen w-full items-center justify-center bg-red-600">
        <h1 className="text-4xl font-bold">
          This is {otherUser.firstName} page
        </h1>
        {otherUserStores.map((store) => (
          <Link
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            href={`/${otherUser.username}/store/${store.name}`}
          >
            To {`${store.name}`}
          </Link>
        ))}
      </div>
    )
  }

  // else render the other persons page
}
