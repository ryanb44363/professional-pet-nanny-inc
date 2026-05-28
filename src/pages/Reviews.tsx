import { useMemo, useState } from "react";
import { Star, Quote, Search } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CTASection } from "@/components/CTASection";
import { PawTrail } from "@/components/PawPrint";
import { ReviewBadges } from "@/components/ReviewBadges";
import reviewsData from "@/data/reviews.json";

type Review = { name: string; stars: number; text: string; date: string };
const ALL: Review[] = reviewsData as Review[];

const PAGE_SIZE = 24;

const Reviews = () => {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL;
    return ALL.filter(
      (r) => r.name.toLowerCase().includes(q) || r.text.toLowerCase().includes(q)
    );
  }, [query]);

  const avg = useMemo(
    () => ALL.reduce((s, r) => s + (r.stars || 5), 0) / ALL.length,
    []
  );

  return (
    <Layout>
      <SEO
        title="Client Reviews | Professional Pet Nanny Cincinnati"
        description={`Read ${ALL.length}+ verified reviews from Cincinnati & Northern Kentucky pet parents. ${avg.toFixed(2)}-star average for in-home pet sitting, dog walking & overnight care.`}
        path="/reviews"
      />

      <section className="relative overflow-hidden bg-hero text-white">
        <PawTrail />
        <div className="container-px mx-auto py-20 text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
            Client Reviews
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-black leading-[1] sm:text-6xl">
            Loved by <span className="text-gradient">Cincinnati pet parents.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            {ALL.length} verified reviews. {avg.toFixed(2)}-star average. Two decades of tail wags.
          </p>
          <div className="mt-6 flex items-center justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <ReviewBadges variant="dark" className="mt-8" />
        </div>
      </section>
      </section>

      <section className="container-px mx-auto py-16">
        <div className="mx-auto mb-10 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Search reviews by name or keyword..."
              className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm text-ink shadow-card outline-none transition focus:border-primary"
            />
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Showing {Math.min(visible, filtered.length)} of {filtered.length} reviews
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, visible).map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              className="card-hover relative rounded-3xl bg-card p-7 shadow-card"
            >
              <Quote className="absolute -top-4 left-6 h-10 w-10 rounded-2xl bg-primary-gradient p-2 text-primary-foreground shadow-glow" />
              <div className="mt-3 flex gap-0.5 text-accent">
                {Array.from({ length: r.stars || 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 whitespace-pre-line text-sm leading-relaxed text-ink">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div className="text-sm font-bold text-ink">{r.name}</div>
                {r.date && (
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        {visible < filtered.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="rounded-full bg-primary-gradient px-8 py-3 text-sm font-bold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Load more reviews
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground">No reviews match your search.</p>
        )}
      </section>

      <CTASection />
    </Layout>
  );
};

export default Reviews;
