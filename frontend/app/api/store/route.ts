import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

export async function GET(request: Request) {
  const stores = await prismadb.store.findMany()
  return NextResponse.json(stores)
}

export async function POST(request: Request) {
  try {
    const { userId: ownerId } = auth()

    const json = await request.json()

    const { name } = json

    if (!ownerId) {
      return new NextResponse("You are not authorized", { status: 401 })
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 })
    }

    const store = await prismadb.store.create({
      data: {
        name,
        ownerId,
      },
    })

    return new NextResponse(JSON.stringify(store), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: unknown) {
    console.log(`[STORES_POST]: ${getErrorMessage(error)}`)
    return new NextResponse("Internal server error", { status: 500 })
  }
}
