import type { TrustBadgesDict } from "@/types/dictionary"

export const trustBadgesDict = {
    en: {
        items: [
            { label: "CPA Licensed & Insured" },
            { label: "500+ Clients Served" },
            { label: "40+ Years of Experience" },
            { label: "Union County, New Jersey" },
        ],
    } satisfies TrustBadgesDict,
    es: {
        items: [
            { label: "CPA con licencia y asegurado" },
            { label: "Más de 500 clientes atendidos" },
            { label: "Más de 40 años de experiencia" },
            { label: "Condado de Union, Nueva Jersey" },
        ],
    } satisfies TrustBadgesDict,
} as const
