import { Link } from "react-router-dom";
import { Heart, Clock, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { PawTrail } from "@/components/PawPrint";
import { SITE } from "@/lib/site";

const perks = [
  { i: Heart, t: "Work With Animals", d: "Spend your days with dogs, cats, and other beloved pets." },
  { i: Clock, t: "Flexible Schedule", d: "Midday walks, evening visits, and overnight stays that fit your life." },
  { i: MapPin, t: "Local Routes", d: "Serve clients in your own Greater Cincinnati & Northern Kentucky neighborhoods." },
  { i: ShieldCheck, t: "Bonded & Insured", d: "Join a professional, background-checked, award-winning team." },
];

const requirements = [
  "Genuine love for animals of all sizes and temperaments",
  "Reliable transportation and a smartphone",
  "Able to pass a background check",
  "Available for midday, evening, weekend, or overnight visits",
  "Excellent communication with clients and our office",
  "Pet CPR & First-Aid certification (we help you get certified)",
];

const Employment = () => (
  <Layout>
    <SEO
      title="Pet Sitter & Dog Walker Jobs in Cincinnati | Professional Pet Nanny"
      description="Join the Professional Pet Nanny team. Flexible pet sitting and dog walking jobs across Greater Cincinnati & Northern Kentucky. Bonded, insured, award-winning."
      path="/employment"
    />

    <section className="relative overflow-hidden bg-hero text-white">
      <PawTrail />
      <div className="container-px mx-auto py-20 text-center">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">Careers</span>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-black leading-[1] sm:text-6xl">
          Get paid to <span className="text-gradient">play with pets.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
          {SITE.name} is always looking for reliable, animal-loving pet nannies across {SITE.serviceArea}.
        </p>
      </div>
    </section>

    <section className="container-px mx-auto py-20">
      <SectionHeading eyebrow="Why Join Us" title={<>The best job <span className="text-gradient">in town</span></>} />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p, i) => (
          <div key={p.t} className="reveal card-hover rounded-2xl border border-border bg-card p-6 shadow-card" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-glow">
              <p.i className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">{p.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container-px mx-auto pb-20">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
        <h2 className="font-display text-3xl font-black text-ink">What we're looking for</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {requirements.map((r) => (
            <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-3 font-display text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-sm text-muted-foreground">
            Prefer to talk? Call us at <a href={SITE.phoneHref} className="font-semibold text-primary hover:underline">{SITE.phone}</a>.
          </p>
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Employment;
