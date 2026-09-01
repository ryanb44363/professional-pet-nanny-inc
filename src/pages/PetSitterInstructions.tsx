import { ClipboardList, KeyRound, Phone, Home, HeartPulse, CalendarCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { PawTrail } from "@/components/PawPrint";
import { SITE } from "@/lib/site";

const sections = [
  {
    i: ClipboardList,
    t: "Before You Leave",
    items: [
      "Confirm your reservation dates and visit times in your TimeToPet portal.",
      "Update your pet's profile: feeding schedule, medications, and routines.",
      "Leave enough food, treats, litter, and medications for your whole trip.",
      "Note any recent changes in behavior or health we should know about.",
    ],
  },
  {
    i: KeyRound,
    t: "Keys & Access",
    items: [
      "Provide two tested keys, or a lockbox/door code in your portal.",
      "Tell us about alarms, gates, and which doors to use.",
      "Hide-a-key instructions can be stored securely in your client profile.",
    ],
  },
  {
    i: Phone,
    t: "Emergency Contacts",
    items: [
      "Add your veterinarian's name, clinic, and phone number to your profile.",
      "List a local emergency contact who can make decisions if you're unreachable.",
      "Include your travel contact details and expected return time.",
    ],
  },
  {
    i: Home,
    t: "Home Prep",
    items: [
      "Set thermostat to a comfortable temperature for your pets.",
      "Secure trash, toxins, and anything curious pets might get into.",
      "Leave cleaning supplies and extra towels where we can find them.",
      "Let us know about house quirks (sticky doors, leaky faucets, breaker box).",
    ],
  },
  {
    i: HeartPulse,
    t: "Health & Medications",
    items: [
      "Keep medications in clearly labeled containers with dosage instructions.",
      "Make sure vaccination records are current in your pet's profile.",
      "Tell us about mobility issues, anxieties, or hiding spots.",
    ],
  },
  {
    i: CalendarCheck,
    t: "When You Return",
    items: [
      "Text or message us through the portal when you're home safe.",
      "Review your visit reports and photos in TimeToPet.",
      "Book your next reservation early, especially around holidays.",
    ],
  },
];

const PetSitterInstructions = () => (
  <Layout>
    <SEO
      title="Pet Sitter Instructions | Preparing for Your Pet Care Visits"
      description="How to prepare your home and pets for Professional Pet Nanny visits: keys, feeding instructions, emergency contacts, medications, and more."
      path="/pet-sitter-instructions"
    />

    <section className="relative overflow-hidden bg-hero text-white">
      <PawTrail />
      <div className="container-px mx-auto py-20 text-center">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">Client Guide</span>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-black leading-[1] sm:text-6xl">
          Pet sitter <span className="text-gradient">instructions</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
          A little prep makes every visit smoother. Here's how to set your pets (and your nanny) up for success.
        </p>
      </div>
    </section>

    <section className="container-px mx-auto py-20">
      <SectionHeading eyebrow="Checklist" title={<>Everything we need, <span className="text-gradient">before you go</span></>} />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s, i) => (
          <div key={s.t} className="reveal card-hover rounded-2xl border border-border bg-card p-6 shadow-card" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-gradient text-primary-foreground shadow-glow">
              <s.i className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.t}</h3>
            <ul className="mt-3 space-y-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-muted-foreground">
        Questions? Call or text us at <a href={SITE.phoneHref} className="font-semibold text-primary hover:underline">{SITE.phone}</a>.
      </p>
    </section>

    <CTASection />
  </Layout>
);

export default PetSitterInstructions;
