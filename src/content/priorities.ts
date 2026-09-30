import type { LucideIcon } from "lucide-react";
import { GraduationCap, HeartPulse, Leaf, Briefcase, Construction } from "lucide-react";
import type { L } from "@/i18n/useLang";

export const prioritiesCopy = {
  title: { np: "मलाई के महत्त्वपूर्ण लाग्छ", en: "What matters to me" } satisfies L,
  intro: {
    np: "नवलपरासी-१ का लागि अगाडि बढाउने पाँच प्रतिबद्धता।",
    en: "Five commitments guiding the work ahead for Nawalparasi-1.",
  } satisfies L,
};

export const priorities: Array<{
  index: string;
  title: L;
  description: L;
  icon: LucideIcon;
}> = [
  {
    index: "01",
    title: { np: "शिक्षा", en: "Education" },
    description: {
      np: "नवलपरासी-१ का हरेक बालबालिकाका लागि गुणस्तरीय शिक्षा र राम्रो अवसर।",
      en: "Quality education and better opportunities for every child in Nawalparasi-1.",
    },
    icon: GraduationCap,
  },
  {
    index: "02",
    title: { np: "स्वास्थ्य", en: "Healthcare" },
    description: {
      np: "जनताको बसोबास नजिकै पुगोस् सुलभ र भरपर्दो स्वास्थ्य सेवा।",
      en: "Accessible and affordable healthcare, closer to where people live.",
    },
    icon: HeartPulse,
  },
  {
    index: "03",
    title: { np: "वातावरण", en: "Environment" },
    description: {
      np: "बर्दघाट सुस्ता पश्चिम क्षेत्रका लागि स्वच्छ र दिगो भविष्य।",
      en: "A cleaner, more sustainable future for the Bardaghat Susta West region.",
    },
    icon: Leaf,
  },
  {
    index: "04",
    title: { np: "रोजगारी", en: "Jobs & Economy" },
    description: {
      np: "रोजगारी, उद्यमशीलता र घरमै वास्तविक आर्थिक अवसर।",
      en: "Employment, entrepreneurship and real economic opportunity at home.",
    },
    icon: Briefcase,
  },
  {
    index: "05",
    title: { np: "पूर्वाधार", en: "Infrastructure" },
    description: {
      np: "हरेक वडासम्म राम्रा सडक, यातायात र डिजिटल पहुँच।",
      en: "Better roads, transport and digital access for every ward.",
    },
    icon: Construction,
  },
];
