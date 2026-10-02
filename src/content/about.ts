import type { L } from "@/i18n/useLang";

export const aboutCopy = {
  title: {
    np: "सामान्य सुरुवातदेखि जनसेवासम्म",
    en: "From humble beginnings to public service",
  } satisfies L,
  intro: {
    np: "माननीय बिक्रम खनाल विगत ४० वर्षदेखि नेपालको लोकतान्त्रिक आन्दोलन र सार्वजनिक सेवामा समर्पित एक अनुभवी नेता हुनुहुन्छ।",
    en: "Hon. Bikram Khanal is a transformative political leader who has stood at the forefront of Nepal's democratic evolution for over 40 years.",
  } satisfies L,
  readStory: { np: "मेरो पूरा कथा पढ्नुहोस्", en: "Read My Full Story" } satisfies L,
  imageAlt: {
    np: "बौद्धनाथ स्तूप, काठमाडौं उपत्यका",
    en: "Boudhanath Stupa, Kathmandu Valley",
  } satisfies L,

  /**
   * Early Life / Education / Entry into Politics, as short labeled prose —
   * the structure follows how leader-biography pages are commonly organized
   * (introduction, then early life, education, entry into politics, then a
   * dated timeline of later milestones). Every fact here is one already
   * verified elsewhere on this site (Wikipedia / eKantipur) — nothing new.
   */
  sections: {
    earlyLife: {
      label: { np: "प्रारम्भिक जीवन", en: "Early Life" } satisfies L,
      body: {
        np: "गोकर्ण खनालका छोराको रूपमा करिब २०२७ सालतिर, हालको बर्दघाट नगरपालिका, नवलपरासी (बर्दघाट सुस्ता पश्चिम) मा जन्मनुभयो।",
        en: "Born to Gokarna Khanal around 2027 BS, in what is now Bardaghat Municipality, Nawalparasi (Bardaghat Susta West).",
      } satisfies L,
    },
    education: {
      label: { np: "शिक्षा", en: "Education" } satisfies L,
      body: { np: "स्नातक तहको शिक्षा पूरा गर्नुभयो।", en: "Completed a graduate degree." } satisfies L,
    },
    entryIntoPolitics: {
      label: { np: "राजनीतिमा प्रवेश", en: "Entry into Politics" } satisfies L,
      body: {
        np: "२०७० सालअघि नेपाली कांग्रेसको लुम्बिनी प्रदेश महासचिवको रूपमा सार्वजनिक जीवन सुरु गर्नुभयो।",
        en: "Entered public life before 2070 BS, serving as Nepali Congress's Lumbini Province general secretary.",
      } satisfies L,
    },
  },
};
