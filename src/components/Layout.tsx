import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { useReveal } from "@/hooks/useReveal";
import { ExternalLink } from "lucide-react";

export const Layout = ({ children }: { children: ReactNode }) => {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="https://buypetsittingdomains.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-primary to-primary-glow px-4 py-2 text-center text-xs font-semibold text-primary-foreground hover:brightness-110 transition"
      >
        Interested in buying a domain? View all our pet domains for sale here!{" "}
        <ExternalLink className="inline h-3 w-3 -translate-y-px" />
      </a>
      <Header />
      <main className="flex-1 pb-28 md:pb-0">{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
};
