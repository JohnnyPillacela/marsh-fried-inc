import type { TrustBadgesDict } from "@/types/dictionary"

export const trustBadgesDict = {
    en: {
        items: [
            { label: "Expert Customer Support" },
            { label: "500+ Clients Served" },
            { label: "40+ Years of Experience" },
            { label: "Located in Union County, NJ" },
        ],
    } satisfies TrustBadgesDict,
    es: {
        items: [
            { label: "Soporte al cliente experto" },
            { label: "Más de 500 clientes atendidos" },
            { label: "Más de 40 años de experiencia" },
            { label: "Ubicado en el condado de Union, NJ" },
        ],
    } satisfies TrustBadgesDict,
} as const
