"use client";

import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { offices, contactCopy as copy } from "@/content/contact";
import { socials } from "@/content/site";
import { useLang } from "@/i18n/useLang";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FacebookIcon } from "@/components/ui/SocialIcons";
import { Reveal } from "@/components/ui/Reveal";

const socialIcons = { facebook: FacebookIcon };

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="border-b border-rule bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading title={t(copy.title)}>
          <p>{t(copy.intro)}</p>
        </SectionHeading>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            {offices.map((office, i) => (
              <Reveal key={office.name.en} delay={i * 100}>
              <div className="rounded-xl border border-rule bg-paper p-6 shadow-card">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                  <MapPin size={18} strokeWidth={1.75} className="text-maroon" />
                  {t(office.name)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">{t(office.address)}</p>
                <div className="mt-4 space-y-2 text-sm">
                  {office.phone && (
                    <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-charcoal hover:text-maroon">
                      <Phone size={15} strokeWidth={1.75} className="text-charcoal-mute" /> {office.phone}
                    </a>
                  )}
                  {office.email && (
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-charcoal hover:text-maroon"
                    >
                      <Mail size={15} strokeWidth={1.75} className="text-charcoal-mute" /> {office.email}
                    </a>
                  )}
                  {office.hours && (
                    <p className="flex items-center gap-2 text-charcoal-soft">
                      <Clock size={15} strokeWidth={1.75} className="text-charcoal-mute" /> {t(office.hours)}
                    </p>
                  )}
                </div>
              </div>
              </Reveal>
            ))}

            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full border border-navy/20 text-navy transition-colors hover:border-maroon hover:bg-maroon hover:text-cream"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-xl border border-rule bg-paper p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
