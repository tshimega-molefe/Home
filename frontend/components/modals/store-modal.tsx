"use client"

import { FC } from "react"

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "@/components/ui/modal"

interface StoreModalProps {}

const StoreModal: FC<StoreModalProps> = ({}) => {
  const storeModal = useStoreModal()
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  )
}

export default StoreModal
