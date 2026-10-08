import { Link } from "react-router-dom";
import { BUSINESS, TOWNS } from "../data";
import { CtaBand, PageHero, RouteFX } from "../components/PageBits";

export default function ServiceAreas() {
  return (
    <>
      <RouteFX
        title="Service Areas | ShieldPest Control — Orlando, FL"
        description="ShieldPest Control serves Orlando, Kissimmee, Winter Park and neighborhoods across Central Florida. Free inspections in our service area."
      />
      <PageHero
        eyebrow="Service areas"
        title={
          <>
            Local. Actually
            <br />
            local.
          </>
        }
        sub="We're based in Orlando and work across Central Florida every day. If you're inside the area below, inspections are free and response is fast."
        img="/img/pest/work2.jpg"
      />

      <section className="bg-cream py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {TOWNS.map((t) => (
              <div
                key={t}
                className="flex min-h-[64px] items-center justify-center rounded-2xl border border-charcoal/10 bg-white px-4 py-4 text-center transition hover:border-forest hover:bg-forest hover:text-cream"
              >
                <span className="font-display text-lg uppercase tracking-wide md:text-xl">{t}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 grid gap-5 md:mt-14 lg:grid-cols-2">
            <div className="rounded-3xl bg-forest-deep p-8 md:p-10">
              <h2 className="font-display text-2xl uppercase text-cream md:text-3xl">
                Inside the area?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cream/70">
                Free inspections, usually same-day or next-day. Same-day pest response
                anywhere in Orlando.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-cream px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-forest-deep transition hover:bg-white"
              >
                Get a free inspection
              </Link>
            </div>
            <div className="rounded-3xl border border-charcoal/10 bg-white p-8 md:p-10">
              <h2 className="font-display text-2xl uppercase text-charcoal md:text-3xl">
                Just outside?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal/65">
                We regularly take larger jobs in neighboring Seminole, Osceola, and Lake
                counties. Call {BUSINESS.phone} — if we can't help, we'll point you to
                someone who can.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-moss"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Free inspections in our service area."
        sub="Tell us what you're seeing and where. We'll take it from there."
      />
    </>
  );
}
