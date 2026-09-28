import type { Metadata } from "next";
import { Mukta, Newsreader, Noto_Serif_Devanagari } from "next/font/google";
import { HtmlLang } from "@/i18n/HtmlLang";
import "./globals.css";

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const serifDeva = Noto_Serif_Devanagari({
  variable: "--font-serif-deva",
  subsets: ["devanagari"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "बिक्रम खनाल | Bikram Khanal — Nawalparasi-1",
  description:
    "Hon. Bikram Khanal, Member of the House of Representatives for Nawalparasi-1. Digital governance, agricultural revolution and absolute transparency.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ne" className={`${mukta.variable} ${newsreader.variable} ${serifDeva.variable}`}>
      <body className="min-h-dvh">
        <HtmlLang />
        {children}
      </body>
    </html>
  );
}
