"use client";

import { useEffect, useRef, useState } from "react";
import { journey, journeyCopy } from "@/content/journey";
import { useLang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const COUNT = journey.length;

/**
 * Scroll-linked timeline: the maroon line fills in step with how far the
 * timeline has scrolled up the screen, and each milestone lights up as the
 * line reaches it. Scrolling back up un-draws it, so it is always in sync
 * with the reader rather than playing on a timer.
 */
export function Journey() {
  const { t } = useLang();
  const desktopRef = useRef<HTMLOListElement>(null);
  const mobileRef = useRef<HTMLOListElement>(null);
  const desktopLine = useRef<HTMLSpanElement>(null);
  const mobileLine = useRef<HTMLSpanElement>(null);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const list = desktop ? desktopRef.current : mobileRef.current;
      if (!list) return;

      const rect = list.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the timeline's top is 80% down the screen, 1 once it has travelled through it
      const raw = (vh * 0.8 - rect.top) / (rect.height * 0.85 + vh * 0.1);
      const p = Math.min(1, Math.max(0, raw));

      if (desktopLine.current) desktopLine.current.style.transform = `scaleX(${p})`;
      if (mobileLine.current) mobileLine.current.style.transform = `scaleY(${p})`;

      // a milestone is "reached" once the line passes the middle of its column / the top of its row
      const n = desktop
        ? journey.filter((_, i) => p >= (i + 0.5) / COUNT - 0.02).length
        : journey.filter((_, i) => p >= i / COUNT + 0.03).length;
      setReached(n);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="journey" className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading title={t(journeyCopy.title)} align="center" />

        {/* desktop: horizontal */}
        <ol ref={desktopRef} className="relative mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="absolute left-0 right-0 top-2 h-0.5 bg-rule" />
          <span
            ref={desktopLine}
            aria-hidden
            className="absolute left-0 right-0 top-2 h-0.5 origin-left bg-maroon"
            style={{ transform: "scaleX(0)" }}
          />
          {journey.map((step, i) => {
            const on = i < reached;
            return (
              <li key={step.title.en} className="relative pt-8 text-center">
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-1/2 top-0.5 size-3.5 -translate-x-1/2 rounded-full border-2 transition-colors duration-500",
                    on ? "border-maroon bg-maroon" : "border-rule bg-cream",
                  )}
                />
                <div className={cn("transition-opacity duration-500", on ? "opacity-100" : "opacity-35")}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-maroon">{t(step.year)}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{t(step.title)}</h3>
                  <p className="mx-auto mt-2 max-w-[22ch] text-sm leading-relaxed text-charcoal-soft">
                    {t(step.description)}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* mobile: vertical */}
        <ol ref={mobileRef} className="relative mt-14 lg:hidden">
          <span aria-hidden className="absolute bottom-2 left-[4.5px] top-2 w-0.5 bg-rule" />
          <span
            ref={mobileLine}
            aria-hidden
            className="absolute bottom-2 left-[4.5px] top-2 w-0.5 origin-top bg-maroon"
            style={{ transform: "scaleY(0)" }}
          />
          {journey.map((step, i) => {
            const on = i < reached;
            return (
              <li key={step.title.en} className="relative pb-10 pl-9 last:pb-0">
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-1.5 size-2.75 rounded-full border-2 transition-colors duration-500",
                    on ? "border-maroon bg-maroon" : "border-rule bg-cream",
                  )}
                />
                <div className={cn("transition-opacity duration-500", on ? "opacity-100" : "opacity-35")}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-maroon">{t(step.year)}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{t(step.title)}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{t(step.description)}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
