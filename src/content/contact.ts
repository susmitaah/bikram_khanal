import type { L } from "@/i18n/useLang";
import { site } from "@/content/site";

export const offices: Array<{
  name: L;
  address: L;
  phone?: string;
  email?: string;
  hours?: L;
}> = [
  {
    name: { np: "निर्वाचन क्षेत्र कार्यालय", en: "Constituency Office" },
    address: {
      np: "बर्दघाट नगरपालिका, नवलपरासी (बर्दघाट सुस्ता पश्चिम)",
      en: "Bardaghat Municipality, Nawalparasi (Bardaghat Susta West)",
    },
    phone: site.contact.phone,
    email: site.contact.email,
  },
  {
    name: { np: "संसदीय कार्यालय", en: "Parliamentary Office" },
    address: {
      np: "संघीय संसद सचिवालय, सिंहदरबार, काठमाडौं",
      en: "Federal Parliament Secretariat, Singha Durbar, Kathmandu",
    },
    email: site.contact.email,
  },
];

export const contactCopy = {
  title: { np: "मिलेर काम गरौँ", en: "Let's work together" } satisfies L,
  intro: {
    np: "कुनै प्रश्न, सुझाव वा गुनासो छ? सुन्न पाउँदा खुसी लाग्नेछ।",
    en: "Have a question, suggestion or concern? I'd love to hear from you.",
  } satisfies L,
  form: {
    name: { np: "पूरा नाम", en: "Full Name" } satisfies L,
    email: { np: "इमेल ठेगाना", en: "Email Address" } satisfies L,
    subject: { np: "विषय", en: "Subject" } satisfies L,
    message: { np: "सन्देश", en: "Message" } satisfies L,
    submit: { np: "सन्देश पठाउनुहोस्", en: "Send Message" } satisfies L,
    sending: { np: "पठाउँदै...", en: "Sending…" } satisfies L,
    success: {
      np: "धन्यवाद — तपाईंको सन्देश पठाइयो।",
      en: "Thank you — your message has been sent.",
    } satisfies L,
    error: {
      np: "केही समस्या भयो। फेरि प्रयास गर्नुहोस् वा सिधै सम्पर्क गर्नुहोस्।",
      en: "Something went wrong. Please try again, or reach out directly.",
    } satisfies L,
    errors: {
      invalid_name: {
        np: "कृपया आफ्नो पूरा नाम लेख्नुहोस् (कम्तीमा २ अक्षर)।",
        en: "Please enter your full name (at least 2 characters).",
      },
      invalid_email: {
        np: "कृपया मान्य इमेल ठेगाना दिनुहोस्।",
        en: "Please enter a valid email address.",
      },
      invalid_message: {
        np: "सन्देश धेरै छोटो छ — कम्तीमा १० अक्षर लेख्नुहोस्।",
        en: "Message is too short — please write at least 10 characters.",
      },
      message_too_long: { np: "सन्देश धेरै लामो छ।", en: "Message is too long." },
      rate_limited: {
        np: "धेरै पटक प्रयास गर्नुभयो। केही समयपछि फेरि प्रयास गर्नुहोस्।",
        en: "Too many attempts — please wait a moment and try again.",
      },
    } as Record<string, L>,
  },
};
