import Image from "next/image"
import { UserCircle } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { CtaButton } from "@/components/shared/cta-button"
import { Badge } from "@/components/ui/badge"
import { sectionBg } from "@/config/sections"
import type { OwnerDict } from "@/types/dictionary"

type Props = {
    dict: OwnerDict
}

// Tier 1 — single-page sites. Human story behind the brand.
export default function BriefOwner({ dict }: Props) {
    return (
        <Section id="owner" variant={sectionBg.owner}>
            <Container>
                {dict.sectionTitle && (
                    <SectionHeading title={dict.sectionTitle} align="center" />
                )}

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    {dict.items.map((member, i) => (
                        <div key={i} className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6">
                            {/* Photo */}
                            <div className="flex items-center gap-4">
                                {member.imageUrl ? (
                                    <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-border">
                                        <Image
                                            src={member.imageUrl}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                                        <UserCircle className="size-8 text-muted-foreground/40" />
                                    </div>
                                )}
                                <div>
                                    {member.title && (
                                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                            {member.title}
                                        </p>
                                    )}
                                    <h3 className="text-lg font-bold tracking-tight">
                                        {member.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Bio */}
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {member.bio}
                            </p>

                            {/* Credentials */}
                            {member.credentials && member.credentials.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {member.credentials.map((c, j) => (
                                        <Badge key={j} variant="outline" className="text-xs">
                                            {c}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {dict.cta && (
                    <div className="mt-8 flex justify-center">
                        <CtaButton href={dict.ctaHref ?? "#contact"} variant="secondary">
                            {dict.cta}
                        </CtaButton>
                    </div>
                )}
            </Container>
        </Section>
    )
}
