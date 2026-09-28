"use client";

import { about } from "@/content/home";
import { useLang } from "@/i18n/useLang";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { t, num } = useLang();

  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <SectionHeading index="01" eyebrow={about.eyebrow} title={about.title} className="mb-6" />
            <p className="text-xl leading-relaxed text-ink-soft">{t(about.intro)}</p>

            <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 border-t border-rule pt-6 text-sm">
              {about.facts.map((f) => (
                <FactRow key={f.label.en} label={t(f.label)} value={t(f.value)} />
              ))}
            </dl>
          </div>
        </div>

        <ol className="relative md:col-span-7 md:pt-2">
          {/* the timeline rule */}
          <span aria-hidden className="absolute bottom-2 left-[5px] top-3 w-px bg-rule" />
          {about.milestones.map((m) => (
            <li key={m.title.en} className="relative pb-12 pl-10 last:pb-0">
              <span aria-hidden className="absolute left-0 top-2.5 size-[11px] rounded-full border-2 border-crimson bg-paper" />
              <p className="text-sm font-medium tabular-nums text-crimson">{num(m.year)}</p>
              <h3 className="mt-1 font-display text-2xl">{t(m.title)}</h3>
              <p className="mt-3 max-w-prose text-[17px] leading-relaxed text-ink-soft">{t(m.body)}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-ink-mute">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </>
  );
}
