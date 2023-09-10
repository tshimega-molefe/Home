"use client"

import { useEffect } from "react"

import { useStoreModal } from "@/hooks/use-store-modal"

export default async function Store() {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])
  return <div>This is a store</div>
}
