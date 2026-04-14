import type { PainPointsDict } from "@/types/dictionary"

export const painPointsDict = {
    en: {
        title: "Sound familiar?",
        items: [
            "You're overwhelmed at tax time because your books are a mess all year",
            "You're not sure if you're paying too much in taxes — or missing deductions you're entitled to",
            "Your last accountant was hard to reach and never explained anything",
            "You're growing and need someone who understands small business finances, not just personal returns",
            "You've received an IRS notice and don't know what to do next",
        ],
        closing:
            "If any of these sound familiar, you're in the right place. Marsh Fried Incorporated has helped businesses across multiple states get their finances in order, minimize their tax burden, and stay compliant — with clear communication every step of the way.",
    } satisfies PainPointsDict,
    es: {
        title: "¿Te suena conocido?",
        items: [
            "Te sientes abrumado en época de impuestos porque tus libros están desorganizados todo el año",
            "No sabes si estás pagando demasiados impuestos o si te estás perdiendo deducciones",
            "Tu contador anterior era difícil de contactar y nunca te explicaba nada",
            "Tu negocio está creciendo y necesitas a alguien que entienda las finanzas de pequeñas empresas",
            "Recibiste una notificación del IRS y no sabes qué hacer",
        ],
        closing:
            "Si algo de esto te suena familiar, estás en el lugar correcto. Marsh Fried Incorporated ha ayudado a empresas en múltiples estados a organizar sus finanzas, reducir su carga tributaria y mantenerse en regla — con comunicación clara en cada paso.",
    } satisfies PainPointsDict,
} as const
