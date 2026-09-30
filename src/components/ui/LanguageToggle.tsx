"use client";

import { useLang, type Lang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";

const options: Array<{ value: Lang; label: string }> = [
  { value: "np", label: "नेपाली" },
  { value: "en", label: "EN" },
];

export function LanguageToggle({ dark, className }: { dark?: boolean; className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language / भाषा"
      className={cn(
        "inline-flex rounded-full border p-0.5 text-sm",
        dark ? "border-cream/30" : "border-navy/20",
        className,
      )}
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={cn(
            "rounded-full px-3 py-1 transition-colors",
            lang === o.value
              ? "bg-maroon text-cream"
              : dark
                ? "text-cream/70 hover:text-cream"
                : "text-charcoal-soft hover:text-navy",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
