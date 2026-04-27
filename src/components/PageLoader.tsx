import { useEffect, useState } from "react";
import { PawPrint } from "@/components/PawPrint";

interface Props {
  /** Minimum visible duration in ms */
  minDuration?: number;
}

/**
 * Branded full-screen paw-print loader.
 * Shows on initial mount, fades out once window load fires (or minDuration elapses).
 */
export const PageLoader = ({ minDuration = 900 }: Props) => {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDuration - elapsed);
      window.setTimeout(() => {
        setHiding(true);
        window.setTimeout(() => setVisible(false), 500);
      }, wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, [minDuration]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading Professional Pet Nanny"
      className={`fixed inset-0 z-[100] grid place-items-center bg-hero text-white transition-opacity duration-500 ${
        hiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-end gap-3">
          {[0, 1, 2, 3].map((i) => (
            <PawPrint
              key={i}
              className="h-10 w-10 text-primary-glow drop-shadow-[0_0_18px_hsl(var(--primary-glow)/0.6)]"
              // staggered bounce
              // @ts-ignore inline style
              style={{
                animation: "loading-paw 1.1s ease-in-out infinite",
                animationDelay: `${i * 0.18}s`,
                transform: `rotate(${i % 2 === 0 ? -12 : 12}deg)`,
              }}
            />
          ))}
        </div>
        <div className="text-center">
          <div className="font-display text-2xl font-black tracking-tight">Professional Pet Nanny</div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            We come to play…
          </div>
        </div>
      </div>
    </div>
  );
};
