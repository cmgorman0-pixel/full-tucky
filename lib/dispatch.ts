/**
 * The Bluegrass Dispatch — editorial posts.
 *
 * To publish a new one, add an entry to `posts` below. Newest first.
 * Categories come from the Bluegrass Dispatch positioning doc.
 *
 * NOTE: the seeded entries below are drawn from Full'Tucky's own existing brand
 * copy (the website content and t-shirt description docs) — not invented stories.
 * Replace or expand them with real trail tips, tailgate lore, and road finds.
 */

export const DISPATCH_CATEGORIES = [
  "Trails & Trips",
  "Food & Bourbon",
  "Local Life",
  "Field Notes",
  "Beyond Southern Stories",
] as const;

export type DispatchCategory = (typeof DISPATCH_CATEGORIES)[number];

export type Post = {
  slug: string;
  title: string;
  category: DispatchCategory;
  /** ISO date — drives ordering and the displayed date. */
  date: string;
  excerpt: string;
  /** Optional hero image path under /public. */
  image?: string;
  /** Body paragraphs. */
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "behind-the-shoot-golden-hour",
    title: "Behind the Shoot: Golden Hour, One Fire, Forty-One Clips",
    category: "Field Notes",
    date: "2026-08-28",
    excerpt:
      "Main street in the late light, then a backyard fire until dark. A look at the day the first Full'Tucky footage got made.",
    image: "/images/dispatch/campfire.jpg",
    body: [
      "The first real Full'Tucky shoot happened in May, and it ran the way most good Kentucky evenings do — start downtown while the light is still good, end around a fire once it isn't.",
      "The afternoon half was simple: friends walking a main street in [TOWN], crossing at the light, storefronts and brick behind them, nobody doing anything special. Sun shirts in slate and stone, trucker hats in cream and sage. The kind of footage that only works if the people in it actually know each other, which is why we didn't hire anybody who didn't.",
      "By early evening we moved to a backyard fire pit and stayed until the light went. Adirondack chairs, a cooler doing double duty as a seat, somebody always getting up to move a log around. That stretch is where the footage got good — nobody performing, just a group of people who'd been at it long enough to forget the camera was running.",
      "It was shot on a cinema camera in Canon RAW, which is a technical way of saying the files are enormous and the color holds up. Forty-one clips came out of that evening, a little over ninety minutes of footage and roughly two hundred gigabytes of it. Most of what you see across this site — the hero on the homepage, the shots on the shop page, the product photos — came from that one night's work.",
      "There's more in there than we've used. The full edit is still in progress, and we'll put the good stuff up here as it comes back.",
    ],
  },
  {
    slug: "rooted-where-it-matters",
    title: "Rooted Where It Matters",
    category: "Beyond Southern Stories",
    date: "2026-08-28",
    excerpt:
      "We didn't make this to fit in — we made it to stand out. Kentucky has a culture all its own, and we're not watering it down.",
    image: "/images/dispatch/horses.jpg",
    body: [
      "We didn't make this to fit in — we made it to stand out. Kentucky has a culture all its own, and we're not watering it down. Our designs pull from what's real: the rolling hills, the horse barns, the Friday night lights, the sound of gravel under your boots.",
      "We keep things simple — premium fabrics, clean fits, bold detail. Because when you live Full'Tucky, you don't have to shout to be heard. You just have to wear it.",
      "Full'Tucky was born out of pride — pride in where we're from, how we were raised, and what we stand for. We didn't want another cookie-cutter brand pretending to understand Kentucky. We wanted something real. Something built from the same dirt roads, smoky barrooms, and Friday night lights that raised us.",
      "So, we made it ourselves. What started as a local idea turned into a movement — a lifestyle that celebrates Kentucky's grit, its heart, and its no-BS way of living. We didn't follow a trend; we built our own. Because this isn't just southern — it's beyond southern.",
    ],
  },
  {
    slug: "made-the-right-way",
    title: "A Few Bucks More, For Good Reason",
    category: "Field Notes",
    date: "2026-08-28",
    excerpt:
      "We wouldn't be Full'Tucky if we cut corners. Here's what actually goes into the gear, and why it costs what it costs.",
    image: "/images/dispatch/rickhouse.jpg",
    body: [
      "We're a few bucks extra, but we wouldn't be Full'Tucky if we cut corners. That's why our tees are sourced from our native land — proudly made in the USA from 100% organic cotton.",
      "Soft, durable, and crafted the right way, this shirt isn't just clothing — it's a statement. You're wearing Kentucky pride, American craftsmanship, and a commitment to doing things better.",
      "Every piece we design is built with purpose. Premium fabrics, soft feel, and details that mean something. We don't overthink it — we just do it right. Whether it's a classic tee that breaks in perfectly or a hoodie that feels like it's been yours for years, everything we make is meant to last and meant to represent.",
      "Our inspiration runs deep — bourbon barrels, horse fences, gravel drives, and that unmistakable Kentucky toughness. We're not chasing mass-produced style; we're creating something that feels like home.",
    ],
  },
  {
    slug: "whats-your-tucky",
    title: "What's Your Tucky?",
    category: "Local Life",
    date: "2026-08-28",
    excerpt:
      "From farm fences and bonfires to bourbon pours, ball games, and city streets — Kentucky looks different to everybody. That's the point.",
    image: "/images/dispatch/backroad.jpg",
    body: [
      "Full'Tucky isn't just a brand — it's a way of life. We celebrate the spirit of Kentucky in all its forms — from farm fences and bonfires, to bourbon pours, ball games, and city streets.",
      "Full'Tucky is about more than where you're from. It's about the pride, community, and everyday moments that make Kentucky home.",
      "Our promise: to create a brand that every Kentuckian can see themselves in — east to west, city to country, Cards and Cats, young and old. We'll tell our story with authenticity, celebrate our culture with pride, and build a community that feels like family.",
      "Because at the end of the day — what's your Tucky?",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function sortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatPostDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
