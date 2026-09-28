"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gallery, galleryCopy as copy, type GalleryItem } from "@/content/gallery";
import { useLang } from "@/i18n/useLang";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Close } from "@/components/ui/Icons";

export function Gallery() {
  const { t } = useLang();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<GalleryItem | null>(null);

  const open = (item: GalleryItem) => {
    setActive(item);
    dialogRef.current?.showModal();
  };

  return (
    <Section id="gallery">
      <SectionHeading index="03" eyebrow={copy.eyebrow} title={copy.title} />

      <ul className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-3">
        {gallery.map((item) => (
          <li key={item.id} className={cn(item.tall && "row-span-2")}>
            {item.src ? (
              <button
                type="button"
                onClick={() => open(item)}
                className="group relative block size-full overflow-hidden bg-paper-deep"
              >
                <Image
                  src={item.src}
                  alt={t(item.caption)}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 text-left text-sm text-paper">
                  {t(item.caption)}
                </span>
              </button>
            ) : (
              <PlaceholderTile caption={t(item.caption)} note={t(copy.placeholder)} />
            )}
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto max-h-[90vh] w-[min(1000px,92vw)] bg-transparent p-0"
      >
        {active?.src && (
          <figure className="relative">
            <div className="relative aspect-[3/2] w-full">
              <Image src={active.src} alt={t(active.caption)} fill sizes="92vw" className="object-contain" />
            </div>
            <figcaption className="mt-3 text-paper">{t(active.caption)}</figcaption>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="absolute right-2 top-2 rounded-full bg-ink/70 p-2 text-paper"
              aria-label={t(copy.close)}
            >
              <Close />
            </button>
          </figure>
        )}
      </dialog>
    </Section>
  );
}

function PlaceholderTile({ caption, note }: { caption: string; note: string }) {
  return (
    <div className="flex size-full flex-col justify-end border border-dashed border-ink/25 bg-paper-deep/60 p-4">
      <span className="text-xs text-ink-mute">{note}</span>
      <span className="mt-1 font-display text-xl text-ink-soft">{caption}</span>
    </div>
  );
}
