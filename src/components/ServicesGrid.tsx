import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import dogImg from "@/assets/dog-walking.jpg";
import petImg from "@/assets/pet-sitting.jpg";
import nightImg from "@/assets/overnight.jpg";

const services = [
  {
    title: "Dog Walking",
    desc: "Reliable, timely walks with your regular, dedicated dog walker. Reserve regular, as-needed, or same-day walks.",
    img: dogImg,
    to: "/dog-walking",
    tag: "Most Popular",
  },
  {
    title: "Pet Sitting",
    desc: "In-home care so pets stay in familiar surroundings. Feeding, medication, play therapy & a daily diary.",
    img: petImg,
    to: "/pet-sitting",
  },
  {
    title: "Overnight Pet Sitting",
    desc: "Afternoon & evening check-in plus an overnight stay in your home — comfort and security all night.",
    img: nightImg,
    to: "/overnight-pet-sitting",
  },
];

export const ServicesGrid = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {services.map((s, i) => (
      <Link
        to={s.to}
        key={s.title}
        className="reveal group relative overflow-hidden rounded-3xl bg-card shadow-card card-hover"
        style={{ transitionDelay: `${i * 80}ms` }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={s.img}
            alt={s.title}
            loading="lazy"
            width={1280}
            height={896}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          {s.tag && (
            <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
              {s.tag}
            </span>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-bold text-ink">{s.title}</h3>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
        </div>
      </Link>
    ))}
  </div>
);
