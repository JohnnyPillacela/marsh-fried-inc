import Image from "next/image"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CtaButton } from "@/components/shared/cta-button"
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
        <Section id="hero" variant={sectionBg.hero} className="py-0 md:py-0">
            <Container className="px-4 md:px-4">
                <div className="grid items-stretch md:grid-cols-2">
                    {/* Left: text — Container handles horizontal padding */}
                    <div className="flex flex-col justify-between py-10 md:py-18">
                        <p className="my-2 font-serif text-xl text-muted-foreground">
                            {dict.eyebrow ?? shared.siteName}
                        </p>
                        <h1 className="my-2 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                            {dict.title}
                        </h1>
                        <p className="my-2 text-lg text-muted-foreground">
                            {dict.subtitle}
                        </p>
                        <div className="my-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            {dict.cta && (
                                <CtaButton
                                    href={dict.ctaHref ?? "#contact"}
                                    variant="primary"
                                    size="lg"
                                    className="justify-center"
                                >
                                    {dict.cta}
                                </CtaButton>
                            )}
                            {showSecondaryCta && (
                                <CtaButton
                                    href={secondaryHref}
                                    variant="outline"
                                    size="lg"
                                    className="justify-center"
                                >
                                    {dict.secondaryCta}
                                </CtaButton>
                            )}
                        </div>
                    </div>

                    {/* Right: full-bleed image — desktop only */}
                    <div className="relative hidden self-stretch overflow-hidden md:block [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]">
                        <Image
                            src={HERO_IMAGE}
                            alt={dict.heroImageAlt ?? `${shared.siteName} — hero`}
                            fill
                            className="object-cover object-center"
                            priority
                        />
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
