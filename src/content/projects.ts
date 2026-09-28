import type { L } from "@/i18n/useLang";

export type ProjectStatus = "completed" | "ongoing" | "tendering" | "planned";
export type ProjectCategory = "road" | "irrigation" | "agriculture" | "education" | "health" | "digital";

export type Project = {
  id: string;
  name: L;
  location?: L;
  category: ProjectCategory;
  status: ProjectStatus;
  budgetSource: L;
  /** Allocated budget in NPR. */
  amount?: number;
  contractor: { name: L; contact?: string } | null;
  /** Last updated, BS date string e.g. "2083-05-12". */
  updated: string;
  /** Demo rows — the portal shows a notice while any of these remain. */
  sample?: boolean;
};

export const categories: Record<ProjectCategory, L> = {
  road: { np: "सडक", en: "Roads" },
  irrigation: { np: "सिँचाइ", en: "Irrigation" },
  agriculture: { np: "कृषि", en: "Agriculture" },
  education: { np: "शिक्षा", en: "Education" },
  health: { np: "स्वास्थ्य", en: "Health" },
  digital: { np: "डिजिटल", en: "Digital" },
};

export const statuses: Record<ProjectStatus, L> = {
  completed: { np: "सम्पन्न", en: "Completed" },
  ongoing: { np: "निर्माणाधीन", en: "In progress" },
  tendering: { np: "बोलपत्र प्रक्रियामा", en: "Tendering" },
  planned: { np: "प्रस्तावित", en: "Planned" },
};

export const portalCopy = {
  eyebrow: { np: "योजनाको विवरण", en: "Project details" } satisfies L,
  title: {
    np: "निर्वाचन क्षेत्र विकास तथा पारदर्शिता पोर्टल",
    en: "Constituency Development & Transparency Portal",
  } satisfies L,
  intro: {
    np: "तपाईंको क्षेत्रको बजेट कहाँ र कसरी खर्च हुँदैछ, यहाँ हेर्नुहोस्।",
    en: "Check how your local budget is being utilized.",
  } satisfies L,
  motto: {
    np: "बोल्ने मात्र होइन, काम गरेर देखाउने।",
    en: "Work Shown, Not Just Work Promised.",
  } satisfies L,
  mottoLead: { np: "हाम्रो विश्वास", en: "What we believe" } satisfies L,
  columns: {
    name: { np: "योजनाको नाम", en: "Project Name" },
    category: { np: "विधा", en: "Category" },
    status: { np: "अवस्था", en: "Status" },
    source: { np: "बजेट स्रोत", en: "Budget Source" },
    contractor: { np: "निर्माण कम्पनीको विवरण", en: "Contractor Detail" },
  } satisfies Record<string, L>,
  search: { np: "योजना वा स्थान खोज्नुहोस्…", en: "Search a project or place…" } satisfies L,
  all: { np: "सबै", en: "All" } satisfies L,
  total: { np: "जम्मा योजना", en: "Projects listed" } satisfies L,
  budget: { np: "जम्मा विनियोजित बजेट", en: "Total allocated" } satisfies L,
  empty: { np: "यो खोजमा कुनै योजना भेटिएन।", en: "No project matches this search." } satisfies L,
  noContractor: { np: "छनोट हुन बाँकी", en: "Not yet selected" } satisfies L,
  updated: { np: "अद्यावधिक", en: "Updated" } satisfies L,
  sampleNotice: {
    np: "नमूना विवरण — आधिकारिक तथ्यांक आउनेबित्तिकै यहाँ अद्यावधिक गरिनेछ।",
    en: "Sample entries — these will be replaced with official records.",
  } satisfies L,
  lakh: { np: "लाख", en: "lakh" } satisfies L,
  rs: { np: "रु.", en: "Rs." } satisfies L,
};

/**
 * TODO: replace with the official project list. Every row below is a
 * placeholder (sample: true) so the table can be designed and reviewed.
 */
export const projects: Project[] = [
  {
    id: "p-001",
    name: { np: "वडा ३ मूल सिँचाइ कुलो मर्मत", en: "Ward 3 main irrigation canal repair" },
    location: { np: "वडा नं. ३", en: "Ward 3" },
    category: "irrigation",
    status: "ongoing",
    budgetSource: { np: "प्रदेश सरकार", en: "Provincial Government" },
    amount: 4500000,
    contractor: { name: { np: "नमूना निर्माण सेवा प्रा.लि.", en: "Sample Construction Pvt. Ltd." }, contact: "Reg. no. 0000" },
    updated: "2083-05-12",
    sample: true,
  },
  {
    id: "p-002",
    name: { np: "कृषि उपज संकलन केन्द्र", en: "Farm produce collection centre" },
    location: { np: "वडा नं. ५", en: "Ward 5" },
    category: "agriculture",
    status: "tendering",
    budgetSource: { np: "संघीय सरकार", en: "Federal Government" },
    amount: 8000000,
    contractor: null,
    updated: "2083-05-02",
    sample: true,
  },
  {
    id: "p-003",
    name: { np: "ग्रामीण सडक कालोपत्रे (२.४ कि.मि.)", en: "Rural road blacktopping (2.4 km)" },
    location: { np: "वडा नं. १–२", en: "Wards 1–2" },
    category: "road",
    status: "completed",
    budgetSource: { np: "स्थानीय तह", en: "Municipality" },
    amount: 12500000,
    contractor: { name: { np: "नमूना कन्स्ट्रक्सन", en: "Sample Builders" }, contact: "Reg. no. 0000" },
    updated: "2083-04-20",
    sample: true,
  },
  {
    id: "p-004",
    name: { np: "सामुदायिक विद्यालय कम्प्युटर कक्षा", en: "Community school computer lab" },
    location: { np: "वडा नं. ४", en: "Ward 4" },
    category: "education",
    status: "ongoing",
    budgetSource: { np: "संघीय सरकार", en: "Federal Government" },
    amount: 2200000,
    contractor: { name: { np: "नमूना टेक सप्लायर्स", en: "Sample Tech Suppliers" } },
    updated: "2083-05-08",
    sample: true,
  },
  {
    id: "p-005",
    name: { np: "स्वास्थ्य चौकी भवन विस्तार", en: "Health post building extension" },
    location: { np: "वडा नं. ७", en: "Ward 7" },
    category: "health",
    status: "planned",
    budgetSource: { np: "प्रदेश सरकार", en: "Provincial Government" },
    amount: 6000000,
    contractor: null,
    updated: "2083-04-28",
    sample: true,
  },
  {
    id: "p-006",
    name: { np: "वडा कार्यालय अनलाइन सेवा प्रणाली", en: "Online services for ward offices" },
    location: { np: "सबै वडा", en: "All wards" },
    category: "digital",
    status: "planned",
    budgetSource: { np: "स्थानीय तह", en: "Municipality" },
    amount: 1500000,
    contractor: null,
    updated: "2083-05-10",
    sample: true,
  },
];
