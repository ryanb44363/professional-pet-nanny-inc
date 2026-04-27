import { ShieldCheck, HeartPulse, Award, Users, Clock, Home } from "lucide-react";

const items = [
  { icon: Award, title: "20+ Years Local", text: "Locally owned and operated in Cincinnati for two decades." },
  { icon: ShieldCheck, title: "Bonded & Insured", text: "Every nanny is fully background-checked and insured." },
  { icon: HeartPulse, title: "CPR & First-Aid", text: "Pet CPR and first-aid certified for every pet, every visit." },
  { icon: Users, title: "Meet Before We Sit", text: "A complimentary meet-and-greet before any service begins." },
  { icon: Home, title: "In-Home Comfort", text: "Pets stay where they're happiest — their own home." },
  { icon: Clock, title: "Flexible & On-Time", text: "Regular, as-needed, same-day, and emergency support." },
];

export const WhyChoose = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((it, i) => (
      <div
        key={it.title}
        className="reveal card-hover group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card"
        style={{ transitionDelay: `${i * 60}ms` }}
      >
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-glow transition-transform group-hover:rotate-[-6deg]">
          <it.icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-ink">{it.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
        </div>
      </div>
    ))}
  </div>
);
