"use client"

import { FC } from "react"

import Modal from "@/components/ui/modals/modal"

interface StorePageProps {}

const StorePage: FC<StorePageProps> = ({}) => {
  return (
    <div className="p-4">
      <Modal
        isOpen
        onClose={() => {}}
        title="Test Title"
        description="Test Description"
      >
        Children
      </Modal>
    </div>
  )
}

export default StorePage
