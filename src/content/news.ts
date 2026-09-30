import type { L } from "@/i18n/useLang";
import { images } from "@/lib/images";

export const newsCopy = {
  title: { np: "समाचार र अद्यावधिक", en: "News & Updates" } satisfies L,
  intro: {
    np: "विज्ञप्ति, सामुदायिक कभरेज र सञ्चारमाध्यमका उल्लेख — एकै ठाउँमा।",
    en: "Statements, community coverage and press mentions, gathered in one place.",
  } satisfies L,
  viewAll: { np: "सबै समाचार हेर्नुहोस्", en: "View All News" } satisfies L,
};

/** SAMPLE CONTENT — placeholder news items, not specific real events. Replace before launch. */
export const featuredNews = {
  category: { np: "संसद", en: "Parliament" } satisfies L,
  title: {
    np: "निर्वाचन क्षेत्र विकास प्राथमिकताबारे अद्यावधिक",
    en: "Update on Constituency Development Priorities",
  } satisfies L,
  date: { np: "२०२६", en: "2026" } satisfies L,
  image: images.news.featured,
};

export const news: Array<{ id: string; category: L; title: L; date: L; image: string }> = [
  {
    id: "infrastructure-plan",
    category: { np: "पूर्वाधार", en: "Infrastructure" },
    title: {
      np: "बर्दघाट सुस्ता पश्चिमका लागि सडक स्तरोन्नति प्रस्ताव",
      en: "Road Upgrade Proposal for Bardaghat Susta West",
    },
    date: { np: "२०२६", en: "2026" },
    image: images.news.infrastructure,
  },
  {
    id: "community",
    category: { np: "समुदाय", en: "Community" },
    title: { np: "नवलपरासी-१ मा सामुदायिक सहभागिता", en: "Community Engagement in Nawalparasi-1" },
    date: { np: "२०२६", en: "2026" },
    image: images.news.community,
  },
  {
    id: "media",
    category: { np: "मिडिया", en: "Media" },
    title: { np: "स्थानीय सञ्चारमाध्यमसँग अन्तर्वार्ता", en: "Interview Coverage — Local Media" },
    date: { np: "२०२६", en: "2026" },
    image: images.news.media,
  },
];
