"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { shared } from "@/content/shared"
import { getNavigationDict } from "@/lib/dictionaries"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from "./container"
import { LanguageSwitcher } from "./language-switcher"

export function Navbar() {
    const pathname = usePathname()
    const locale = pathname?.startsWith("/es") ? "es" : "en"
    const navItems = getNavigationDict(locale)
    const [open, setOpen] = useState(false)
    const navCtaHref = shared.navCta.href.startsWith("#")
        ? `${locale === "es" ? "/es" : ""}${shared.navCta.href}`
        : shared.navCta.href

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
            <Container>
                <nav className="flex h-14 md:h-16 items-center justify-between text-lg">
                    <Link
                        href={locale === "es" ? "/es" : "/"}
                        className="inline-flex items-center justify-center text-foreground"
                    >
                        <Image
                            src="/logos/full-logo-2000x370.png"
                            alt={shared.siteName}
                            width={2000}
                            height={350}
                            className="h-13 md:h-14 py-1.5 md:py-1 w-auto"
                            priority

                        />
                    </Link>

                    {/* Desktop nav — hidden on mobile */}
                    <div className="hidden items-center gap-6 md:flex justify-between">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button asChild size="lg">
                            <Link href={navCtaHref}>{shared.navCta.label}</Link>
                        </Button>
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile controls — hidden on desktop */}
                    <div className="flex items-center gap-1 md:hidden">
                        <LanguageSwitcher />
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon-lg" aria-label="Open menu">
                                    <MenuIcon className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader className="border-b justify-center my-4">
                                    <SheetTitle className="sr-only">
                                        {shared.siteName} Logo
                                    </SheetTitle>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src="/logos/full-logo-2000x370.png"
                                            alt=""
                                            width={2000}
                                            height={370}
                                            className="h-10 w-auto"
                                        />
                                    </div>
                                </SheetHeader>
                                <nav className="flex flex-col gap-1 px-4">
                                    {navItems.map((item) => (
                                        <SheetClose asChild key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="rounded-md p-3 text-lg border-b font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                    <div className="mt-4 pt-4">
                                        <Button asChild className="w-full">
                                            <Link href={navCtaHref} onClick={() => setOpen(false)}>
                                                {shared.navCta.label}
                                            </Link>
                                        </Button>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </Container>
        </header>
    )
}
