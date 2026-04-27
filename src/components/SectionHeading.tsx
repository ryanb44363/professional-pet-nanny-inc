import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, subtitle, align = "center", className }: Props) => (
  <div className={cn("reveal max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
    {eyebrow && (
      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
    )}
    <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] text-ink sm:text-4xl md:text-5xl">{title}</h2>
    {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>}
  </div>
);
