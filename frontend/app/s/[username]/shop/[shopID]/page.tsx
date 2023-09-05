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

  return <div className="p-4">Angel&apos;s Store Shop</div>
}

export default Shop
