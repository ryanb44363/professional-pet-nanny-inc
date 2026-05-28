import { Phone, MessageSquare, Mail, MapPin, Clock, UserPlus, LogIn } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { InquiryForm } from "@/components/InquiryForm";
import { PawTrail } from "@/components/PawPrint";
import { SITE } from "@/lib/site";

const Contact = () => (
  <Layout>
    <SEO
      title="Book Now | Contact Professional Pet Nanny — Cincinnati & NKY"
      description="Book pet sitting, dog walking, or overnight care. Call 513-244-7373 or request services online. Serving Greater Cincinnati & Northern Kentucky."
      path="/contact"
    />

    <section className="relative overflow-hidden bg-hero text-white">
      <PawTrail />
      <div className="container-px mx-auto py-16 pb-28 text-center md:pb-32">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">Book Now</span>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-black leading-[1] sm:text-6xl">
          Let's plan <span className="text-gradient">happy days at home.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Call, text, or send us a quick request — we'll reply within one business day to schedule your free meet-and-greet.
        </p>
      </div>
    </section>

    <section className="container-px mx-auto -mt-16 grid gap-6 pb-20 lg:grid-cols-3">
      {[
        { i: Phone, t: "Call us", v: SITE.phone, h: SITE.phoneHref },
        { i: MessageSquare, t: "Text us", v: "Send a quick text", h: SITE.smsHref },
        { i: Mail, t: "Email", v: "hello@professionalpetnanny.com", h: "mailto:hello@professionalpetnanny.com" },
      ].map((c) => (
        <a key={c.t} href={c.h} className="card-hover flex items-center gap-4 rounded-3xl bg-card p-6 shadow-elegant">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-glow">
            <c.i className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.t}</div>
            <div className="font-display text-lg font-bold text-ink">{c.v}</div>
          </div>
        </a>
      ))}
    </section>

    {/* Portal booking */}
    <section className="container-px mx-auto pb-20">
      <div className="grid gap-6 md:grid-cols-2">
        <a
          href={SITE.newClientHref}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover group flex items-center gap-5 rounded-3xl bg-card p-8 shadow-elegant transition hover:border-primary/30"
        >
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-glow transition group-hover:scale-[1.04]">
            <UserPlus className="h-7 w-7" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">New Client</div>
            <div className="mt-1 font-display text-xl font-bold text-ink">Create your account</div>
            <div className="mt-1 text-sm text-muted-foreground">Set up your profile and book your first visit.</div>
          </div>
        </a>
        <a
          href={SITE.existingClientHref}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover group flex items-center gap-5 rounded-3xl bg-card p-8 shadow-elegant transition hover:border-primary/30"
        >
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-glow transition group-hover:scale-[1.04]">
            <LogIn className="h-7 w-7" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Existing Client</div>
            <div className="mt-1 font-display text-xl font-bold text-ink">Log in to portal</div>
            <div className="mt-1 text-sm text-muted-foreground">Manage visits, update info, and request care.</div>
          </div>
        </a>
      </div>
    </section>

    <section className="container-px mx-auto pb-24">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-3xl bg-card p-8 shadow-elegant md:p-10">
            <h2 className="font-display text-3xl font-bold text-ink">Request services</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your pet and the dates you need care. We'll be in touch shortly.
            </p>
            <div className="mt-8"><InquiryForm /></div>
          </div>
        </div>

        <aside className="space-y-4 lg:col-span-2">
          <div className="card-hover rounded-3xl bg-soft-gradient p-7 shadow-card">
            <h3 className="font-display text-xl font-bold text-ink">Online booking</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Online booking is accurate, simple & convenient. Once we receive your request, we'll match you with a regular nanny and schedule a complimentary meet-and-greet.
            </p>
          </div>
          <div className="card-hover rounded-3xl bg-card p-7 shadow-card">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <MapPin className="h-5 w-5 text-primary" /> Service area
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.serviceArea}</p>
          </div>
          <div className="card-hover rounded-3xl bg-card p-7 shadow-card">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <Clock className="h-5 w-5 text-primary" /> Hours
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Office: Mon–Fri, 9am–5pm<br />Pet visits: 7 days a week, sunup to sundown<br />Overnights available year-round.</p>
          </div>
        </aside>
      </div>
    </section>
  </Layout>
);
export default Contact;
