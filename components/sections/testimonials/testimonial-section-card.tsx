import { Card } from "@/components/ui/card"
import { cn, toExternalHref } from "@/lib/utils"
import type { TestimonialItem } from "@/types/dictionary"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

type Props = {
    item: TestimonialItem
    visitSiteLabel?: string
}

/** Tier 2+ / multi-page: richer layout than BriefTestimonials — hierarchy, attribution strip, hover. */
export function TestimonialSectionCard({ item, visitSiteLabel }: Props) {
    const linkLabel = visitSiteLabel?.trim() || "Visit site"

    return (
        <Card
            className={cn(
                "group/testimonial h-full gap-0 overflow-hidden border-0 py-0 shadow-sm ring-1 ring-border/50",
                "transition-[box-shadow,ring-color] duration-200 hover:shadow-md hover:ring-border",
            )}
        >
            {/* Top primary accent bar */}
            <div className="h-0.5 w-full bg-primary" aria-hidden />

            <div className="flex flex-1 flex-col px-6 pt-7 pb-6">
                <span
                    aria-hidden
                    className="mb-3 block select-none font-serif text-4xl leading-none text-primary/30"
                >
                    &ldquo;
                </span>
                <blockquote className="flex-1 text-[15px] leading-[1.65] text-foreground text-pretty">
                    {item.quote}
                    <span className="sr-only">&rdquo;</span>
                </blockquote>
                {item.websiteUrl && (
                    <div className="mt-5">
                        <Link
                            href={toExternalHref(item.websiteUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            prefetch={false}
                            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                            aria-label={`${linkLabel} (opens in a new tab)`}
                        >
                            {linkLabel}
                            <ExternalLink className="size-3.5 shrink-0 opacity-80" aria-hidden />
                        </Link>
                    </div>
                )}
            </div>

            <div className="border-t border-border/50 bg-muted/30 px-6 py-4">
                <p className="text-sm font-semibold leading-tight text-foreground">
                    {item.author}
                </p>
                <p className="mt-0.5 text-sm leading-snug text-muted-foreground">
                    {item.role}
                </p>
            </div>
        </Card>
    )
}
