import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reveal-on-scroll: any element with class `.reveal` fades + slides in
 * once it enters the viewport. Re-scans on route changes and watches
 * for dynamically added nodes via MutationObserver.
 */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
        if (prefersReduced) {
          el.classList.add("is-visible");
        } else {
          io.observe(el);
        }
      });
    };

    observe();

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) observe(node as Element);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);
}
