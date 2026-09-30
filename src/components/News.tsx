import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredNews, news } from "@/content/news";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function News() {
  return (
    <section id="news" className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-maroon">Latest News</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight">News &amp; Updates</h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal-soft">
              Statements, community coverage and press mentions, gathered in one place.
            </p>
            <a href="#news" className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
              View All News <ArrowRight size={15} />
            </a>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <a href="#news" className="group grid gap-5 sm:grid-cols-2 sm:items-center">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-md">
                  <Image
                    src={featuredNews.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 40vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-maroon">
                    {featuredNews.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-snug transition-colors group-hover:text-maroon">
                    {featuredNews.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal-mute">{featuredNews.date}</p>
                </div>
              </a>
            </Reveal>

            <ul className="mt-10 divide-y divide-rule border-t border-rule">
              {news.map((n, i) => (
                <li key={n.id}>
                  <Reveal delay={i * 60}>
                    <a href="#news" className="group flex items-center gap-5 py-5">
                      <div className="relative size-20 shrink-0 overflow-hidden rounded-md">
                        <Image src={n.image} alt="" fill sizes="80px" className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-maroon">{n.category}</p>
                        <h4 className="mt-1 truncate font-display text-base font-semibold transition-colors group-hover:text-maroon">
                          {n.title}
                        </h4>
                        <p className="mt-1 text-sm text-charcoal-mute">{n.date}</p>
                      </div>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
