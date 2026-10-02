"use client";

import { useLang, type Lang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";

const options: Array<{ value: Lang; label: string }> = [
  { value: "np", label: "नेपाली" },
  { value: "en", label: "EN" },
];

/** A compact sliding switch — one clean capsule, a maroon indicator that
 * glides to whichever language is active, rather than two separate
 * buttons or plain inline text. */
export function LanguageToggle({ dark, className }: { dark?: boolean; className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language / भाषा"
      className={cn(
        "relative inline-flex rounded-full border p-1",
        dark ? "border-cream/25 bg-cream/5" : "border-navy/15 bg-navy/[0.03]",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-1 left-1 w-18 rounded-full bg-maroon shadow-sm transition-transform duration-300 ease-out",
          lang === "en" && "translate-x-18",
        )}
      />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={cn(
            "relative z-10 w-18 rounded-full py-1.5 text-sm font-medium transition-colors",
            o.value === "np" && "font-devanagari",
            lang === o.value
              ? "text-cream"
              : dark
                ? "text-cream/60 hover:text-cream/80"
                : "text-charcoal-soft hover:text-navy",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
