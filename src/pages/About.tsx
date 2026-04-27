import { Award, ShieldCheck, HeartPulse, Star, ThumbsUp, Trophy } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { TrustChips } from "@/components/TrustChips";
import { PawTrail } from "@/components/PawPrint";
import { SITE } from "@/lib/site";

const credentials = [
  { i: Award, t: "20+ Years Locally Owned", d: "Trusted by Cincinnati families for two decades." },
  { i: ShieldCheck, t: "Bonded & Insured", d: "Background-checked nannies; full peace of mind." },
  { i: HeartPulse, t: "Pet CPR & First-Aid", d: "Every nanny is currently certified." },
  { i: ThumbsUp, t: "BBB Accredited A+", d: "Highest standard of service & integrity." },
  { i: Star, t: "Angie's List Super Service", d: "10× Super Service Award winner." },
  { i: Trophy, t: "Best of Cincinnati", d: "Voted by Cincinnati Magazine readers." },
];

const About = () => (
  <Layout>
    <SEO
      title="About Professional Pet Nanny | Cincinnati Pet Sitters"
      description="Locally owned for 20+ years. Bonded, insured, CPR-certified pet sitters serving Greater Cincinnati & Northern Kentucky. BBB A+ and Best of Cincinnati."
      path="/about"
    />

    <section className="relative overflow-hidden bg-hero text-white">
      <PawTrail />
      <div className="container-px mx-auto py-20 text-center">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">About Us</span>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-black leading-[1] sm:text-6xl">
          Two decades of <span className="text-gradient">tail-wagging trust.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
          {SITE.name} has been Cincinnati & Northern Kentucky's go-to in-home pet care team since the early 2000s.
          We treat every pet like our own — and every home with respect.
        </p>
      </div>
    </section>

    <section className="container-px mx-auto py-20">
      <SectionHeading
        eyebrow="Our Credentials"
        title={<>Trusted, certified, <span className="text-gradient">and award-winning</span></>}
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((c, i) => (
          <div key={c.t} className="reveal card-hover flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-glow">
              <c.i className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-soft-gradient">
      <div className="container-px mx-auto py-20">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold text-ink">Our promise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every visit is a small act of love. We show up on time, communicate openly, and care for your pet like family.
            That's why thousands of Cincinnati and NKY pet parents have trusted us with their best friends for over {SITE.yearsInBusiness} years.
          </p>
          <div className="mt-10"><TrustChips /></div>
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);
export default About;
