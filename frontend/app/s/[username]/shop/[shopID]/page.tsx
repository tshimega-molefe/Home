"use client"

import { FC } from "react"

import Modal from "@/components/modals/modal"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Modal
      isOpen
      onClose={() => {}}
      title="Test Title"
      description="Test Description"
    >
      Create a shop
    </Modal>
  )
}

export default page
