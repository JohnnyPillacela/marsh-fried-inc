import type { ContactDict } from "@/types/dictionary"

export const contactDict = {
    en: {
        title: "Schedule an Appointment",
        description:
            "Ready to get your finances in order? Reach out today for a free consultation with one of our CPAs. We serve businesses throughout Union County and New Jersey.",
        cta: "Send a message",
        ctaHref: "#contact",
    } satisfies ContactDict,
    es: {
        title: "Agendar una cita",
        description:
            "¿Listo para poner tus finanzas en orden? Contáctanos hoy para una consulta gratuita con uno de nuestros CPAs. Atendemos empresas en todo el condado de Union y Nueva Jersey.",
        cta: "Enviar mensaje",
        ctaHref: "#contact",
    } satisfies ContactDict,
} as const
