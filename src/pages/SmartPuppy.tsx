import { CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import img from "@/assets/smart-puppy.jpg";
import { SITE } from "@/lib/site";

const features = [
  "Frequent midday potty breaks for tiny bladders",
  "Socialization, gentle play & enrichment",
  "Reinforcement of crate, leash & basic commands",
  "Consistent puppy nanny who builds trust",
  "Photos, notes & GPS-confirmed visits",
  "Bonded, insured, CPR & First-Aid certified",
];

const faqs = [
  { q: "What is the Smart Puppy Plan?", a: "A structured weekly schedule of short, frequent visits designed for puppies 8 weeks to 6 months - potty breaks, socialization, and consistent routines that set your pup up for success." },
  { q: "How often will you visit my puppy?", a: "Most plans include 2 to 4 visits per weekday. We tailor frequency to your puppy's age, bladder, and your home schedule." },
  { q: "Do you reinforce training?", a: "Yes. We follow your cues and commands so your puppy hears the same words and routines from everyone in their world." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Smart Puppy Plan",
  provider: { "@type": "LocalBusiness", name: SITE.name, telephone: `+1-${SITE.phone}` },
  areaServed: "Greater Cincinnati & Northern Kentucky",
  description: "Structured puppy care plan with frequent visits, socialization, and training reinforcement.",
};

const SmartPuppy = () => (
  <Layout>
    <SEO
      title="Smart Puppy Plan Cincinnati | Professional Pet Nanny"
      description="A structured weekly plan for puppies - frequent potty breaks, socialization, and training reinforcement across Greater Cincinnati & Northern Kentucky."
      path="/smart-puppy-plan"
      schema={schema}
    />
    <ServiceHero
      eyebrow="Smart Puppy Plan"
      title="A smart start for your new puppy."
      subtitle="Frequent visits, socialization, and training reinforcement so your puppy grows into a confident, well-mannered companion."
      image={img}
    />

    <section className="container-px mx-auto py-20">
      <SectionHeading
        eyebrow="What's Included"
        title={<>Built for <span className="text-gradient">growing puppies</span></>}
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
        <SectionHeading eyebrow="FAQ" title={<>Puppy care, <span className="text-gradient">answered</span></>} />
        <div className="mt-12"><FAQ items={faqs} /></div>
      </div>
    </section>

    <CTASection />
  </Layout>
);
export default SmartPuppy;
