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
      title: `Thank you!`,
      description: `You will receive your newsletter at ${data.email}.`,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid max-md:w-full max-md:grid-rows-2 max-md:gap-4 max-md:pr-6 md:grid-cols-2"
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
                  className="glass h-9 border-primary bg-primary/20 text-[#f8fafc] placeholder:text-muted placeholder:dark:text-primary/50 max-md:bg-primary/60 dark:max-md:bg-primary/20 md:rounded-r-none"
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
          className="active:scale-95 md:rounded-l-none"
        >
          Join our newsletter
        </Button>
      </form>
    </Form>
  )
}
