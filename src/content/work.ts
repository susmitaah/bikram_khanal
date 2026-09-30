import { images } from "@/lib/images";

/**
 * SAMPLE CONTENT — structural placeholders only. Replace with real,
 * verified project details (dates, locations, outcomes) before launch.
 * No specific achievement or outcome is asserted as fact here.
 */
export const work: Array<{
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  status: string;
  location: string;
  problem: string;
  action: string;
  result: string;
}> = [
  {
    id: "school",
    title: "Community School Support",
    category: "Education",
    description: "Working with local schools in Nawalparasi-1 to improve facilities and access.",
    image: images.work.education,
    status: "In progress",
    location: "Bardaghat Municipality",
    problem: "Several ward schools lack basic classroom infrastructure.",
    action: "Coordinating with the municipality and school boards on a support plan.",
    result: "To be confirmed as the initiative progresses.",
  },
  {
    id: "clinics",
    title: "Mobile Health Outreach",
    category: "Health",
    description: "Exploring mobile clinic outreach for wards with limited healthcare access.",
    image: images.work.healthcare,
    status: "Proposed",
    location: "Nawalparasi-1 wards",
    problem: "Some wards are far from the nearest health post.",
    action: "Assessing feasibility with the provincial health office.",
    result: "To be confirmed as the initiative progresses.",
  },
  {
    id: "roads",
    title: "Local Road Upgrades",
    category: "Infrastructure",
    description: "Advocating for road and drainage improvements across the constituency.",
    image: images.work.infrastructure,
    status: "In progress",
    location: "Bardaghat Susta West",
    problem: "Seasonal flooding damages unpaved local roads.",
    action: "Raising the issue with the relevant infrastructure ministry.",
    result: "To be confirmed as the initiative progresses.",
  },
];
