import { NextResponse } from "next/server";

/**
 * Live press coverage via Google News' public RSS search — no API key
 * needed, genuinely dynamic (re-fetched at most once an hour via the
 * `revalidate` option below, not baked in at build time).
 *
 * If the feed is unreachable or returns nothing, the client falls back to
 * the verified, real articles hardcoded in src/content/news.ts rather than
 * showing an empty section or inventing content.
 */

export const runtime = "nodejs";

const FEED_URL =
  "https://news.google.com/rss/search?q=%22Bikram+Khanal%22+Nawalparasi&hl=en-US&gl=US&ceid=US:en";

export type LiveNewsItem = { title: string; link: string; pubDate: string; source: string };

export async function GET() {
  try {
    const res = await fetch(FEED_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; BikramKhanalSite/1.0; +https://github.com/susmitahkhanal)" },
      next: { revalidate: 3600 }, // re-check the feed at most once an hour
    });
    if (!res.ok) throw new Error(`feed responded ${res.status}`);

    const xml = await res.text();
    const items = parseItems(xml).slice(0, 6);
    return NextResponse.json({ ok: true, items });
  } catch (err) {
    console.error("[news] live feed fetch failed:", err);
    return NextResponse.json({ ok: false, items: [] }, { status: 502 });
  }
}

function parseItems(xml: string): LiveNewsItem[] {
  const items: LiveNewsItem[] = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/g;
  let m: RegExpExecArray | null;

  while ((m = itemRe.exec(xml))) {
    const block = m[1];
    const rawTitle = decode(extract(block, "title"));
    const link = decode(extract(block, "link"));
    const pubDate = extract(block, "pubDate");
    const source = decode(block.match(/<source[^>]*>([\s\S]*?)<\/source>/)?.[1] ?? "");

    // Google News appends " - <Source Name>" to the title; we show source separately.
    const title = source && rawTitle.endsWith(` - ${source}`) ? rawTitle.slice(0, -(source.length + 3)) : rawTitle;

    if (title && link) items.push({ title, link, pubDate, source });
  }

  return items;
}

function extract(block: string, tag: string) {
  return block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1]?.trim() ?? "";
}

function decode(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}
