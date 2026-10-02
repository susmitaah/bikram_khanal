import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Mukta, Noto_Serif_Devanagari } from "next/font/google";
import { HtmlLang } from "@/i18n/HtmlLang";
import "./globals.css";

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

/** Deliberate aesthetic Devanagari display face for script-specific accents
 * (priority labels, his name) — not just invisible fallback duty. Everything
 * Latin on the site runs on Geist; Geist has no Devanagari glyphs at all. */
const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-devanagari-serif",
  subsets: ["devanagari"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "बिक्रम खनाल | Bikram Khanal — नवलपरासी-१",
  description:
    "माननीय बिक्रम खनाल, प्रतिनिधि सभा सदस्य, नवलपरासी-१। जनसेवाको यात्रा — प्राथमिकता, काम र सम्पर्कका तरिका।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ne"
      className={`${GeistSans.variable} ${mukta.variable} ${notoSerifDevanagari.variable}`}
      suppressHydrationWarning
    >
      {/* HtmlLang overwrites `lang` on mount from a client-only (localStorage)
          language preference, which legitimately differs from the server's
          default render for returning visitors — same class of warning
          next-themes' dark-mode flash runs into. suppressHydrationWarning
          tells React this specific, expected mismatch is fine; it does not
          hide other hydration bugs, which still throw normally. */}
      <body className="min-h-dvh bg-cream text-charcoal" suppressHydrationWarning>
        <HtmlLang />
        {children}
      </body>
    </html>
  );
}
