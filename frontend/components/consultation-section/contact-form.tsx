"use client"

import { useState } from "react"
import { sendEmail } from "@/server/emailAction"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { getErrorMessage } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  company: z.string().min(3, {
    message: "Company must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  number: z.string().regex(/^(\+?\d{1,3})?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export type ContactFormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [loading, setloading] = useState<boolean>(false)
  const { toast } = useToast()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setloading(true)
    try {
      await sendEmail(data)
      toast({
        title: `Thank you ${data.name}.`,
        description: `You will receive your consultation details shortly at ${data.email}.`,
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
    <Card className="border-0 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className="mb-7 text-2xl font-medium text-primary max-lg:leading-10 max-md:leading-8 md:text-[40px] lg:text-4xl">
          Start something&nbsp;
          <span className="text-[#939aff]">special</span>.
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 xl:space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input
                      className="border-primary bg-transparent"
                      placeholder="Name Surname"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Who do you represent?</FormLabel>
                  <FormControl>
                    <Input
                      className="border-primary bg-transparent"
                      placeholder="Company Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your email?</FormLabel>
                  <FormControl>
                    <Input
                      className="border-primary bg-transparent"
                      placeholder="you@company.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Where can we reach you?</FormLabel>
                  <FormControl>
                    <Input
                      className="border-primary bg-transparent text-primary"
                      placeholder="(+...) 555 1234 "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-primary bg-transparent max-md:min-h-[90px] md:min-h-[150px]"
                      placeholder="Tell us a bit more about your project"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <div className="h-4 w-[16.5px] animate-spin rounded-full border-b-2 border-primary"></div>
              ) : (
                <p>Launch</p>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
