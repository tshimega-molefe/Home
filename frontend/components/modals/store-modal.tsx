"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { capitalizeFirstLetter, getErrorMessage } from "@/lib/utils"
import { useStoreModal } from "@/hooks/use-store-modal"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Modal from "@/components/ui/modal"

import { ToastAction } from "../ui/toast"
import { useToast } from "../ui/use-toast"

const storeFormSchema = z.object({
  name: z.string().min(1, {
    message: "Shop name must be at least 1 characters.",
  }),
})

type StoreFormValues = z.infer<typeof storeFormSchema>

const defaultValues: Partial<StoreFormValues> = {}

export function StoreModal() {
  const storeModal = useStoreModal()
  const [loading, setloading] = useState<boolean>(false)

  const form = useForm<StoreFormValues>({
    resolver: zodResolver(storeFormSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  })
  const { toast } = useToast()

  async function onSubmit(data: StoreFormValues) {
    const { name: unformattedStoreName } = data
    const formattedStoreName = capitalizeFirstLetter(unformattedStoreName)
    try {
      setloading(true)
      toast({
        title: `Store Created Successfully!`,
        description: `Congratulations, your ${formattedStoreName} Shop is now live! Add products to attract customers. You can also customize your store settings for a personalized touch.`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: getErrorMessage(error),
        action: (
          <ToastAction altText="Try again" onClick={() => onSubmit(data)}>
            Try again
          </ToastAction>
        ),
      })
    } finally {
      setloading(false)
    }
  }

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Sneakers" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button variant="outline" onClick={storeModal.onClose}>
                  Cancel
                </Button>
                <Button type="submit">Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default StoreModal
