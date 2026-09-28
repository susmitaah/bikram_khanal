"use client";

import { stats, victory } from "@/content/home";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";

export function Victory() {
  const { t, num } = useLang();

  return (
    <section aria-label={t(victory.votesLabel)} className="bg-ink text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-[clamp(3.5rem,9vw,6.5rem)] leading-none tabular-nums">{num(victory.votes)}</p>
          <p className="mt-3 text-paper/70">{t(victory.votesLabel)}</p>
        </div>

        <figure className="md:col-span-7 md:border-l md:border-paper/20 md:pl-12">
          <blockquote className="font-display text-2xl italic leading-relaxed text-paper/95 sm:text-[1.7rem]">
            “{t(victory.note)}”
          </blockquote>
          <figcaption className="mt-4 text-base font-medium text-paper/70">{t(victory.signoff)}</figcaption>
        </figure>
      </Container>

      <Container>
        <dl className="grid grid-cols-2 border-t border-paper/15 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label.en} className={i > 0 ? "border-paper/15 py-7 md:border-l md:pl-6" : "py-7"}>
              <dt className="sr-only">{t(s.label)}</dt>
              <dd className="font-display text-3xl tabular-nums sm:text-4xl">
                {typeof s.value === "string" ? num(s.value) : t(s.value)}
              </dd>
              <dd className="mt-1 text-sm text-paper/60">{t(s.label)}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
