import type { TestimonialsDict } from "@/types/dictionary"

export const testimonialsDict = {
    en: {
        title: "What Our Clients Say",
        description: "Real results from real businesses we've had the pleasure of working with.",
        visitSiteLabel: "Visit client site",
        items: [
            {
                quote: "I was drowning in receipts and had no idea where my business stood financially. They cleaned up two years of books in weeks and now I actually understand my numbers.",
                author: "Carlos Mendez",
                role: "Owner, Mendez Landscaping LLC",
            },
            {
                quote: "Tax season used to be a nightmare. This year we filed early, got a refund we didn't expect, and my CPA explained everything in plain English. Night and day difference.",
                author: "Patricia Kim",
                role: "Owner, Kim's Nail Salon",
            },
            {
                quote: "They caught a payroll error that had been costing us money for months. Switching to their team saved us more in the first quarter than we paid all year.",
                author: "David Thornton",
                role: "CEO, Thornton Contracting",
            },
            {
                quote: "As a new business owner I had no clue about quarterly taxes or deductions. They set everything up right from day one. Couldn't imagine doing this without them.",
                author: "Yesenia Flores",
                role: "Owner, Flores Catering Co.",
            },
        ],
    } satisfies TestimonialsDict,
    es: {
        title: "Lo Que Dicen Nuestros Clientes",
        description: "Resultados reales de negocios reales con los que hemos tenido el placer de trabajar.",
        visitSiteLabel: "Visitar sitio del cliente",
        items: [
            {
                quote: "Estaba ahogado en recibos y no tenía idea de cómo estaba mi negocio. Pusieron al día dos años de contabilidad en semanas y ahora entiendo mis números.",
                author: "Carlos Mendez",
                role: "Propietario, Mendez Landscaping LLC",
            },
            {
                quote: "La temporada de impuestos era una pesadilla. Este año presentamos temprano, recibimos un reembolso inesperado y mi contador me explicó todo en términos simples.",
                author: "Patricia Kim",
                role: "Propietaria, Kim's Nail Salon",
            },
            {
                quote: "Detectaron un error en la nómina que nos había costado dinero por meses. El cambio a su equipo nos ahorró más en el primer trimestre que lo que pagamos en todo el año.",
                author: "David Thornton",
                role: "CEO, Thornton Contracting",
            },
            {
                quote: "Como nueva empresaria no tenía idea de los impuestos trimestrales ni de las deducciones. Lo configuraron todo correctamente desde el primer día. No puedo imaginarme sin ellos.",
                author: "Yesenia Flores",
                role: "Propietaria, Flores Catering Co.",
            },
        ],
    } satisfies TestimonialsDict,
} as const
