import { CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import img from "@/assets/emergency-pet.jpg";
import { SITE } from "@/lib/site";

const features = [
  "Same-day and short-notice availability",
  "Coverage for hospital stays, travel delays & emergencies",
  "Feeding, medication, walks & companionship",
  "Live updates with photos and notes",
  "Backup nanny network for full reliability",
  "Bonded, insured, CPR & First-Aid certified",
];

const faqs = [
  { q: "How fast can you respond?", a: "We do our best to cover same-day requests. Call 513-244-7373 and we'll move quickly to find the right nanny for your pet." },
  { q: "What counts as an emergency?", a: "Anything from a sudden hospital stay or canceled flight to a work shift change. If you need a trusted hand right now, we're here." },
  { q: "Do I need to be an existing client?", a: "No - new clients are welcome. We'll do a quick onboarding so we have the keys, routines, and vet info we need." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Emergency Pet Sitting",
  provider: { "@type": "LocalBusiness", name: SITE.name, telephone: `+1-${SITE.phone}` },
  areaServed: "Greater Cincinnati & Northern Kentucky",
  description: "Same-day and short-notice pet sitting for emergencies, hospital stays, and unexpected travel.",
};

const EmergencyPetSitting = () => (
  <Layout>
    <SEO
      title="Emergency Pet Sitting Cincinnati | Professional Pet Nanny"
      description="Same-day and short-notice pet sitting across Greater Cincinnati & Northern Kentucky for hospital stays, travel delays, and unexpected emergencies."
      path="/emergency-pet-sitting"
      schema={schema}
    />
    <ServiceHero
      eyebrow="Emergency Pet Sitting"
      title="Trusted care when life happens fast."
      subtitle="Same-day and short-notice pet care for hospital stays, travel delays, and the unexpected. Call us - we'll handle the rest."
      image={img}
    />

    <section className="container-px mx-auto py-20">
      <SectionHeading
        eyebrow="What's Included"
        title={<>Reliable care, <span className="text-gradient">right now</span></>}
      />
      <ul className="reveal mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f} className="card-hover flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-ink">{f}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="bg-soft-gradient">
      <div className="container-px mx-auto py-20">
        <SectionHeading eyebrow="FAQ" title={<>Emergency care, <span className="text-gradient">answered</span></>} />
        <div className="mt-12"><FAQ items={faqs} /></div>
      </div>
    </section>

    <CTASection />
  </Layout>
);
export default EmergencyPetSitting;
