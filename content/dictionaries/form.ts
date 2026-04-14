import type { FormDict } from "@/types/dictionary"

export const formDict = {
    en: {
        name: "Name",
        email: "Email",
        serviceLabel: "Service needed",
        services: [
            { value: "bookkeeping", label: "Bookkeeping" },
            { value: "tax-preparation", label: "Tax Preparation" },
            { value: "audit", label: "Audit & Assurance" },
            { value: "payroll", label: "Payroll" },
            { value: "business-advisory", label: "Business Advisory" },
            { value: "other", label: "Other" },
        ],
        message: "Message",
        submit: "Submit",
        sending: "Sending…",
        successMessage: "Message sent! We'll be in touch soon.",
        errorMessage: "Something went wrong. Please try again.",
    } satisfies FormDict,
    es: {
        name: "Nombre",
        email: "Correo electrónico",
        serviceLabel: "Servicio necesitado",
        services: [
            { value: "bookkeeping", label: "Contabilidad" },
            { value: "tax-preparation", label: "Preparación de impuestos" },
            { value: "audit", label: "Auditoría y aseguramiento" },
            { value: "payroll", label: "Nómina" },
            { value: "business-advisory", label: "Asesoría empresarial" },
            { value: "other", label: "Otro" },
        ],
        message: "Mensaje",
        submit: "Enviar",
        sending: "Enviando…",
        successMessage: "¡Mensaje enviado! Te contactaremos pronto.",
        errorMessage: "Algo salió mal. Por favor intenta de nuevo.",
    } satisfies FormDict,
} as const
