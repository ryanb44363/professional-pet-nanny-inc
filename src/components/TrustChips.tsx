import { ShieldCheck, HeartPulse, Award, MapPin, Star } from "lucide-react";
import { SITE } from "@/lib/site";

const chips = [
  { icon: Star, label: "5★ Rated", sub: "Google Reviews" },
  { icon: Award, label: `${SITE.yearsInBusiness}+ Years`, sub: "Locally Owned" },
  { icon: ShieldCheck, label: "Bonded & Insured", sub: "Peace of Mind" },
  { icon: HeartPulse, label: "Pet CPR Certified", sub: "First-Aid Trained" },
  { icon: MapPin, label: "Cincinnati & NKY", sub: "Local Sitters" },
];

export const TrustChips = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const dark = variant === "dark";
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center md:gap-3">
      {chips.map((c) => (
        <div
          key={c.label}
          className={
            "card-hover flex items-center gap-3 rounded-2xl px-4 py-3 text-left backdrop-blur " +
            (dark ? "bg-white/10 text-white ring-1 ring-white/15" : "bg-card text-ink shadow-card")
          }
        >
          <c.icon className={"h-5 w-5 shrink-0 " + (dark ? "text-primary-glow" : "text-primary")} />
          <div className="leading-tight">
            <div className="text-sm font-semibold">{c.label}</div>
            <div className={"text-[11px] " + (dark ? "text-white/70" : "text-muted-foreground")}>{c.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
