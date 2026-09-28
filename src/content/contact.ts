import type { L } from "@/i18n/useLang";

export const contactCopy = {
  eyebrow: { np: "सम्पर्क", en: "Contact & Connect" } satisfies L,
  title: { np: "कुरा गरौँ", en: "Let’s talk" } satisfies L,
  intro: {
    np: "गुनासो, सुझाव वा आफ्नो वडाको कुरा — सिधै लेख्नुहोस् वा फोन गर्नुहोस्।",
    en: "A complaint, an idea, something about your ward — write or call directly.",
  } satisfies L,
  channels: {
    facebook: { np: "फेसबुक", en: "Facebook" },
    email: { np: "इमेल", en: "Email" },
    phone: { np: "फोन", en: "Phone" },
  } satisfies Record<string, L>,

  formTitle: { np: "सन्देश पठाउनुहोस्", en: "Send a message" } satisfies L,
  formIntro: {
    np: "यो फारम सिधै माननीय सदस्यको दर्ता गरिएको इमेलमा पुग्छ।",
    en: "This form goes straight to the honorable member’s registered email.",
  } satisfies L,

  form: {
    name: { np: "पूरा नाम", en: "Full name" } satisfies L,
    email: { np: "इमेल ठेगाना", en: "Email address" } satisfies L,
    phone: { np: "फोन नम्बर", en: "Phone number" } satisfies L,
    subject: { np: "विषय", en: "Subject" } satisfies L,
    optional: { np: "ऐच्छिक", en: "optional" } satisfies L,
    message: { np: "सन्देश", en: "Message" } satisfies L,
    submit: { np: "सन्देश पठाउनुहोस्", en: "Send message" } satisfies L,
    sending: { np: "पठाउँदै...", en: "Sending…" } satisfies L,
    success: {
      np: "धन्यवाद! तपाईंको सन्देश पठाइयो।",
      en: "Thank you — your message has been sent.",
    } satisfies L,
    error: {
      np: "पठाउन सकिएन। कृपया फेरि प्रयास गर्नुहोस् वा सिधै सम्पर्क गर्नुहोस्।",
      en: "Something went wrong. Please try again, or reach out directly.",
    } satisfies L,
  },
};
