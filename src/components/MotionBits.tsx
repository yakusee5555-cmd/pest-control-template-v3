import { useEffect, useRef, useState } from "react";

/* ---------- marquee strip: services + towns, always running ---------- */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-cream/10 bg-ink py-4" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-sm uppercase tracking-[0.25em] text-cream/70">{t}</span>
            <span className="text-forest">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- self-drawing branch divider ---------- */
export function DrawDivider() {
  return (
    <div className="reveal draw bg-ink px-6 py-6 md:py-10" aria-hidden="true">
      <svg
        viewBox="0 0 1200 80"
        className="mx-auto h-16 w-full max-w-5xl md:h-20"
        fill="none"
        style={{ ["--dash" as string]: 1400 }}
      >
        <path
          d="M0 40 C 150 40, 200 10, 320 22 S 480 60, 600 40 S 760 12, 880 30 S 1050 55, 1200 40"
          stroke="#059669"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M320 22 C 340 8, 360 6, 380 12"
          stroke="#059669"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M880 30 C 900 44, 920 46, 940 40"
          stroke="#059669"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="600" cy="40" r="5" fill="#059669" />
      </svg>
    </div>
  );
}

/* ---------- animated counter: counts up when scrolled into view ---------- */
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const formatted = val.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ---------- scroll cue: animated line + "scroll" label ---------- */
export function ScrollCue() {
  return (
    <div className="hero-fade pointer-events-none absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" style={{ animationDelay: "1.6s" }}>
      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">Scroll</span>
      <span className="relative block h-12 w-px overflow-hidden bg-white/15">
        <span className="cue-line absolute inset-0 bg-white/70" />
      </span>
    </div>
  );
}
