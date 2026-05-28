import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { PawTrail } from "@/components/PawPrint";
import { BookNowDropdown } from "@/components/BookNowDropdown";

export const CTASection = () => (
  <section className="container-px mx-auto py-20">
    <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-center text-white shadow-elegant md:p-16">
      <PawTrail />
      <div className="absolute -top-20 -right-20 h-72 w-72 animate-blob bg-primary-glow/30 blur-3xl" aria-hidden />
      <div className="reveal relative z-10 mx-auto max-w-2xl">
        <h2 className="font-display text-4xl font-black leading-tight sm:text-5xl">
          Ready for happier, healthier days at home?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book your complimentary meet-and-greet today. Your pets will thank you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <BookNowDropdown
            triggerClassName="btn-glow inline-flex items-center gap-2 rounded-full bg-primary-gradient px-7 py-4 text-base font-bold text-primary-foreground shadow-glow"
          />
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-4 text-base font-semibold backdrop-blur hover:bg-white/10">
            <Phone className="h-5 w-5" /> {SITE.phone}
          </a>
        </div>
      </div>
    </div>
  </section>
);
