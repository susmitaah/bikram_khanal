import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "ghost-light";

const variants: Record<Variant, string> = {
  solid: "bg-maroon text-cream shadow-sm hover:bg-maroon-deep hover:shadow-md",
  outline: "border border-navy/30 text-navy hover:bg-navy hover:text-cream hover:shadow-md",
  "ghost-light": "border border-cream/40 text-cream hover:bg-cream hover:text-navy hover:shadow-md",
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
        "group inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
