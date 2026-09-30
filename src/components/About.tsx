import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { bioTimeline } from "@/content/timeline";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-md shadow-lg">
              <Image
                src={images.about.image}
                alt="Boudhanath Stupa, Kathmandu Valley"
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading eyebrow="About Me" title="From humble beginnings to public service">
              <p>
                Raised in Bardaghat Susta West, Nawalparasi, his path to public life began in local party work
                before he was elected to Nepal&apos;s Second Constituent Assembly — and, decades on, to the House
                of Representatives for Nawalparasi-1.
              </p>
            </SectionHeading>
            <ButtonLink href="#journey" variant="outline" className="mt-8">
              Read My Full Story <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </ButtonLink>

            <ol className="relative mt-14">
              <span aria-hidden className="absolute bottom-2 left-1.25 top-2 w-px bg-rule" />
              {bioTimeline.map((item, i) => (
                <li key={item.title} className="relative pb-10 pl-9 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 size-2.75 rounded-full border-2 border-maroon bg-cream"
                  />
                  <Reveal delay={i * 70}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-maroon">{item.year}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-charcoal-soft">{item.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
