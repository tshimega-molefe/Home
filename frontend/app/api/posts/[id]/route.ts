import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const user = await prismadb.post.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return new NextResponse("No user with ID found", { status: 404 })
  }

  return NextResponse.json(user)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  let json = await request.json()

  const updated_user = await prismadb.post.update({
    where: { id },
    data: json,
  })

  if (!updated_user) {
    return new NextResponse("No user with ID found", { status: 404 })
  }

  return NextResponse.json(updated_user)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    await prismadb.post.delete({
      where: { id },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error: any) {
    if (error.code === "P2025") {
      return new NextResponse("No user with ID found", { status: 404 })
    }

    return new NextResponse(error.message, { status: 500 })
  }
}
