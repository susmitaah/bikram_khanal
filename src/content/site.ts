import type { L } from "@/i18n/useLang";

export const site = {
  name: { np: "बिक्रम खनाल", en: "Bikram Khanal" } satisfies L,
  honorific: { np: "माननीय", en: "Hon." } satisfies L,
  designation: {
    np: "सदस्य, प्रतिनिधि सभा — नवलपरासी-१",
    en: "Member, House of Representatives — Nawalparasi-1",
  } satisfies L,
  party: { np: "राष्ट्रिय स्वतन्त्र पार्टी", en: "Rastriya Swatantra Party" } satisfies L,
  constituency: {
    np: "नवलपरासी-१ (बर्दघाट सुस्ता पश्चिम)",
    en: "Nawalparasi-1 (Bardaghat Susta West)",
  } satisfies L,

  contact: {
    email: "bikkhanal@gmail.com",
    phone: "+977-9857080310",
    facebook: "https://www.facebook.com/BikramkhanalCAmember/",
  },
};

/** Only real, verified accounts are listed — no placeholder social links. */
export const socials: Array<{ label: string; href: string; icon: "facebook" }> = [
  { label: "Facebook", href: site.contact.facebook, icon: "facebook" },
];

/**
 * Kept short on purpose — About, Priorities, Transparency and Contact are
 * what a visitor actually comes to a representative's site for. Work,
 * Journey, News and Gallery stay on the page (scroll, or jump via the
 * Hero/About buttons) without adding to every-screen nav clutter.
 */
export const nav: Array<{ href: string; label: L }> = [
  { href: "#about", label: { np: "परिचय", en: "About" } },
  { href: "#priorities", label: { np: "प्राथमिकता", en: "Priorities" } },
  { href: "#transparency", label: { np: "पारदर्शिता", en: "Transparency" } },
  { href: "#contact", label: { np: "सम्पर्क", en: "Contact" } },
];

export const commonCopy = {
  getInTouch: { np: "सम्पर्क गर्नुहोस्", en: "Get in Touch" } satisfies L,
};
