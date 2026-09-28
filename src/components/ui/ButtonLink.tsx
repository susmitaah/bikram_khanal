import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "light";

const variants: Record<Variant, string> = {
  solid: "bg-crimson text-paper hover:bg-crimson-deep",
  outline: "border border-ink/70 text-ink hover:bg-ink hover:text-paper",
  light: "border border-paper/60 text-paper hover:bg-paper hover:text-ink",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "solid", external, className, children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center gap-2 rounded-sm px-5 py-3 text-base font-medium transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
