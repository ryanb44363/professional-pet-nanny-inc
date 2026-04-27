import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQ } from "@/components/FAQ";
import { SITE } from "@/lib/site";

const allServices = [
  "Dog Walking", "Pet Sitting", "Overnight Pet Sitting",
  "Smart Puppy Plan", "Emergency Pet Sitting", "Install Sitting",
];

const areas = [
  "Cincinnati", "Hyde Park", "Mt. Lookout", "Oakley", "Mt. Adams", "Anderson",
  "Mason", "West Chester", "Montgomery", "Blue Ash", "Loveland", "Madeira",
  "Covington", "Fort Mitchell", "Fort Thomas", "Crestview Hills", "Edgewood", "Newport",
];

const homeFaqs = [
  { q: "What areas do you serve?", a: "We proudly serve Greater Cincinnati and Northern Kentucky, including Hyde Park, Mason, Anderson, Blue Ash, Covington, Fort Mitchell, Fort Thomas, and many more neighborhoods." },
  { q: "Are your pet sitters insured and certified?", a: "Yes. Every Professional Pet Nanny is bonded, insured, background-checked, and Pet CPR & First-Aid Certified." },
  { q: "How does booking work?", a: "Online booking is accurate, simple, and convenient. After your request, we schedule a complimentary meet-and-greet with your assigned nanny before service begins." },
  { q: "Do you offer last-minute or emergency care?", a: "Yes. Existing clients can request Emergency Pet Sitting for urgent family situations. New clients are welcome to call us at 513-244-7373 for same-day availability." },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    image: `${SITE.url}/og-image.jpg`,
    url: SITE.url,
    telephone: `+1-${SITE.phone}`,
    priceRange: "$$",
    areaServed: ["Cincinnati, OH", "Northern Kentucky"],
    address: { "@type": "PostalAddress", addressLocality: "Cincinnati", addressRegion: "OH", addressCountry: "US" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "150" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const Index = () => (
  <Layout>
    <SEO
      title="Pet Sitter & Dog Walker Cincinnati | Professional Pet Nanny"
      description="Bonded, insured & CPR-certified pet sitters in Greater Cincinnati & Northern Kentucky. 20+ years of trusted dog walking, pet sitting & overnight care. Book today!"
      path="/"
      schema={schema}
    />
    <Hero />

    {/* Services */}
    <section id="services" className="container-px mx-auto py-24">
      <SectionHeading
        eyebrow="Our Services"
        title={<>Loving care for every <span className="text-gradient">tail & whisker</span></>}
        subtitle="From a quick midday walk to overnight stays, we tailor every visit to your pet's routine."
      />
      <div className="mt-14"><ServicesGrid /></div>
    </section>

    {/* Online booking */}
    <section className="bg-soft-gradient">
      <div className="container-px mx-auto grid items-center gap-12 py-20 md:grid-cols-2">
        <div className="reveal">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Booking</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
            Online booking is <span className="text-gradient">accurate, simple & convenient.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Request services in minutes — pick your dates, share a few details about your pet, and we'll confirm your nanny.
            Every new client gets a complimentary meet-and-greet first.
          </p>
          <Link to={SITE.bookHref} className="btn-glow mt-7 inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-glow">
            Start Booking <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="reveal grid gap-3 sm:grid-cols-2">
          {[
            { i: Sparkles, t: "Step 1", d: "Submit your request online or by phone." },
            { i: Heart, t: "Step 2", d: "Free meet-and-greet with your assigned nanny." },
            { i: CheckCircle2, t: "Step 3", d: "We confirm and add visits to your calendar." },
            { i: MapPin, t: "Step 4", d: "Daily updates and care notes from every visit." },
          ].map((s, i) => (
            <div key={i} className="card-hover rounded-2xl border border-border bg-card p-5 shadow-card">
              <s.i className="h-6 w-6 text-primary" />
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-primary">{s.t}</div>
              <div className="mt-1 text-sm text-ink">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why choose */}
    <section className="container-px mx-auto py-24">
      <SectionHeading
        eyebrow="Why Choose Us"
        title={<>Why families across Cincinnati <span className="text-gradient">trust us</span></>}
        subtitle="Two decades of experience, certifications, and genuine love for animals — all in your own home."
      />
      <div className="mt-14"><WhyChoose /></div>
    </section>

    {/* Services offered checklist */}
    <section className="bg-soft-gradient">
      <div className="container-px mx-auto py-20">
        <SectionHeading
          eyebrow="Services Offered"
          title={<>Everything your pet needs, <span className="text-gradient">all in one place</span></>}
        />
        <ul className="reveal mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {allServices.map((s) => (
            <li key={s} className="card-hover flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-card">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="font-semibold text-ink">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Reviews */}
    <section className="container-px mx-auto py-24">
      <SectionHeading
        eyebrow="Real Reviews"
        title={<>Cincinnati's most-loved <span className="text-gradient">pet nanny team</span></>}
        subtitle="Voted Best of Cincinnati • BBB A+ Accredited • 10× Angie's List Super Service Award"
      />
      <div className="mt-14"><Testimonials /></div>
      <p className="reveal mt-8 text-center text-sm text-muted-foreground">
        Google Reviews integration coming soon — verified 5-star testimonials from Cincinnati & NKY families.
      </p>
    </section>

    {/* Service Area */}
    <section className="bg-ink text-white">
      <div className="container-px mx-auto py-20">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-glow">Service Area</span>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
            Proudly serving <span className="text-gradient">Greater Cincinnati & NKY</span>
          </h2>
          <p className="mt-4 text-white/70">Local nannies across our favorite neighborhoods on both sides of the river.</p>
        </div>
        <div className="reveal mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2">
          {areas.map((a) => (
            <span key={a} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-primary-glow hover:text-primary-glow">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Hiring */}
    <section className="container-px mx-auto py-20">
      <div className="reveal card-hover mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl bg-soft-gradient p-10 text-center shadow-card md:flex-row md:text-left">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-glow">
          <Heart className="h-8 w-8" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-2xl font-bold text-ink">We're hiring Loving Pet Nannies</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Join Cincinnati's most trusted pet care team. Flexible schedules and lots of furry friends.
          </p>
        </div>
        <Link to="/contact" className="btn-glow inline-flex items-center gap-2 rounded-full border border-primary bg-primary/5 px-5 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground">
          Apply Now <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>

    {/* FAQ */}
    <section className="container-px mx-auto py-20">
      <SectionHeading eyebrow="FAQ" title={<>Quick answers for <span className="text-gradient">new clients</span></>} />
      <div className="mt-12"><FAQ items={homeFaqs} /></div>
    </section>

    <CTASection />
  </Layout>
);

export default Index;
