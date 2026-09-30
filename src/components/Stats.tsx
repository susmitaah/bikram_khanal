import { stats } from "@/content/stats";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading title="A life in public service">
              <p>
                From the Constituent Assembly to the House of Representatives, a record built on showing up for
                Nawalparasi-1.
              </p>
            </SectionHeading>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 divide-x divide-y divide-rule overflow-hidden rounded-xl border border-rule sm:grid-cols-4 sm:divide-y-0">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.label} delay={i * 80}>
                    <div className="flex h-full flex-col gap-3 p-6">
                      <Icon aria-hidden size={22} className="text-gold" />
                      <p className="font-display text-3xl font-semibold tabular-nums tracking-tight text-navy">
                        {s.value}
                      </p>
                      <p className="text-sm leading-snug text-charcoal-soft">{s.label}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
