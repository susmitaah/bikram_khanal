import Image from "next/image";
import { priorities } from "@/content/priorities";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Priorities() {
  return (
    <section id="priorities" className="relative overflow-hidden bg-navy py-20 text-cream sm:py-28">
      <Image
        src={images.priorities.mountainSilhouette}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-[0.08]"
      />
      <div aria-hidden className="absolute inset-0 bg-linear-to-b from-navy via-navy/95 to-navy" />

      <Container className="relative">
        <SectionHeading tone="onNavy" eyebrow="My Priorities" title="What matters to me">
          <p>Five commitments guiding the work ahead for Nawalparasi-1.</p>
        </SectionHeading>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {priorities.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 70}>
                <article className="group h-full rounded-md border border-rule-on-navy bg-cream/[0.03] p-6 transition-colors hover:border-gold/50 hover:bg-cream/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tabular-nums text-gold">{p.index}</span>
                    <Icon aria-hidden size={20} className="text-gold transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    <span className="font-devanagari mr-1.5 text-cream/60">{p.devanagari}</span>
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/70">{p.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
