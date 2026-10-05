"use client";

import Image from "next/image";
import { priorities, prioritiesCopy } from "@/content/priorities";
import { images } from "@/lib/images";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Priorities() {
  const { t, lang } = useLang();

  return (
    <section id="priorities" className="relative overflow-hidden bg-navy py-20 text-cream sm:py-28">
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
          {priorities.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title.en} delay={i * 90} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-xl border border-cream/15 bg-cream/9 p-6 text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-cream/14">
                  {/* gold bar that grows across the top on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tabular-nums text-gold">{p.index}</span>
                    <span className="grid size-11 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/40 transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      <Icon aria-hidden size={20} strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                    {/* in English mode, a small Devanagari accent gives a taste of the Nepali term;
                        in Nepali mode the title itself already is that word, so skip the repeat */}
                    {lang === "en" && (
                      <span className="font-devanagari mb-1 block text-base font-medium text-gold/90">{p.title.np}</span>
                    )}
                    {t(p.title)}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/70">{t(p.description)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
