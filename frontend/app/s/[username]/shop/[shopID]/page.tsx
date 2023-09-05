"use client"

import { FC, useEffect } from "react"

import { useStoreModal } from "@/hooks/use-store-modal"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return <div className="p-4">Angel's Store Page</div>
}

export default page
