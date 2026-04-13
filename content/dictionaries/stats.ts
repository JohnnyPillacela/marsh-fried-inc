import type { StatsDict } from "@/types/dictionary"

export const statsDict = {
    en: {
        items: [
            { value: "1000+", label: "Clients served" },
            { value: "20+", label: "Years of experience" },
            { value: "98%", label: "Client retention rate" },
            { value: "100%", label: "CPA certified" },
        ],
    } satisfies StatsDict,
    es: {
        items: [
            { value: "1000+", label: "Clientes atendidos" },
            { value: "20+", label: "Años de experiencia" },
            { value: "98%", label: "Tasa de retención" },
            { value: "100%", label: "Certificación CPA" },
        ],
    } satisfies StatsDict,
} as const
