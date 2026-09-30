import type { LucideIcon } from "lucide-react";
import { Landmark, Vote, CalendarDays, Gavel } from "lucide-react";

/**
 * "At a Glance" — only verified figures are used here (sourced from
 * Wikipedia / the election commission profile), not the generic
 * "20+ years / 3 terms" template numbers, since those aren't
 * confirmed facts about a real, named person.
 */
export const stats: Array<{ icon: LucideIcon; value: string; label: string }> = [
  { icon: Vote, value: "45,241", label: "Votes won, 2026 election" },
  { icon: Gavel, value: "2", label: "Elected mandates held" },
  { icon: Landmark, value: "2070 BS", label: "First elected — Constituent Assembly" },
  { icon: CalendarDays, value: "7th", label: "House of Representatives" },
];
