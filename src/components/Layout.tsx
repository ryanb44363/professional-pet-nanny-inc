import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { useReveal } from "@/hooks/useReveal";
import { ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { useReveal } from "@/hooks/useReveal";

export const Layout = ({ children }: { children: ReactNode }) => {
  useReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-28 md:pb-0">{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
};
