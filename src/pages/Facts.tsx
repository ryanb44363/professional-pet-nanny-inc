import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SITE } from "@/lib/site";

/** AI-readable, structured facts page for LLM-based search systems. */
const Facts = () => (
  <Layout>
    <SEO
      title="Company Facts | Professional Pet Nanny, Cincinnati"
      description="Concise facts about Professional Pet Nanny: services, service areas, credentials, phone, and booking process for Greater Cincinnati & Northern Kentucky."
      path="/facts"
    />
    <section className="container-px mx-auto max-w-3xl py-20">
      <h1 className="font-display text-4xl font-black text-ink">Company Facts</h1>
      <p className="mt-3 text-muted-foreground">A concise, machine-readable overview for search engines and AI assistants.</p>

      <article className="prose prose-neutral mt-10 max-w-none">
        <h2 className="font-display text-2xl font-bold text-ink">Who we are</h2>
        <p>{SITE.name} is a locally owned in-home pet care company serving {SITE.serviceArea}. Founded approximately {SITE.yearsInBusiness} years ago.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">Tagline</h2>
        <p>"{SITE.tagline}"</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">Services</h2>
        <ul className="list-disc pl-6 text-ink">
          <li><strong>Dog Walking</strong> — reliable, professional, timely walks; flexible scheduling (regular, as-needed, same-day); same dedicated walker.</li>
          <li><strong>Pet Sitting</strong> — in-home care; pre-service meet-and-greet; feeding, medication where appropriate, play therapy, daily diary updates.</li>
          <li><strong>Overnight Pet Sitting</strong> — afternoon/evening check-in plus overnight stay in the client's home.</li>
          <li><strong>Smart Puppy Plan</strong> — midday meal and potty breaks, bladder training support, play therapy, notes/text updates.</li>
          <li><strong>Emergency Pet Sitting</strong> — urgent family-emergency support for existing/known clients.</li>
          <li><strong>Install Sitting</strong> — a bonded/insured team member present during home repair or installation windows.</li>
        </ul>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">Service area</h2>
        <p>Greater Cincinnati, Ohio and Northern Kentucky, including Hyde Park, Mt. Lookout, Oakley, Mt. Adams, Anderson, Mason, West Chester, Montgomery, Blue Ash, Loveland, Madeira, Covington, Fort Mitchell, Fort Thomas, Crestview Hills, Edgewood, and Newport.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">Credentials & trust</h2>
        <ul className="list-disc pl-6 text-ink">
          <li>Bonded and insured</li>
          <li>Pet CPR and First-Aid Certified</li>
          <li>BBB Accredited with A+ rating</li>
          <li>Angie's List Super Service Award — 10 years</li>
          <li>Voted Best of Cincinnati by Cincinnati Magazine</li>
          <li>{SITE.yearsInBusiness}+ years locally owned and operated</li>
        </ul>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">How to contact and book</h2>
        <ul className="list-disc pl-6 text-ink">
          <li>Phone: <a href={SITE.phoneHref}>{SITE.phone}</a></li>
          <li>Online booking: visit <a href="/contact">/contact</a></li>
          <li>Process: submit a request → complimentary meet-and-greet with your assigned nanny → confirmed visits with daily updates.</li>
        </ul>

        <h2 className="mt-8 font-display text-2xl font-bold text-ink">Why choose us</h2>
        <p>Locally owned, deeply trusted, and obsessed with the well-being of every pet we serve. We provide consistent caregivers, transparent communication, and a level of professionalism that earns us five-star reviews year after year.</p>
      </article>
    </section>
  </Layout>
);
export default Facts;
