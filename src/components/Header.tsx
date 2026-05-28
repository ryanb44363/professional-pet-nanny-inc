import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { PhoneActions } from "@/components/PhoneActions";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container-px mx-auto flex items-center justify-between py-4">
        <Link to="/" className="group flex items-center" aria-label="Professional Pet Nanny home">
          <img src={logo} alt="Professional Pet Nanny" className="h-[5.25rem] w-auto sm:h-24 transition-transform group-hover:scale-[1.03]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive ? "bg-primary/10 text-primary" : "text-ink/80 hover:bg-primary/5 hover:text-primary"
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <PhoneActions
            triggerClassName="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink hover:text-primary"
          />

          <a
            href={SITE.existingClientHref}
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink/70 hover:text-primary transition"
          >
            Existing Customer
          </a>
          <a
            href={SITE.newClientHref}
            className="btn-glow rounded-full bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            New Customer
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden animate-fade-in">
          <nav className="container-px mx-auto flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-4 py-3 text-base font-medium",
                    isActive ? "bg-primary/10 text-primary" : "text-ink/80 hover:bg-primary/5"
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <PhoneActions
              align="start"
              triggerClassName="mt-2 flex w-full items-center gap-2 rounded-xl bg-secondary px-4 py-3 text-base font-semibold text-ink"
              icon={<Phone className="h-4 w-4 text-primary" />}
            />

            <div className="mt-2 flex flex-col gap-2 px-4">
              <a
                href={SITE.existingClientHref}
                className="w-full rounded-full bg-secondary px-5 py-3 text-center text-sm font-semibold text-ink transition hover:bg-secondary/80"
              >
                Existing Customer
              </a>
              <a
                href={SITE.newClientHref}
                className="btn-glow w-full rounded-full bg-primary-gradient px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-glow"
              >
                New Customer
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
