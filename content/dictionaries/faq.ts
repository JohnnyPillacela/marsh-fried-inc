import type { FaqDict } from "@/types/dictionary"

export const faqDict = {
    en: {
        title: "Frequently Asked Questions",
        badge: "FAQ",
        description: "Everything you need to know about working with our accounting firm.",
        ctaTitle: "Still have questions?",
        ctaDescription: "We're happy to help. Reach out directly and we'll get back to you quickly.",
        cta: "Contact us",
        ctaHref: "#contact",
        items: [
            // General
            {
                question: "What services do you offer?",
                answer: "We provide bookkeeping and accounting, tax preparation and planning, business financial reporting, audit support, and financial statements for businesses across New Jersey. If you need something outside that list, ask — we’ll tell you honestly whether we’re the right fit.",
            },
            {
                question: "How do we get started?",
                answer: "Reach out through the contact form or call the office. We’ll schedule a short consultation to understand your business, your prior-year filings if any, and what you need. From there we’ll outline next steps and a clear scope before any engagement begins.",
            },
            {
                question: "How are your fees structured?",
                answer: "Fees depend on the complexity of your books, entity type, and the services you need — for example monthly bookkeeping versus a one-time tax return. We quote in writing before work starts so you know what to expect, with no surprise add-ons for agreed scope.",
            },
            // Engagement
            {
                question: "How long does tax preparation or a filing take?",
                answer: "Timing depends on how complete your records are and filing deadlines. Simple returns often move quickly once documents are in; more complex situations need more review. We’ll give you a realistic timeline after we see your situation and keep you updated as we go.",
            },
            {
                question: "How often will we review my books or financials?",
                answer: "That’s set in your engagement — some clients want monthly closes and check-ins; others need quarterly or annual work. We align frequency with your business size and how much visibility you want into cash flow and tax exposure.",
            },
            {
                question: "What documents do you need from me?",
                answer: "Typically bank and credit card statements, payroll reports if you have employees, prior-year tax returns, and any 1099s or W-2s that apply. For bookkeeping we may need read-only access to your accounting software or a regular export. We’ll send a checklist so nothing important is missed.",
            },
            // Ongoing
            {
                question: "What happens after tax season?",
                answer: "We’re available year-round — not just April. Many clients stay on for ongoing bookkeeping, estimated tax planning, and questions as the business changes. If you only need annual tax prep, we’ll still be here when you’re ready to add services.",
            },
            {
                question: "Are you licensed and how do you stand behind your work?",
                answer: "The firm operates under CPA-licensed standards and takes accuracy and confidentiality seriously. If something in a deliverable needs correction due to our side, we address it. We aim for long-term relationships built on clear communication, not one-off filings.",
            },
            {
                question: "Can you help if I already have an accountant?",
                answer: "Yes. We can take over bookkeeping and tax work, collaborate during a transition, or review prior filings if you’re concerned something was missed. Tell us your situation and we’ll explain the cleanest way to switch without gaps.",
            },
        ],
    } satisfies FaqDict,
    es: {
        title: "Preguntas Frecuentes",
        badge: "FAQ",
        description: "Todo lo que necesitas saber sobre cómo trabajamos como despacho contable.",
        ctaTitle: "¿Aún tienes preguntas?",
        ctaDescription: "Estamos aquí para ayudarte. Contáctanos directamente y te responderemos pronto.",
        cta: "Contáctanos",
        ctaHref: "#contact",
        items: [
            // General
            {
                question: "¿Qué servicios ofrecen?",
                answer: "Ofrecemos teneduría de libros y contabilidad, preparación y planificación de impuestos, informes financieros para empresas, apoyo en auditorías e informes financieros para negocios en Nueva Jersey. Si necesitas algo fuera de esa lista, pregunta: te diremos con honestidad si somos la opción adecuada.",
            },
            {
                question: "¿Cómo empezamos?",
                answer: "Escríbenos por el formulario o llama a la oficina. Agendamos una consulta breve para entender tu negocio, tus declaraciones de años anteriores si las hay y qué necesitas. Luego definimos los siguientes pasos y el alcance con claridad antes de iniciar cualquier trabajo.",
            },
            {
                question: "¿Cómo cobran sus honorarios?",
                answer: "Los honorarios dependen de la complejidad de tus libros, el tipo de entidad y los servicios que requieras — por ejemplo contabilidad mensual frente a una declaración puntual. Te damos una cotización por escrito antes de comenzar, sin cargos sorpresa dentro del alcance acordado.",
            },
            // Compromiso
            {
                question: "¿Cuánto tardan la preparación de impuestos o una presentación?",
                answer: "El tiempo depende de qué tan completos estén tus registros y de los plazos legales. Las declaraciones sencillas suelen avanzar rápido una vez tenemos la documentación; los casos más complejos requieren más revisión. Te daremos un plazo realista cuando conozcamos tu situación y te mantendremos informado.",
            },
            {
                question: "¿Con qué frecuencia revisan mis libros o estados financieros?",
                answer: "Se define en el acuerdo de servicio: algunos clientes quieren cierres mensuales y seguimiento; otros necesitan trabajo trimestral o anual. Ajustamos la frecuencia al tamaño de tu negocio y al nivel de detalle que quieres sobre flujo de caja y carga fiscal.",
            },
            {
                question: "¿Qué documentación necesitan de mi parte?",
                answer: "Por lo general estados de cuenta bancarios y de tarjetas, nóminas si tienes empleados, declaraciones del año anterior y los 1099 o W-2 que correspondan. Para la contabilidad puede bastar acceso de solo lectura a tu software o exportaciones periódicas. Te enviamos una lista de verificación para no omitir nada importante.",
            },
            // Continuidad
            {
                question: "¿Qué pasa después de la temporada de impuestos?",
                answer: "Estamos disponibles todo el año, no solo en abril. Muchos clientes continúan con contabilidad mensual, pagos estimados y consultas cuando el negocio cambia. Si solo necesitas la declaración anual, igual estaremos cuando quieras ampliar servicios.",
            },
            {
                question: "¿Tienen licencia y cómo respaldan su trabajo?",
                answer: "La firma trabaja bajo estándares de CPA y prioriza la exactitud y la confidencialidad. Si algo entregado debe corregirse por nuestro lado, lo atendemos. Buscamos relaciones a largo plazo basadas en comunicación clara, no solo en un trámite puntual.",
            },
            {
                question: "¿Pueden ayudarme si ya tengo contador?",
                answer: "Sí. Podemos asumir la contabilidad y los impuestos, coordinar una transición o revisar declaraciones anteriores si te preocupa un error. Cuéntanos tu caso y te explicamos la forma más ordenada de cambiar sin dejar huecos.",
            },
        ],
    } satisfies FaqDict,
} as const
