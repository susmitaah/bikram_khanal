"use client";

import Image from "next/image";
import { priorities, prioritiesCopy } from "@/content/priorities";
import { images } from "@/lib/images";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Priorities() {
  const { t, lang } = useLang();

  return (
    <section id="priorities" className="relative overflow-hidden bg-navy py-24 text-cream sm:py-32">
      <Image
        src={images.priorities.mountainSilhouette}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-[0.08]"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-navy via-navy/95 to-navy" />

      <Container className="relative">
        <SectionHeading tone="onNavy" title={t(prioritiesCopy.title)}>
          <p>{t(prioritiesCopy.intro)}</p>
        </SectionHeading>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {priorities.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title.en}
                className="group h-full rounded-xl border border-rule-on-navy bg-cream/3 p-6 transition-colors hover:border-gold/50 hover:bg-cream/6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tabular-nums text-gold">{p.index}</span>
                  <Icon
                    aria-hidden
                    size={20}
                    strokeWidth={1.5}
                    className="text-gold transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {/* in English mode, a small Devanagari accent gives a taste of the Nepali term;
                      in Nepali mode the title itself already is that word, so skip the repeat */}
                  {lang === "en" && <span className="font-devanagari mr-1.5 text-cream/60">{p.title.np}</span>}
                  {t(p.title)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream/70">{t(p.description)}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
