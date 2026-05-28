import google from "@/assets/review-google.svg";
import yelp from "@/assets/review-yelp.svg";
import facebook from "@/assets/review-facebook.svg";
import bbb from "@/assets/review-bbb.svg";
import angies from "@/assets/review-angieslist.png";

const badges = [
  { src: google, alt: "Google Reviews", href: "https://www.google.com/search?q=Professional+Pet+Nanny+Cincinnati+reviews" },
  { src: yelp, alt: "Yelp", href: "https://www.yelp.com/search?find_desc=Professional+Pet+Nanny&find_loc=Cincinnati%2C+OH" },
  { src: facebook, alt: "Facebook Reviews", href: "https://www.facebook.com/" },
  { src: bbb, alt: "BBB Accredited", href: "https://www.bbb.org/" },
  { src: angies, alt: "Angie's List", href: "https://www.angi.com/" },
];

type Props = { variant?: "light" | "dark"; className?: string };

export const ReviewBadges = ({ variant = "light", className = "" }: Props) => (
  <div className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 ${className}`}>
    {badges.map((b) => (
      <a
        key={b.alt}
        href={b.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${b.alt} - read our reviews`}
        className={`flex h-12 items-center justify-center rounded-xl px-3 transition hover:scale-105 ${
          variant === "dark" ? "bg-white/95 shadow-card" : "bg-card shadow-card"
        }`}
      >
        <img src={b.src} alt={b.alt} className="h-7 w-auto object-contain" loading="lazy" />
      </a>
    ))}
  </div>
);
