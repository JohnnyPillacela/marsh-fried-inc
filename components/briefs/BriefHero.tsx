import Image from "next/image"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CtaButton } from "@/components/shared/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { sectionBg } from "@/config/sections"
import { shared } from "@/content/shared"
import type { HeroDict } from "@/types/dictionary"

const HERO_IMAGE = "/hero-image.png"

type Props = {
    dict: HeroDict
}

export default function BriefHero({ dict }: Props) {
    const secondaryHref =
        dict.secondaryCtaHref ?? shared.contact.phoneHref
    const showSecondaryCta = Boolean(dict.secondaryCta)

    return (
        <Section id="hero" variant={sectionBg.hero}>
            <Container>
                <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
                    {/* Left: text */}
                    <div className="flex min-w-0 flex-col">
                        <p className="font-serif text-sm text-muted-foreground">
                            {dict.eyebrow ?? shared.siteName}
                        </p>
                        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
                            {dict.title}
                        </h1>
                        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                            {dict.subtitle}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            {dict.cta && (
                                <CtaButton
                                    href={dict.ctaHref ?? "#contact"}
                                    variant="primary"
                                    size="lg"
                                    className="min-w-48 justify-center"
                                >
                                    {dict.cta}
                                </CtaButton>
                            )}
                            {showSecondaryCta && (
                                <CtaButton
                                    href={secondaryHref}
                                    variant="secondary"
                                    size="lg"
                                    className="min-w-48 justify-center"
                                >
                                    {dict.secondaryCta}
                                </CtaButton>
                            )}
                        </div>
                    </div>

                    {/* Right: image */}
                    <div className="relative min-w-0">
                        <Card className="gap-0 overflow-hidden p-0 py-0 shadow-sm ring-border/70">
                            <CardContent className="p-0">
                                <div className="relative aspect-4/3 w-full bg-muted/30">
                                    <Image
                                        src={HERO_IMAGE}
                                        alt={
                                            dict.heroImageAlt ??
                                            `${shared.siteName} — hero`
                                        }
                                        fill
                                        className="object-contain object-center p-3 md:p-4"
                                        priority
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
            {dict.trustBar ? (
                <>
                    <Separator />
                    <div className="bg-muted/50">
                        <Container>
                            <p className="py-3 text-center text-sm text-muted-foreground md:py-3.5">
                                {dict.trustBar}
                            </p>
                        </Container>
                    </div>
                </>
            ) : null}
        </Section>
    )
}
