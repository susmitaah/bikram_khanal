import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tone?: "onCream" | "onNavy";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "onCream",
  align = "left",
  className,
}: SectionHeadingProps) {
  const eyebrowColor = tone === "onNavy" ? "text-gold" : "text-maroon";
  const bodyColor = tone === "onNavy" ? "text-cream/75" : "text-charcoal-soft";

  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("mb-4 text-sm font-semibold uppercase tracking-[0.14em]", eyebrowColor)}>{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h2>
      {children && <div className={cn("mt-5 text-lg leading-relaxed", bodyColor)}>{children}</div>}
    </Reveal>
  );
}
