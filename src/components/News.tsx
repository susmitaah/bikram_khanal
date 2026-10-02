"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredNews, news, newsCopy } from "@/content/news";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const VIEW_ALL_URL = "https://news.google.com/search?q=Bikram%20Khanal%20Nawalparasi";

export function News() {
  const { t } = useLang();

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
              {news.map((n) => (
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
          </div>
        </div>
      </Container>
    </section>
  );
}
