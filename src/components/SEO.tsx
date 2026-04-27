import { useEffect } from "react";
import { SITE } from "@/lib/site";

interface Props {
  title: string;
  description: string;
  path?: string;
  schema?: object | object[];
}

export const SEO = ({ title, description, path = "/", schema }: Props) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `${SITE.url}${path}`, "property");
    setMeta("og:image", `${SITE.url}/og-image.png`, "property");
    setMeta("twitter:image", `${SITE.url}/og-image.png`);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE.url}${path}`);

    document.querySelectorAll('script[data-seo-schema]').forEach((s) => s.remove());
    if (schema) {
      const arr = Array.isArray(schema) ? schema : [schema];
      arr.forEach((s) => {
        const tag = document.createElement("script");
        tag.type = "application/ld+json";
        tag.setAttribute("data-seo-schema", "true");
        tag.text = JSON.stringify(s);
        document.head.appendChild(tag);
      });
    }
  }, [title, description, path, schema]);

  return null;
};
