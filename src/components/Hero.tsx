import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { TrustChips } from "@/components/TrustChips";
import { PawTrail, PawPrint } from "@/components/PawPrint";
import { BookNowDropdown } from "@/components/BookNowDropdown";
import heroImg from "@/assets/hero-pets.jpg";

export const Hero = () => (
  <section className="relative isolate overflow-hidden bg-hero text-white">
    <PawTrail />
    <div className="absolute -bottom-32 -right-32 h-96 w-96 animate-blob bg-primary-glow/30 blur-3xl" aria-hidden />
    <div className="container-px mx-auto grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
      <div className="lg:col-span-7 animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
          <PawPrint className="h-3.5 w-3.5 text-accent animate-wag" />
          Cincinnati's Trusted Pet Nanny
        </span>
        <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] sm:text-6xl md:text-7xl">
          Loving care, <br />
          <span className="text-gradient bg-clip-text">right at home.</span>
        </h1>
        <p className="mt-6 max-w-xl font-display text-2xl italic text-accent sm:text-3xl">
          "{SITE.tagline}"
        </p>
        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          Professional, bonded, and CPR-certified pet sitters serving {SITE.serviceArea} for over {SITE.yearsInBusiness} years.
          Dog walking, pet sitting, and overnight stays — in the comfort of your own home.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <BookNowDropdown
            triggerClassName="btn-glow group inline-flex items-center gap-2 rounded-full bg-primary-gradient px-7 py-4 text-base font-bold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
          >
            Book Now
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </BookNowDropdown>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Phone className="h-5 w-5 text-accent" /> {SITE.phone}
          </a>
        </div>

        <div className="mt-10">
          <TrustChips variant="dark" />
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="relative animate-scale-in">
          <div className="absolute -inset-6 animate-blob bg-primary-glow/30 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white/20 shadow-elegant">
            <img
              src={heroImg}
              alt="Happy golden retriever and puppy under the care of Professional Pet Nanny in Cincinnati"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 text-ink shadow-elegant sm:block animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-accent-foreground">
                <PawPrint className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Today</div>
                <div className="text-sm font-bold">12 happy tails wagging</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
