import { Link } from "react-router-dom";
import { POSTS } from "../data/posts";
import { CtaBand, PageHero, RouteFX } from "../components/PageBits";

export default function Blog() {
  return (
    <>
      <RouteFX
        title="Pest Control Blog | ShieldPest Control"
        description="Practical pest control advice — identification, prevention, and what to do before you call."
      />
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Straight talk
            <br />
            about pests.
          </>
        }
        sub="No fluff — just what our crew actually tells customers on the job."
        img="/img/pest/work6.jpg"
      />

      <section className="bg-cream py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {POSTS.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="reveal group overflow-hidden rounded-3xl bg-white shadow-md transition-transform duration-500 hover:-translate-y-1.5"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest">
                    {p.date} · {p.readTime}
                  </p>
                  <h2 className="mt-2 font-display text-xl uppercase leading-tight text-charcoal md:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-base text-charcoal/60">{p.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-forest transition group-hover:translate-x-1">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Got a pest question?"
        sub="Ask us directly — free advice with every estimate, and honest answers about what you're dealing with."
      />
    </>
  );
}
