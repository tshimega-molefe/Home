"use client"

import { FC, useEffect } from "react"
import { GetStaticPaths, GetStaticProps } from "next"

import { Product } from "@/types/Product"
import { Store } from "@/types/Store"
import { User } from "@/types/User"
import { useStoreModal } from "@/hooks/use-store-modal"

import { store } from "../../../../lib/store"

// This function runs at build time and generates static routes for each store.

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of stores from an API or some data source
  const stores = await fetch("https://.../posts").then((res) => res.json())

  // Generate an array of paths based on the store id's
  const paths = stores.map((store: Store) => ({
    params: { storeId: store.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

// // This function fetches data for a single store based on its id and runs at build time.
// export const getStaticProps: GetStaticProps = async (context) => {
//   const id = context.params?.id
//   // Fetch data for a single store based on its id
//   const store = await fetch(`https://.../stores/${id}`).then((res) =>
//     res.json()
//   )

//   return {
//     props: {
//       store,
//     },
//   }
// }

interface StorePageProps {
  store: {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    owner: User
    ownerId: string
    products: Product[]
  }
}

const StorePage: FC<StorePageProps> = ({ store }) => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#01A8BC] bg-opacity-100 dark:bg-opacity-30 dark:transition-opacity dark:duration-500" />
  )
}

export default StorePage
