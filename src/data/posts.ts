export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "where-ants-come-from",
    title: "Where Ants Actually Come From (It's Not Your Kitchen)",
    excerpt:
      "Spraying the ones you see never ends the trail. Here's how we find the colony and shut it down.",
    date: "September 12, 2026",
    readTime: "3 min read",
    img: "/img/pest/post1.jpg",
    body: [
      "The ants on your counter are foragers — maybe five percent of the colony. Killing them feels productive and accomplishes almost nothing. The colony, with the queen laying eggs around the clock, is somewhere you haven't looked.",
      "In Florida homes, the usual suspects: mulch beds against the foundation, tree limbs touching the roof, moisture-damaged window frames, and the weep holes in brick veneer. Carpenter ants love damp wood; ghost ants love wall voids; fire ants just need a yard.",
      "Our approach is backwards from the DIY one. We don't start at the kitchen — we start outside, find the trails, and follow them home. Then we treat the colony, not the commuters. Non-repellent products are key here: ants walk through them, carry them back, and the colony collapses from the inside.",
      "The part homeowners miss is exclusion. Caulk the pipe chases, trim limbs off the roof, fix the drip edge that's soaking the mulch. Do that after treatment and the next colony picks a different house.",
      "Seeing a few scouts after treatment is normal for a week or two — they're the last foragers from a dying colony. A steady trail after three weeks means call us back. On the quarterly plan, that re-treat is free.",
    ],
  },
  {
    slug: "termite-warning-signs",
    title: "5 Termite Warning Signs Florida Homeowners Miss",
    excerpt:
      "Termites work in the dark and eat from the inside out. Know what to look for before the damage bill arrives.",
    date: "August 28, 2026",
    readTime: "4 min read",
    img: "/img/pest/post2.png",
    body: [
      "Subterranean termites cause more damage to Florida homes than hurricanes most years — quietly, and usually without a single visible insect until it's serious. Here's what to check twice a year.",
      "1. Mud tubes on the foundation or piers. Pencil-width tunnels of packed soil running from the ground up the concrete. This is the smoking gun — break one open and you'll see workers inside.",
      "2. Discarded wings on windowsills. Swarmers shed their wings after mating, usually in spring after rain. A little pile of identical wings means a colony tried to start nearby.",
      "3. Hollow-sounding wood. Tap baseboards and door frames with a screwdriver handle. Solid wood thunks; termite-damaged wood sounds papery and hollow.",
      "4. Bubbling or uneven paint. Termites bring moisture into drywall and trim as they tunnel. Paint that bubbles or looks water-stained with no leak is worth investigating.",
      "5. Tight-fitting doors and windows. As termites eat through frames, the wood warps and swells with their moisture. A door that suddenly sticks in Florida humidity deserves a second look.",
      "Found one of these? Don't spray anything — disturbing them scatters the colony and makes treatment harder. Call for a free inspection and we'll map the activity before touching a thing.",
    ],
  },
  {
    slug: "mosquito-yard-checklist",
    title: "The 10-Minute Yard Checklist That Starves Mosquitoes",
    excerpt:
      "No standing water, no mosquitoes. Walk your yard with this list before you pay for a single treatment.",
    date: "August 8, 2026",
    readTime: "3 min read",
    img: "/img/pest/post3.webp",
    body: [
      "A mosquito needs about a bottle cap of standing water to breed, and the whole cycle — egg to biter — takes about a week in Florida heat. That means your yard is either a nursery or it isn't, and the difference is ten minutes of looking.",
      "Dump the saucers. Plant saucers, buckets, toys, and tarps are the top breeding sites we find. Empty them or store them upside down. Check after every rain.",
      "Clean the gutters. Clogged gutters hold exactly the kind of stagnant, leaf-tea water mosquitoes love — and they're above eye level so nobody checks. Twice a year minimum.",
      "Fix the low spots. Anywhere water stands more than 48 hours after rain is a nursery. Fill, grade, or add drainage. French drains are cheaper than a summer of bites.",
      "Treat what you can't dump. Birdbaths, ponds, and bromeliads hold water by design. A mosquito dunk — a donut of natural bacteria — kills larvae for 30 days and is safe for birds, fish, and plants.",
      "Then handle the adults. Trim dense shade where mosquitoes rest during the day, and keep grass short. What's left after source reduction is what our monthly yard treatment handles — and there's a lot less of it.",
      "Do the checklist and call us for the rest. Source reduction plus a residual treatment is the combination that actually gives you your backyard back.",
    ],
  },
];
