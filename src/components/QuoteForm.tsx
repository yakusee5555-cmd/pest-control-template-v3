import { useState } from "react";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="hero-fade w-full max-w-md rounded-3xl bg-[#f4efe4] p-6 text-charcoal shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-8" style={{ animationDelay: "1.4s" }}>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#059669] text-cream">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12.5 L10 18.5 L20 6" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-2xl uppercase">Request received{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""}.</h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
          Thanks for reaching out. We'll call you back shortly at {phone.trim()} with your free estimate.
        </p>
        <a
          href="tel:+15125550147"
          className="btn-shine mt-5 flex min-h-[48px] items-center justify-center rounded-full bg-ink px-8 text-center text-sm font-bold tracking-widest text-cream"
        >
          OR CALL (407) 555-0128 NOW
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="hero-fade w-full max-w-md rounded-3xl bg-[#f4efe4] p-6 text-charcoal shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-8"
      style={{ animationDelay: "1.4s" }}
    >
      <h3 className="font-display text-2xl uppercase leading-none">Get a free quote</h3>
      <p className="mt-1.5 text-sm text-charcoal/65">Tell us about the job. We reply within one business day.</p>

      <label className="mt-5 block">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/60">Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="mt-1.5 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-charcoal/35 focus:border-forest focus:ring-2 focus:ring-forest/25"
        />
      </label>

      <label className="mt-4 block">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/60">Phone number</span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(407) 555-0100"
          required
          className="mt-1.5 w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-charcoal/35 focus:border-forest focus:ring-2 focus:ring-forest/25"
        />
      </label>

      <label className="mt-4 block">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/60">Tell us about the job</span>
        <textarea
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="e.g. Two maples need trimming and the front beds need a refresh…"
          rows={3}
          className="mt-1.5 w-full resize-none rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none placeholder:text-charcoal/35 focus:border-forest focus:ring-2 focus:ring-forest/25"
        />
      </label>

      <button
        type="submit"
        className="btn-shine mt-5 flex min-h-[52px] w-full items-center justify-center rounded-full bg-forest px-8 text-center text-sm font-bold tracking-widest text-white transition-transform hover:scale-[1.02] active:scale-[0.99]"
      >
        REQUEST MY FREE QUOTE
      </button>
    </form>
  );
}
