import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // hide the dev-only route indicator badge (bottom-left "N" bubble)
  devIndicators: false,
  images: {
    // temporary placeholder image hosts — see src/lib/images.ts
    remotePatterns: [
      { protocol: "https", hostname: "commons.wikimedia.org", pathname: "/wiki/Special:FilePath/**" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
