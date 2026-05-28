import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { BookNowDropdown } from "@/components/BookNowDropdown";

export const StickyCTA = () => (
  <div className="fixed bottom-0 inset-x-0 z-40 border-t border-primary/20 bg-ink/95 backdrop-blur-lg shadow-elegant md:bottom-4 md:inset-x-auto md:right-4 md:left-auto md:rounded-full md:border md:px-2 md:py-2">
    <div className="container-px mx-auto flex items-center justify-between gap-2 py-2 md:p-0 md:gap-2">
      <a
        href={SITE.phoneHref}
        className="btn-glow flex flex-1 items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20 md:flex-none md:px-5"
      >
        <Phone className="h-4 w-4" />
        <span className="md:hidden">Call</span>
        <span className="hidden md:inline">{SITE.phone}</span>
      </a>
      <BookNowDropdown
        triggerClassName="btn-glow flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-gradient px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] md:flex-none md:px-6"
        showIcon={false}
      />
    </div>
  </div>
);
