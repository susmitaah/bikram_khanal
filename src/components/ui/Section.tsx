import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "paper" | "deep" | "ink";

const tones: Record<Tone, string> = {
  paper: "",
  deep: "bg-paper-deep/70",
  ink: "bg-ink text-paper",
};

type SectionProps = {
  id: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

export function Section({ id, tone = "paper", className, children }: SectionProps) {
  return (
    <section id={id} className={cn("border-b border-rule py-20 sm:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}
