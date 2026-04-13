import type { AboutDict } from "@/types/dictionary"

export const aboutDict = {
    en: {
        title: "About Us",
        tagline: "Local expertise. Trusted results.",
        description:
            "Marsh Fried Incorporated is a CPA firm serving businesses throughout Union County and New Jersey. With over 20 years of experience, we provide personalized accounting, bookkeeping, and tax services that help businesses stay compliant, organized, and financially healthy.",
        highlights: [
            "Over 500 businesses served across New Jersey",
            "CPA licensed and fully insured",
            "Bilingual service in English and Spanish",
            "Personalized attention — you work directly with our CPAs",
        ],
        cta: "See our services",
        ctaHref: "#services",
    } satisfies AboutDict,
    es: {
        title: "Sobre Nosotros",
        tagline: "Experiencia local. Resultados de confianza.",
        description:
            "Marsh Fried Incorporated es una firma de CPA que atiende a empresas en el condado de Union y en todo Nueva Jersey. Con más de 20 años de experiencia, ofrecemos servicios personalizados de contabilidad, teneduría de libros e impuestos que ayudan a las empresas a mantenerse en cumplimiento, organizadas y financieramente saludables.",
        highlights: [
            "Más de 500 empresas atendidas en Nueva Jersey",
            "CPA con licencia y completamente asegurado",
            "Servicio bilingüe en inglés y español",
            "Atención personalizada — trabajas directamente con nuestros CPAs",
        ],
        cta: "Ver nuestros servicios",
        ctaHref: "#services",
    } satisfies AboutDict,
} as const
