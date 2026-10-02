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

/**
 * Real press coverage, linked to the original source. Headlines below are
 * our own neutral paraphrase of each outlet's reporting (translated for the
 * np field) — not a verbatim quote of either article.
 */
export const featuredNews = {
  category: { np: "प्रोफाइल", en: "Profile" } satisfies L,
  title: {
    np: "बिक्रम खनालको राजनीतिक यात्रा",
    en: "Bikram Khanal's Political Journey",
  } satisfies L,
  date: { np: "मार्च २०२६", en: "March 2026" } satisfies L,
  source: "eKantipur",
  url: "https://ekantipur.com/lumbini-pradesh/2026/03/08/en/bikram-khanals-political-journey-from-nevisangh-district-president-to-rashtriya-swayamsevak-sangh-to-parliament-43-41.html",
  image: images.news.featured,
};

export const news: Array<{ id: string; category: L; title: L; date: L; source: string; url: string; image: string }> = [
  {
    id: "elected",
    category: { np: "निर्वाचन", en: "Election" },
    title: {
      np: "राष्ट्रिय स्वतन्त्र पार्टीका खनाल नवलपरासी पश्चिमबाट निर्वाचित",
      en: "RSP's Khanal Elected from Nawalparasi West",
    },
    date: { np: "२०२६", en: "2026" },
    source: "Republica",
    url: "https://myrepublica.nagariknetwork.com/news/rsp-candidate-khanal-elected-from-nawalparasi-west-27-50.html",
    image: images.news.community,
  },
  {
    id: "candidacy",
    category: { np: "निर्वाचन", en: "Election" },
    title: {
      np: "खनाल नवलपरासी-१ बाट रास्वपा उम्मेदवार घोषित",
      en: "Khanal Named RSP Candidate for Nawalparasi-1",
    },
    date: { np: "जनवरी २०२६", en: "January 2026" },
    source: "eKantipur",
    url: "https://ekantipur.com/politics/2026/01/19/en/congress-lumbini-province-general-secretary-khanal-is-the-rashtriya-swayamsevak-sangh-rss-candidate-from-west-nawalparasi-1-56-07.html",
    image: images.news.infrastructure,
  },
];
