"use client";

import { hero } from "@/content/home";
import { site } from "@/content/site";
import { useLang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Portrait } from "@/components/ui/Portrait";
import { ArrowRight, Bell } from "@/components/ui/Icons";

export function Hero() {
  const { t, lang, num } = useLang();

  return (
    <section id="home" className="border-b border-rule">
      <Container className="grid items-center gap-14 pb-16 pt-12 md:grid-cols-12 md:pt-20 lg:pb-24">
        <div className="md:col-span-7">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-rule bg-paper px-4 py-1.5 text-sm font-medium text-crimson">
            <Bell className="size-4" />
            {t(hero.badge)}
          </span>

          <p className="mb-6 text-sm text-ink-mute">
            {t(site.honorific)} {t(site.name)} &nbsp;/&nbsp; {t(site.party)}
          </p>

          <h1
            className={cn(
              "font-display font-medium text-[clamp(2.5rem,6.2vw,4.9rem)] tracking-tight",
              lang === "en" ? "leading-[1.04]" : "leading-[1.3]",
            )}
          >
            <span className="block">{t(hero.headline[0])}</span>
            <span className="text-crimson">{t(hero.headline[1])}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">{t(hero.subheadline)}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              {t(hero.ctaProjects)} <ArrowRight />
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              {t(hero.ctaContact)}
            </ButtonLink>
          </div>

          <ol className="mt-12 grid gap-px border-y border-rule sm:grid-cols-3">
            {hero.commitments.map((c, i) => (
              <li key={c.en} className="flex items-baseline gap-3 py-4 sm:pr-4">
                <span className="text-sm tabular-nums text-crimson">{num(`0${i + 1}`)}</span>
                <span className="text-[15px] font-medium">{t(c)}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
          <Portrait src={site.portrait} alt={`${t(site.honorific)} ${t(site.name)}`} initials="BK" />
          <div className="mt-6 flex flex-col items-center gap-1.5 text-center">
            <span className="rounded-full bg-crimson px-5 py-1.5 text-sm font-medium text-paper">{t(site.name)}</span>
            <span className="text-xs text-ink-mute">{t(hero.stamp)}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
