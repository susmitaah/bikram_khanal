"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { bioTimeline } from "@/content/timeline";
import { aboutCopy } from "@/content/about";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl shadow-card">
              <Image
                src={images.about.image}
                alt={t(aboutCopy.imageAlt)}
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading title={t(aboutCopy.title)}>
              <p>{t(aboutCopy.intro)}</p>
            </SectionHeading>
            <ButtonLink href="#journey" variant="outline" className="mt-8">
              {t(aboutCopy.readStory)}{" "}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </ButtonLink>

            <ol className="relative mt-14">
              <span aria-hidden className="absolute bottom-2 left-1.25 top-2 w-px bg-rule" />
              {bioTimeline.map((item, i) => (
                <li key={item.title.en} className="relative pb-10 pl-9 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 size-2.75 rounded-full border-2 border-maroon bg-cream"
                  />
                  <Reveal delay={i * 70}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-maroon">{t(item.year)}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{t(item.title)}</h3>
                    <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-charcoal-soft">
                      {t(item.body)}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
