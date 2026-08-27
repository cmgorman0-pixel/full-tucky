import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop | Full'Tucky",
};

const categories = ["Tees", "Hoodies & Flannels", "Hats", "Accessories"];

export default function Shop() {
  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <Header active="/shop" />

      <div className="px-8 md:px-14 pt-11 pb-2">
        <div className="eyebrow">Shop</div>
        <h1 className="text-5xl mt-1.5">The Full Collection</h1>
        <p className="text-[var(--espresso-2)] mt-3 max-w-lg">
          Products are shown for preview &mdash; online checkout isn&apos;t live yet.
        </p>
      </div>

      <div className="grid md:grid-cols-[240px_1fr] gap-12 px-8 md:px-14 pt-8 pb-24">
        <aside>
          <div className="font-bold text-[13px] uppercase tracking-wide mb-2.5">Categories</div>
          <div className="flex flex-col text-sm">
            {categories.map((c) => {
              const count = products.filter((p) => p.category === c).length;
              return (
                <div
                  key={c}
                  className="flex items-center justify-between py-2.5 border-b border-[var(--line)] text-[var(--espresso-2)]"
                >
                  {c} <span>({count})</span>
                </div>
              );
            })}
          </div>
        </aside>

        <div>
          <div className="text-[13.5px] text-[var(--espresso-2)] mb-6">
            Showing all {products.length} results
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
            {products.map((p) => (
              <div key={p.name} className="flex flex-col">
                <PlaceholderPhoto variant={p.variant} height={250} label="Photo" />
                <div className="pt-3.5 text-base font-semibold">{p.name}</div>
                <div className="text-[var(--espresso-2)]">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
