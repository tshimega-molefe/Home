"use client"

import { FC } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { ToastAction } from "../ui/toast"
import { useToast } from "../ui/use-toast"

const heroFormSchema = z.object({
  email: z.string().email("This is not a valid email."),
})

type HeroFormValues = z.infer<typeof heroFormSchema>

const defaultValues: Partial<HeroFormValues> = {}

export function HeroForm() {
  const form = useForm<HeroFormValues>({
    resolver: zodResolver(heroFormSchema),
    defaultValues,
    mode: "onChange",
  })
  const { toast } = useToast()

  function onSubmit(data: HeroFormValues) {
    toast({
      variant: "default",
      title: "Successfully submitted your email:",
      description: `${JSON.stringify(data, null, 2)}`,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-md:w-full grid max-md:grid-rows-2 md:grid-cols-2 max-md:gap-4 max-md:pr-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="glass border-primary bg-primary/20 max-md:bg-primary/60 dark:max-md:bg-primary/20 h-9 text-[#f8fafc] placeholder:text-background/50 placeholder:dark:text-primary/50 md:rounded-r-none"
                />
              </FormControl>
              <FormMessage className="text-[#f8fafc]" />
            </FormItem>
          )}
        />
        <Button
          variant="default"
          type="submit"
          size="sm"
          className="md:rounded-l-none active:scale-95"
        >
          Join our newsletter
        </Button>
      </form>
    </Form>
  )
}
