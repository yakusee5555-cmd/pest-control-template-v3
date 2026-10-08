import { Link } from "react-router-dom";
import { BUSINESS, SERVICE_CARDS, WORK_SHOTS } from "../data";
import { POSTS } from "../data/posts";
import { CountUp } from "./MotionBits";

/* ---------- trust stats band ---------- */
const STATS = [
  { value: 120, suffix: "+", label: "Google reviews" },
  { value: 5.0, decimals: 1, label: "Average rating" },
  { value: 12, suffix: "", label: "Towns served" },
  { value: 6, suffix: "", label: "Core services" },
];

export function TrustStats() {
  return (
    <section className="border-b border-charcoal/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:px-12 md:py-14">
        {STATS.map((s, i) => (
          <div key={s.label} className="reveal text-center" style={{ transitionDelay: `${i * 80}ms` }}>
            <p className="font-display text-4xl text-forest md:text-6xl">
              <CountUp to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-charcoal/55">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- services grid ---------- */
export function Services() {
  return (
    <section id="services" className="bg-cream py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
          What we do
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal max-w-xl font-display text-3xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            The right treatment for every pest.
          </h2>
          <p className="reveal max-w-sm text-base leading-relaxed text-charcoal/60">
            Honest pricing, techs who show up on time, and treatments that are
            safe for kids and pets.
          </p>
        </div>

        <div data-stagger className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {SERVICE_CARDS.map((c, i) => (
            <article
              key={c.title}
              className="reveal group overflow-hidden rounded-3xl bg-ivory shadow-[0_10px_40px_rgba(27,67,50,0.10)] ring-1 ring-charcoal/5 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-forest px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  From {c.from}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <p className="text-xs font-bold tracking-[0.2em] text-forest/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl uppercase text-charcoal">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{c.desc}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-forest transition-all hover:gap-2.5"
                >
                  Ask about this service <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- why choose us (deep green) ---------- */
const WHY = [
  { title: "Free inspections", desc: "On-site quotes, usually same-day. No pressure, ever." },
  { title: "Licensed & insured", desc: "Full coverage on every single job we do." },
  { title: "Kid & pet safe", desc: "Family-first products, applied the right way." },
  { title: "Guaranteed work", desc: "Pests come back between visits? So do we — free." },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-16 md:py-28">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-moss/40 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/60">
          Why ShieldPest
        </p>
        <h2 className="reveal mt-3 max-w-2xl font-display text-3xl uppercase leading-[1.05] text-cream md:text-5xl">
          Big-company gear. Neighborly care.
        </h2>
        <div data-stagger className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {WHY.map((w) => (
            <div
              key={w.title}
              className="reveal rounded-3xl border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-sm md:p-7"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-lg text-cream"
                aria-hidden="true"
              >
                ✓
              </div>
              <h3 className="mt-4 font-display text-lg uppercase text-cream">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- process: inspect → treat → exclude → prevent ---------- */
const STEPS = [
  { n: "01", title: "Inspect", desc: "We find where they're getting in and where they're living — free." },
  { n: "02", title: "Treat", desc: "Targeted treatment for the pest at hand, safe for kids and pets." },
  { n: "03", title: "Exclude", desc: "We seal entry points so the next colony picks a different house." },
  { n: "04", title: "Prevent", desc: "Quarterly visits keep you pest-free year-round. Guaranteed." },
];

export function Process() {
  return (
    <section className="bg-ivory py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
          How it works
        </p>
        <h2 className="reveal mt-3 font-display text-3xl uppercase leading-[1.05] text-charcoal md:text-5xl">
          Pest-free in four steps.
        </h2>
        <div data-stagger className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="reveal relative rounded-3xl bg-cream p-6 ring-1 ring-charcoal/5 md:p-7">
              <p className="font-display text-5xl text-sage">{s.n}</p>
              <h3 className="mt-3 font-display text-xl uppercase text-charcoal">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- full-bleed CTA band ---------- */
export function FullBleed() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/img/pest/fullbleed.webp"
        alt="ShieldPest Control technician at work in Orlando"
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-deep/70" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
        <h2 className="reveal max-w-3xl font-display text-3xl uppercase leading-[1.02] text-cream md:text-6xl">
          Pest-free home. Guaranteed.
        </h2>
        <p className="reveal mt-4 max-w-xl text-lg text-cream/80">
          If pests come back between visits, so do we — free. That&apos;s the deal.
        </p>
        <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={BUSINESS.phoneHref}
            className="btn-shine flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-moss"
          >
            Call {BUSINESS.phone}
          </a>
          <Link
            to="/contact"
            className="flex min-h-[52px] items-center justify-center rounded-full border-2 border-cream/60 px-10 text-sm font-bold uppercase tracking-[0.2em] text-cream transition hover:bg-cream hover:text-forest-deep"
          >
            Free inspection
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- pricing ---------- */
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

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
          Pricing
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display text-3xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Honest pricing.
            <br />
            No surprises.
          </h2>
          <p className="reveal max-w-md text-base leading-relaxed text-charcoal/60">
            Straightforward packages for the jobs we do every day. Final quote
            confirmed on-site — always free, never pushy.
          </p>
        </div>

        <div data-stagger className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`reveal flex flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5 md:p-8 ${
                t.popular
                  ? "bg-forest text-cream shadow-[0_24px_70px_rgba(27,67,50,0.35)]"
                  : "bg-ivory text-charcoal ring-1 ring-charcoal/10"
              }`}
            >
              {t.badge && (
                <span className="mb-5 inline-flex self-start rounded-full bg-cream px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-forest">
                  {t.badge}
                </span>
              )}
              <h3 className="font-display text-xl uppercase tracking-wide md:text-2xl">{t.name}</h3>
              <div className="mt-5">
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${t.popular ? "text-cream/60" : "text-charcoal/50"}`}>
                  From
                </p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-5xl md:text-6xl">{t.price}</span>
                  {t.per && (
                    <span className={`text-sm font-bold uppercase tracking-[0.15em] ${t.popular ? "text-cream/60" : "text-charcoal/50"}`}>
                      {t.per}
                    </span>
                  )}
                </p>
              </div>
              <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 ${t.popular ? "border-cream/20" : "border-charcoal/10"}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px]">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.popular ? "bg-cream" : "bg-forest"}`} aria-hidden="true" />
                    <span className={t.popular ? "text-cream/85" : "text-charcoal/75"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition ${
                  t.popular
                    ? "bg-cream text-forest-deep hover:bg-white"
                    : "bg-forest text-white hover:bg-moss"
                }`}
              >
                Get a quote
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-ivory p-6 ring-1 ring-charcoal/10 md:flex-row md:items-center md:p-8">
          <div>
            <h3 className="font-display text-2xl uppercase text-charcoal md:text-3xl">
              Need an exact number?
            </h3>
            <p className="mt-1.5 max-w-xl text-charcoal/60">
              Every home and every property is different. Send us a few photos and
              we&apos;ll reply with a firm, free estimate — usually same day.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-moss"
          >
            Free estimate
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- recent work gallery ---------- */
export function Work() {
  return (
    <section id="work" className="bg-ivory py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
          Recent work
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal font-display text-3xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Real jobs.
            <br />
            Real photos.
          </h2>
          <p className="reveal max-w-md text-charcoal/60">
            No stock photos — these are actual jobs at actual homes around Orlando.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 md:mt-14 md:columns-3 [&>*]:mb-5">
          {WORK_SHOTS.map((s, i) => (
            <figure
              key={s.img + i}
              className="reveal group relative break-inside-avoid overflow-hidden rounded-3xl shadow-md"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                draggable={false}
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

/* ---------- blog teasers ---------- */
export function BlogTeasers() {
  return (
    <section className="bg-cream py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
              From the blog
            </p>
            <h2 className="reveal mt-3 font-display text-3xl uppercase leading-[1.05] text-charcoal md:text-5xl">
              Know your enemy.
            </h2>
          </div>
          <Link
            to="/blog"
            className="reveal text-sm font-bold text-forest transition-all hover:gap-2.5 inline-flex items-center gap-1"
          >
            All articles <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div data-stagger className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="reveal group overflow-hidden rounded-3xl bg-ivory ring-1 ring-charcoal/5 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest/60">
                  {p.date} · {p.readTime}
                </p>
                <h3 className="mt-2 font-display text-lg uppercase leading-snug text-charcoal">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-charcoal/60">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
