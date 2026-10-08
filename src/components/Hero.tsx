import { useEffect, useRef } from "react";
import { BUSINESS } from "../data";
import { ScrollCue } from "./MotionBits";

const HEADLINE = ["PEST-FREE", "HOME.", "GUARANTEED."];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Respect reduced-motion: pause the video, poster stays visible
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-forest-deep">
      {/* VIDEO BACKDROP */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="hero-in-img h-full w-full object-cover"
          src="/video/hero.mp4"
          poster="/img/pest/hero-hires.webp"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      </div>

      {/* LEGIBILITY OVERLAYS — green-tinted dark at edges, clearer center */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,42,32,0.15)_0%,rgba(14,42,32,0.62)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0e2a20]/85 via-transparent to-[#0e2a20]/55"
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-24 pt-36 md:px-12 md:pt-40">
        <p
          className="hero-fade inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.35em] text-cream/90 md:text-xs"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[#4ade80]" aria-hidden="true" />
          Orlando&apos;s pest control
        </p>

        <h1 className="mt-5 font-display font-black uppercase leading-[0.95] text-cream [text-shadow:0_3px_40px_rgba(0,0,0,0.55)] text-[clamp(3rem,10vw,8.5rem)]">
          {HEADLINE.map((word, i) => (
            <span key={word} className="block overflow-hidden pb-1">
              <span
                className="hero-fade block"
                style={{ animationDelay: `${0.65 + i * 0.14}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="hero-fade mt-6 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl"
          style={{ animationDelay: "1.15s" }}
        >
          Same-day service. Safe for kids and pets. One call and the pests are
          our problem — not yours.
        </p>

        <div
          className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "1.3s" }}
        >
          <a
            href={BUSINESS.phoneHref}
            className="btn-shine flex min-h-[56px] items-center justify-center rounded-full bg-forest px-10 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition hover:bg-moss"
          >
            Call {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            className="flex min-h-[56px] items-center justify-center rounded-full border-2 border-cream/70 px-10 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-cream transition hover:bg-cream hover:text-forest-deep"
          >
            Free inspection
          </a>
        </div>

        {/* TRUST ROW */}
        <div
          className="hero-fade mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-cream/90"
          style={{ animationDelay: "1.45s" }}
        >
          <span className="flex items-center gap-2 text-sm font-semibold">
            <span className="text-star" aria-hidden="true">★★★★★</span>
            {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
          </span>
          <span className="hidden h-4 w-px bg-cream/30 sm:block" aria-hidden="true" />
          <span className="text-sm font-semibold">Licensed &amp; insured</span>
          <span className="hidden h-4 w-px bg-cream/30 sm:block" aria-hidden="true" />
          <span className="text-sm font-semibold">{BUSINESS.emergency}</span>
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
