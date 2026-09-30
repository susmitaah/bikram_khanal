import type { SVGProps } from "react";

/**
 * lucide-react dropped brand/trademark icons — this is the one social icon
 * we need (only Facebook is a real, verified account), added directly
 * rather than pulling in another icon library. Mirrors lucide's `size` prop
 * so call sites read the same as any other icon.
 */
export function FacebookIcon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden {...props}>
      <path d="M14 9h3V5.5h-3A4.5 4.5 0 0 0 9.5 10v2H7v3.5h2.5V22H13v-6.5h2.6l.5-3.5H13v-1.7c0-.7.3-1.3 1-1.3Z" />
    </svg>
  );
}
