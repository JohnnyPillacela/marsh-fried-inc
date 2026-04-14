// /components/pages/HomePage.tsx

import BriefAbout from "@/components/briefs/BriefAbout"
import BriefOwner from "@/components/briefs/BriefOwner"
import BriefFaq from "@/components/briefs/BriefFaq"
import BriefHero from "@/components/briefs/BriefHero"
import BriefPainPoints from "@/components/briefs/BriefPainPoints"
import BriefProcess from "@/components/briefs/BriefProcess"
import BriefServices from "@/components/briefs/BriefServices"
import BriefServiceAreas from "@/components/briefs/BriefServiceAreas"
import BriefWork from "@/components/briefs/BriefWork"
import { CtaBanner } from "@/components/shared/cta-banner"
import {
    getAboutDict,
    getContactDict,
    getCtaBannerDict,
    getFaqDict,
    getFormDict,
    getHeroDict,
    getPainPointsDict,
    getStatsDict,
    getOwnerDict,
    getProcessDict,
    getTrustBadgesDict,
    getServiceAreasDict,
    getServicesDict,
    getTestimonialsDict,
    getWorkDict,
} from "@/lib/dictionaries"
import type { Locale } from "@/types/locale"
import { ContactSection } from "../sections/contact/contact-section"
import { TestimonialsSection } from "../sections/testimonials/testimonials-section"
type Props = {
    locale: Locale
}

export default function HomePage({ locale }: Props) {
    const hero = getHeroDict(locale)
    const painPoints = getPainPointsDict(locale)
    const stats = getStatsDict(locale)
    const about = getAboutDict(locale)
    const owner = getOwnerDict(locale)
    const process = getProcessDict(locale)
    const services = getServicesDict(locale)
    const work = getWorkDict(locale)
    const contact = getContactDict(locale)
    const testimonials = getTestimonialsDict(locale)
    const faq = getFaqDict(locale)
    const serviceAreas = getServiceAreasDict(locale)
    const trustBadges = getTrustBadgesDict(locale)
    const ctaBanner = getCtaBannerDict(locale)
    const form = getFormDict(locale)

    return (
        <>
            <BriefHero dict={hero} trustBadges={trustBadges}/>
            <BriefPainPoints dict={painPoints} />
            <BriefAbout dict={about} />
            <BriefServices dict={services} stats={stats} />
            <BriefProcess dict={process} />
            <BriefWork dict={work} />
            <TestimonialsSection dict={testimonials} />
            <CtaBanner dict={ctaBanner} />
            <BriefFaq dict={faq} />
            <BriefServiceAreas dict={serviceAreas} />
            <ContactSection dict={contact} form={form}/>
            <BriefOwner dict={owner} />
        </>
    )
}