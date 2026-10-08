import Hero from "../components/Hero";
import { Contact, Faq, Reviews } from "../components/Sections";
import {
  BlogTeasers,
  FullBleed,
  Pricing,
  Process,
  Services,
  TrustStats,
  WhyUs,
  Work,
} from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Pest Control",
  "Termite Treatment",
  "Rodent Removal",
  "Mosquito Control",
  "Wildlife Removal",
  "Orlando",
  "Kissimmee",
  "Winter Park",
  "Oviedo",
  "Free Inspections",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="ShieldPest Control | Pest & Termite Control in Orlando, FL"
        description="ShieldPest Control — pest control, termite treatment & rodent removal across Orlando, FL. Free inspections. Call (407) 555-0128."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <TrustStats />
      <Services />
      <WhyUs />
      <Process />
      <FullBleed />
      <Pricing />
      <Work />
      <Reviews />
      <Faq />
      <BlogTeasers />
      <Contact />
    </>
  );
}
