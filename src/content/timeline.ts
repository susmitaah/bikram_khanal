import type { L } from "@/i18n/useLang";

/** Vertical "About" timeline — verified facts only (Wikipedia / eKantipur). */
export const bioTimeline: Array<{ year: L; title: L; body: L }> = [
  {
    year: { np: "करिब २०२७ साल", en: "c. 2027 BS" },
    title: { np: "नवलपरासीमा जन्म", en: "Born in Nawalparasi" },
    body: {
      np: "गोकर्ण खनालका छोराको रूपमा, हालको बर्दघाट नगरपालिका, नवलपरासी (बर्दघाट सुस्ता पश्चिम) मा जन्मनुभयो।",
      en: "Born to Gokarna Khanal, in what is now Bardaghat Municipality, Nawalparasi (Bardaghat Susta West).",
    },
  },
  {
    year: { np: "—", en: "—" },
    title: { np: "शिक्षा", en: "Education" },
    body: { np: "स्नातक तहको शिक्षा पूरा गर्नुभयो।", en: "Completed a graduate degree." },
  },
  {
    year: { np: "२०७० सालअघि", en: "Before 2070 BS" },
    title: { np: "सार्वजनिक जीवनमा प्रवेश", en: "Entered public life" },
    body: {
      np: "नेपाली कांग्रेसको लुम्बिनी प्रदेश महासचिवको रूपमा काम गर्नुभयो।",
      en: "Served as Nepali Congress's Lumbini Province general secretary.",
    },
  },
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
