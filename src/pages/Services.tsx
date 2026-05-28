import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CTASection } from "@/components/CTASection";

const Services = () => (
  <Layout>
    <SEO
      title="All Pet Care Services | Professional Pet Nanny"
      description="Browse all pet care services from Professional Pet Nanny: dog walking, pet sitting, overnight stays, smart puppy plan, and emergency pet sitting in Greater Cincinnati & Northern Kentucky."
      path="/services"
    />
    <section className="container-px mx-auto pt-24 pb-12">
      <SectionHeading
        eyebrow="Our Services"
        title={<>Every service, <span className="text-gradient">in one place</span></>}
        subtitle="From daily dog walks to overnight stays and last-minute emergencies — explore the full range of care we offer across Greater Cincinnati and Northern Kentucky."
      />
    </section>
    <section className="container-px mx-auto pb-20">
      <ServicesGrid />
    </section>
    <CTASection />
  </Layout>
);

export default Services;
