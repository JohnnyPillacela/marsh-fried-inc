import type { HeroDict } from "@/types/dictionary"

export const heroDict = {
    en: {
        eyebrow: "Marsh Fried Incorporated",
        title: "Accounting & Tax Services for Businesses",
        subtitle:
            "Experienced accounting, bookkeeping, and tax services for businesses in Union County and across New Jersey.",
        cta: "Schedule Appointment",
        ctaHref: "#contact",
        secondaryCta: "Call Office",
        trustBar:
            "Trusted by 500+ clients • CPA Licensed • Union County, New Jersey",
        heroImageAlt:
            "Financial services checklist: tax preparation, accounting, bookkeeping, and reporting",
    } satisfies HeroDict,
    es: {
        eyebrow: "Marsh Fried Incorporated",
        title: "Servicios de contabilidad para empresas",
        subtitle:
            "Contabilidad, teneduría de libros e impuestos con experiencia para empresas en el condado de Union y en todo Nueva Jersey.",
        cta: "Agendar cita",
        ctaHref: "#contact",
        secondaryCta: "Llamar a la oficina",
        trustBar:
            "Más de 500 clientes de confianza • CPA con licencia • Condado de Union, Nueva Jersey",
        heroImageAlt:
            "Ilustración de servicios financieros: impuestos, contabilidad, libros e informes",
    } satisfies HeroDict,
} as const
