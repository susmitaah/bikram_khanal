import type { L } from "@/i18n/useLang";
import { images } from "@/lib/images";

export const galleryCopy = {
  title: { np: "यात्राका क्षणहरू", en: "Moments from the Journey" } satisfies L,
  intro: {
    np: "सार्वजनिक भेला, सामुदायिक भ्रमण, कार्यक्रम र काम पछाडिका मानिसहरूको झलक।",
    en: "A look at public meetings, community visits, events and the people behind the work.",
  } satisfies L,
  viewAll: { np: "पूरा तस्बिर संग्रह हेर्नुहोस्", en: "View Full Gallery" } satisfies L,
  close: { np: "बन्द गर्नुहोस्", en: "Close" } satisfies L,
};

export type GalleryItem = { src: string; tall: boolean; category: string; caption: L };

const captions: Record<number, L> = {
  0: { np: "सामुदायिक भेला", en: "Community meeting" },
  1: { np: "सार्वजनिक सम्बोधन", en: "Public address" },
  2: { np: "पाटन दरबार क्षेत्र", en: "Patan Durbar Square" },
  3: { np: "पशुपतिनाथ क्षेत्र", en: "Pashupatinath area" },
  4: { np: "वडास्तरीय छलफल", en: "Ward-level discussion" },
  5: { np: "काठमाडौं उपत्यका", en: "Kathmandu Valley" },
  6: { np: "स्थानीय आयोजना अवलोकन", en: "Local project visit" },
  7: { np: "अन्नपूर्ण पर्वतमाला", en: "Annapurna range" },
};

export const gallery: GalleryItem[] = images.gallery.map((g, i) => ({
  ...g,
  caption: captions[i] ?? { np: g.category, en: g.category },
}));
