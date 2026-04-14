import type { ServiceAreasDict } from "@/types/dictionary"

export const serviceAreasDict = {
    en: {
        title: "Areas We Serve",
        description: "Based in New Jersey — working with businesses across the Northeast and remotely nationwide.",
        items: [
            { city: "New York",     state: "NY", slug: "new-york" },
            { city: "New Jersey",   state: "NJ", slug: "new-jersey" },
            { city: "Pennsylvania", state: "PA", slug: "pennsylvania" },
            { city: "Florida",      state: "FL", slug: "florida" },
        ],
        note: "Serving clients remotely across the US.",
    } satisfies ServiceAreasDict,
    es: {
        title: "Áreas que Atendemos",
        description: "Con base en New Jersey — trabajamos con negocios en el noreste y a distancia en todo el país.",
        items: [
            { city: "Nueva York",    state: "NY", slug: "new-york" },
            { city: "Nueva Jersey",  state: "NJ", slug: "new-jersey" },
            { city: "Pensilvania",   state: "PA", slug: "pennsylvania" },
            { city: "Florida",       state: "FL", slug: "florida" },
        ],
        note: "Atendemos clientes a distancia en todo el país.",
    } satisfies ServiceAreasDict,
} as const
