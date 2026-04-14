import type { ServicesDict } from "@/types/dictionary"

export const servicesDict = {
    en: {
        title: "Our Services",
        heroTitle: "What we offer",
        description:
            "We provide comprehensive accounting and tax solutions for businesses of all sizes across New Jersey.",
        items: [
            "Bookkeeping & Accounting",
            "Tax Preparation & Planning",
            "Business Financial Reporting",
            "Audit Services",
            "Financial Statements",
        ],
        cta: "Schedule Appointment",
        ctaHref: "#contact",
    } satisfies ServicesDict,
    es: {
        title: "Nuestros Servicios",
        heroTitle: "Qué ofrecemos",
        description:
            "Ofrecemos soluciones integrales de contabilidad e impuestos para empresas de todos los tamaños en Nueva Jersey.",
        items: [
            "Bookkeeping y contabilidad",
            "Preparación y planificación de impuestos",
            "Informes financieros empresariales",
            "Servicios de auditoría",
            "Informes financieros",
        ],
        cta: "Agendar cita",
        ctaHref: "#contact",
    } satisfies ServicesDict,
} as const
