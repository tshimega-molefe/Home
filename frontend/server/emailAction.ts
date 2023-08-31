"use server"

import React from "react"
import ContactEmail from "@/email/consultation-email"
import { Resend } from "resend"

import { getErrorMessage } from "@/lib/utils"
import { ContactFormValues } from "@/components/consultation-section/contact-form"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (data: ContactFormValues) => {
  const { name, email, message, company, number } = data
  try {
    await resend.emails.send({
      from: `Swift Stack <support@swiftstack.net>`,
      to: "tshimega@swiftstack.net",
      subject: `${company} Consultation`,
      reply_to: email,
      react: React.createElement(ContactEmail, {
        number: number,
        company: company,
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
