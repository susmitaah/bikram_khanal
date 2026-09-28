import type { L } from "@/i18n/useLang";

export const hero = {
  badge: { np: "सधैं जनताको साथ", en: "Always with the People" } satisfies L,
  headline: [
    { np: "भरोसायोग्य अनुभव,", en: "Experience You Trust," },
    { np: "उत्साहजनक परिवर्तन।", en: "Change You Voted For." },
  ] satisfies L[],
  subheadline: {
    np: "डिजिटल सुशासन, कृषि क्रान्ति र पूर्ण पारदर्शिताको संकल्पका साथ नवलपरासी क्षेत्र नं. १ को प्रतिनिधित्व।",
    en: "Representing Nawalparasi-1 with a vision for digital governance, agricultural revolution, and absolute transparency.",
  } satisfies L,
  commitments: [
    { np: "डिजिटल सुशासन", en: "Digital governance" },
    { np: "कृषि क्रान्ति", en: "Agricultural revolution" },
    { np: "पूर्ण पारदर्शिता", en: "Absolute transparency" },
  ] satisfies L[],
  ctaProjects: { np: "योजनाहरू हेर्नुहोस्", en: "See the projects" } satisfies L,
  ctaContact: { np: "सम्पर्क गर्नुहोस्", en: "Get in touch" } satisfies L,
  stamp: { np: "निर्वाचित · २०८२", en: "Elected · 2082 BS" } satisfies L,
};

export const victory = {
  votes: 45241,
  votesLabel: { np: "मतदाताको विश्वास", en: "citizens who voted for change" } satisfies L,
  note: {
    np: "परिवर्तनको पक्षमा मतदान गर्नुहुने नवलपरासी-१ का ४५,२४१ आदरणीय मतदाताहरूमा हार्दिक कृतज्ञता व्यक्त गर्दछु।",
    en: "Thank you to the 45,241 citizens of Nawalparasi-1 for choosing the path of transformation.",
  } satisfies L,
  signoff: { np: "— बिक्रम खनाल", en: "— Bikram Khanal" } satisfies L,
};

/** A plain string value gets Devanagari digits automatically; use L when the wording differs. */
export const stats: Array<{ value: string | L; label: L }> = [
  { value: "35,000+", label: { np: "मतान्तरले विजय", en: "vote winning margin" } },
  { value: "40+", label: { np: "वर्ष सार्वजनिक जीवनमा", en: "years in public life" } },
  { value: "2070", label: { np: "दोस्रो संविधान सभा सदस्य", en: "Second Constituent Assembly" } },
  { value: { np: "७औँ", en: "7th" }, label: { np: "प्रतिनिधि सभा", en: "House of Representatives" } },
];

export const about = {
  eyebrow: { np: "परिचय", en: "About" } satisfies L,
  title: { np: "माननीय बिक्रम खनाल", en: "Hon. Bikram Khanal" } satisfies L,
  intro: {
    np: "माननीय बिक्रम खनाल विगत ४० वर्षदेखि नेपालको लोकतान्त्रिक आन्दोलन र सार्वजनिक सेवामा समर्पित एक अनुभवी नेता हुनुहुन्छ।",
    en: "Hon. Bikram Khanal is a transformative political leader who has stood at the forefront of Nepal’s democratic evolution for over 40 years.",
  } satisfies L,

  /** Quick facts sourced from the official election profile / public record. */
  facts: [
    { label: { np: "जन्म", en: "Born" }, value: { np: "२०२७ सालतिर (उमेर ५५)", en: "c. 2027 BS (age 55)" } },
    {
      label: { np: "ठेगाना", en: "Address" },
      value: { np: "भुटहा, बर्दघाट नगरपालिका, नवलपरासी (बर्दघाट सुस्ता पश्चिम)", en: "Bhutaha, Bardaghat Municipality, Nawalparasi (Bardaghat Susta West)" },
    },
    { label: { np: "बुबाको नाम", en: "Father's name" }, value: { np: "गोकर्ण खनाल", en: "Gokarna Khanal" } },
    { label: { np: "शिक्षा", en: "Education" }, value: { np: "स्नातक", en: "Graduate degree" } },
    { label: { np: "दल", en: "Party" }, value: { np: "राष्ट्रिय स्वतन्त्र पार्टी", en: "Rastriya Swatantra Party" } },
    { label: { np: "निर्वाचन क्षेत्र", en: "Constituency" }, value: { np: "नवलपरासी १ (बर्दघाट सुस्ता पश्चिम)", en: "Nawalparasi‑1 (Bardaghat Susta West)" } },
  ] satisfies Array<{ label: L; value: L }>,

  milestones: [
    {
      year: "2070",
      title: { np: "दोस्रो संविधान सभा", en: "Second Constituent Assembly" },
      body: {
        np: "२०७० सालको दोस्रो संविधान सभा सदस्यका रूपमा उहाँले नेपालको ऐतिहासिक संविधान निर्माणमा सक्रिय र महत्त्वपूर्ण भूमिका निर्वाह गर्नुभयो।",
        en: "Elected to the Second Constituent Assembly in 2070 BS, he was instrumental in drafting Nepal’s current Constitution.",
      },
    },
    {
      year: "2082",
      title: { np: "नेपाली कांग्रेसबाट अलग", en: "Parted ways with Nepali Congress" },
      body: {
        np: "जुन २०२५ (२०८२) मा नेपाली कांग्रेसको केन्द्रीय अनुशासन समितिको निर्णयपछि, लुम्बिनी प्रदेश महासचिव रहेका खनाल पार्टीबाट अलग भए।",
        en: "In June 2025, following a decision by the Nepali Congress Central Disciplinary Committee, Khanal — then the party's Lumbini Province general secretary — parted ways with the party.",
      },
    },
    {
      year: "2082",
      title: { np: "रास्वपामा आबद्ध", en: "Joined the RSP" },
      body: {
        np: "सुशासन र पद्धति परिवर्तनको मुख्य एजेन्डाका साथ २०८२ मा राष्ट्रिय स्वतन्त्र पार्टी (रास्वपा) मा आबद्ध हुनुभयो।",
        en: "He joined the Rastriya Swatantra Party (RSP) later in 2082, seeking a platform that puts merit ahead of patronage.",
      },
    },
    {
      year: "2082",
      title: { np: "प्रतिनिधि सभामा निर्वाचित", en: "Elected to the House" },
      body: {
        np: "५ मार्च २०२६ (२०८२) को निर्वाचनमा ४५,२४१ मत ल्याई नजिकको प्रतिस्पर्धीलाई ३५ हजारभन्दा बढी मतान्तरले हराउँदै उहाँ नवलपरासी-१ बाट विजयी भए।",
        en: "In the 5 March 2026 (2082 BS) election he won 45,241 votes, defeating the nearest rival by more than 35,000 votes to take Nawalparasi‑1.",
      },
    },
    {
      year: "2026",
      title: { np: "पदभार ग्रहण", en: "Assumed office" },
      body: {
        np: "२६ मार्च २०२६ मा उहाँले ७औँ प्रतिनिधि सभाको सदस्यका रूपमा पदभार ग्रहण गर्नुभयो।",
        en: "On 26 March 2026 he took office as a member of the 7th House of Representatives.",
      },
    },
  ] satisfies Array<{ year: string; title: L; body: L }>,
};
