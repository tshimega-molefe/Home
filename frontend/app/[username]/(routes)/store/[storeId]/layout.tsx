import { notFound, redirect } from "next/navigation"
import { auth } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { getErrorMessage } from "@/lib/utils"

export async function generateStaticParams() {
  try {
    const stores = await prismadb.store.findMany({
      select: {
        id: true,
      },
    })

    return (
      stores?.map(({ id }) => ({
        id,
      })) || null
    )
  } catch (error: unknown) {
    console.log(`[STORE_PAGE]: ${getErrorMessage(error)}`)
  }
}

export default async function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { user } = auth()

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  })

  if (!user && !store) {
    notFound()
  }

  if (user && !store) {
    notFound()
  }

  if (!user && store) {
    return (
      <>
        <div>This will be someone else's store page navbar</div>
        {children}
      </>
    )
  }

  if (user && store) {
    return (
      <>
        <div>
          This will be someone else's store page navbar && I can interact with
          the store
        </div>
        {children}
      </>
    )
  }

  if (user && store && user.id === store.ownerId) {
    return (
      <>
        <div>This will be the current user page navbar</div>
        {children}
      </>
    )
  }
}
