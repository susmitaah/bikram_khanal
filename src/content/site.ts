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

export const nav: Array<{ href: string; label: L }> = [
  { href: "#about", label: { np: "परिचय", en: "About" } },
  { href: "#work", label: { np: "काम", en: "Work" } },
  { href: "#priorities", label: { np: "प्राथमिकता", en: "Priorities" } },
  { href: "#journey", label: { np: "यात्रा", en: "Journey" } },
  { href: "#news", label: { np: "समाचार", en: "News" } },
  { href: "#gallery", label: { np: "तस्बिर", en: "Gallery" } },
  { href: "#contact", label: { np: "सम्पर्क", en: "Contact" } },
];

export const commonCopy = {
  getInTouch: { np: "सम्पर्क गर्नुहोस्", en: "Get in Touch" } satisfies L,
};
