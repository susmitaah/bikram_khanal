"use client";

import { stats, statsCopy } from "@/content/stats";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  const { t } = useLang();

  return (
    <section className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading title={t(statsCopy.title)}>
              <p>{t(statsCopy.intro)}</p>
            </SectionHeading>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 divide-x divide-y divide-rule overflow-hidden rounded-xl border border-rule sm:grid-cols-4 sm:divide-y-0">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.label.en} delay={i * 80}>
                    <div className="flex h-full flex-col gap-3 p-6">
                      <Icon aria-hidden size={22} className="text-gold" />
                      <p className="font-display text-3xl font-semibold tabular-nums tracking-tight text-navy">
                        {t(s.value)}
                      </p>
                      <p className="text-sm leading-snug text-charcoal-soft">{t(s.label)}</p>
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
