import { CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import img from "@/assets/overnight.jpg";
import { SITE } from "@/lib/site";

const features = [
  "Meet your Pet Nanny before services begin",
  "Afternoon and evening check-ins",
  "Overnight stay in your home",
  "Comfort, security, and companionship",
  "Mail, lights, and home-occupied appearance",
  "Morning visit before nanny departs",
];

const faqs = [
  { q: "What hours does an overnight stay cover?", a: "Typically your nanny arrives in the late afternoon or evening, stays overnight in your home, and provides a morning visit before departing - usually a 12+ hour window of care." },
  { q: "Is the nanny home the entire night?", a: "Yes. Overnight Pet Sitting means your nanny sleeps in your home so your pet has continuous overnight comfort and security." },
  { q: "Will my home stay secure?", a: "Absolutely. All Pet Nannies are bonded, insured, and background-checked. Many clients also enjoy the added peace of a clearly occupied home." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Overnight Pet Sitting",
  provider: { "@type": "LocalBusiness", name: SITE.name, telephone: `+1-${SITE.phone}` },
  areaServed: "Greater Cincinnati & Northern Kentucky",
};

const Overnight = () => (
  <Layout>
    <SEO
      title="Overnight Pet Sitting Cincinnati | Professional Pet Nanny"
      description="Overnight pet sitting in Cincinnati & Northern Kentucky. Afternoon check-in plus an overnight stay in your home. Bonded, insured, CPR-certified."
      path="/overnight-pet-sitting"
      schema={schema}
    />
    <ServiceHero
      eyebrow="Overnight Pet Sitting"
      title="Restful nights for them. Restful nights for you."
      subtitle="Afternoon and evening check-in plus an overnight stay in the comfort of your home - true companionship through the night."
      image={img}
    />

    <section className="container-px mx-auto py-20">
      <SectionHeading eyebrow="What's Included" title={<>Comfort, security, <span className="text-gradient">all night long</span></>} />
      <ul className="reveal mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f} className="card-hover flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-ink">{f}</span>
          </li>
        ))}
      </ul>
    </section>

    {/* Other related services */}
    <section className="bg-soft-gradient">
      <div className="container-px mx-auto py-20">
        <SectionHeading eyebrow="Specialty Care" title={<>More ways we <span className="text-gradient">help families</span></>} />
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            { t: "Smart Puppy Plan", d: "Midday meal & potty breaks, bladder training support, play therapy, and notes/text updates throughout the workday." },
            { t: "Emergency Pet Sitting", d: "Urgent family-emergency support for existing or known clients where care needs can be quickly confirmed." },
            // removed: Install Sitting
          ].map((s, i) => (
            <div key={s.t} className="reveal card-hover rounded-2xl bg-card p-6 shadow-card" style={{ transitionDelay: `${i * 60}ms` }}>
              <h3 className="font-display text-xl font-bold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container-px mx-auto py-20">
      <SectionHeading eyebrow="FAQ" title={<>Overnight stays, <span className="text-gradient">answered</span></>} />
      <div className="mt-12"><FAQ items={faqs} /></div>
    </section>

    <CTASection />
  </Layout>
);
export default Overnight;
