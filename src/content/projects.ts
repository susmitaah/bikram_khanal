import type { L } from "@/i18n/useLang";

export type ProjectCategory = "infrastructure" | "education" | "health" | "agriculture";
export type ProjectStatus = "completed" | "ongoing" | "tendering" | "planned";

export const portalCopy = {
  title: {
    np: "विकास तथा पारदर्शिता पोर्टल",
    en: "Development & Transparency Portal",
  } satisfies L,
  motto: {
    np: "बोल्ने मात्र होइन, काम गरेर देखाउने।",
    en: "Work Shown, Not Just Work Promised.",
  } satisfies L,
  search: { np: "आयोजना वा स्थान खोज्नुहोस्...", en: "Search projects or location..." } satisfies L,
  all: { np: "सबै", en: "All" } satisfies L,
  total: { np: "जम्मा आयोजना", en: "Total projects" } satisfies L,
  budget: { np: "जम्मा बजेट", en: "Total budget" } satisfies L,
  empty: { np: "कुनै आयोजना फेला परेन।", en: "No projects match your search." } satisfies L,
  updated: { np: "अद्यावधिक:", en: "Updated" } satisfies L,
  noContractor: { np: "तोकिएको छैन", en: "Not yet assigned" } satisfies L,
  rsLabel: { np: "रु.", en: "Rs." } satisfies L,
  lakh: { np: "लाख", en: "lakh" } satisfies L,
  columns: {
    name: { np: "योजनाको नाम", en: "Project Name" } satisfies L,
    category: { np: "विधा", en: "Category" } satisfies L,
    status: { np: "अवस्था", en: "Status" } satisfies L,
    source: { np: "बजेट स्रोत", en: "Budget Source" } satisfies L,
    contractor: { np: "निर्माण कम्पनीको विवरण", en: "Contractor Detail" } satisfies L,
  },
};

export const categories: Record<ProjectCategory, L> = {
  infrastructure: { np: "पूर्वाधार", en: "Infrastructure" },
  education: { np: "शिक्षा", en: "Education" },
  health: { np: "स्वास्थ्य", en: "Health" },
  agriculture: { np: "कृषि", en: "Agriculture" },
};

export const statuses: Record<ProjectStatus, L> = {
  completed: { np: "सम्पन्न", en: "Completed" },
  ongoing: { np: "निर्माणाधीन", en: "Ongoing" },
  tendering: { np: "टेण्डर प्रक्रियामा", en: "Tendering" },
  planned: { np: "योजनाबद्ध", en: "Planned" },
};

export type Project = {
  id: string;
  name: L;
  category: ProjectCategory;
  status: ProjectStatus;
  location?: L;
  budgetSource: L;
  /** Amount in NPR; omitted where not yet finalized. */
  amount?: number;
  contractor?: { name: L; contact?: string };
  updated: string;
  /** Marks placeholder/illustrative data — see portalCopy.sampleNotice. */
  sample: true;
};

/**
 * SAMPLE DATA — every entry here is illustrative, not a verified public
 * record (budget figures, contractor assignment). The on-page disclaimer
 * that used to say so was removed at the owner's request; the sample
 * flag and this comment stay as the remaining signal that these numbers
 * need replacing with real, confirmed figures before they're accurate.
 */
export const projects: Project[] = [
  {
    id: "bardaghat-road",
    name: { np: "बर्दघाट–सुस्ता सडक स्तरोन्नति", en: "Bardaghat–Susta Road Upgrade" },
    category: "infrastructure",
    status: "ongoing",
    location: { np: "बर्दघाट नगरपालिका", en: "Bardaghat Municipality" },
    budgetSource: { np: "संघीय अनुदान", en: "Federal Grant" },
    amount: 4_50_00_000,
    contractor: { name: { np: "तोकिएको छैन", en: "Not yet assigned" } },
    updated: "2026",
    sample: true,
  },
  {
    id: "ward-school",
    name: { np: "वडा माध्यमिक विद्यालय भवन निर्माण", en: "Ward Secondary School Building" },
    category: "education",
    status: "tendering",
    location: { np: "नवलपरासी-१", en: "Nawalparasi-1" },
    budgetSource: { np: "प्रदेश बजेट", en: "Provincial Budget" },
    updated: "2026",
    sample: true,
  },
  {
    id: "health-post",
    name: { np: "सामुदायिक स्वास्थ्य चौकी स्तरोन्नति", en: "Community Health Post Upgrade" },
    category: "health",
    status: "planned",
    location: { np: "बर्दघाट सुस्ता पश्चिम", en: "Bardaghat Susta West" },
    budgetSource: { np: "स्थानीय तह", en: "Local Level" },
    updated: "2026",
    sample: true,
  },
  {
    id: "irrigation",
    name: { np: "साना सिँचाइ योजना", en: "Small-Scale Irrigation Scheme" },
    category: "agriculture",
    status: "completed",
    location: { np: "नवलपरासी-१", en: "Nawalparasi-1" },
    budgetSource: { np: "संघीय अनुदान", en: "Federal Grant" },
    amount: 85_00_000,
    contractor: { name: { np: "तोकिएको छैन", en: "Not yet assigned" } },
    updated: "2026",
    sample: true,
  },
];
