"use client"

import { FC } from "react"

import Modal from "@/components/modals/modal"

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
        This is Sabrina's Main Page
      </Modal>
    </div>
  )
}

export default DashboardPage
