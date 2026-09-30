import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { work } from "@/content/work";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Work() {
  return (
    <section id="work" className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading title="Recent Work">
            <p>
              From community projects to legislative efforts, explore the work and initiatives focused on
              creating meaningful change.
            </p>
          </SectionHeading>
          <a
            href="#work"
            className="group link-underline inline-flex items-center gap-1.5 text-sm font-semibold text-navy"
          >
            View All Work <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.id} delay={i * 80}>
              <article className="group h-full">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                  <Image
                    src={w.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-maroon">{w.category}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{w.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm text-charcoal-mute">
                  <MapPin size={14} />
                  {w.location} · {w.status}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
