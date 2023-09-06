import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const user = await prismadb.store.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return new NextResponse("No store with ID found", { status: 404 })
  }

  return NextResponse.json(user)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  let json = await request.json()

  const updated_store = await prismadb.store.update({
    where: { id },
    data: json,
  })

  if (!updated_store) {
    return new NextResponse("No store with ID found", { status: 404 })
  }

  return NextResponse.json(updated_store)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    await prismadb.store.delete({
      where: { id },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error: unknown) {
    console.log(`[STORES_DELETE]: ${getErrorMessage(error)}`)
    return new NextResponse("Internal server error", { status: 500 })
  }
}
