import type { L } from "@/i18n/useLang";

export type GalleryItem = {
  id: string;
  /** Path under /public, e.g. "/gallery/field-visit.jpg". Leave empty to show a placeholder tile. */
  src?: string;
  caption: L;
  /** Taller tiles break up the grid rhythm. */
  tall?: boolean;
};

export const galleryCopy = {
  eyebrow: { np: "तस्बिर संग्रह", en: "Gallery" } satisfies L,
  title: { np: "क्षेत्रमा, जनतासँगै", en: "On the ground, with people" } satisfies L,
  placeholder: { np: "तस्बिर चाँडै", en: "Photo coming soon" } satisfies L,
  close: { np: "बन्द गर्नुहोस्", en: "Close" } satisfies L,
};

// TODO: drop photos into /public/gallery and fill in `src`.
export const gallery: GalleryItem[] = [
  { id: "g1", caption: { np: "क्षेत्र भ्रमण", en: "Field visit" }, tall: true },
  { id: "g2", caption: { np: "किसानसँग छलफल", en: "Talking with farmers" } },
  { id: "g3", caption: { np: "प्रतिनिधि सभामा", en: "In the House" } },
  { id: "g4", caption: { np: "वडा भेला", en: "Ward meeting" } },
  { id: "g5", caption: { np: "आयोजना निरीक्षण", en: "Project inspection" }, tall: true },
  { id: "g6", caption: { np: "युवासँग संवाद", en: "With young people" } },
];
