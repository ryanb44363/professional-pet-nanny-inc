import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jennifer M.",
    location: "Hyde Park, Cincinnati",
    text: "Professional Pet Nanny has cared for our two labs for over 8 years. They treat them like family — we won't trust anyone else.",
  },
  {
    name: "David & Amy R.",
    location: "Fort Mitchell, NKY",
    text: "The overnight sitting service is incredible. Our cat actually misses our sitter when she's gone! True peace of mind.",
  },
  {
    name: "Melissa K.",
    location: "Mason, OH",
    text: "Daily updates, clear communication, and so much love for our puppy during the Smart Puppy Plan. Worth every penny.",
  },
];

export const Testimonials = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {reviews.map((r, i) => (
      <figure
        key={r.name}
        className="reveal card-hover relative rounded-3xl bg-card p-7 shadow-card"
        style={{ transitionDelay: `${i * 80}ms` }}
      >
        <Quote className="absolute -top-4 left-6 h-10 w-10 rounded-2xl bg-primary-gradient p-2 text-primary-foreground shadow-glow" />
        <div className="mt-3 flex gap-0.5 text-accent">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <blockquote className="mt-4 text-sm leading-relaxed text-ink">"{r.text}"</blockquote>
        <figcaption className="mt-5 border-t border-border pt-4">
          <div className="text-sm font-bold text-ink">{r.name}</div>
          <div className="text-xs text-muted-foreground">{r.location}</div>
        </figcaption>
      </figure>
    ))}
  </div>
);
