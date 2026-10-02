/**
 * Centralized image data for the whole site.
 *
 * TEMPORARY PLACEHOLDERS — replace with real, rights-cleared photography
 * before launch. Everything here is either:
 *   (a) a verified-working Wikimedia Commons file (public domain / CC —
 *       thematically real Nepal imagery), or
 *   (b) a Picsum seeded placeholder (guaranteed to load, not topical —
 *       used only where a verified Nepal-specific Commons file wasn't
 *       confirmed working during this build).
 *
 * `bikram.portrait` is the one real, non-placeholder asset — his actual
 * photo, already in /public/images.
 */

const commons = (file: string, width = 1600) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const picsum = (seed: string, w = 1600, h = 1067) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  /** Real photos of him — not placeholders. `portrait` is the one he/his
   * team supplied directly; `profile` is his own public Facebook page
   * photo (downloaded and self-hosted rather than hotlinked, since
   * Facebook's CDN URLs are signed and expire). */
  bikram: {
    portrait: "/images/bikram-khanal.jpg",
    profile: "/images/bikram-khanal-profile.jpg",
  },

  hero: {
    background: commons("Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg", 2400),
  },

  about: {
    image: commons("Boudhanath_Stupa.jpg", 1600),
  },

  priorities: {
    mountainSilhouette: commons("Annapurna_range.jpg", 2000),
    education: picsum("priority-education", 1200, 1200),
    healthcare: picsum("priority-healthcare", 1200, 1200),
    environment: commons("Annapurna_range.jpg", 1200),
    jobs: picsum("priority-jobs", 1200, 1200),
    infrastructure: picsum("priority-infrastructure", 1200, 1200),
  },

  work: {
    education: picsum("work-education", 1200, 900),
    healthcare: picsum("work-healthcare", 1200, 900),
    infrastructure: picsum("work-infrastructure", 1200, 900),
  },

  news: {
    featured: commons("Public_speaking.jpg", 1600),
    infrastructure: picsum("news-infrastructure", 900, 700),
    community: commons("Community_meeting.jpg", 900),
    media: "/images/bikram-khanal-profile.jpg",
  },

  journey: {
    backdrop: commons("Kathmandu_valley.jpg", 2000),
  },

  contact: {
    office: commons("Singha_Durbar.jpg", 1600),
  },

  gallery: [
    { src: commons("Community_meeting.jpg", 1200), tall: true, category: "Community" },
    { src: commons("Public_speaking.jpg", 1200), tall: false, category: "Public Events" },
    { src: commons("Patan_Durbar_Square-2644.jpg", 1200), tall: false, category: "Nepal" },
    { src: commons("Pashupatinath_Temple.jpg", 1200), tall: true, category: "Nepal" },
    { src: "/images/bikram-khanal-profile.jpg", tall: false, category: "Profile" },
    { src: commons("Kathmandu_valley.jpg", 1200), tall: false, category: "Nepal" },
    { src: picsum("gallery-project", 1200, 1500), tall: true, category: "Projects" },
    { src: commons("Annapurna_range.jpg", 1200), tall: false, category: "Nepal" },
  ],
};
