import type { L } from "@/i18n/useLang";

export const journeyCopy = {
  title: { np: "मेरो राजनीतिक यात्रा", en: "My Political Journey" } satisfies L,
};

/** Horizontal "Political Journey" — verified milestones only. */
export const journey: Array<{ year: L; title: L; description: L }> = [
  {
    year: { np: "२०७० साल", en: "2070 BS" },
    title: { np: "संविधान सभा", en: "Constituent Assembly" },
    description: {
      np: "नेपालको दोस्रो संविधान सभामा निर्वाचित।",
      en: "Elected to Nepal's Second Constituent Assembly.",
    },
  },
  {
    year: { np: "२०७० को दशक", en: "2070s BS" },
    title: { np: "नेपाली कांग्रेस, लुम्बिनी", en: "Nepali Congress, Lumbini" },
    description: {
      np: "पार्टीको लुम्बिनी प्रदेश महासचिवको जिम्मेवारी सम्हाल्नुभयो।",
      en: "Served as the party's Lumbini Province general secretary.",
    },
  },
  {
    year: { np: "२०८२ साल", en: "2082 BS" },
    title: { np: "रास्वपामा प्रवेश", en: "Joined RSP" },
    description: {
      np: "राष्ट्रिय स्वतन्त्र पार्टीमा आबद्ध हुनुभयो।",
      en: "Joined the Rastriya Swatantra Party.",
    },
  },
  {
    year: { np: "२०८२ साल / २०२६", en: "2082 BS / 2026" },
    title: { np: "निर्वाचित - नवलपरासी-१", en: "Elected - Nawalparasi-1" },
    description: {
      np: "४५,२४१ मतका साथ प्रतिनिधि सभा सिट जित्नुभयो; २०२६ मार्च २६ मा पदभार सम्हाल्नुभयो।",
      en: "Won the House of Representatives seat with 45,241 votes; took office 26 March 2026.",
    },
  },
];
