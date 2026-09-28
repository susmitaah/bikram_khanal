"use client";

import { useState } from "react";
import { nav, site } from "@/content/site";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Close, Menu } from "@/components/ui/Icons";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-xl">{t(site.name)}</span>
          <span className="text-xs text-ink-mute">
            {t(site.role)} · {t(site.constituency)}
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[15px] text-ink-soft underline-offset-[6px] transition-colors hover:text-ink hover:underline decoration-crimson"
            >
              {t(item.label)}
            </a>
          ))}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-1.5"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-rule md:hidden">
          <Container className="flex flex-col py-2">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-rule/60 py-3 text-lg last:border-0"
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
