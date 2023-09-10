import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

export async function GET(request: Request) {
  const users = await prismadb.post.findMany()
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  try {
    const json = await request.json()

    const user = await prismadb.post.create({
      data: json,
    })

    return new NextResponse(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: unknown) {
    return new NextResponse(getErrorMessage(error), { status: 500 })
  }
}
