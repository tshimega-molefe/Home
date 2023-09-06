import { notFound } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

export async function generateStaticParams() {
  try {
    const posts = await prismadb.post.findMany({
      select: {
        id: true,
      },
    })

    return (
      posts?.map(({ id }) => ({
        id,
      })) || null
    )
  } catch (error: unknown) {
    console.log(`[POSTS_PAGE]: ${getErrorMessage(error)}`)
  }
}

export default async function PostLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { postId: string }
}) {
  const { user } = auth()

  const post = await prismadb.post.findFirst({
    where: {
      id: params.postId,
    },
  })

  if (!user && !post) {
    notFound()
  }

  if (user && !post) {
    notFound()
  }

  if (!user && post) {
    return (
      <>
        <div>This will be someone else's post navbar</div>
        {children}
      </>
    )
  }

  if (user && post) {
    return (
      <>
        <div>
          This will be someone else's post navbar && I can interact with the
          post
        </div>
        {children}
      </>
    )
  }

  if (user && post && user.id === post.authorId) {
    return (
      <>
        <div>This will be the current user's post navbar</div>
        {children}
      </>
    )
  }
}
