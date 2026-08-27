export type Product = {
  slug: string;
  /** Descriptive name based on the actual item in the shoot — confirm against the real catalog. */
  name: string;
  category: string;
  /** Web-optimized still from the 5/13/2026 shoot. Absent until a real shot exists. */
  image?: string;
  /**
   * Retail price in CENTS (e.g. 3200 = $32.00).
   * Leave undefined until the real price is set — undefined hides the buy button
   * and shows "Pricing coming soon" rather than inventing a number.
   */
  priceCents?: number;
  /** Size options shown at checkout. Omit for one-size items. */
  sizes?: string[];
  /** Gradient placeholder used only when there is no photo yet. */
  variant?: "amber" | "red" | "espresso" | "green";
};

const SHIRT_SIZES = ["S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  {
    slug: "trucker-hat-cream-khaki",
    name: "Trucker Hat — Cream & Khaki",
    category: "Hats",
    image: "/images/products/hat-cream-khaki.jpg",
    // priceCents: 2800,
  },
  {
    slug: "trucker-hat-sage",
    name: "Trucker Hat — Sage",
    category: "Hats",
    image: "/images/products/hat-sage.jpg",
    // priceCents: 2800,
  },
  {
    slug: "hooded-sun-shirt-slate",
    name: "Hooded Sun Shirt — Slate",
    category: "Shirts",
    image: "/images/products/shirt-slate.jpg",
    sizes: SHIRT_SIZES,
    // priceCents: 4800,
  },
  {
    slug: "hooded-sun-shirt-stone",
    name: "Hooded Sun Shirt — Stone",
    category: "Shirts",
    image: "/images/products/shirt-stone.jpg",
    sizes: SHIRT_SIZES,
    // priceCents: 4800,
  },
];

export const categories = ["Hats", "Shirts"];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}
