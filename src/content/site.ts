import type { L } from "@/i18n/useLang";

/**
 * Site-wide facts and contact details.
 * TODO: replace the placeholder contact values before going live.
 */
export const site = {
  name: { np: "बिक्रम खनाल", en: "Bikram Khanal" } satisfies L,
  honorific: { np: "माननीय", en: "Hon." } satisfies L,
  role: { np: "सदस्य, प्रतिनिधि सभा", en: "Member, House of Representatives" } satisfies L,
  constituency: { np: "नवलपरासी क्षेत्र नं. १", en: "Nawalparasi-1" } satisfies L,
  party: { np: "राष्ट्रिय स्वतन्त्र पार्टी", en: "Rastriya Swatantra Party" } satisfies L,

  portrait: "/images/bikram-khanal.jpg" as string | null,

  contact: {
    facebook: { label: "facebook.com/BikramkhanalCAmember", href: "https://www.facebook.com/BikramkhanalCAmember/" },
    email: { label: "bikkhanal@gmail.com", href: "mailto:bikkhanal@gmail.com" },
    phone: { label: "+977-9857080310", href: "tel:+9779857080310" },
  },
};

export const nav: Array<{ id: string; label: L }> = [
  { id: "home", label: { np: "गृहपृष्ठ", en: "Home" } },
  { id: "about", label: { np: "परिचय", en: "About" } },
  { id: "projects", label: { np: "योजना", en: "Projects" } },
  { id: "gallery", label: { np: "तस्बिर", en: "Gallery" } },
  { id: "contact", label: { np: "सम्पर्क", en: "Contact" } },
];
