import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { PawTrail } from "@/components/PawPrint";
import { BookNowDropdown } from "@/components/BookNowDropdown";
interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export const ServiceHero = ({ eyebrow, title, subtitle, image }: Props) => (
  <section className="relative overflow-hidden bg-soft-gradient">
    <PawTrail />
    <div className="container-px mx-auto grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
      <div className="animate-fade-up">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</span>
        <h1 className="mt-5 font-display text-5xl font-black leading-[1] text-ink sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">{subtitle}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to={SITE.bookHref} className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow">
            <Calendar className="h-4 w-4" /> Book Now
          </Link>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3.5 text-sm font-semibold text-ink hover:border-primary">
            <Phone className="h-4 w-4 text-primary" /> {SITE.phone}
          </a>
        </div>
      </div>
      <div className="relative animate-scale-in">
        <div className="absolute -inset-6 animate-blob bg-primary-glow/25 blur-2xl" aria-hidden />
        <img src={image} alt={title} loading="lazy" width={1280} height={896}
          className="relative aspect-[5/4] w-full rounded-[2.5rem] border-4 border-card object-cover shadow-elegant" />
      </div>
    </div>
  </section>
);
