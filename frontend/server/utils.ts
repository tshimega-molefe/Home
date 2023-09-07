"use server"

import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

// ============== Get Stores ==============
export async function getStores(request: Request) {
  try {
    console.log("Getting stores...")
    const users = await prismadb.store.findMany()
    console.log("Stores fetched:", users)
    return NextResponse.json(users)
  } catch (error: unknown) {
    console.error("Failed to fetch stores:", getErrorMessage(error))
  }
}

// ============== Get Posts ==============
export async function getPosts(request: Request) {
  try {
    console.log("Getting posts...")
    const posts = await prismadb.post.findMany({
      select: {
        published: true,
        author: true,
        createdAt: true,
        title: true,
        authorId: true,
        id: true,
      },
    })
    console.log("Posts fetched:", posts)
    return NextResponse.json(posts)
  } catch (error: unknown) {
    console.error("Failed to fetch posts:", getErrorMessage(error))
  }
}

// ============== Get Post ==============
export async function getPost(
  request: Request,
  { params }: { params: { id: string; authorId: string; title: string } }
) {
  try {
    console.log("Getting post with params:", params)
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
    console.log("Post fetched:", post)
    if (!post) {
      return new NextResponse("No post with that owner found", { status: 404 })
    }
    return NextResponse.json(post)
  } catch (error: unknown) {
    console.error("Failed to fetch posts:", getErrorMessage(error))
  }
}

// ============== Get Sliced Featured Posts ==============
export async function getFeaturedPosts() {
  try {
    console.log("Getting featured posts...")
    const featuredPosts = await prismadb.post.findMany({
      select: {
        featured: true,
      },
    })
    console.log("Featured posts fetched:", featuredPosts)
    console.log("Sliced featured posts:", featuredPosts)
    return featuredPosts
  } catch (error) {
    console.error("Failed to fetch featured posts:", getErrorMessage(error))
    return null
  }
}
