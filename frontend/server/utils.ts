"use server"

import axios from "axios"

import { Post } from "@/types/Post"

// ============== Get Featured Posts ==============

export async function getFeaturedPosts(): Promise<Post[] | null> {
  try {
    const response = await axios.get("/api/posts")
    const posts: Post[] = response.data

    const featuredPosts: Post[] = posts.filter((post) => post.featured === true)

    return featuredPosts.slice(0, 3)
  } catch (error) {
    console.error("Failed to fetch posts:", error)
    return null
  }
}
