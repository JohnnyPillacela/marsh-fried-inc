import type { ServicesDict } from "@/types/dictionary"

export const servicesDict = {
    en: {
        title: "Our Services",
        heroTitle: "What we offer",
        description:
            "We provide comprehensive accounting and tax solutions for businesses of all sizes across New Jersey.",
        items: [
            "Tax Preparation & Planning",
            "Bookkeeping & Accounting",
            "Payroll Services",
            "Business Financial Reporting",
            "IRS Representation",
            "New Business Setup & Advisory",
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
            "Preparación y planificación de impuestos",
            "Teneduría de libros y contabilidad",
            "Servicios de nómina",
            "Informes financieros empresariales",
            "Representación ante el IRS",
            "Asesoría para nuevos negocios",
        ],
        cta: "Agendar cita",
        ctaHref: "#contact",
    } satisfies ServicesDict,
} as const
