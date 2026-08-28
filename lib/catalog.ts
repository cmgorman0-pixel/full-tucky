import Stripe from "stripe";
import { products as localProducts, type Product } from "@/lib/products";

/**
 * The shop reads its catalog from Stripe when a key is configured, so products,
 * prices, and photos are managed in the Stripe dashboard rather than in code.
 *
 * Conventions for a product in Stripe:
 *   - Name          → shown on the card
 *   - Image         → the product photo (first image is used)
 *   - Default price → the price shown and charged
 *   - Metadata `category` → e.g. "Hats" or "Shirts" (defaults to "Shop")
 *   - Metadata `sizes`    → comma-separated, e.g. "S,M,L,XL,XXL" (omit for one-size)
 *
 * If Stripe isn't configured or returns nothing, the local list in products.ts
 * is used instead, so the site always renders something honest.
 */

export type CatalogItem = Product & {
  /** Stripe price id, present only for Stripe-managed items. */
  priceId?: string;
};

function fromLocal(): CatalogItem[] {
  return localProducts;
}

export async function getCatalog(): Promise<{
  items: CatalogItem[];
  source: "stripe" | "local";
}> {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) return { items: fromLocal(), source: "local" };

  try {
    const stripe = new Stripe(secret);
    const res = await stripe.products.list({
      active: true,
      limit: 100,
      expand: ["data.default_price"],
    });

    const items: CatalogItem[] = [];
    for (const p of res.data) {
      const price = p.default_price;
      // Skip anything without a usable one-time price.
      if (!price || typeof price === "string" || price.unit_amount == null) {
        continue;
      }

      const sizes = p.metadata?.sizes
        ?.split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      items.push({
        slug: p.id,
        name: p.name,
        category: p.metadata?.category?.trim() || "Shop",
        image: p.images?.[0],
        priceCents: price.unit_amount,
        priceId: price.id,
        sizes: sizes && sizes.length ? sizes : undefined,
      });
    }

    if (!items.length) return { items: fromLocal(), source: "local" };
    return { items, source: "stripe" };
  } catch (err) {
    console.error("Stripe catalog fetch failed, using local list:", err);
    return { items: fromLocal(), source: "local" };
  }
}

export function categoriesFrom(items: CatalogItem[]) {
  return Array.from(new Set(items.map((i) => i.category)));
}
