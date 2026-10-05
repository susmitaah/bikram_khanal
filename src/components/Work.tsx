"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { work, workCopy } from "@/content/work";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Work() {
  const { t } = useLang();

  return (
    <section id="work" className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading title={t(workCopy.title)}>
          <p>{t(workCopy.intro)}</p>
        </SectionHeading>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.id} delay={(i % 3) * 100}>
            <article className="group h-full">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                <Image
                  src={w.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-maroon">{t(w.category)}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{t(w.title)}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{t(w.description)}</p>
              <div className="mt-4 flex items-center gap-1.5 text-sm text-charcoal-mute">
                <MapPin size={14} strokeWidth={1.75} />
                {t(w.location)} · {t(w.status)}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
