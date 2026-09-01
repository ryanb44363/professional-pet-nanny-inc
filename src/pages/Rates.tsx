import { CheckCircle2, Clock, CalendarDays, PawPrint, Phone, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { PawTrail } from "@/components/PawPrint";
import { SITE } from "@/lib/site";

const dogWalkRows = [
  { label: '"As Needed" visit', rate: "$14" },
  { label: "5x per week discounted", rate: "$13" },
  { label: "Yard break \"Let-Out\"", rate: "$13" },
  { label: "Exercise, Play & Clean \"Puppy Program\"", rate: "$15" },
  { label: "Weekday Early AM / PM (before 10am / after 4pm)", rate: "$16" },
  { label: "Weekend walks", rate: "$17" },
];

const petSittingRows = [
  { label: "AM visit", rate: "$21" },
  { label: "Mid-day visit", rate: "$21" },
  { label: "Afternoon visit", rate: "$21" },
  { label: "Evening visit", rate: "$21" },
  { label: "Early AM (before 7am) or Late PM (after 9pm)", rate: "$25" },
  { label: "Senior & Fixed Income discounted visit", rate: "$19" },
];

const includedWalkFeatures = [
  "Meet your Pet Play Nanny",
  "Same route each walk",
  "Walks strictly with YOUR dogs",
  "24/7 online reservations",
  "Convenient same-day needs",
  "30-minute visit with paperwork, fresh water & treat",
  "Monthly discounts & invoicing",
  "Online credit card payment",
];

const holidays = [
  "New Year's Eve & Day",
  "Easter",
  "Memorial Eve & Day",
  "July Fourth Eve & Day",
  "Labor Eve & Day",
  "Thanksgiving Eve & Day",
  "Christmas Eve & Day",
];

const serviceTowns = [
  "Anderson", "Avondale", "Bellevue", "Blue Ash", "Bromley", "Cherry Grove", "Cheviot", "College Hill",
  "Cold Springs", "Colerain", "Covedale", "Covington", "Dayton (KY)", "Delhi", "Dent", "Downtown",
  "Eastside", "Erlanger", "Ft. Mitchell", "Ft. Thomas", "Fairfield", "Florence", "Forest Park", "Glendale",
  "Green Twp.", "Hebron", "Hyde Park", "Indian Hills", "Mt. Washington", "Loveland", "Madeira", "Mariemont",
  "Mason", "Montgomery", "Newport", "Newtown", "Northside", "Parkhills", "Pleasant Ridge", "St. Bernard",
  "Terrace Park", "Tri-County", "Turfway", "Turkeyfoot", "Turpinhills", "Tylersville", "Union Ctr.",
  "Villa Hills", "West Chester", "Western Hills", "Westside", "White Oak", "Wyoming", "surrounding areas",
];

const PriceTable = ({ rows, caption }: { rows: { label: string; rate: string }[]; caption?: string }) => (
  <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
    <table className="w-full text-left">
      {caption && <caption className="sr-only">{caption}</caption>}
      <tbody>
        {rows.map((row, i) => (
          <tr key={row.label} className={i % 2 === 1 ? "bg-muted/40" : "bg-card"}>
            <td className="px-5 py-4 text-sm font-medium text-ink sm:px-6 sm:text-base">{row.label}</td>
            <td className="px-5 py-4 text-right font-display text-lg font-bold text-primary sm:px-6 sm:text-xl">{row.rate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Rates = () => (
  <Layout>
    <SEO
      title="Rates | Professional Pet Nanny - Cincinnati & NKY"
      description="Transparent pet care rates for dog walking, pet sitting, Smart Puppy Plan, and overnight pet sitting in Greater Cincinnati & Northern Kentucky."
      path="/rates"
    />

    <section className="relative overflow-hidden bg-hero text-white">
      <PawTrail />
      <div className="container-px mx-auto py-20 text-center md:py-28">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">Simple, Transparent Pricing</span>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
          Rates for every <span className="text-gradient">tail & whisker.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
          Rates are per visit or per walk, never per pet. Serving Greater Cincinnati & Northern Kentucky with bonded, insured, certified care.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={SITE.newClientHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow rounded-full bg-primary-gradient px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow"
          >
            Book Now
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <Phone className="h-5 w-5" /> Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>

    {/* Dog Walking */}
    <section className="container-px mx-auto py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Dog Walking" title={<>While at Work, <span className="text-gradient">Monday - Friday</span></>} />
          <p className="mt-4 text-muted-foreground">Walks available 10am - 4pm. Rates are per walk, never per pet.</p>
          <div className="mt-8"><PriceTable rows={dogWalkRows} caption="Dog walking rates" /></div>
          <p className="mt-4 text-xs text-muted-foreground">* Weekend walks available upon request.</p>
        </div>
        <div className="reveal">
          <div className="rounded-3xl bg-soft-gradient p-8 shadow-card">
            <h3 className="flex items-center gap-2 font-display text-2xl font-bold text-ink">
              <PawPrint className="h-6 w-6 text-primary" /> Every walk includes
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {includedWalkFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Pet Sitting */}
    <section className="bg-soft-gradient">
      <div className="container-px mx-auto py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl bg-card p-8 shadow-card">
              <h3 className="font-display text-2xl font-bold text-ink">Pet varieties we care for</h3>
              <p className="mt-3 text-muted-foreground">
                Dogs, cats, reptiles, rodents, birds & fish. Larger pet families are welcome; most of the time there is no additional rate. Call the office for details.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Dogs", "Cats", "Reptiles", "Rodents", "Birds", "Fish"].map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Pet Sitting" title={<>Per visit, <span className="text-gradient">never per pet</span></>} />
            <div className="mt-8"><PriceTable rows={petSittingRows} caption="Pet sitting rates" /></div>
          </div>
        </div>
      </div>
    </section>

    {/* Smart Puppy Plan */}
    <section className="container-px mx-auto py-20">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="reveal card-hover rounded-3xl bg-primary-gradient p-8 text-primary-foreground shadow-elegant">
            <PawPrint className="h-10 w-10 opacity-80" />
            <div className="mt-6 font-display text-6xl font-black">$15</div>
            <div className="mt-1 text-lg font-semibold opacity-90">per home visit</div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
              <Clock className="h-4 w-4" /> 45 Minutes
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Smart Puppy Plan" title={<>A smart start for <span className="text-gradient">tiny bladders</span></>} />
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Designed for the busy pet lover who finds time away from home a challenge for house training. Start with 45 minutes and graduate your puppy as needed.
          </p>
          <div className="mt-8 rounded-3xl bg-card p-8 shadow-card">
            <h3 className="font-display text-xl font-bold text-ink">Two-part approach every visit</h3>
            <ol className="mt-5 space-y-4">
              {[
                "Go directly outside for exercise and elimination.",
                "Return inside to hydrate, feed and play.",
                "Go outside again for the \"bonus round\".",
                "Note is kept on the counter for you.",
                "Crate area clean-up is completed.",
                "We may call your office with the loving results.",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-ink">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">{i + 1}</span>
                  <span className="text-sm leading-relaxed sm:text-base">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Monthly discounts & invoicing</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Online credit card payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Overnight Pet Sitting */}
    <section className="bg-soft-gradient">
      <div className="container-px mx-auto py-20">
        <SectionHeading eyebrow="Overnight Pet Sitting" title={<>Sleep soundly, <span className="text-gradient">they do too</span></>} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="reveal card-hover rounded-3xl bg-card p-8 shadow-elegant">
            <div className="font-display text-5xl font-black text-primary">$115</div>
            <div className="mt-2 font-display text-2xl font-bold text-ink">Overnight stay</div>
            <p className="mt-3 text-sm text-muted-foreground">Flexible check-in, most commonly at pet dinner time. Morning check-out as needed with your Pet Play Nanny.</p>
          </div>
          <div className="reveal card-hover rounded-3xl bg-card p-8 shadow-elegant" style={{ transitionDelay: "80ms" }}>
            <div className="font-display text-5xl font-black text-primary">$145</div>
            <div className="mt-2 font-display text-2xl font-bold text-ink">Around-the-clock</div>
            <p className="mt-3 text-sm text-muted-foreground">Comprehensive care for pets who need continuous companionship and support throughout the day and night.</p>
          </div>
        </div>
        <div className="mt-10 rounded-3xl bg-card p-8 shadow-card">
          <h3 className="font-display text-xl font-bold text-ink">What's included</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Scoop, hydrate & feed all pets",
              "Medication & special diets observed",
              "Dog walking & play therapy for all pets",
              "Home care including crime-deterrent services",
              "Additional daytime visits available as needed",
              "Call ahead for quick response to immediate needs",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 rounded-2xl bg-muted/50 p-6 text-sm text-ink sm:grid-cols-2">
            <p><strong>Payment:</strong> Due 14 days in advance when available.</p>
            <p><strong>Cancellations:</strong> 50% refundable. Company restrictions apply.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Holiday rates */}
    <section className="container-px mx-auto py-20">
      <SectionHeading eyebrow="Holiday Rates" title={<>A little extra on <span className="text-gradient">busy holidays</span></>} />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="reveal card-hover rounded-3xl bg-card p-8 shadow-card">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-7 w-7 text-primary" />
            <h3 className="font-display text-2xl font-bold text-ink">Pet Sitting Holidays</h3>
          </div>
          <div className="mt-5 font-display text-5xl font-black text-primary">+$5 <span className="text-lg font-medium text-muted-foreground">per visit</span></div>
        </div>
        <div className="reveal card-hover rounded-3xl bg-card p-8 shadow-card" style={{ transitionDelay: "80ms" }}>
          <div className="flex items-center gap-3">
            <Star className="h-7 w-7 text-primary" />
            <h3 className="font-display text-2xl font-bold text-ink">Overnight Holidays</h3>
          </div>
          <div className="mt-5 font-display text-5xl font-black text-primary">+$25 <span className="text-lg font-medium text-muted-foreground">per visit</span></div>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {holidays.map((h) => (
          <span key={h} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-ink shadow-sm">{h}</span>
        ))}
      </div>
    </section>

    {/* Service area */}
    <section className="bg-soft-gradient">
      <div className="container-px mx-auto py-20">
        <SectionHeading eyebrow="Service Area" title={<>Proudly serving <span className="text-gradient">Greater Cincinnati & N. Kentucky</span></>} />
        <div className="mt-10 rounded-3xl bg-card p-8 shadow-card">
          <p className="text-sm leading-relaxed text-ink">
            {serviceTowns.join(", ")}.
          </p>
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Rates;
