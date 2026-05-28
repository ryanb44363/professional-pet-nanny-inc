import { CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import img from "@/assets/dog-walking.jpg";
import { SITE } from "@/lib/site";

const features = [
  "Reliable, professional and timely visits",
  "Flexible scheduling: regular, as-needed, or same-day",
  "Meet your regular dog walker before services begin",
  "Consistent walker - your dog's familiar friend",
  "GPS-confirmed visits with photos & notes",
  "Bonded, insured, CPR & First-Aid certified",
];

const faqs = [
  { q: "How long are dog walks?", a: "Most walks are 20, 30, or 45 minutes. We'll recommend the right length based on your dog's age, breed, and energy level." },
  { q: "Will I have the same dog walker each time?", a: "Yes - we assign a regular nanny so your dog builds a trusting bond and a consistent routine." },
  { q: "Can I book same-day walks?", a: "Yes, subject to availability. Existing clients can request same-day walks easily through our booking system or by calling 513-244-7373." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Dog Walking",
  provider: { "@type": "LocalBusiness", name: SITE.name, telephone: `+1-${SITE.phone}` },
  areaServed: "Greater Cincinnati & Northern Kentucky",
  description: "Professional, reliable dog walking in Cincinnati and Northern Kentucky.",
};

const DogWalking = () => (
  <Layout>
    <SEO
      title="Dog Walking Cincinnati | Professional Pet Nanny"
      description="Reliable, professional dog walking in Greater Cincinnati & Northern Kentucky. Regular, as-needed, and same-day walks with bonded, CPR-certified walkers."
      path="/dog-walking"
      schema={schema}
    />
    <ServiceHero
      eyebrow="Dog Walking"
      title="Walks your dog will wag for."
      subtitle="Reliable, professional and timely. Reserve regular, as-needed, or same-day dog walks across Greater Cincinnati and Northern Kentucky."
      image={img}
    />

    <section className="container-px mx-auto py-20">
      <SectionHeading
        eyebrow="What's Included"
        title={<>Every walk, <span className="text-gradient">a happy walk</span></>}
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
        <SectionHeading eyebrow="FAQ" title={<>Dog walking, <span className="text-gradient">answered</span></>} />
        <div className="mt-12"><FAQ items={faqs} /></div>
      </div>
    </section>

    <CTASection />
  </Layout>
);
export default DogWalking;
