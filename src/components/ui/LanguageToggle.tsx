"use client";

import { useLang, type Lang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";

const options: Array<{ value: Lang; label: string }> = [
  { value: "np", label: "नेपाली" },
  { value: "en", label: "EN" },
];

/**
 * A typographic switch, not a boxed pill toggle — the active language is
 * just set in maroon and semibold, like any other accented text on this
 * site, rather than a generic rounded-segmented-control UI widget.
 */
export function LanguageToggle({ dark, className }: { dark?: boolean; className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div role="group" aria-label="Language / भाषा" className={cn("inline-flex items-center gap-2.5 text-sm", className)}>
      {options.map((o, i) => (
        <span key={o.value} className="flex items-center gap-2.5">
          {i > 0 && <span aria-hidden className={cn("h-3 w-px", dark ? "bg-cream/25" : "bg-navy/20")} />}
          <button
            type="button"
            onClick={() => setLang(o.value)}
            aria-pressed={lang === o.value}
            className={cn(
              "transition-colors",
              o.value === "np" && "font-devanagari",
              lang === o.value
                ? "font-semibold text-maroon"
                : dark
                  ? "text-cream/55 hover:text-cream"
                  : "text-charcoal-mute hover:text-navy",
            )}
          >
            {o.label}
          </button>
        </span>
      ))}
    </div>
  );
}
