import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SITE } from "@/lib/site";

type Section = { h: string; p: string[] };

const policies: Record<string, { title: string; intro: string; sections: Section[] }> = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how Professional Pet Nanny ('we', 'us', 'our') collects, uses, and protects the information you provide when using our website and services.",
    sections: [
      {
        h: "Information We Collect",
        p: [
          "We collect information you voluntarily provide through inquiry forms, booking requests, phone calls, emails, and our client portal (Time To Pet). This may include your name, address, phone number, email, pet details, veterinary contact, home access instructions, and emergency contacts.",
          "We may automatically collect limited technical data (IP address, browser type, pages viewed) through standard web analytics for the purpose of improving the site.",
        ],
      },
      {
        h: "How We Use Information",
        p: [
          "Information is used solely to schedule and deliver pet-care services, communicate with you, process payments through our third-party portal, maintain service records, and comply with legal obligations.",
          "We do not sell, rent, or trade your personal information to third parties.",
        ],
      },
      {
        h: "Third-Party Services",
        p: [
          "We use Time To Pet (timetopet.com) for scheduling, client communication, and payment processing. Your information submitted to that portal is subject to their privacy policy and terms.",
          "We are not responsible for the privacy practices of any third-party websites linked from our site.",
        ],
      },
      {
        h: "Data Security",
        p: [
          "We use commercially reasonable safeguards to protect personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
        ],
      },
      {
        h: "Cookies",
        p: [
          "Our site may use cookies and similar technologies for basic functionality and analytics. You may disable cookies in your browser settings; some features may not function properly as a result.",
        ],
      },
      {
        h: "Children's Privacy",
        p: [
          "Our services are directed to adults. We do not knowingly collect personal information from children under 13.",
        ],
      },
      {
        h: "Your Choices",
        p: [
          "You may request access to, correction of, or deletion of your personal information by contacting us at the address below. We will respond within a reasonable time, subject to legal recordkeeping requirements.",
        ],
      },
      {
        h: "Changes to This Policy",
        p: [
          "We may update this Privacy Policy at any time. Changes are effective when posted to this page. Continued use of our website or services constitutes acceptance of the updated policy.",
        ],
      },
      {
        h: "Contact",
        p: [
          `Questions? Email hello@professionalpetnanny.com or call ${SITE.phone}.`,
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro:
      "By accessing this website or booking services with Professional Pet Nanny, you agree to these Terms of Service. If you do not agree, do not use this site or our services.",
    sections: [
      {
        h: "Services",
        p: [
          "We provide in-home pet care including dog walking, pet sitting, overnight care, puppy care, and short-notice/emergency visits within our stated service area. All services are subject to availability, scheduling, and a signed service agreement.",
        ],
      },
      {
        h: "Booking, Payment & Cancellation",
        p: [
          "All bookings are scheduled through our client portal. Payment terms, deposits, holiday rates, and cancellation windows are described in your service agreement. Late cancellations and holiday bookings may be non-refundable.",
        ],
      },
      {
        h: "Client Responsibilities",
        p: [
          "You represent that you are the lawful owner or authorized caretaker of the pet(s) and the home where services are provided. You agree to provide accurate health, behavioral, vaccination, and emergency information for each pet, working keys/access codes, adequate food, supplies, and a safe environment.",
          "You agree to disclose any history of aggression, bite incidents, medical conditions, or behavioral issues. Failure to disclose voids any liability on our part for resulting incidents.",
        ],
      },
      {
        h: "Veterinary Care & Emergencies",
        p: [
          "You authorize Professional Pet Nanny to seek emergency veterinary care for your pet if, in our sole judgment, such care is needed. You agree to reimburse all veterinary, transportation, and related costs. We will make reasonable efforts to contact you and/or your designated emergency contact first when practicable.",
        ],
      },
      {
        h: "Assumption of Risk",
        p: [
          "Pet care inherently involves risks including but not limited to injury, illness, escape, allergic reaction, property damage, and death. You voluntarily assume all such risks. Our services are not a substitute for professional veterinary, training, or behavioral care.",
        ],
      },
      {
        h: "Limitation of Liability",
        p: [
          "To the fullest extent permitted by law, Professional Pet Nanny, its owners, employees, contractors, and affiliates shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, or for any loss of profits, data, pets, or property, arising from or related to our services or website.",
          "Our total aggregate liability for any claim arising out of or related to our services shall not exceed the total fees actually paid by you to us for the specific service giving rise to the claim.",
        ],
      },
      {
        h: "Indemnification",
        p: [
          "You agree to indemnify, defend, and hold harmless Professional Pet Nanny and its representatives from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to your pet(s), your property, your breach of these Terms, or any acts of your pet(s) toward our staff or third parties (including bites, scratches, and property damage).",
        ],
      },
      {
        h: "Property Access",
        p: [
          "You authorize us and our authorized staff to enter your property for the purpose of providing services. We are not responsible for damage caused by faulty locks, alarms, plumbing, appliances, or pre-existing conditions of the home.",
        ],
      },
      {
        h: "Photos & Testimonials",
        p: [
          "We may share photos of your pet on our website and social media for promotional purposes unless you opt out in writing. Pet first names only may be used; no home addresses or identifying client information will be shared.",
        ],
      },
      {
        h: "Force Majeure",
        p: [
          "We are not liable for failure to perform due to causes beyond our reasonable control, including weather, natural disasters, illness, pandemic, utility outages, government action, or other emergencies.",
        ],
      },
      {
        h: "Governing Law & Dispute Resolution",
        p: [
          "These Terms are governed by the laws of the State of Ohio, without regard to conflict-of-law principles. Any dispute shall first be addressed through good-faith informal negotiation. If unresolved, disputes shall be submitted to binding arbitration in Hamilton County, Ohio, on an individual basis. You waive any right to participate in a class action.",
        ],
      },
      {
        h: "Severability",
        p: [
          "If any provision of these Terms is held unenforceable, the remaining provisions shall remain in full force and effect.",
        ],
      },
      {
        h: "Changes",
        p: [
          "We may update these Terms at any time. Continued use of our website or services constitutes acceptance of the updated Terms.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Website Disclaimer",
    intro:
      "The information on this website is provided for general informational purposes only. While we strive for accuracy, we make no warranties of any kind, express or implied, regarding completeness, accuracy, reliability, or availability of the website or its content.",
    sections: [
      {
        h: "No Professional Advice",
        p: [
          "Content on this site is not veterinary, medical, training, legal, or behavioral advice. Always consult a qualified veterinarian or professional for advice specific to your pet.",
        ],
      },
      {
        h: "Service Availability",
        p: [
          "Services, pricing, coverage areas, and offerings shown on this site are subject to change without notice and are subject to availability and a signed service agreement.",
        ],
      },
      {
        h: "External Links",
        p: [
          "Our site may link to third-party websites (including our scheduling portal). We do not control and are not responsible for the content, accuracy, or practices of those sites.",
        ],
      },
      {
        h: "Testimonials",
        p: [
          "Testimonials reflect individual experiences and are not a guarantee of results. Your experience may vary.",
        ],
      },
      {
        h: "Limitation",
        p: [
          "In no event shall Professional Pet Nanny be liable for any loss or damage arising from use of, or reliance on, information presented on this website.",
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    intro:
      "Professional Pet Nanny is committed to making our website accessible to the widest possible audience. We strive to follow WCAG 2.1 AA guidelines and continually improve the user experience for everyone.",
    sections: [
      {
        h: "Feedback",
        p: [
          `If you encounter an accessibility barrier on our site, please contact us at hello@professionalpetnanny.com or ${SITE.phone} so we can address it.`,
        ],
      },
    ],
  },
};

type Props = { kind: keyof typeof policies };

const Legal = ({ kind }: Props) => {
  const data = policies[kind];
  const path = `/${kind === "disclaimer" ? "disclaimer" : kind === "accessibility" ? "accessibility" : kind === "terms" ? "terms" : "privacy"}`;
  return (
    <Layout>
      <SEO title={`${data.title} | ${SITE.name}`} description={data.intro.slice(0, 155)} path={path} />
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="container-px mx-auto py-16 text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">Legal</span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-black leading-[1.05] sm:text-5xl">{data.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-3xl py-16">
        <p className="text-base leading-relaxed text-foreground/80">{data.intro}</p>
        <div className="mt-10 space-y-8">
          {data.sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl font-bold text-foreground">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="mt-3 text-base leading-relaxed text-foreground/75">{para}</p>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-foreground/50">
          This page is provided for general informational purposes and does not constitute legal advice.
        </p>
      </section>
    </Layout>
  );
};

export const PrivacyPage = () => <Legal kind="privacy" />;
export const TermsPage = () => <Legal kind="terms" />;
export const DisclaimerPage = () => <Legal kind="disclaimer" />;
export const AccessibilityPage = () => <Legal kind="accessibility" />;
