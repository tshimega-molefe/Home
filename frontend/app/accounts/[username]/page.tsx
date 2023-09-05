"use client"

import { FC } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
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
      You don't have an account
    </Modal>
  )
}

export default page
