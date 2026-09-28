"use client";

import { nav, site } from "@/content/site";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { t, num } = useLang();

  return (
    <footer className="bg-ink py-12 text-paper/80">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-paper">
            {t(site.honorific)} {t(site.name)}
          </p>
          <p className="mt-1 text-sm">
            {t(site.role)} · {t(site.constituency)} · {t(site.party)}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-paper">
              {t(item.label)}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-10 border-t border-paper/15 pt-6 text-xs text-paper/50">
        © {num(String(new Date().getFullYear()))} {t(site.name)}
      </Container>
    </footer>
  );
}
