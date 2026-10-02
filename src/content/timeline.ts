import type { L } from "@/i18n/useLang";

/**
 * Vertical "About" milestone timeline — verified facts only (Wikipedia /
 * eKantipur). Early Life / Education / Entry into Politics are covered as
 * prose in content/about.ts; this picks up the dated political milestones
 * from there, same as a biography page's own "political timeline" section.
 */
export const bioTimeline: Array<{ year: L; title: L; body: L }> = [
  {
    year: { np: "२०७० साल", en: "2070 BS" },
    title: { np: "दोस्रो संविधान सभा", en: "Second Constituent Assembly" },
    body: {
      np: "नेपालको दोस्रो संविधान सभामा निर्वाचित हुनुभई, वर्तमान संविधान निर्माणमा सघाउनुभयो।",
      en: "Elected to Nepal's Second Constituent Assembly, helping draft the current constitution.",
    },
  },
  {
    year: { np: "२०८२ साल / २०२६", en: "2082 BS / 2026" },
    title: { np: "प्रतिनिधि सभामा निर्वाचित", en: "Elected to the House of Representatives" },
    body: {
      np: "राष्ट्रिय स्वतन्त्र पार्टीमा आबद्ध हुनुभई ४५,२४१ मतका साथ नवलपरासी-१ जित्नुभयो, र २०२६ मार्च २६ मा पदभार सम्हाल्नुभयो।",
      en: "Joined the Rastriya Swatantra Party, won Nawalparasi-1 with 45,241 votes, and took office on 26 March 2026.",
    },
  },
];
