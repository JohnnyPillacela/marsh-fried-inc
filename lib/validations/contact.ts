// lib/validations/contact.ts

import { z } from "zod"

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .max(100, { message: "Name must be 100 characters or fewer." }),
    email: z
        .string()
        .email({ message: "Please enter a valid email address." }),
    service: z
        .array(z.string())
        .min(1, { message: "Please select at least one service." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(2000, { message: "Message must be 2000 characters or fewer." }),
    /** Honeypot — must stay empty; checked on the server before processing. */
    website: z.string().optional(),
})

export type ContactFormValues = z.infer<typeof contactSchema>
