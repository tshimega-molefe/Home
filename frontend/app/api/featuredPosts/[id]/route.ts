import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

export async function GET() {
  try {
    const featuredPosts = await prismadb.post.findMany({
      where: {
        featured: true,
        published: true,
      },
    })

    if (featuredPosts.length === 0) {
      return new NextResponse("Featured posts not found", { status: 404 })
    }

    return new NextResponse(JSON.stringify({ featuredPosts }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    const errorMessage = getErrorMessage(error)
    console.log(`[FEATURED_POSTS]: ${errorMessage}`)
    return new NextResponse(`Internal server error: ${errorMessage}`, {
      status: 500,
    })
  }
}
