import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BUSINESS, NAV, REVIEWS, SERVICES, TOWNS } from "../data";
import { SERVICE_DETAILS } from "../data/services";

/* ---------- scroll reveal ---------- */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ---------- floating pill header + slide-out drawer ---------- */
export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-charcoal/10 bg-cream/95 py-2.5 pl-3 pr-2.5 shadow-[0_10px_40px_rgba(27,67,50,0.18)] backdrop-blur-md md:pl-5">
          <Link to="/" onClick={() => setOpen(false)} className="flex min-h-[48px] items-center gap-2.5">
            <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
              <rect width="64" height="64" rx="14" fill="#1B4332" />
              <text x="32" y="44" font-family="Arial Black, sans-serif" font-size="36" font-weight="900" fill="#FAF6F0" text-anchor="middle">S</text>
            </svg>
            <span className="font-display text-lg uppercase tracking-wide text-charcoal">
              ShieldPest
            </span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                className="flex min-h-[48px] items-center text-[13px] font-semibold uppercase tracking-wider text-charcoal/70 transition hover:text-forest"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className="hidden min-h-[48px] items-center rounded-full bg-forest px-6 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-moss sm:flex"
            >
              {BUSINESS.phone}
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-forest lg:hidden"
            >
              <span className={`h-[2px] w-5 bg-cream transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 bg-cream transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-5 bg-cream transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* scrim */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-forest-deep/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* slide-out drawer */}
      <nav
        aria-label="Mobile menu"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-40 flex h-full w-[86%] max-w-sm flex-col bg-cream px-6 pb-10 pt-28 shadow-2xl transition-all duration-300 ease-out lg:hidden ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        {NAV.map((n) => (
          <Link
            key={n.href}
            to={n.href}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="flex min-h-[52px] items-center border-b border-charcoal/10 text-base font-bold uppercase tracking-wider text-charcoal"
          >
            {n.label}
          </Link>
        ))}
        <div className="mt-auto space-y-3 pt-8">
          <a
            href={BUSINESS.phoneHref}
            tabIndex={open ? 0 : -1}
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-full border-2 border-forest text-sm font-bold uppercase tracking-widest text-forest"
          >
            {BUSINESS.phone}
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="flex min-h-[52px] items-center justify-center rounded-full bg-forest text-sm font-bold uppercase tracking-widest text-white"
          >
            Get a Free Quote
          </Link>
        </div>
      </nav>
    </>
  );
}

/* ---------- reviews ---------- */
export function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
              Reviews
            </p>
            <h2 className="reveal mt-3 font-display text-3xl uppercase leading-[1.05] text-charcoal md:text-5xl">
              Neighbors
              <br />
              vouch for us.
            </h2>
          </div>
          <div className="reveal flex items-center gap-3">
            <span className="font-display text-4xl text-forest md:text-5xl">{BUSINESS.rating}</span>
            <span className="text-sm text-charcoal/60">
              <span className="text-star" aria-hidden="true">★★★★★</span>
              <br />
              {BUSINESS.reviewCount} Google reviews
            </span>
          </div>
        </div>
        <div data-stagger className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="reveal flex flex-col rounded-3xl bg-ivory p-6 ring-1 ring-charcoal/5 shadow-[0_10px_40px_rgba(27,67,50,0.08)]"
            >
              <div className="text-star" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal/75">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-charcoal/10 pt-3">
                <p className="font-bold text-charcoal">{r.name}</p>
                <p className="text-sm text-charcoal/55">{r.town}, FL</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* service areas */}
        <div className="mt-12 md:mt-20">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
            Service areas
          </p>
          <div className="reveal mt-5 flex flex-wrap gap-2.5">
            {TOWNS.map((t) => (
              <span
                key={t}
                className="inline-flex min-h-[48px] items-center rounded-full border border-forest/25 bg-ivory px-5 text-sm font-semibold text-charcoal/80 transition hover:bg-forest hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: "Is your treatment safe for kids and pets?",
    a: "Yes. We use family-first products applied the right way — targeted where pests live, not broadcast across your home. Once dry (about an hour), treated areas are safe for kids and pets to be around.",
  },
  {
    q: "How fast can you come out?",
    a: "Usually same-day. Call before noon and we'll get a tech to you that afternoon in most of our service area. Wildlife in the attic or a wasp nest by the door jumps the queue.",
  },
  {
    q: "What does the quarterly plan actually include?",
    a: "Four scheduled treatments a year covering interior and exterior, termite monitoring, and seasonal pest targeting. If anything shows up between visits, re-treats are free — just call.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Every service carries a written guarantee. One-time treatments include a 30-day guarantee; quarterly plans include free re-treats for the life of the plan; termite treatments include a 1-year warranty.",
  },
  {
    q: "Will I need to leave the house during treatment?",
    a: "Usually not. Most treatments take 30–45 minutes and you can stay home — we'll just ask you to keep clear of the rooms being treated until they dry.",
  },
  {
    q: "How much does termite treatment cost?",
    a: "Full home treatments start at $899 depending on the size of the home and the extent of activity. Every termite job starts with a free inspection and a firm written quote — no surprises.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal overflow-hidden rounded-2xl bg-ivory ring-1 ring-charcoal/5">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex min-h-[64px] w-full items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span className="font-display text-base uppercase tracking-wide text-charcoal md:text-lg">{q}</span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-lg text-white transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[15px] leading-relaxed text-charcoal/65">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-ivory py-16 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-forest">
          FAQ
        </p>
        <h2 className="reveal mt-3 font-display text-3xl uppercase leading-[1.05] text-charcoal md:text-5xl">
          Asked all the time.
        </h2>
        <div className="mt-8 space-y-4 md:mt-12">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-forest-deep py-16 md:py-28">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-moss/40 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-2">
        <div>
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/60">
            Contact
          </p>
          <h2 className="reveal mt-3 font-display text-4xl uppercase leading-[1.02] text-cream md:text-6xl">
            Get your free estimate.
          </h2>
          <p className="reveal mt-5 max-w-md text-cream/70">
            Call, text, or send the form — we usually reply within the hour during business hours.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="reveal mt-6 inline-block font-display text-3xl text-cream underline decoration-moss decoration-4 underline-offset-8 transition hover:text-white md:mt-8 md:text-5xl"
          >
            {BUSINESS.phone}
          </a>
          <dl className="reveal mt-8 space-y-4 text-cream/75">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/45">Address</dt>
              <dd className="mt-1">{BUSINESS.address}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/45">Hours</dt>
              <dd className="mt-1">
                {BUSINESS.hours}
                <br />
                <span className="font-semibold text-cream">{BUSINESS.emergency}</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="reveal rounded-3xl bg-ivory p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:p-9">
          {sent ? (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-3xl text-white">
                ✓
              </div>
              <h3 className="mt-5 font-display text-3xl uppercase text-charcoal">Thanks!</h3>
              <p className="mt-2 max-w-xs text-charcoal/70">
                We&apos;ll be in touch shortly to schedule your free estimate.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <h3 className="font-display text-2xl uppercase text-charcoal">Request a quote</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="text" autoComplete="name" placeholder="Full name" className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3.5 text-base text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
                <input required type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone" className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3.5 text-base text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
              </div>
              <input required type="text" autoComplete="street-address" placeholder="Property address" className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3.5 text-base text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
              <select required defaultValue="" className="min-h-[52px] w-full rounded-xl border border-charcoal/15 bg-cream px-4 text-base text-charcoal/70 focus:border-forest focus:outline-none">
                <option value="" disabled>
                  Service needed
                </option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Something else</option>
              </select>
              <textarea rows={4} placeholder="Tell us about the job (optional)" className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3.5 text-base text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none" />
              <button
                type="submit"
                className="min-h-[52px] w-full rounded-full bg-forest py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-moss"
              >
                Send request
              </button>
              <p className="text-center text-xs text-charcoal/50">
                Prefer to talk? <a href={BUSINESS.phoneHref} className="font-bold text-forest">Call {BUSINESS.phone}</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
export function Footer() {
  return (
    <footer className="bg-[#0a1f17] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
                <rect width="64" height="64" rx="14" fill="#FAF6F0" />
                <text x="32" y="44" font-family="Arial Black, sans-serif" font-size="36" font-weight="900" fill="#1B4332" text-anchor="middle">S</text>
              </svg>
              <span className="font-display text-lg uppercase text-cream">ShieldPest Control</span>
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="mt-4 inline-block font-display text-xl text-cream underline decoration-moss decoration-2 underline-offset-4 hover:text-white"
            >
              {BUSINESS.phone}
            </a>
            <p className="mt-3 text-sm text-cream/60">
              <span className="text-star" aria-hidden="true">★★★★★</span> {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
            </p>
          </div>
          <nav aria-label="Services">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/45">Services</p>
            <ul className="mt-4 space-y-1">
              <li>
                <Link to="/services" className="flex min-h-[44px] items-center text-sm text-cream/70 hover:text-cream">
                  All services
                </Link>
              </li>
              {SERVICE_DETAILS.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="flex min-h-[44px] items-center text-sm text-cream/70 hover:text-cream"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/45">Company</p>
            <ul className="mt-4 space-y-1">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="flex min-h-[44px] items-center text-sm text-cream/70 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/45">Contact</p>
            <ul className="mt-4 space-y-1 text-sm text-cream/70">
              <li className="flex min-h-[44px] items-center">{BUSINESS.address}</li>
              <li className="flex min-h-[44px] items-center">{BUSINESS.hours}</li>
              <li className="flex min-h-[44px] items-center font-semibold text-cream/85">
                {BUSINESS.emergency}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 md:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream/50">
            {BUSINESS.rating} ★ · {BUSINESS.reviewCount} Google reviews · Demo website
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- mobile sticky CTA bar: Call Now + Get a Quote ---------- */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex min-h-[60px] items-center justify-center gap-2 bg-forest px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-[13px] font-bold uppercase tracking-widest text-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Call Now
      </a>
      <Link
        to="/contact"
        className="flex min-h-[60px] items-center justify-center bg-cream px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-[13px] font-bold uppercase tracking-widest text-ink"
      >
        Get a Quote
      </Link>
    </div>
  );
}
