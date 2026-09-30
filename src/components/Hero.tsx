import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[94svh] items-center overflow-hidden bg-navy">
      <Image
        src={images.hero.background}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy via-navy/80 to-navy/50" />
      <div aria-hidden className="absolute inset-0 bg-linear-to-r from-navy/40 via-transparent to-transparent" />

      <Container className="relative grid items-center gap-16 pt-28 pb-16 lg:grid-cols-12 lg:pt-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold">
              Public Servant • Leader • Advocate
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(2.5rem,5.2vw,4.25rem)] font-semibold leading-[1.08] tracking-tight text-cream">
              A Stronger Community,
              <br />
              <span className="italic text-cream/90">A Brighter Future</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80">
              I&apos;m {site.name}, committed to serving people, strengthening communities, and creating
              meaningful opportunities for everyone in {site.constituency}.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#journey">
                My Journey <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="#work" variant="ghost-light">
                View My Work
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm">
            <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-md border border-gold/40" />
            <div className="relative h-full w-full overflow-hidden rounded-md shadow-2xl">
              <Image
                src={images.bikram.portrait}
                alt={`${site.honorific} ${site.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 32vw, 85vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
