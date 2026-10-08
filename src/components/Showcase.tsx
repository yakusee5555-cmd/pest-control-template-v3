import { useEffect, useRef, useState } from "react";
import { GLASS_CARDS, LIST_ROWS, SERVICE_CARDS, WORK_SHOTS } from "../data";

/* ---------- Section 2: stacked headline + floating cards (like "Homes. Loans. Agents. Tours.") ---------- */
export function Stacked() {
  const floats = ["floaty", "floaty-2", "floaty-3"];
  const tilts = ["rotate-[1.5deg]", "rotate-[-1.2deg]", "rotate-[1deg]", "rotate-[-1.5deg]", "rotate-[1.2deg]", "rotate-[-1deg]"];
  return (
    <section id="services" className="relative overflow-hidden bg-ink py-12 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
          What we do
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal max-w-xl font-display text-3xl uppercase leading-[1.05] text-cream md:text-5xl md:leading-[1.02]">
            The right treatment for every pest in your home.
          </h2>
          <p className="reveal max-w-sm text-base leading-relaxed text-cream/55">
            Considered pest control for homeowners who value a pest-free home,
            honest pricing, and techs who show up on time.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {SERVICE_CARDS.map((c, i) => (
            <article
              key={c.title}
              className={`reveal ${floats[i % 3]} ${tilts[i % 6]} overflow-hidden rounded-2xl bg-cream shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:rotate-0`}
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#059669] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cream">
                  From {c.from}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold tracking-[0.2em] text-charcoal/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl uppercase text-charcoal">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{c.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-forest transition-all hover:gap-2"
                >
                  Ask about this service <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 3: dark numbered list with cursor-following image preview ---------- */
function ServiceRow({ row, i }: { row: (typeof LIST_ROWS)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="dark-row reveal group flex items-center gap-5 border-t border-cream/15 py-6 md:gap-10 md:py-8"
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      <span className="font-display text-sm text-cream/40 md:text-base">
        {String(i + 1).padStart(2, "0")}
      </span>
      <img
        src={row.img}
        alt=""
        loading="lazy"
        className="h-14 w-14 rounded-xl object-cover md:hidden"
      />
      <div className="flex-1">
        <h3 className="row-title font-display text-2xl uppercase text-cream/90 md:text-5xl">
          {row.title}
        </h3>
        <p className="mt-1 text-base text-cream/45 md:text-sm">{row.desc}</p>
      </div>
      {/* inline preview — opens in the same row, smaller */}
      <div
        className={`hidden h-28 w-44 shrink-0 overflow-hidden rounded-xl transition-all duration-500 md:block ${
          hover ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <img src={row.img} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <span className="hidden shrink-0 text-xs font-bold uppercase tracking-widest text-cream/40 transition group-hover:text-cream md:block">
        Get quote →
      </span>
    </a>
  );
}

export function DarkList() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink py-12 md:py-32">
      {/* faded photographic backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/img/pest/work1.jpg"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-20"
          draggable={false}
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
              Our services
            </p>
            <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-cream md:text-6xl md:leading-[1.02]">
              What we do best.
            </h2>
          </div>
          <p className="reveal hidden text-sm text-cream/50 md:block">Hover a service to preview</p>
        </div>

        <div>
          {LIST_ROWS.map((row, i) => (
            <ServiceRow key={row.title} row={row} i={i} />
          ))}
          <div className="border-t border-cream/15" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 4: full-bleed image + floating glass cards (like the sunset cabin) ---------- */
export function FullBleed() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip parallax on mobile + reduced-motion: bg stays static, content fully visible
    if (
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!bgRef.current) return;
        const r = bgRef.current.getBoundingClientRect();
        const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height);
        bgRef.current.style.transform = `translateY(${(progress - 0.5) * -60}px) scale(1.12)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.12)" }}>
        <img
          src="/img/pest/fullbleed.webp"
          alt="ShieldPest Control technician at work in Orlando"
          loading="lazy"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-36">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/85">
          Why us
        </p>
        <h2 className="reveal mt-3 max-w-2xl font-display text-2xl uppercase leading-[1.05] text-cream md:text-6xl md:leading-[1.02]">
          Big-company gear. Neighborly care.
        </h2>

        <div data-stagger className="mt-8 grid grid-cols-1 gap-3 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {GLASS_CARDS.map((c, i) => (
            <div
              key={c.title}
              className={`glass reveal rounded-2xl p-5 md:p-6 ${
                i % 2 === 0 ? "floaty" : "floaty-2"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <h3 className="font-display text-base uppercase text-cream md:text-lg">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cream/80 md:text-[13px]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 6: quote & pricing (dark, video-style) ---------- */
const TIERS = [
  {
    name: "One-Time",
    price: "$149",
    per: "/visit",
    features: [
      "Full interior & exterior treatment",
      "Entry-point inspection",
      "Web & nest removal",
      "30-day guarantee",
    ],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "$39",
    per: "/mo",
    badge: "Most affordable",
    features: [
      "Four treatments yearly",
      "Free re-treats between visits",
      "Termite monitoring included",
      "Seasonal pest targeting",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "Termite",
    price: "$899",
    per: "",
    features: [
      "Full home treatment",
      "1-year warranty",
      "Annual inspections",
      "Monitoring stations",
    ],
    popular: false,
  },
];

/* ---------- Pricing reveal wipe ----------
   Stripe overlay gets wiped away by an accent bar driving across on scroll,
   then the pricing cards stagger in underneath. */
function WipeReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const grassRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [cardsIn, setCardsIn] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCardsIn(true);
      setDone(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const W = el.offsetWidth;
        const START = -190;
        const DIST = W + 380;
        const DUR = 2500;
        const t0 = performance.now();
        let cardsFired = false;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / DUR); // linear, per spec
          const x = START + p * DIST;
          if (wipeRef.current) wipeRef.current.style.transform = `translateX(${x.toFixed(1)}px)`;
          // stripe overlay vanishes right behind the bar's back edge
          if (grassRef.current)
            grassRef.current.style.clipPath = `inset(0 0 0 ${Math.max(0, x + 70).toFixed(1)}px)`;
          if (p >= 0.5 && !cardsFired) {
            cardsFired = true;
            setCardsIn(true);
          }
          if (p < 1) requestAnimationFrame(tick);
          else setDone(true);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative mt-8 overflow-hidden md:mt-12 ${cardsIn ? "mow-in" : ""}`}>
      {/* layer 1: pricing cards */}
      <div className="relative z-[1] grid grid-cols-1 gap-5 md:grid-cols-3">{children}</div>
      {/* layer 2: diagonal-stripe overlay */}
      {!done && (
        <div ref={grassRef} className="absolute inset-0 z-[2]" style={{ clipPath: "inset(0 0 0 0)" }}>
          <div className="absolute inset-0 bg-[#022C22]" />
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <pattern id="wipestripes" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="40" height="40" fill="none" />
                <rect x="0" y="0" width="14" height="40" fill="#059669" opacity="0.12" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wipestripes)" />
          </svg>
        </div>
      )}
      {/* layer 3: reveal bar, starts off-screen left, rides the bottom edge */}
      {!done && (
        <div
          ref={wipeRef}
          className="absolute bottom-1 left-0 z-[3] w-40 md:w-48"
          style={{ transform: "translateX(-190px)" }}
        >
          <div className="h-16 w-40 rounded-2xl bg-[#059669] shadow-[0_8px_30px_rgba(5,150,105,0.45)]" />
        </div>
      )}
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">
          Pricing
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display text-2xl uppercase leading-[1.05] text-cream md:text-6xl md:leading-[1.02]">
            Honest pricing.
            <br />
            No surprises.
          </h2>
          <p className="reveal max-w-md text-base leading-relaxed text-cream/55">
            Straightforward packages for the jobs we do every day. Final quote confirmed
            on-site — always free, never pushy.
          </p>
        </div>

        <WipeReveal>
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`mow-card relative flex flex-col rounded-2xl p-7 md:p-8 transition-transform duration-500 hover:-translate-y-2 ${
                t.popular
                  ? "bg-cream text-charcoal shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
                  : "border border-cream/15 bg-white/[0.03] text-cream"
              }`}
            >
              {t.badge && (
                <span className="mb-5 inline-flex self-start rounded-full bg-[#059669] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-cream">
                  {t.badge}
                </span>
              )}
              <h3 className="font-display text-xl uppercase tracking-wide md:text-2xl">
                {t.name}
              </h3>
              <div className="mt-5">
                <p
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    t.popular ? "text-charcoal/55" : "text-cream/45"
                  }`}
                >
                  From
                </p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-5xl md:text-6xl">{t.price}</span>
                  {t.per && (
                    <span
                      className={`text-sm font-bold uppercase tracking-[0.15em] ${
                        t.popular ? "text-charcoal/55" : "text-cream/45"
                      }`}
                    >
                      {t.per}
                    </span>
                  )}
                </p>
              </div>
              <ul
                className={`mt-6 flex-1 space-y-3 border-t pt-6 text-base ${
                  t.popular ? "border-charcoal/15" : "border-cream/15"
                }`}
              >
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        t.popular ? "bg-[#059669]" : "bg-cream/60"
                      }`}
                    />
                    <span className={t.popular ? "text-charcoal/80" : "text-cream/70"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
                  t.popular
                    ? "bg-ink text-cream hover:bg-forest-deep"
                    : "border border-cream/30 text-cream hover:bg-cream hover:text-ink"
                }`}
              >
                Get a quote
              </a>
            </article>
          ))}
        </WipeReveal>

        {/* slim quote band */}
        <div
          className="reveal mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-cream/15 bg-white/[0.03] p-6 md:flex-row md:items-center md:p-8"
          style={{ transitionDelay: "200ms" }}
        >
          <div>
            <h3 className="font-display text-2xl uppercase text-cream md:text-3xl">
              Need an exact number?
            </h3>
            <p className="mt-1.5 max-w-xl text-base text-cream/55">
              Every tree and every property is different. Send us a few photos and we'll
              reply with a firm, free estimate — usually same day.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-cream px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-white"
          >
            Free estimate
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 5: recent work — REAL job photos ---------- */
export function Work() {
  return (
    <section id="work" className="bg-cream py-12 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
          Recent work
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-6xl md:leading-[1.02]">
            Real jobs.
            <br />
            Real photos.
          </h2>
          <p className="reveal max-w-md text-base text-charcoal/65">
            No stock photos — these are actual jobs at actual homes around Orlando.
          </p>
        </div>

        <div className="mt-8 columns-1 gap-5 sm:columns-2 md:mt-12 md:columns-3 [&>*]:mb-5">
          {WORK_SHOTS.map((s, i) => (
            <figure
              key={s.img + i}
              className="reveal group relative break-inside-avoid overflow-hidden rounded-2xl shadow-md"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-10">
                <p className="font-display text-base uppercase leading-tight text-cream md:text-lg">
                  {s.title}
                </p>
                <p className="mt-0.5 text-xs text-cream/75">{s.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
