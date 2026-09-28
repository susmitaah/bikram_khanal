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
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="flex flex-col leading-tight transition-opacity hover:opacity-75"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl font-semibold">{t(site.name)}</span>
          <span className="text-xs text-ink-mute">
            {t(site.role)} · {t(site.constituency)}
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="link-underline text-[15px] text-ink-soft transition-colors hover:text-ink"
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
            className="rounded-full p-1.5 transition-colors hover:bg-paper-deep"
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
                className="-mx-2 border-b border-rule/60 px-2 py-3 text-lg transition-colors last:border-0 hover:bg-paper-deep/60 hover:text-crimson"
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
