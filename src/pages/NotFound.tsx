import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, Search, PawPrint, Phone, ArrowRight } from "lucide-react";

const helpfulLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Search },
  { label: "About", href: "/about", icon: PawPrint },
  { label: "Contact", href: "/contact", icon: Phone },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="Page Not Found | Professional Pet Nanny"
        description="Sorry, the page you are looking for does not exist. Return to Professional Pet Nanny's homepage."
        path={location.pathname}
      />
      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-soft-gradient py-20">
        {/* Decorative blobs */}
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 animate-blob rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 animate-blob rounded-full bg-accent/15 blur-3xl"
          style={{ animationDelay: "6s" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
          {/* Paw print illustration */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 shadow-glow">
                <PawPrint className="h-16 w-16 text-primary" />
              </div>
              {/* Orbiting mini paws */}
              <span
                className="absolute -left-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/80 text-accent-foreground shadow-sm"
                style={{ animation: "float-slow 4s ease-in-out infinite" }}
                aria-hidden="true"
              >
                <PawPrint className="h-4 w-4" />
              </span>
              <span
                className="absolute -right-2 bottom-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary shadow-sm"
                style={{ animation: "float-slow 5s ease-in-out infinite 1s" }}
                aria-hidden="true"
              >
                <PawPrint className="h-5 w-5" />
              </span>
            </div>
          </div>

          {/* 404 text */}
          <h1 className="mb-3 font-display text-[7rem] font-black leading-none tracking-tight text-gradient sm:text-[9rem]">
            404
          </h1>

          <h2 className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Looks like this page wandered off!
          </h2>

          <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-muted-foreground">
            We can&apos;t seem to find the page you&apos;re looking for — maybe it&apos;s off
            chasing squirrels. Let&apos;s get you back on track.
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="btn-glow bg-gradient-to-r from-primary to-primary-glow px-8 text-base font-semibold text-primary-foreground shadow-elegant hover:brightness-110"
          >
            <a href="/">
              Return Home <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {/* Quick links */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {helpfulLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col items-center rounded-2xl border border-border bg-card/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-card"
                >
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
