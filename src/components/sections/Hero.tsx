"use client";

import Image from "next/image";
import { hero } from "@/content/home";
import { site } from "@/content/site";
import { useLang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Portrait } from "@/components/ui/Portrait";
import { ArrowRight } from "@/components/ui/Icons";

export function Hero() {
  const { t, lang, num } = useLang();

  return (
    <section id="home" className="border-b border-rule">
      <Container className="grid items-center gap-14 pb-16 pt-12 md:grid-cols-12 md:pt-20 lg:pb-24">
        <div className="md:col-span-8">
          <span className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-rule bg-paper py-1.5 pl-2 pr-4 text-sm font-medium text-crimson transition-colors hover:bg-paper-deep">
            <Image src="/images/rsp-bell.png" alt="" width={22} height={22} className="size-5.5" />
            {t(hero.badge)}
          </span>

          <p className="animate-fade-up mb-6 text-sm text-ink-mute [animation-delay:80ms]">
            {t(site.honorific)} {t(site.name)} &nbsp;/&nbsp; {t(site.party)}
          </p>

          <h1
            className={cn(
              "animate-fade-up font-display font-semibold text-[clamp(2.25rem,4.6vw,3.75rem)] tracking-tight [animation-delay:140ms]",
              lang === "en" ? "leading-[1.08]" : "leading-[1.32]",
            )}
          >
            <span className="block">{t(hero.headline[0])}</span>
            <span className="text-crimson">{t(hero.headline[1])}</span>
          </h1>

          <p className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl [animation-delay:200ms]">
            {t(hero.subheadline)}
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap gap-3 [animation-delay:260ms]">
            <ButtonLink href="#projects">
              {t(hero.ctaProjects)} <ArrowRight />
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              {t(hero.ctaContact)}
            </ButtonLink>
          </div>

          <ol className="animate-fade-up mt-12 grid gap-px border-y border-rule sm:grid-cols-3 [animation-delay:320ms]">
            {hero.commitments.map((c, i) => (
              <li
                key={c.en}
                className="flex items-baseline gap-3 py-4 transition-colors hover:bg-paper-deep/50 sm:pr-4"
              >
                <span className="text-sm tabular-nums text-crimson">{num(`0${i + 1}`)}</span>
                <span className="text-[15px] font-medium">{t(c)}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-sm [animation-delay:180ms] md:col-span-4 md:max-w-none">
          <Portrait src={site.portrait} alt={`${t(site.honorific)} ${t(site.name)}`} initials="BK" />
          <span className="absolute -bottom-5 left-4 inline-flex items-center gap-2 border border-rule bg-paper px-4 py-2 text-sm font-medium shadow-sm transition-shadow hover:shadow-md sm:left-8">
            <span aria-hidden className="size-1.5 rounded-full bg-crimson" />
            {t(hero.stamp)}
          </span>
        </div>
      </Container>
    </section>
  );
}
