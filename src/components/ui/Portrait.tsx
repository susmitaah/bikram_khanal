import Image from "next/image";
import { cn } from "@/lib/cn";

type PortraitProps = {
  src: string | null;
  alt: string;
  /** Shown on the placeholder until a real photo is added. */
  initials: string;
  className?: string;
};

/** Photo in an offset frame. Falls back to a monogram so the layout holds before the photo arrives. */
export function Portrait({ src, alt, initials, className }: PortraitProps) {
  return (
    <div className={cn("relative", className)}>
      <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 border border-ink/40" />
      <div className="relative aspect-4/5 overflow-hidden bg-paper-deep">
        {src ? (
          <Image src={src} alt={alt} fill priority sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
        ) : (
          <div role="img" aria-label={alt} className="flex h-full items-center justify-center">
            <span className="font-display text-[9rem] leading-none text-ink/10 select-none">{initials}</span>
          </div>
        )}
      </div>
    </div>
  );
}
