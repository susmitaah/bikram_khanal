import type { LucideIcon } from "lucide-react";
import { GraduationCap, HeartPulse, Leaf, Briefcase, Construction } from "lucide-react";

export const priorities: Array<{
  index: string;
  devanagari: string;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    index: "01",
    devanagari: "शिक्षा",
    title: "Education",
    description: "Quality education and better opportunities for every child in Nawalparasi-1.",
    icon: GraduationCap,
  },
  {
    index: "02",
    devanagari: "स्वास्थ्य",
    title: "Healthcare",
    description: "Accessible and affordable healthcare, closer to where people live.",
    icon: HeartPulse,
  },
  {
    index: "03",
    devanagari: "वातावरण",
    title: "Environment",
    description: "A cleaner, more sustainable future for the Bardaghat Susta West region.",
    icon: Leaf,
  },
  {
    index: "04",
    devanagari: "रोजगारी",
    title: "Jobs & Economy",
    description: "Employment, entrepreneurship and real economic opportunity at home.",
    icon: Briefcase,
  },
  {
    index: "05",
    devanagari: "पूर्वाधार",
    title: "Infrastructure",
    description: "Better roads, transport and digital access for every ward.",
    icon: Construction,
  },
];
