import { notFound } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { username: string }
}) {
  const { user } = auth()

  const dbUser = await prismadb.user.findFirst({
    where: {
      username: params.username,
    },
  })

  if (!user && !dbUser) {
    notFound()
  }

  if (!user && dbUser) {
    return (
      <>
        <div>This will be someone else's user page navbar</div>
        {children}
      </>
    )
  }

  if (user && dbUser && user.id === dbUser.id) {
    return (
      <>
        <div>This will be the current user page navbar</div>
        {children}
      </>
    )
  }
}
