"use client"

import { FC } from "react"

import Modal from "@/components/ui/modals/modal"

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  return (
    <div className="p-4 min-h-screen">
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

export default DashboardPage
