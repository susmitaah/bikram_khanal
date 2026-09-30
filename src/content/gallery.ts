import { images } from "@/lib/images";

export type GalleryItem = { src: string; tall: boolean; category: string; caption: string };

/** Captions are generic/placeholder — pair with real captions once real photos replace these. */
const captions: Record<number, string> = {
  0: "Community meeting",
  1: "Public address",
  2: "Patan Durbar Square",
  3: "Pashupatinath area",
  4: "Ward-level discussion",
  5: "Kathmandu Valley",
  6: "Local project visit",
  7: "Annapurna range",
};

export const gallery: GalleryItem[] = images.gallery.map((g, i) => ({
  ...g,
  caption: captions[i] ?? g.category,
}));
