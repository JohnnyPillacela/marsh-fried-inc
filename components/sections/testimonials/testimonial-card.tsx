import { Card, CardContent } from "@/components/ui/card"
import { toExternalHref } from "@/lib/utils"
import type { TestimonialItem } from "@/types/dictionary"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

type Props = {
    item: TestimonialItem
    visitSiteLabel?: string
}

/** Tier 1 / landing: compact card. Tier 2 uses `TestimonialSectionCard` instead. */
export function TestimonialCard({ item, visitSiteLabel }: Props) {
    const linkLabel = visitSiteLabel?.trim() || "Visit site"

    return (
        <Card className="h-full">
            <CardContent className="flex h-full flex-col gap-4 pt-6">
                <span
                    aria-hidden
                    className="select-none font-serif text-5xl leading-none text-primary/25"
                >
                    &ldquo;
                </span>
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.quote}
                </blockquote>
                <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">{item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                    {item.websiteUrl && (
                        <Link
                            href={toExternalHref(item.websiteUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            prefetch={false}
                            className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                            aria-label={`${linkLabel} (opens in a new tab)`}
                        >
                            {linkLabel}
                            <ExternalLink className="size-3 shrink-0 opacity-70" aria-hidden />
                        </Link>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
