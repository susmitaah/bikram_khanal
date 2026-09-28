import Image from "next/image";
import { cn } from "@/lib/cn";

type PortraitProps = {
  src: string | null;
  alt: string;
  /** Shown on the placeholder until a real photo is added. */
  initials: string;
  className?: string;
};

/**
 * Circular portrait with a faint double-pennant (Nepal flag) motif behind it.
 * Falls back to a monogram so the layout holds before the photo arrives.
 */
export function Portrait({ src, alt, initials, className }: PortraitProps) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-md", className)}>
      <PennantMotif />

      <div className="absolute inset-[6%] overflow-hidden rounded-full border-4 border-paper bg-paper-deep shadow-[0_18px_45px_-15px_rgb(28_26_24/0.35)]">
        {src ? (
          <Image src={src} alt={alt} fill priority sizes="(min-width: 768px) 32vw, 80vw" className="object-cover" />
        ) : (
          <div role="img" aria-label={alt} className="flex h-full items-center justify-center">
            <span className="font-display text-[6rem] leading-none text-ink/15 select-none">{initials}</span>
          </div>
        )}
      </div>

      <span aria-hidden className="absolute inset-[6%] rounded-full ring-1 ring-inset ring-ink/10" />
    </div>
  );
}

/** Very faint double-pennant outline echoing the national flag, well behind the photo. */
function PennantMotif() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className="absolute -inset-[8%] text-crimson/[0.08]"
    >
      <path
        d="M40 18 L150 78 L40 108 Z M40 108 L140 152 L40 190 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
