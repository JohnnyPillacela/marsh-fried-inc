import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { sectionBg } from "@/config/sections"
import type { ProcessDict, ProcessStep } from "@/types/dictionary"

type Props = {
    dict: ProcessDict
}

function ProcessCard({ item, isLast }: { item: ProcessStep; isLast: boolean }) {
    return (
        <div className="relative flex w-full max-w-xs gap-5 lg:max-w-none lg:flex-col lg:items-center lg:gap-0 lg:text-center">
            {/* Circle + vertical connector (mobile) */}
            <div className="flex flex-col items-center lg:contents">
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md ring-4 ring-primary/15 lg:mb-6">
                    {item.step}
                </div>
                {/* Vertical line — mobile only */}
                {!isLast && (
                    <div
                        aria-hidden
                        className="mt-1 w-px flex-1 border-l border-dashed border-border lg:hidden"
                    />
                )}
            </div>

            {/* Content */}
            <div className="pb-8 lg:pb-0">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-1.5 max-w-[18ch] text-lg leading-relaxed text-muted-foreground lg:mx-auto">
                    {item.description}
                </p>
            </div>
        </div>
    )
}

// Tier 1 — single-page sites. Answers "what's it like to work with you?" before the portfolio.
export default function BriefProcess({ dict }: Props) {
    return (
        <Section id="process" variant={sectionBg.process}>
            <Container>
                <SectionHeading
                    title={dict.title}
                    description={dict.description}
                    align="center"
                />
                <div className="relative mt-10">
                    {/* Horizontal connector line — desktop only, sits at circle midpoint (h-11 = 44px → top-[22px]) */}
                    <div
                        aria-hidden
                        className="absolute top-[22px] left-[calc(100%/8)] right-[calc(100%/8)] hidden h-px border-t border-dashed border-border lg:block"
                    />
                    <div className="grid lg:grid-cols-4 justify-items-center lg:justify-items-stretch">
                        {dict.items.map((item, i) => (
                            <ProcessCard
                                key={i}
                                item={item}
                                isLast={i === dict.items.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
