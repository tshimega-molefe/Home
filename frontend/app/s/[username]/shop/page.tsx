"use client"

import { FC, useEffect } from "react"

import { useStoreModal } from "@/hooks/use-store-modal"

interface ShopProps {}

const Shop: FC<ShopProps> = ({}) => {
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

export default Shop
