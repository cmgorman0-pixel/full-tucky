"use client";

import { useState } from "react";
import type { CatalogItem } from "@/lib/catalog";

export default function BuyButton({ product }: { product: CatalogItem }) {
  const [size, setSize] = useState(product.sizes?.[2] ?? "");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  // No price set yet — say so plainly rather than showing a dead button.
  if (typeof product.priceCents !== "number") {
    return (
      <div className="mt-3.5 text-sm text-[var(--espresso-2)]">
        Pricing coming soon
      </div>
    );
  }

  async function buy() {
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: product.slug,
          priceId: product.priceId,
          size,
          quantity: 1,
        }),
      });
      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }

      setStatus("error");
      setMessage(
        data.error === "not_configured"
          ? "Checkout isn't connected yet."
          : "Something went wrong starting checkout. Please try again."
      );
    } catch {
      setStatus("error");
      setMessage("Couldn't reach checkout. Please try again.");
    }
  }

  return (
    <div className="mt-3.5">
      {product.sizes && (
        <label className="block mb-2.5">
          <span className="sr-only">Size</span>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full h-11 px-3 border-[1.5px] border-[var(--line)] bg-[var(--cream-2)] text-sm text-[var(--espresso)]"
          >
            {product.sizes.map((s) => (
              <option key={s} value={s}>
                Size {s}
              </option>
            ))}
          </select>
        </label>
      )}
      <button
        onClick={buy}
        disabled={status === "loading"}
        className="btn btn-outline w-full justify-center disabled:opacity-60"
      >
        {status === "loading" ? "Starting checkout…" : "Buy Now"}
      </button>
      {message && (
        <p className="mt-2 text-[13px] text-[var(--barnred)]">{message}</p>
      )}
    </div>
  );
}
