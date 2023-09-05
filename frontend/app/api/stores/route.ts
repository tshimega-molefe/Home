import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const { name } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 })
    }

    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    })
    return new NextResponse(JSON.stringify({ store }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: unknown) {
    console.log(`[STORES_POST]: ${getErrorMessage(error)}`)
    return new NextResponse("Internal server error", { status: 500 })
  }
}
