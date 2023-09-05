"use client"

import { FC } from "react"

import Modal from "@/components/modals/modal"

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <div className="p-4">
      <Modal
        isOpen
        onClose={() => {}}
        title="Test Title"
        description="Test Description"
      >
        This is the user Dashboard
      </Modal>
    </div>
  )
}

export default Dashboard
