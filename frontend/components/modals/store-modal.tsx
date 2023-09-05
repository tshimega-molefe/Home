"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Modal from "@/components/ui/modal"

import { ToastAction } from "../ui/toast"
import { useToast } from "../ui/use-toast"

const storeFormSchema = z.object({
  name: z.string().min(5, {
    message: "Shop name must be at least 5 characters.",
  }),
})

type StoreFormValues = z.infer<typeof storeFormSchema>

const defaultValues: Partial<StoreFormValues> = {}

export function StoreModal() {
  const storeModal = useStoreModal()

  const form = useForm<StoreFormValues>({
    resolver: zodResolver(storeFormSchema),
    defaultValues,
    mode: "onChange",
  })
  const { toast } = useToast()

  function onSubmit(data: StoreFormValues) {
    toast({
      title: `New Store Created`,
      description: `You can now add products to your ${data.name} shop.`,
    })
  }

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
