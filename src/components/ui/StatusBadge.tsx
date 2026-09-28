"use client";

import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/useLang";
import { statuses, type ProjectStatus } from "@/content/projects";

const styles: Record<ProjectStatus, string> = {
  completed: "bg-field/10 text-field ring-field/30",
  ongoing: "bg-harvest/10 text-[#8a5a12] ring-harvest/40",
  tendering: "bg-crimson/5 text-crimson ring-crimson/30",
  planned: "bg-transparent text-ink-soft ring-ink/25",
};

const dots: Record<ProjectStatus, string> = {
  completed: "bg-field",
  ongoing: "bg-harvest",
  tendering: "bg-crimson",
  planned: "border border-ink-soft",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useLang();

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm ring-1 ring-inset",
        styles[status],
      )}
    >
      <span aria-hidden className={cn("size-1.5 rounded-full", dots[status])} />
      {t(statuses[status])}
    </span>
  );
}
