import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  filled?: boolean;
}

export const PawPrint = ({ className, filled = true }: Props) => (
  <svg viewBox="0 0 64 64" className={cn("inline-block", className)} aria-hidden="true">
    <g fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : 2}>
      <ellipse cx="32" cy="42" rx="14" ry="12" />
      <ellipse cx="14" cy="28" rx="6" ry="8" />
      <ellipse cx="50" cy="28" rx="6" ry="8" />
      <ellipse cx="22" cy="14" rx="5" ry="7" />
      <ellipse cx="42" cy="14" rx="5" ry="7" />
    </g>
  </svg>
);

export const PawTrail = ({ className }: { className?: string }) => (
  <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
    {[
      { top: "10%", left: "5%", r: -20, d: "0s" },
      { top: "30%", left: "12%", r: 15, d: "1.5s" },
      { top: "55%", left: "8%", r: -10, d: "3s" },
      { top: "75%", left: "16%", r: 25, d: "0.8s" },
      { top: "20%", right: "8%", r: 18, d: "2.2s" },
      { top: "60%", right: "12%", r: -22, d: "1.1s" },
    ].map((p, i) => (
      <PawPrint
        key={i}
        className="absolute h-6 w-6 text-primary/15 animate-float-slow"
        // @ts-ignore
        style={{ ...p, animationDelay: p.d, transform: `rotate(${p.r}deg)` }}
      />
    ))}
  </div>
);
