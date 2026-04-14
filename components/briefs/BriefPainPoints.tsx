import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { sectionBg } from "@/config/sections"
import type { PainPointsDict } from "@/types/dictionary"

type Props = {
    dict: PainPointsDict
}

// Tier 1 — single-page sites. Opens with empathy before the pitch.
export default function BriefPainPoints({ dict }: Props) {
    return (
        <Section id="pain-points" variant={sectionBg.painPoints}>
            <Container>
                {dict.title && (
                    <h2 className="mb-8 text-3xl font-bold tracking-tight max-w-2xl mx-auto">
                        {dict.title}
                    </h2>
                )}

                <div className="flex flex-col max-w-2xl mx-auto">
                    {dict.items.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-6 border-l-4 border-primary bg-card px-6 py-5 ring-1 ring-foreground/10 -mb-px"
                        >
                            <span className="text-5xl font-black tabular-nums text-primary/15 leading-none select-none shrink-0 w-10 text-right">
                                {i + 1}
                            </span>
                            <p className="text-sm text-foreground leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}

                    {dict.closing && (
                        <div className="flex items-center gap-6 border-l-4 border-primary bg-primary px-6 py-5 ring-1 ring-primary">
                            <span className="text-5xl font-black tabular-nums text-primary-foreground/20 leading-none select-none shrink-0 w-10 text-right">
                                ✓
                            </span>
                            <p className="text-sm text-primary-foreground font-medium leading-relaxed">
                                {dict.closing}
                            </p>
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    )
}
