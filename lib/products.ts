export type Product = {
  slug: string;
  /** Descriptive name based on the actual item in the shoot — confirm against the real catalog. */
  name: string;
  category: string;
  /** Web-optimized still from the 5/13/2026 shoot. Absent until a real shot exists. */
  image?: string;
  /** Gradient placeholder used only when there is no photo yet. */
  variant?: "amber" | "red" | "espresso" | "green";
};

export const products: Product[] = [
  {
    slug: "trucker-hat-cream-khaki",
    name: "Trucker Hat — Cream & Khaki",
    category: "Hats",
    image: "/images/products/hat-cream-khaki.jpg",
  },
  {
    slug: "trucker-hat-sage",
    name: "Trucker Hat — Sage",
    category: "Hats",
    image: "/images/products/hat-sage.jpg",
  },
  {
    slug: "hooded-sun-shirt-slate",
    name: "Hooded Sun Shirt — Slate",
    category: "Shirts",
    image: "/images/products/shirt-slate.jpg",
  },
  {
    slug: "hooded-sun-shirt-stone",
    name: "Hooded Sun Shirt — Stone",
    category: "Shirts",
    image: "/images/products/shirt-stone.jpg",
  },
];

export const categories = ["Hats", "Shirts"];
