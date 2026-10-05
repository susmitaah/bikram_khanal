"use client";

import Image from "next/image";
import { nav, site, socials } from "@/content/site";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { FacebookIcon } from "@/components/ui/SocialIcons";

const socialIcons = { facebook: FacebookIcon };

export function Footer() {
  const { t, num, lang } = useLang();

  return (
    <footer className="border-t-2 border-gold/50 bg-navy pt-16 text-cream/75">
      <Container className="flex flex-col gap-8 pb-12 md:flex-row md:items-center md:justify-between">
        <div>
          <span aria-hidden className="bell-swing-host mb-5 grid size-14 place-items-center rounded-xl bg-paper ring-1 ring-gold/40">
            <Image src="/images/rsp-bell.png" alt="" width={160} height={150} className="bell-swing h-auto w-10 mix-blend-multiply" />
          </span>
          <a href="#home" className="inline-block font-display text-2xl font-semibold text-cream transition-opacity hover:opacity-80">
            {t(site.honorific)} {t(site.name)}
            {lang === "en" && <span className="font-devanagari ml-2 text-gold/80">बिक्रम खनाल</span>}
          </a>
          <p className="mt-1.5 max-w-sm text-sm">{t(site.designation)}</p>

          <div className="mt-6 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm md:justify-end">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-underline transition-colors hover:text-cream">
              {t(item.label)}
            </a>
          ))}
        </nav>
      </Container>

      <div className="border-t border-rule-on-navy py-6">
        <Container className="flex flex-col items-center gap-4 text-xs text-cream/50 sm:flex-row sm:justify-between">
          <p>
            © {num(String(new Date().getFullYear()))} {t(site.name)}. {t({ np: "सर्वाधिकार सुरक्षित।", en: "All rights reserved." })}
          </p>
        </Container>
      </div>
    </footer>
  );
}
