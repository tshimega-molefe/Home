import { notFound, redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

export async function generateStaticParams() {
  try {
    const stores = await prismadb.store.findMany({
      select: {
        id: true,
        ownerId: true,
        name: true,
        products: true,
        owner: true,
      },
    })

    const posts = await prismadb.post.findMany({
      select: {
        id: true,
        authorId: true,
        title: true,
        createdAt: true,
        published: true,
        featured: true,
        author: true,
      },
    })

    return (
      posts?.map(({ id }) => ({
        id,
      })) || null
    )

    return (
      stores?.map(({ id }) => ({
        id,
      })) || null
    )
  } catch (error: unknown) {
    console.log(`[DASHBOARD_PAGE]: ${getErrorMessage(error)}`)
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = auth()

  const stores = await prismadb.store.findMany({
    where: {
      ownerId: user?.id,
    },
  })

  const posts = await prismadb.post.findMany({
    where: {
      authorId: user?.id,
    },
  })

  if (!user && !stores && !posts) {
    notFound()
  }

  if (user && !stores && posts) {
    notFound()
  }

  if (!user && stores && posts) {
    return (
      <>
        <div>This will be someone else's store page navbar</div>
        {children}
      </>
    )
  }

  if (user && stores && posts) {
    return (
      <>
        <div>This will be the current user page navbar</div>
        {children}
      </>
    )
  }
}

// do more conditional checks to handle every option
