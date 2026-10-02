"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
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

  /**
   * The mobile dropdown adds its own height to the fixed header while open.
   * A plain <a href="#x"> click lets the browser compute the scroll target
   * against that taller, still-expanded header at the same moment React
   * collapses it back to 80px — a race that lands the scroll a dropdown's
   * height short of the section. Close first, let the collapse paint, then
   * scroll against the now-correct (and stable) header height.
   */
  const navigateMobile = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-rule bg-cream/95 shadow-sm backdrop-blur" : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <a
          href="#home"
          className="flex min-w-0 flex-col leading-tight transition-opacity hover:opacity-75"
          onClick={(e) => navigateMobile(e, "#home")}
        >
          <span
            className={cn(
              "truncate font-display text-xl font-semibold transition-colors",
              scrolled || open ? "text-navy" : "text-cream",
            )}
          >
            {t(site.name)}
          </span>
          {/* full designation only once there's real room for it; the name alone carries the brand below that */}
          <span
            className={cn(
              "hidden truncate text-xs transition-colors xl:block",
              scrolled || open ? "text-charcoal-soft" : "text-cream/70",
            )}
          >
            {t(site.designation)}
          </span>
        </a>

        <nav aria-label="Main" className="hidden shrink-0 items-center gap-6 lg:flex xl:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "link-underline whitespace-nowrap text-sm font-medium transition-colors",
                scrolled ? "text-charcoal-soft hover:text-navy" : "text-cream/85 hover:text-cream",
              )}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <LanguageToggle dark={!scrolled} />
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
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
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
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
                onClick={(e) => navigateMobile(e, item.href)}
                className="-mx-2 border-b border-rule/60 px-2 py-3.5 text-base text-charcoal transition-colors last:border-0 hover:bg-cream-deep hover:text-maroon"
              >
                {t(item.label)}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
