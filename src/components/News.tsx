"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { featuredNews, news as fallbackNews, newsCopy } from "@/content/news";
import { images } from "@/lib/images";
import { site } from "@/content/site";
import type { LiveNewsItem } from "@/app/api/news/route";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// A Google News search page can surface unrelated top stories alongside (or
// instead of) real matches, and its UI/branding is out of our control.
// His own Facebook page is the one destination that's always on-topic.
const VIEW_ALL_URL = site.contact.facebook;
const PLACEHOLDER_IMAGES = [images.news.featured, images.news.community, images.news.infrastructure, images.news.media];

type FetchState = "loading" | "live" | "fallback";

export function News() {
  const { t, num } = useLang();
  const [state, setState] = useState<FetchState>("loading");
  const [items, setItems] = useState<LiveNewsItem[]>([]);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/news")
      .then((res) => res.json())
      .then((data: { ok: boolean; items: LiveNewsItem[] }) => {
        if (cancelled) return;
        if (data.ok && data.items.length > 0) {
          setItems(data.items);
          setState("live");
        } else {
          setState("fallback");
        }
      })
      .catch(() => {
        if (!cancelled) setState("fallback");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return num(d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }));
  };

  const liveLabel = { np: "समाचार", en: "News" } as const;

  return (
    <section id="news" className="border-b border-rule bg-cream py-16 sm:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading title={t(newsCopy.title)}>
              <p>{t(newsCopy.intro)}</p>
            </SectionHeading>
            <a
              href={VIEW_ALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-maroon"
            >
              {t(newsCopy.viewAll)} <ArrowRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="lg:col-span-8">
            {state === "loading" && <NewsSkeleton />}

            {state === "fallback" && (
              <>
                <a
                  href={featuredNews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-5 sm:grid-cols-2 sm:items-center"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                    <Image
                      src={featuredNews.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 40vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-maroon">
                      {t(featuredNews.category)}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold leading-snug transition-colors group-hover:text-maroon">
                      {t(featuredNews.title)}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal-mute">
                      {featuredNews.source} · {t(featuredNews.date)}
                    </p>
                  </div>
                </a>

                <ul className="mt-10 divide-y divide-rule border-t border-rule">
                  {fallbackNews.map((n) => (
                    <li key={n.id}>
                      <a href={n.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 py-5">
                        <div className="relative size-20 shrink-0 overflow-hidden rounded-lg">
                          <Image src={n.image} alt="" fill sizes="80px" className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-widest text-maroon">{t(n.category)}</p>
                          <h4 className="mt-1 truncate font-display text-base font-semibold transition-colors group-hover:text-maroon">
                            {t(n.title)}
                          </h4>
                          <p className="mt-1 text-sm text-charcoal-mute">
                            {n.source} · {t(n.date)}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {state === "live" && (
              <>
                <a
                  href={items[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-5 sm:grid-cols-2 sm:items-center"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                    <Image
                      src={PLACEHOLDER_IMAGES[0]}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 40vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-maroon">{t(liveLabel)}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold leading-snug transition-colors group-hover:text-maroon">
                      {items[0].title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal-mute">
                      {items[0].source}
                      {items[0].pubDate && ` · ${formatDate(items[0].pubDate)}`}
                    </p>
                  </div>
                </a>

                <ul className="mt-10 divide-y divide-rule border-t border-rule">
                  {items.slice(1, 4).map((n, i) => (
                    <li key={n.link}>
                      <a href={n.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 py-5">
                        <div className="relative size-20 shrink-0 overflow-hidden rounded-lg">
                          <Image src={PLACEHOLDER_IMAGES[(i + 1) % PLACEHOLDER_IMAGES.length]} alt="" fill sizes="80px" className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-widest text-maroon">{t(liveLabel)}</p>
                          <h4 className="mt-1 line-clamp-2 font-display text-base font-semibold transition-colors group-hover:text-maroon">
                            {n.title}
                          </h4>
                          <p className="mt-1 text-sm text-charcoal-mute">
                            {n.source}
                            {n.pubDate && ` · ${formatDate(n.pubDate)}`}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function NewsSkeleton() {
  return (
    <div aria-hidden className="animate-pulse">
      <div className="grid gap-5 sm:grid-cols-2 sm:items-center">
        <div className="aspect-4/3 w-full rounded-xl bg-rule/60" />
        <div className="space-y-3">
          <div className="h-3 w-16 rounded bg-rule/60" />
          <div className="h-6 w-full rounded bg-rule/60" />
          <div className="h-6 w-2/3 rounded bg-rule/60" />
          <div className="h-3 w-24 rounded bg-rule/60" />
        </div>
      </div>
      <ul className="mt-10 divide-y divide-rule border-t border-rule">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex items-center gap-5 py-5">
            <div className="size-20 shrink-0 rounded-lg bg-rule/60" />
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-3 w-14 rounded bg-rule/60" />
              <div className="h-4 w-4/5 rounded bg-rule/60" />
              <div className="h-3 w-20 rounded bg-rule/60" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
