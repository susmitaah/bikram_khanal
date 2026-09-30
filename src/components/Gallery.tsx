"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { gallery, type GalleryItem } from "@/content/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<GalleryItem | null>(null);

  const open = (item: GalleryItem) => {
    setActive(item);
    dialogRef.current?.showModal();
  };

  return (
    <section id="gallery" className="border-b border-rule-on-navy bg-navy py-20 text-cream sm:py-28">
      <Container>
        <SectionHeading
          tone="onNavy"
          eyebrow="Photo Journal"
          title="Moments from the Journey"
          align="center"
        >
          <p>A look at public meetings, community visits, events and the people behind the work.</p>
        </SectionHeading>

        <div className="mt-14 grid auto-rows-40 grid-cols-2 gap-4 sm:auto-rows-48 md:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal key={item.src + i} delay={(i % 4) * 60} className={cn(item.tall && "row-span-2")}>
              <button
                type="button"
                onClick={() => open(item)}
                className="group relative block size-full overflow-hidden rounded-md bg-cream/5 shadow-lg"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/50"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-left text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#gallery"
            className="group link-underline inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
          >
            View Full Gallery <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Container>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto max-h-[90vh] w-[min(1000px,92vw)] bg-transparent p-0"
      >
        {active && (
          <figure className="relative">
            <div className="relative aspect-3/2 w-full">
              <Image src={active.src} alt={active.caption} fill sizes="92vw" className="object-contain" />
            </div>
            <figcaption className="mt-3 text-cream">{active.caption}</figcaption>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="absolute right-2 top-2 rounded-full bg-navy/70 p-2 text-cream transition-colors hover:bg-navy"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </figure>
        )}
      </dialog>
    </section>
  );
}
