import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CTASection } from "@/components/CTASection";
import { PawTrail } from "@/components/PawPrint";
import { BLOG_POSTS } from "@/data/blog";
import { SITE } from "@/lib/site";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const Blog = () => {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <Layout>
      <SEO
        title="Blog | Trends, Tips & Tales from Professional Pet Nanny"
        description="Trendy, evidence-based pet care articles from Cincinnati's most-trusted in-home pet sitters — covering puppies, seniors, cats, sustainability, and the modern dog walk."
        path="/blog"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${SITE.shortName} Blog`,
          url: `${SITE.url}/blog`,
          publisher: { "@type": "Organization", name: SITE.name },
        }}
      />

      <section className="relative isolate overflow-hidden bg-hero py-20 text-white md:py-28">
        <PawTrail />
        <div className="container-px mx-auto max-w-4xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            The Pet Nanny Journal
          </span>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] sm:text-6xl">
            Trends, tips & <span className="text-gradient bg-clip-text">tail-wagging tales.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Evidence-based, judgment-free pet care from the team trusted by thousands of {SITE.serviceArea} families.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto py-16 md:py-20">
        <Link
          to={`/blog/${featured.slug}`}
          className="group grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-elegant md:grid-cols-2"
        >
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
            <img
              src={featured.image}
              alt={featured.imageAlt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              loading="eager"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Featured · {featured.category}
            </span>
            <h2 className="font-display text-3xl font-black leading-tight text-ink md:text-4xl">
              {featured.title}
            </h2>
            <p className="text-base text-muted-foreground">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{formatDate(featured.date)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readMinutes} min read</span>
            </div>
            <span className="inline-flex items-center gap-2 font-semibold text-primary">
              Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-elegant"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col gap-3 p-7">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                  {post.category}
                </span>
                <h3 className="font-display text-2xl font-black leading-tight text-ink">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{formatDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readMinutes} min</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Blog;
