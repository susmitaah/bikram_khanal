"use client";

import { stats, statsCopy } from "@/content/stats";
import { heroCopy } from "@/content/hero";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  const { t } = useLang();

  return (
    <section className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading title={t(statsCopy.title)}>
              <p>{t(statsCopy.intro)}</p>
            </SectionHeading>
            <blockquote className="mt-8 border-l-2 border-maroon py-0.5 pl-5 font-display text-lg italic leading-relaxed text-navy">
              “{t(heroCopy.victoryNote)}”
            </blockquote>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 divide-x divide-y divide-rule overflow-hidden rounded-xl border border-rule bg-paper shadow-card sm:grid-cols-4 sm:grid-rows-1 sm:divide-y-0">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.label.en} delay={i * 80} className="h-full">
                    <div className="flex h-full flex-col p-5 transition-colors duration-300 hover:bg-cream/60 sm:p-6">
                    <span className="grid size-10 place-items-center rounded-xl bg-maroon/8 ring-1 ring-maroon/15">
                      <Icon aria-hidden size={19} strokeWidth={1.75} className="text-maroon" />
                    </span>
                    <div className="mt-8">
                      <p className="whitespace-nowrap font-display text-[1.75rem] font-semibold leading-none tabular-nums tracking-tight text-navy xl:text-3xl">
                        {t(s.value)}
                      </p>
                      <p className="mt-3 text-sm leading-snug text-charcoal-soft">{t(s.label)}</p>
                    </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
