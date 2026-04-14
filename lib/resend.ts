// lib/resend.ts

import { Resend } from "resend"
import { NewLeadEmail } from "@/components/emails/NewLead"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendLeadEmail(data: {
    name: string
    email: string
    service: string[]
    message: string
}) {
    return resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["john.cisneros.mfs@gmail.com"],
        subject: `New Lead - From Website Marsh Fried Incorporated`,
        react: NewLeadEmail(data),
    })
}
