"use server"

import React from "react"
import ContactEmail from "@/email/consultation-email"
import { Resend } from "resend"

import { getErrorMessage } from "@/lib/utils"
import { ContactFormValues } from "@/components/consultation-section/contact-form"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (data: ContactFormValues) => {
  const { fullName: name, email, message } = data
  try {
    await resend.emails.send({
      from: `Swift Stack <support@swiftstack.net>`,
      to: "tshimega@swiftstack.net",
      subject: "Enquiry for consultation",
      reply_to: email,
      react: React.createElement(ContactEmail, {
        message: message,
        name: name,
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }
}
