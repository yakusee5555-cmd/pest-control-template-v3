export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "general-pest-control",
    title: "General Pest Control",
    tagline: "Ants, roaches, spiders — gone.",
    img: "/img/pest/card1.webp",
    description: [
      "Ants in the kitchen, roaches in the bathroom, spiders in every corner — general pest control handles the everyday invaders. We treat the interior where they live and the exterior where they get in, so the problem stops at the source instead of just the symptoms.",
      "One visit knocks the current population out. The barrier we leave behind keeps new ones from moving in. Most homes stay clear with a quarterly plan after the first treatment.",
    ],
    included: [
      "Interior crack-and-crevice treatment",
      "Full exterior barrier spray",
      "Eaves, windows & door frames treated",
      "Entry-point inspection",
      "Web & nest removal",
      "30-day re-treat guarantee",
    ],
    steps: [
      { title: "Inspection",
        desc: "We walk the property, find nests, trails, and every entry point.", },
      { title: "Interior treatment",
        desc: "Targeted application where pests live and breed — safe around kids and pets once dry.", },
      { title: "Exterior barrier",
        desc: "Full perimeter spray so new pests never make it inside.", },
      { title: "Prevention plan",
        desc: "We set you on quarterly visits or hand you the DIY checklist.", },
    ],
    pricingHint: "One-time treatments from $149. Quarterly plans from $39/mo with free re-treats.",
    faqs: [
      {
        q: "Is it safe for kids and pets?",
        a: "Yes. We use targeted applications, not broadcast fogging. Keep kids and pets off treated areas until dry — usually about an hour.",
      },
      {
        q: "How fast will I see results?",
        a: "Most crawling insects drop off within 48 hours. Full colony knockdown can take one to two weeks.",
      },
    ],
    meta: "General pest control in Orlando, FL — ants, roaches, spiders eliminated. From $49. Free inspections. Call (407) 555-0128.",
  },
  {
    slug: "termite-treatment",
    title: "Termite Treatment",
    tagline: "Full barrier, colony eliminated.",
    img: "/img/pest/card2.webp",
    description: [
      "Termites do their damage where you can't see it — inside walls, under floors, in the foundation. By the time you spot swarmers or mud tubes, the colony has been eating for months. Our treatment doesn't just kill the ones you see; it wipes out the entire colony including the queen.",
      "We trench and treat the full perimeter with a non-repellent liquid barrier. Termites carry it back to the colony themselves. Monitoring stations go in after, and the warranty stays in writing.",
    ],
    included: [
      "Full perimeter liquid barrier",
      "Foundation trenching & rodding",
      "Wall-void foam treatment",
      "In-ground monitoring stations",
      "1-year damage warranty",
      "Annual inspection included",
    ],
    steps: [
      { title: "Inspection",
        desc: "We probe sills, crawlspaces, and foundation lines and map all activity.", },
      { title: "Trench & treat",
        desc: "We dig a shallow trench around the foundation and apply the barrier.", },
      { title: "Wall voids",
        desc: "Foam goes into infested voids to reach colonies inside walls.", },
      { title: "Monitor",
        desc: "Stations installed and checked yearly. Warranty paperwork same day.", },
    ],
    pricingHint: "Full home termite treatment from $899 depending on linear footage. Free inspection first.",
    faqs: [
      {
        q: "How do I know if I have termites?",
        a: "Mud tubes on the foundation, discarded wings near windows, hollow-sounding wood. But most infestations are invisible — that's why the free inspection matters.",
      },
      {
        q: "Does the treatment come with a warranty?",
        a: "Yes. One full year in writing, including re-treatment if activity returns.",
      },
    ],
    meta: "Termite treatment in Orlando, FL — full barrier, colony eliminated, warranty included. From $899. Call (407) 555-0128.",
  },
  {
    slug: "rodent-removal",
    title: "Rodent Removal",
    tagline: "Trapped, removed, entry points sealed.",
    img: "/img/pest/card3.webp",
    description: [
      "Mice and rats don't just scare people — they chew wiring, contaminate food, and breed fast. Poison alone never solves it; new rodents just move into the same holes. We trap out the current population and then seal the building so it stays empty.",
      "Every gap a quarter-inch or bigger gets closed with steel mesh and sealant — rooflines, vents, pipe chases, garage doors. When we're done, the house is a closed box. That's the part most companies skip.",
    ],
    included: [
      "Snap & live trapping program",
      "Attic & crawlspace inspection",
      "All entry points sealed with steel mesh",
      "Droppings cleanup & sanitizing",
      "Insulation damage assessment",
      "60-day no-return guarantee",
    ],
    steps: [
      { title: "Trap-out",
        desc: "Traps placed on runways. We return until activity hits zero.", },
      { title: "Find the holes",
        desc: "Full exterior audit — a mouse fits through a dime-sized gap.", },
      { title: "Seal it up",
        desc: "Steel mesh, copper wool, and sealant on every entry point.", },
      { title: "Sanitize",
        desc: "Droppings removed, nesting areas disinfected, damage documented.", },
    ],
    pricingHint: "Rodent removal from $249 depending on infestation size and sealing work needed.",
    faqs: [
      {
        q: "Do you use poison?",
        a: "No. Poisoned rodents die inside walls and stink for weeks. Trapping plus exclusion is cleaner and permanent.",
      },
      {
        q: "Will they come back?",
        a: "Not through the holes we seal. The 60-day guarantee covers any new activity.",
      },
    ],
    meta: "Rodent removal in Orlando, FL — trapping, exclusion, entry points sealed. From $249. Call (407) 555-0128.",
  },
  {
    slug: "mosquito-control",
    title: "Mosquito Control",
    tagline: "Yard treatments that actually work.",
    img: "/img/pest/card4.jpg",
    description: [
      "Florida mosquitoes don't take days off, and citronella candles aren't a strategy. Our yard treatment targets where mosquitoes actually breed and rest — shaded vegetation, standing water edges, and damp mulch beds — with a residual product that keeps killing for weeks.",
      "Monthly visits through the season break the breeding cycle. Most customers go from 'can't step outside' to grilling at dusk in the first month.",
    ],
    included: [
      "Full yard fogging treatment",
      "Breeding-site identification",
      "Standing water treatment",
      "Shrub & shaded-area residual",
      "Monthly visits, Apr–Oct",
      "Free re-treat before events",
    ],
    steps: [
      { title: "Survey",
        desc: "We map breeding sites — saucers, gutters, low spots, dense shade.", },
      { title: "Treat",
        desc: "Targeted application to resting and breeding zones, not the whole lawn.", },
      { title: "Break the cycle",
        desc: "Monthly visits stop each new generation before it bites.", },
      { title: "Maintain",
        desc: "We re-check water sources every visit and adjust.", },
    ],
    pricingHint: "Monthly mosquito control from $59/mo through the season. One-time event sprays from $99.",
    faqs: [
      {
        q: "Is the treatment safe for my garden?",
        a: "Yes — we target mosquito resting zones and avoid flowering plants where pollinators feed.",
      },
      {
        q: "How long does each treatment last?",
        a: "About 3–4 weeks, which is why the monthly schedule works.",
      },
    ],
    meta: "Mosquito control in Orlando, FL — monthly yard treatments that break the breeding cycle. From $59/mo. Call (407) 555-0128.",
  },
  {
    slug: "wildlife-removal",
    title: "Wildlife Removal",
    tagline: "Raccoons, squirrels, opossums relocated.",
    img: "/img/pest/card5.webp",
    description: [
      "A raccoon in the attic at 3am, squirrels chewing into the soffit, an opossum under the deck — wildlife needs trapping, not spraying. We trap humanely, relocate legally, and then fix whatever let them in so it doesn't happen again.",
      "Florida has rules about relocation distances and protected species. We handle the permits and the paperwork. You just get your attic back.",
    ],
    included: [
      "Humane live trapping",
      "Legal relocation",
      "Entry-point repair",
      "Attic damage assessment",
      "Chimney cap installation",
      "Squirrel & raccoon proofing",
    ],
    steps: [
      { title: "Identify",
        desc: "We find the species, the entry point, and whether babies are present.", },
      { title: "Trap",
        desc: "Humane traps set and checked daily until the animal is caught.", },
      { title: "Relocate",
        desc: "Released at a legal distance per Florida wildlife rules.", },
      { title: "Repair",
        desc: "Entry point sealed and reinforced so the next one can't get in.", },
    ],
    pricingHint: "Wildlife removal from $299 including trapping, relocation, and entry repair.",
    faqs: [
      {
        q: "Is trapping humane?",
        a: "Yes — live cage traps, checked daily, animals relocated the same day they're caught.",
      },
      {
        q: "What if there are babies in the attic?",
        a: "We check first. If babies are present we time the removal so the mother can be reunited with them outside.",
      },
    ],
    meta: "Wildlife removal in Orlando, FL — raccoons, squirrels, opossums trapped and relocated. From $299. Call (407) 555-0128.",
  },
  {
    slug: "quarterly-prevention",
    title: "Quarterly Prevention",
    tagline: "Four visits a year, zero pests.",
    img: "/img/pest/card6.jpg",
    description: [
      "The cheapest pest problem is the one that never starts. Quarterly prevention puts your home on a schedule: four treatments a year, timed to Florida's pest seasons, so ants, roaches, spiders, and wasps never get a foothold.",
      "Between visits, anything shows up — you call, we come back free. No extra charge, no fine print. That's the whole point of the plan.",
    ],
    included: [
      "4 scheduled treatments per year",
      "Interior + exterior every visit",
      "Seasonal pest targeting",
      "Free re-treats between visits",
      "Web & nest removal each visit",
      "No-contract, cancel anytime",
    ],
    steps: [
      { title: "First treatment",
        desc: "Full interior and exterior reset — we start from zero.", },
      { title: "Barrier established",
        desc: "Exterior perimeter protected against the next wave.", },
      { title: "Seasonal rotation",
        desc: "Each visit targets what's active that quarter.", },
      { title: "Stay covered",
        desc: "See anything between visits? One call, free re-treat.", },
    ],
    pricingHint: "Quarterly prevention from $39/mo. No contract — cancel anytime.",
    faqs: [
      {
        q: "What if I see bugs between visits?",
        a: "Call us. Re-treats between scheduled visits are free — that's the deal.",
      },
      {
        q: "Am I locked into a contract?",
        a: "No. Month to month. Cancel anytime with one call.",
      },
    ],
    meta: "Quarterly pest prevention in Orlando, FL — four visits a year, free re-treats. From $39/mo. Call (407) 555-0128.",
  },
];
