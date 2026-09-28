import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "light";

const variants: Record<Variant, string> = {
  solid: "bg-crimson text-paper shadow-sm hover:bg-crimson-deep hover:shadow-md",
  outline: "border border-ink/70 text-ink hover:bg-ink hover:text-paper hover:shadow-md",
  light: "border border-paper/60 text-paper hover:bg-paper hover:text-ink hover:shadow-md",
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
        "inline-flex items-center gap-2 rounded-sm px-5 py-3 text-base font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
