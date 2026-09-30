"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { site } from "@/content/site";
import { heroCopy } from "@/content/hero";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative flex min-h-[94svh] items-center overflow-hidden bg-navy">
      <Image
        src={images.hero.background}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy via-navy/80 to-navy/50" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-r from-navy/40 via-transparent to-transparent" />

      <Container className="relative grid items-center gap-16 pt-28 pb-16 lg:grid-cols-12 lg:pt-20">
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="font-display text-[clamp(2.5rem,5.2vw,4.25rem)] font-semibold leading-[1.08] tracking-tight text-cream">
              {t(heroCopy.headline.line1)}
              <br />
              <span className="italic text-cream/90">{t(heroCopy.headline.line2)}</span>
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80">{t(heroCopy.subheadline)}</p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#journey">
                {t(heroCopy.ctaJourney)}{" "}
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="#work" variant="ghost-light">
                {t(heroCopy.ctaWork)}
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-4/5 w-full">
              <div
                aria-hidden
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-gold/40"
              />
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-elevated">
                <Image
                  src={images.bikram.portrait}
                  alt={`${t(site.honorific)} ${t(site.name)}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 32vw, 85vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="font-devanagari mt-5 text-center text-2xl text-gold/90">बिक्रम खनाल</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
