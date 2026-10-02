"use client";

import { journey, journeyCopy } from "@/content/journey";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Journey() {
  const { t } = useLang();

  return (
    <section id="journey" className="border-b border-rule bg-cream-deep py-20 sm:py-28">
      <Container>
        <SectionHeading title={t(journeyCopy.title)} align="center" />

        {/* desktop: horizontal */}
        <ol className="relative mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="absolute left-0 right-0 top-2.25 h-px bg-rule" />
          {journey.map((step) => (
            <li key={step.title.en} className="relative pt-8 text-center">
              <span
                aria-hidden
                className="absolute left-1/2 top-0 size-4.5 -translate-x-1/2 rounded-full border-4 border-maroon bg-cream-deep"
              />
              <p className="text-sm font-semibold uppercase tracking-wide text-maroon">{t(step.year)}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{t(step.title)}</h3>
              <p className="mx-auto mt-2 max-w-[22ch] text-sm leading-relaxed text-charcoal-soft">
                {t(step.description)}
              </p>
            </li>
          ))}
        </ol>

        {/* mobile: vertical */}
        <ol className="relative mt-14 lg:hidden">
          <span aria-hidden className="absolute bottom-2 left-1.25 top-2 w-px bg-rule" />
          {journey.map((step) => (
            <li key={step.title.en} className="relative pb-10 pl-9 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-1.5 size-2.75 rounded-full border-2 border-maroon bg-cream-deep"
              />
              <p className="text-sm font-semibold uppercase tracking-wide text-maroon">{t(step.year)}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{t(step.title)}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{t(step.description)}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
