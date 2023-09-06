"use server"

import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

// ============== Get Stores ==============
export async function getStores(request: Request) {
  try {
    const users = await prismadb.store.findMany()
    return NextResponse.json(users)
  } catch (error: unknown) {
    console.error("Failed to fetch stores:", getErrorMessage(error))
  }
}
// ============== Get Posts ==============
export async function getPosts(request: Request) {
  try {
    const posts = await prismadb.post.findMany({
      where: {
        published: true,
      },
    })
    return NextResponse.json(posts)
  } catch (error: unknown) {
    console.error("Failed to fetch posts:", getErrorMessage(error))
  }
}
// ============== Get Post ==============
export async function getPost(
  request: Request,
  {
    params,
  }: { params: { id: string; authorId: string; title: string; author: string } }
) {
  try {
    const id = params.id
    const authorId = params.authorId
    const title = params.title
    const post = await prismadb.post.findFirst({
      where: {
        id,
        authorId,
        title,
        published: true,
      },
    })
    if (!post) {
      return new NextResponse("No post with that owner found", { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error: unknown) {
    console.error("Failed to fetch posts:", getErrorMessage(error))
  }
}
// ============== Get Sliced Featured Posts ==============
export async function getSlicedFeaturedPosts(
  request: Request,
  {
    params,
  }: {
    params: { id: string; authorId: string; title: string; featured: boolean }
  }
) {
  try {
    const id = params.id
    const authorId = params.authorId
    const title = params.title
    const featuredPosts = await prismadb.post.findMany({
      where: {
        id,
        authorId,
        title,
        published: true,
        featured: true,
      },
    })

    const slicedFeaturedPosts = featuredPosts.slice(-3, 0)

    return new NextResponse(JSON.stringify({ slicedFeaturedPosts }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Failed to fetch featured posts:", getErrorMessage(error))
    return null
  }
}
