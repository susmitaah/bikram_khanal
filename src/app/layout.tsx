import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Mukta, Noto_Serif_Devanagari, Playfair_Display } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

/** Deliberate aesthetic Devanagari display face — paired with Playfair Display,
 * not just invisible fallback duty. Used for the priority labels and his name. */
const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-devanagari-serif",
  subsets: ["devanagari"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bikram Khanal | Member, House of Representatives — Nawalparasi-1",
  description:
    "Hon. Bikram Khanal, Member of the House of Representatives for Nawalparasi-1, Nepal. A public-service portfolio: priorities, work, journey and ways to connect.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${mukta.variable} ${playfair.variable} ${notoSerifDevanagari.variable}`}
    >
      <body className="min-h-dvh bg-cream text-charcoal">{children}</body>
    </html>
  );
}
