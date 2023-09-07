"use client"

import { useEffect } from "react"

import { useStoreModal } from "@/hooks/use-store-modal"

export default async function Post() {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])
  return <div>This is a post</div>
}
