import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV } from "@/lib/site";
import { PawPrint } from "@/components/PawPrint";

export const Footer = () => (
  <footer className="relative mt-24 overflow-hidden bg-ink text-white/85">
    <div className="absolute -top-24 left-1/3 h-64 w-64 animate-blob bg-primary/30 blur-3xl" aria-hidden />
    <div className="container-px mx-auto grid gap-10 py-16 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary-gradient">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold text-white">Professional Pet Nanny</span>
        </div>
        <p className="mt-4 text-sm text-white/70">{SITE.tagline}</p>
        <p className="mt-2 text-xs text-white/50">Bonded & Insured • Pet CPR & First-Aid Certified • BBB A+</p>
      </div>

      <div>
        <h4 className="mb-3 font-display text-base font-bold text-white">Explore</h4>
        <ul className="space-y-2 text-sm">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="text-white/70 transition hover:text-primary-glow">{n.label}</Link>
            </li>
          ))}
          <li><Link to="/reviews" className="text-white/70 transition hover:text-primary-glow">Reviews</Link></li>
          <li><Link to="/facts" className="text-white/70 transition hover:text-primary-glow">Company Facts</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-3 font-display text-base font-bold text-white">Services</h4>
        <ul className="space-y-2 text-sm text-white/70">
          <li>Dog Walking</li>
          <li>Pet Sitting</li>
          <li>Overnight Pet Sitting</li>
          <li>Smart Puppy Plan</li>
          <li>Emergency Pet Sitting</li>
          {/* Install Sitting removed */}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 font-display text-base font-bold text-white">Contact</h4>
        <ul className="space-y-3 text-sm">
          <li><a href={SITE.phoneHref} className="flex items-center gap-2 text-white/80 hover:text-primary-glow"><Phone className="h-4 w-4" />{SITE.phone}</a></li>
          <li><a href="mailto:hello@professionalpetnanny.com" className="flex items-center gap-2 text-white/80 hover:text-primary-glow"><Mail className="h-4 w-4" />hello@professionalpetnanny.com</a></li>
          <li className="flex items-center gap-2 text-white/70"><MapPin className="h-4 w-4" />{SITE.serviceArea}</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-px mx-auto flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <li><Link to="/privacy" className="hover:text-primary-glow">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-primary-glow">Terms of Service</Link></li>
          <li><Link to="/disclaimer" className="hover:text-primary-glow">Disclaimer</Link></li>
          <li><Link to="/accessibility" className="hover:text-primary-glow">Accessibility</Link></li>
        </ul>
        <p>Locally owned & operated for {SITE.yearsInBusiness}+ years.</p>
      </div>
    </div>
  </footer>
);
