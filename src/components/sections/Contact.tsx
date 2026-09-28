"use client";

import type { ComponentType, SVGProps } from "react";
import { contactCopy as copy } from "@/content/contact";
import { site } from "@/content/site";
import { useLang } from "@/i18n/useLang";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, Facebook, Mail, Phone } from "@/components/ui/Icons";
import { ContactForm } from "./ContactForm";

type Channel = keyof typeof site.contact;

const icons: Record<Channel, ComponentType<SVGProps<SVGSVGElement>>> = {
  facebook: Facebook,
  email: Mail,
  phone: Phone,
};

const external: Record<Channel, boolean> = { facebook: true, email: false, phone: false };

export function Contact() {
  const { t } = useLang();
  const channels = Object.keys(site.contact) as Channel[];

  return (
    <Section id="contact" tone="deep">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading index="04" eyebrow={copy.eyebrow} title={copy.title}>
            <p>{t(copy.intro)}</p>
          </SectionHeading>

          <ul className="divide-y divide-rule border-y border-rule">
            {channels.map((key) => {
              const Icon = icons[key];
              const { label, href } = site.contact[key];
              return (
                <li key={key}>
                  <a
                    href={href}
                    {...(external[key] ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-5 py-5 transition-colors hover:text-crimson"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/20 group-hover:border-crimson">
                      <Icon />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-ink-mute">{t(copy.channels[key])}</span>
                      <span className="block truncate text-lg">{label}</span>
                    </span>
                    <ArrowUpRight className="shrink-0 opacity-40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:col-span-7">
          <div className="border border-rule bg-paper p-6 sm:p-8">
            <h3 className="font-display text-2xl">{t(copy.formTitle)}</h3>
            <p className="mt-1.5 text-sm text-ink-soft">{t(copy.formIntro)}</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
