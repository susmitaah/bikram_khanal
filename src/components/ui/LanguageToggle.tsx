"use client";

import { cn } from "@/lib/cn";
import { useLang, type Lang } from "@/i18n/useLang";

const options: Array<{ value: Lang; label: string }> = [
  { value: "np", label: "नेपाली" },
  { value: "en", label: "EN" },
];

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div role="group" aria-label="Language / भाषा" className={cn("inline-flex rounded-sm border border-ink/30 p-0.5 text-sm", className)}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={cn(
            "rounded-[2px] px-2.5 py-1 transition-colors",
            lang === o.value ? "bg-ink text-paper" : "text-ink-soft hover:text-ink",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
