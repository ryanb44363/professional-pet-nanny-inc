import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CTASection } from "@/components/CTASection";
import { BLOG_POSTS, getPost } from "@/data/blog";
import NotFound from "@/pages/NotFound";
import { SITE } from "@/lib/site";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <NotFound />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Layout>
      <SEO
        title={`${post.title} | Professional Pet Nanny Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: `${SITE.url}${post.image}`,
          datePublished: post.date,
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name },
          mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
        }}
      />

      <article>
        <header className="relative isolate overflow-hidden bg-hero pt-16 pb-20 text-white md:pt-20 md:pb-28">
          <div className="absolute inset-0 opacity-30">
            <img src={post.image} alt="" className="h-full w-full object-cover blur-2xl" aria-hidden />
          </div>
          <div className="container-px relative mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur">
              {post.category}
            </span>
            <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-widest text-white/70">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{formatDate(post.date)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readMinutes} min read</span>
            </div>
          </div>
        </header>

        <div className="container-px mx-auto max-w-3xl -mt-12 md:-mt-16">
          <div className="overflow-hidden rounded-3xl border-4 border-white shadow-elegant">
            <img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="container-px mx-auto max-w-3xl py-12 md:py-16">
          <div
            className="prose prose-lg max-w-none text-ink prose-headings:font-display prose-headings:font-black prose-h2:mt-12 prose-h2:text-3xl prose-h2:text-ink prose-p:leading-relaxed prose-p:text-ink/85 prose-a:font-semibold prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-ink prose-li:text-ink/85 prose-ul:my-4 prose-ol:my-4"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        {related.length > 0 && (
          <section className="border-t border-border bg-secondary/40 py-16">
            <div className="container-px mx-auto max-w-5xl">
              <h2 className="font-display text-3xl font-black text-ink">Keep reading</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-elegant"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={r.image} alt={r.imageAlt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{r.category}</span>
                      <h3 className="mt-2 font-display text-xl font-black text-ink">{r.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{r.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTASection />
    </Layout>
  );
};

export default BlogPost;
