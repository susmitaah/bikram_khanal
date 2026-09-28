"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useLang, type L } from "@/i18n/useLang";

type SectionHeadingProps = {
  /** Section number shown in the margin, e.g. "02". */
  index: string;
  eyebrow: L;
  title: L;
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({ index, eyebrow, title, children, className }: SectionHeadingProps) {
  const { t, num } = useLang();

  return (
    <header className={cn("mb-12 max-w-3xl", className)}>
      <p className="mb-4 flex items-center gap-3 text-sm font-medium tracking-wide text-crimson">
        <span className="tabular-nums">§ {num(index)}</span>
        <span aria-hidden className="h-px w-10 bg-crimson/50" />
        <span className="uppercase">{t(eyebrow)}</span>
      </p>
      <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">{t(title)}</h2>
      {children && <div className="mt-5 text-lg leading-relaxed text-ink-soft">{children}</div>}
    </header>
  );
}
