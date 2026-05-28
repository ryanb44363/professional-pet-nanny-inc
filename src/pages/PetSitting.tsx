import { CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import img from "@/assets/pet-sitting.jpg";
import { SITE } from "@/lib/site";

const features = [
  "In-home care - pets stay in familiar surroundings",
  "Meet your Pet Nanny before you depart",
  "Feeding on your pet's regular schedule",
  "Medication administration where appropriate",
  "Play therapy & enrichment time",
  "Daily diary updates with photos",
];

const faqs = [
  { q: "How many visits per day do you recommend?", a: "Most cats do well with one daily visit; dogs typically need 2–4 visits depending on age and routine. We'll recommend a schedule during your meet-and-greet." },
  { q: "Can you give medications?", a: "Yes - pills, liquids, and most injections (such as insulin) can be administered. We'll confirm specifics during the meet-and-greet." },
  { q: "What's a 'daily diary'?", a: "A short note (and photos!) after every visit so you know exactly how your pet is doing - meals, walks, mood, and any updates from your home." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pet Sitting",
  provider: { "@type": "LocalBusiness", name: SITE.name, telephone: `+1-${SITE.phone}` },
  areaServed: "Greater Cincinnati & Northern Kentucky",
};

const PetSitting = () => (
  <Layout>
    <SEO
      title="Pet Sitting Cincinnati & Northern Kentucky | Professional Pet Nanny"
      description="In-home pet sitting in Cincinnati & NKY. Feeding, medication, play therapy, and daily diary updates. Bonded, insured, CPR-certified pet sitters."
      path="/pet-sitting"
      schema={schema}
    />
    <ServiceHero
      eyebrow="Pet Sitting"
      title="In-home care that feels like home."
      subtitle="Your pets stay in their familiar surroundings while we handle feeding, medication, playtime, and daily updates."
      image={img}
    />

    <section className="container-px mx-auto py-20">
      <SectionHeading eyebrow="What's Included" title={<>Care that fits <span className="text-gradient">your routine</span></>} />
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
        <SectionHeading eyebrow="FAQ" title={<>Pet sitting, <span className="text-gradient">answered</span></>} />
        <div className="mt-12"><FAQ items={faqs} /></div>
      </div>
    </section>

    <CTASection />
  </Layout>
);
export default PetSitting;
