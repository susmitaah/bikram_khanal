import { statuses, type ProjectStatus } from "@/content/projects";
import { useLang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";

const styles: Record<ProjectStatus, string> = {
  completed: "bg-field/10 text-field ring-field/30",
  ongoing: "bg-gold/10 text-gold ring-gold/40",
  tendering: "bg-maroon/5 text-maroon ring-maroon/30",
  planned: "bg-transparent text-charcoal-soft ring-charcoal-mute/40",
};

const dots: Record<ProjectStatus, string> = {
  completed: "bg-field",
  ongoing: "bg-gold",
  tendering: "bg-maroon",
  planned: "border border-charcoal-soft",
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
