import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";
import {
  SHIPPING_FLAT_CENTS,
  SHIP_TO_COUNTRIES,
  AUTOMATIC_TAX_ENABLED,
} from "@/lib/commerce";
import { SITE_URL } from "@/lib/site";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;

  // Degrade honestly: no key means checkout genuinely isn't connected yet.
  if (!secret) {
    return NextResponse.json(
      {
        error: "not_configured",
        message: "Checkout isn't connected yet.",
      },
      { status: 503 }
    );
  }

  let body: { slug?: string; size?: string; quantity?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const product = body.slug ? getProduct(body.slug) : undefined;
  if (!product) {
    return NextResponse.json({ error: "unknown_product" }, { status: 404 });
  }

  // Price is the source of truth on the server — never trust an amount from the client.
  if (typeof product.priceCents !== "number") {
    return NextResponse.json(
      { error: "no_price", message: "This item isn't priced yet." },
      { status: 409 }
    );
  }

  if (product.sizes && !product.sizes.includes(body.size ?? "")) {
    return NextResponse.json({ error: "size_required" }, { status: 400 });
  }

  const quantity = Math.min(Math.max(Math.trunc(body.quantity ?? 1), 1), 10);
  const origin = request.headers.get("origin") ?? SITE_URL;
  const stripe = new Stripe(secret);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity,
          price_data: {
            currency: "usd",
            unit_amount: product.priceCents,
            product_data: {
              name: product.sizes
                ? `${product.name} (${body.size})`
                : product.name,
              images: product.image ? [`${origin}${product.image}`] : undefined,
            },
          },
        },
      ],
      shipping_address_collection: {
        allowed_countries: [...SHIP_TO_COUNTRIES],
      },
      ...(typeof SHIPPING_FLAT_CENTS === "number"
        ? {
            shipping_options: [
              {
                shipping_rate_data: {
                  type: "fixed_amount" as const,
                  display_name: "Standard shipping",
                  fixed_amount: {
                    amount: SHIPPING_FLAT_CENTS,
                    currency: "usd",
                  },
                },
              },
            ],
          }
        : {}),
      automatic_tax: { enabled: AUTOMATIC_TAX_ENABLED },
      success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session failed:", err);
    return NextResponse.json({ error: "stripe_error" }, { status: 502 });
  }
}
