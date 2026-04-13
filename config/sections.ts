import type { SectionVariant } from "@/components/layout/section"

/**
 * Section background variants — edit this file per client.
 *
 * Variants:
 *   "default" → bg-background  (plain white / dark)
 *   "muted"   → bg-muted/40    (subtle gray)
 *   "accent"  → bg-accent      (brand tint)
 *   "primary" → bg-primary     (full brand color)
 *
 * Colors are driven by CSS variables in app/globals.css,
 * so they automatically reflect the client's brand palette.
 */
export const sectionBg = {
    hero:         "default",
    painPoints:   "whiteForty",
    about:        "default",
    services:     "whiteSixty",
    process:      "default",
    work:         "whiteSixty",
    testimonials: "default",
    trustBadges:  "whiteForty",
    stats:        "whiteForty",
    pricing:      "default",
    faq:          "whiteForty",
    serviceAreas: "default",
    contact:      "whiteForty",
    owner:        "default",
} as const satisfies Record<string, SectionVariant>
