import type { LucideIcon } from "lucide-react";
import { Landmark, Vote, CalendarDays, Gavel } from "lucide-react";
import type { L } from "@/i18n/useLang";

export const statsCopy = {
  title: { np: "जनसेवामा बितेको जीवन", en: "A life in public service" } satisfies L,
  intro: {
    np: "संविधान सभादेखि प्रतिनिधि सभासम्म, नवलपरासी-१ का जनताका लागि निरन्तर उपस्थित रहेको यात्रा।",
    en: "From the Constituent Assembly to the House of Representatives, a record built on showing up for Nawalparasi-1.",
  } satisfies L,
};

/**
 * "At a Glance" — only verified figures are used here (sourced from
 * Wikipedia / the election commission profile), not the generic
 * "20+ years / 3 terms" template numbers, since those aren't
 * confirmed facts about a real, named person.
 */
export const stats: Array<{ icon: LucideIcon; value: L; label: L }> = [
  {
    icon: Vote,
    value: { np: "४५,२४१", en: "45,241" },
    label: { np: "२०२६ चुनावमा प्राप्त मत", en: "Votes won, 2026 election" },
  },
  {
    icon: Gavel,
    value: { np: "२", en: "2" },
    label: { np: "पटक जनप्रतिनिधिमा निर्वाचित", en: "Elected mandates held" },
  },
  {
    icon: Landmark,
    value: { np: "२०७० साल", en: "2070 BS" },
    label: { np: "संविधान सभामा पहिलोपटक निर्वाचित", en: "First elected, Constituent Assembly" },
  },
  {
    icon: CalendarDays,
    value: { np: "७औँ", en: "7th" },
    label: { np: "प्रतिनिधि सभा", en: "House of Representatives" },
  },
];
