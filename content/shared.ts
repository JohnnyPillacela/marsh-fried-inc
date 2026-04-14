/** Non-translatable site config: brand, contact, social, URLs */
export const shared = {
    siteName: "Marsh Fried Incorporated",
    siteDescription:
        "Accounting & Tax Services for Businesses in Union County and across New Jersey.",
    url: "https://marshfried.com",
    contact: {
        email: "cisneros.john@gmail.com",
        phone: "(917) 531-1721",
        phoneHref: "tel:+15551234567",
        address: "123 Sayre Street, Elizabeth, NJ",
    },
    social: {
        instagram: "",
        facebook: "",
        linkedin: "",
    },
    images: {
        ogImage: "/website-screenshots/pillacela-hero.png",
    },
    navCta: {
        label: "Book a Call",
        href:  "#contact",
    },
} as const
