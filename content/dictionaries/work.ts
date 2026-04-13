import type { WorkDict } from "@/types/dictionary"

export const workDict = {
    en: {
        title: "Representative Engagements",
        description:
            "Examples of how we support businesses and organizations with tax, audit, bookkeeping, and advisory work across New Jersey.",
        visitSiteLabel: "Learn more",
        items: [
            {
                title: "Manufacturing — IRS audit support",
                tag: "Tax & audit",
                image: "/hero-image.png",
            },
            {
                title: "Retail — year-end close & financial review",
                tag: "Financial reporting",
                image: "https://picsum.photos/seed/mfi-retail/800/450",
            },
            {
                title: "Nonprofit — grant compliance & A-133 prep",
                tag: "Government & nonprofit",
                image: "https://picsum.photos/seed/mfi-nonprofit/800/450",
            },
            {
                title: "Professional firm — books & payroll cleanup",
                tag: "Bookkeeping",
                image: "https://picsum.photos/seed/mfi-books/800/450",
            },
        ],
    } satisfies WorkDict,
    es: {
        title: "Trabajos representativos",
        description:
            "Ejemplos de cómo apoyamos a empresas y organizaciones con impuestos, auditorías, contabilidad y asesoría en Nueva Jersey.",
        visitSiteLabel: "Más información",
        items: [
            {
                title: "Manufactura — apoyo en auditoría del IRS",
                tag: "Impuestos y auditoría",
                image: "/hero-image.png",
            },
            {
                title: "Retail — cierre anual y revisión financiera",
                tag: "Informes financieros",
                image: "https://picsum.photos/seed/mfi-retail/800/450",
            },
            {
                title: "Sin fines de lucro — cumplimiento de subvenciones y A-133",
                tag: "Gobierno y sin fines de lucro",
                image: "https://picsum.photos/seed/mfi-nonprofit/800/450",
            },
            {
                title: "Firma profesional — libros y nómina",
                tag: "Contabilidad",
                image: "https://picsum.photos/seed/mfi-books/800/450",
            },
        ],
    } satisfies WorkDict,
} as const
