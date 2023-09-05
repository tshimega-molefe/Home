"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
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
  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm<StoreFormValues>({
    resolver: zodResolver(storeFormSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  })
  const { toast } = useToast()

  async function onSubmit(data: StoreFormValues) {
    const { name: unformattedShopName } = data
    const formattedShopName = capitalizeFirstLetter(unformattedShopName)
    try {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000)) // 2 seconds delay
      throw new Error("I'm purposefully throwing an error")

      const response = await axios.post(`/api/stores`, data)
      console.log(response.data)
      toast({
        title: "Store Created Successfully!",
        description: `Congratulations, your ${formattedShopName} shop is now live! Add products to attract customers. You can also customize your store settings for a personalized touch.`,
        // Optional: Include action buttons or links for immediate next steps
        // action: (
        //   <ToastAction
        //     altText="Go to Dashboard"
        //     onClick={() => navigateToDashboard()}
        //   >
        //     Go to Dashboard
        //   </ToastAction>
        // ),
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
      setLoading(false)
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
                      <Input
                        disabled={loading}
                        placeholder="e.g. Sneakers"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={storeModal.onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  {loading ? (
                    <div className="h-4 w-4 mx-[1.40rem] animate-spin rounded-full border-b-2 border-primary-foreground"></div>
                  ) : (
                    <p>Continue</p>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default StoreModal
