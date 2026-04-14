import type { StatsDict } from "@/types/dictionary"

export const statsDict = {
    en: {
        items: [
            { value: "999+", label: "Clients served" },
            { value: "40+", label: "Years of experience" },
            { value: "98%", label: "Client retention rate" },
            { value: "5+", label: "States served" },
        ],
    } satisfies StatsDict,
    es: {
        items: [
            { value: "999+", label: "Clientes atendidos" },
            { value: "40+", label: "Años de experiencia" },
            { value: "98%", label: "Tasa de retención" },
            { value: "5+", label: "Estados servidos" },
        ],
    } satisfies StatsDict,
} as const
