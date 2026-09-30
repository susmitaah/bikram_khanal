import { images } from "@/lib/images";

/** SAMPLE CONTENT — placeholder news items, not specific real events. Replace before launch. */
export const featuredNews = {
  category: "Parliament",
  title: "Update on Constituency Development Priorities",
  date: "2026",
  image: images.news.featured,
};

export const news: Array<{ id: string; category: string; title: string; date: string; image: string }> = [
  {
    id: "infrastructure-plan",
    category: "Infrastructure",
    title: "Road Upgrade Proposal for Bardaghat Susta West",
    date: "2026",
    image: images.news.infrastructure,
  },
  {
    id: "community",
    category: "Community",
    title: "Community Engagement in Nawalparasi-1",
    date: "2026",
    image: images.news.community,
  },
  {
    id: "media",
    category: "Media",
    title: "Interview Coverage — Local Media",
    date: "2026",
    image: images.news.media,
  },
];
