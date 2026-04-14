import type { OwnerDict } from "@/types/dictionary"

export const ownerDict = {
    en: {
        sectionTitle: "Meet the Team",
        items: [
            {
                name: "John Cisneros",
                title: "Founder & President",
                bio: "John is a seasoned accountant with decades of experience serving clients across the United States. His practice covers tax amendments, audits, financial statements, and ongoing accounting support. Before Marsh Fried Incorporated, he worked on Wall Street and ran his own practice there — bringing that same rigor to small and mid-sized businesses today.",
                imageUrl: "/people/john.jpeg",
                credentials: [
                    "40+ Years of Experience",
                    "Served Multiple States",
                    "Bilingual — English & Spanish",
                ],
            },
            {
                name: "Carla Bernal",
                title: "Director General",
                bio: "Carla Bernal is the heartbeat of client communication at Marsh Fried Incorporated. She leads bookkeeping alongside day-to-day client contact, so everyone stays informed and never left wondering about their account — especially clients who come to us after years of slow replies from their old accountant. She oversees client accounts with a sharp eye for accuracy and integrity, making sure every deliverable meets the firm's standards before it reaches the client.",
                imageUrl: "",
                credentials: [
                    "15+ Years of Experience",
                    "Bilingual — English & Spanish",
                    "Served Multiple States",
                ],
            },
        ],
        cta: "Schedule Appointment",
        ctaHref: "#contact",
    } satisfies OwnerDict,
    es: {
        sectionTitle: "Conoce al equipo",
        items: [
            {
                name: "John Cisneros",
                title: "Fundador y Presidente",
                bio: "John es un contador con amplia experiencia y clientes en varios estados de EE. UU. Su práctica incluye enmiendas fiscales, auditorías, estados financieros y contabilidad continua. Trabajó en Wall Street y tuvo su propia firma allí antes de Marsh Fried Incorporated — y aplica ese mismo rigor a las pequeñas y medianas empresas.",
                imageUrl: "/people/john.jpeg",
                credentials: [
                    "40+ Years of Experience",
                    "Bilingual — English & Spanish",
                    "Served Multiple States",
                ],
            },
            {
                name: "Carla Bernal",
                title: "Directora General",
                bio: "Carla coordina la teneduría de libros y el contacto diario con los clientes, para que todos estén informados y reciban respuesta oportuna. Supervisa las cuentas y verifica que el trabajo se realice con precisión e integridad.",
                imageUrl: "",
                credentials: [
                    "15+ Years of Experience",
                    "Bilingüe — Inglés y Español",
                    "Served Multiple States",
                ],
            },
        ],
        cta: "Agendar cita",
        ctaHref: "#contact",
    } satisfies OwnerDict,
} as const
