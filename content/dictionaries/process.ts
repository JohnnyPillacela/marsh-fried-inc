import type { ProcessDict } from "@/types/dictionary"

export const processDict = {
    en: {
        title: "How It Works",
        description: "A straightforward process built around your business — not the other way around.",
        items: [
            {
                step: "01",
                title: "Free Consultation",
                description:
                    "Tell us about your business and what you need. No paperwork, no commitment — just an honest conversation.",
            },
            {
                step: "02",
                title: "Onboarding",
                description:
                    "We collect your documents, review your existing records, and identify exactly where things stand.",
            },
            {
                step: "03",
                title: "We Handle It",
                description:
                    "Your books stay current, taxes get filed on time, and payroll runs without a hitch — every single month.",
            },
            {
                step: "04",
                title: "Ongoing Partnership",
                description:
                    "Monthly financial summaries, year-round CPA access, and proactive advice as your business grows.",
            },
        ],
    } satisfies ProcessDict,
    es: {
        title: "Cómo Funciona",
        description:
            "Un proceso directo diseñado para tu negocio — no al revés.",
        items: [
            {
                step: "01",
                title: "Consulta Gratuita",
                description:
                    "Cuéntanos sobre tu negocio y lo que necesitas. Sin papeles, sin compromiso — solo una conversación honesta.",
            },
            {
                step: "02",
                title: "Incorporación",
                description:
                    "Recopilamos tus documentos, revisamos tus registros actuales e identificamos exactamente cómo están las cosas.",
            },
            {
                step: "03",
                title: "Nos Encargamos",
                description:
                    "Tu contabilidad se mantiene al día, los impuestos se presentan a tiempo y la nómina corre sin problemas — cada mes.",
            },
            {
                step: "04",
                title: "Alianza Continua",
                description:
                    "Resúmenes financieros mensuales, acceso a tu CPA todo el año y asesoría proactiva conforme crece tu negocio.",
            },
        ],
    } satisfies ProcessDict,
} as const
