export const BUSINESS = {
  name: "ShieldPest Control",
  phone: "(407) 555-0128",
  phoneHref: "tel:+14075550128",
  address: "Serving Orlando, FL",
  hours: "Mon–Sat 8am–6pm",
  emergency: "Same-day pest response",
  rating: "5.0",
  reviewCount: "120+",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Stacked headline words (section 2) */
export const STACK_WORDS = ["Inspect.", "Treat.", "Exclude.", "Prevent."];

export interface FloatCard {
  img: string;
  title: string;
  meta: string;
  rotate: string;
  offset: string;
}

export const FLOAT_CARDS: FloatCard[] = [
  {
    img: "/img/pest/float1.webp",
    title: "General pest control",
    meta: "Ants, roaches, spiders · Gone fast",
    rotate: "rotate-[4deg]",
    offset: "md:translate-y-10",
  },
  {
    img: "/img/pest/float2.webp",
    title: "Termite treatment",
    meta: "Full barrier · Colony eliminated",
    rotate: "rotate-[-3deg]",
    offset: "md:-translate-y-6",
  },
  {
    img: "/img/pest/float3.png",
    title: "Rodent removal",
    meta: "Sealed up · Guaranteed",
    rotate: "rotate-[2.5deg]",
    offset: "md:translate-y-16",
  },
];

/* Dark numbered list (section 3) */
export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/pest/card1.webp",
    title: "General Pest Control",
    desc: "Ants, roaches, spiders — gone",
  },
  {
    img: "/img/pest/card2.webp",
    title: "Termite Treatment",
    desc: "Full barrier, colony eliminated",
  },
  {
    img: "/img/pest/card3.webp",
    title: "Rodent Removal",
    desc: "Trapped, removed, sealed up",
  },
  {
    img: "/img/pest/card4.jpg",
    title: "Mosquito Control",
    desc: "Yard treatments that work",
  },
  {
    img: "/img/pest/card5.webp",
    title: "Wildlife Removal",
    desc: "Raccoons & squirrels relocated",
  },
  {
    img: "/img/pest/card6.jpg",
    title: "Quarterly Prevention",
    desc: "Four visits, zero pests",
  },
];

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free inspections",
    desc: "On-site quotes, usually same-day.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Full coverage on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "Quarterly plans",
    desc: "Four visits a year, zero pests.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "5.0 ★★★★★",
    desc: "120+ Google reviews from Orlando neighbors.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Real work gallery (section 5) — actual pest-control photos */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/pest/work1.jpg", title: "Full exterior barrier treatment", location: "Winter Park, FL" },
  { img: "/img/pest/work2.jpg", title: "Termite treatment, colony eliminated", location: "Kissimmee, FL" },
  { img: "/img/pest/work3.jpg", title: "Rodent exclusion, entry points sealed", location: "Oviedo, FL" },
  { img: "/img/pest/work4.jpg", title: "Mosquito yard treatment", location: "Altamonte Springs, FL" },
  { img: "/img/pest/work5.webp", title: "Wildlife removal, humane relocation", location: "Sanford, FL" },
  { img: "/img/pest/work6.jpg", title: "Quarterly prevention visit", location: "Winter Garden, FL" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/pest/card1.webp",
    title: "General Pest Control",
    desc: "Ants, roaches, spiders, silverfish — interior and exterior treatment that knocks them out and keeps them out.",
  },
  {
    img: "/img/pest/card2.webp",
    title: "Termite Treatment",
    desc: "Full liquid barrier plus monitoring. Colony eliminated, home protected, warranty in writing.",
  },
  {
    img: "/img/pest/card3.webp",
    title: "Rodent Removal",
    desc: "Trapping, removal, and exclusion — we find every entry point and seal it so they can't come back.",
  },
  {
    img: "/img/pest/card4.jpg",
    title: "Mosquito Control",
    desc: "Monthly yard treatments through mosquito season. Take your backyard back.",
  },
  {
    img: "/img/pest/card5.webp",
    title: "Wildlife Removal",
    desc: "Raccoons, squirrels, opossums — trapped humanely and relocated, entry points repaired.",
  },
  {
    img: "/img/pest/card6.jpg",
    title: "Quarterly Prevention",
    desc: "Four scheduled visits a year. Free re-treats between visits if anything shows up.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Amy C.",
    town: "Winter Park",
    text: "Roaches in the kitchen had me embarrassed to have people over. Two visits and they're gone — the tech showed me exactly where they were getting in and sealed it.",
  },
  {
    name: "Luis G.",
    town: "Kissimmee",
    text: "Termite treatment on a Tuesday, warranty paperwork in my inbox the same day. Straightforward price, no scare tactics.",
  },
  {
    name: "Beth N.",
    town: "Oviedo",
    text: "The quarterly plan is worth every penny. Haven't seen a single ant in eight months and they text before every visit.",
  },
  {
    name: "Marcus D.",
    town: "Altamonte Springs",
    text: "Had a raccoon in the attic making noise at 3am. They trapped it the same day and patched the hole. Fast and humane.",
  },
];

export const TOWNS = [
  "Orlando",
  "Kissimmee",
  "Winter Park",
  "Altamonte Springs",
  "Sanford",
  "Oviedo",
  "Winter Garden",
  "Apopka",
  "Lake Mary",
  "St. Cloud",
  "Clermont",
  "Deltona",
];

export interface ServiceCard {
  img: string;
  from: string;
  title: string;
  desc: string;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    img: "/img/pest/card1.webp",
    from: "$49",
    title: "General Pest Control",
    desc: "Ants, roaches, spiders — interior & exterior treatment, gone fast.",
  },
  {
    img: "/img/pest/card2.webp",
    from: "$899",
    title: "Termite Treatment",
    desc: "Full home barrier, colony eliminated, warranty in writing.",
  },
  {
    img: "/img/pest/card3.webp",
    from: "$249",
    title: "Rodent Removal",
    desc: "Trapped, removed, and every entry point sealed shut.",
  },
  {
    img: "/img/pest/card4.jpg",
    from: "$59/mo",
    title: "Mosquito Control",
    desc: "Monthly yard treatments through the season. Backyard back.",
  },
  {
    img: "/img/pest/card5.webp",
    from: "$299",
    title: "Wildlife Removal",
    desc: "Raccoons, squirrels, opossums — humane trapping and relocation.",
  },
  {
    img: "/img/pest/card6.jpg",
    from: "$39/mo",
    title: "Quarterly Prevention",
    desc: "Four visits a year. Free re-treats if anything shows up.",
  },
];
