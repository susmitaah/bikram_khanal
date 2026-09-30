"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site, commonCopy } from "@/content/site";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { cn } from "@/lib/cn";

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-rule bg-cream/95 shadow-sm backdrop-blur" : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex flex-col leading-tight transition-opacity hover:opacity-75" onClick={() => setOpen(false)}>
          <span
            className={cn(
              "font-display text-xl font-semibold transition-colors",
              scrolled || open ? "text-navy" : "text-cream",
            )}
          >
            {t(site.name)}
          </span>
          <span className={cn("text-xs transition-colors", scrolled || open ? "text-charcoal-soft" : "text-cream/70")}>
            {t(site.designation)}
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "link-underline text-sm font-medium transition-colors",
                scrolled ? "text-charcoal-soft hover:text-navy" : "text-cream/85 hover:text-cream",
              )}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageToggle dark={!scrolled} />
          <ButtonLink href="#contact" variant={scrolled ? "solid" : "ghost-light"} className="px-5 py-2.5 text-sm">
            {t(commonCopy.getInTouch)}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle dark={!scrolled && !open} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t(open ? { np: "मेनु बन्द गर्नुहोस्", en: "Close menu" } : { np: "मेनु खोल्नुहोस्", en: "Open menu" })}
            className={cn(
              "rounded-full p-2 transition-colors",
              scrolled || open ? "text-navy hover:bg-cream-deep" : "text-cream hover:bg-cream/10",
            )}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-rule bg-cream lg:hidden">
          <Container className="flex flex-col py-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="-mx-2 border-b border-rule/60 px-2 py-3.5 text-base text-charcoal transition-colors last:border-0 hover:bg-cream-deep hover:text-maroon"
              >
                {t(item.label)}
              </a>
            ))}
            <ButtonLink href="#contact" className="mt-4 w-full justify-center">
              {t(commonCopy.getInTouch)}
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
