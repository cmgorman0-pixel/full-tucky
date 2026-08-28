import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getCatalog, categoriesFrom } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "An early look at the Full'Tucky lineup — Kentucky-built hats and hooded sun shirts from Louisville.",
};

// Pick up new products added in Stripe without a redeploy.
export const revalidate = 60;

export default async function Shop({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const { items } = await getCatalog();
  const categories = categoriesFrom(items);
  const active = searchParams?.category;
  const shown = active ? items.filter((i) => i.category === active) : items;
  const anyPriced = items.some((i) => typeof i.priceCents === "number");

  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <Header active="/shop" />

      {/* EDITORIAL HEADER */}
      <section className="relative h-[340px] md:h-[420px] overflow-hidden">
        <Image
          src="/images/lifestyle/street-band.jpg"
          alt="Full'Tucky gear worn on a Kentucky main street"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,14,10,.78), rgba(20,14,10,.15) 60%, rgba(20,14,10,.35))",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-14 pb-12">
          <div className="eyebrow text-[var(--cream-2)]">The Collection</div>
          <h1 className="text-5xl md:text-6xl text-[var(--cream)] mt-2 leading-[0.95]">
            BUILT FOR THE LONG WAY HOME
          </h1>
          <p className="text-[var(--cream-2)] mt-4 max-w-lg text-[15px] leading-relaxed">
            {anyPriced
              ? "Premium fabrics, clean fits, bold detail. Free shipping on every order."
              : "Premium fabrics, clean fits, bold detail. An early look — pricing and checkout aren't live yet."}
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <div className="px-8 md:px-14 pt-10">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-[var(--line)] pb-6">
          <FilterChip href="/shop" label="All" count={items.length} active={!active} />
          {categories.map((c) => (
            <FilterChip
              key={c}
              href={`/shop?category=${encodeURIComponent(c)}`}
              label={c}
              count={items.filter((i) => i.category === c).length}
              active={active === c}
            />
          ))}
        </div>
      </div>

      {/* GRID */}
      <section className="px-8 md:px-14 pt-10 pb-20">
        {shown.length === 0 ? (
          <p className="text-[var(--espresso-2)] py-16 text-center">
            Nothing in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 md:gap-x-10 md:gap-y-16">
            {shown.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 3} />
            ))}
          </div>
        )}
      </section>

      {/* CRAFT BAND */}
      <section className="grid md:grid-cols-2 border-t border-[var(--line)]">
        <div className="relative min-h-[360px] md:min-h-[560px]">
          <Image
            src="/images/lifestyle/hat-back.jpg"
            alt="Beyond Southern embroidery on a Full'Tucky cap"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 bg-[var(--cream-2)]">
          <div className="eyebrow">Made the Right Way</div>
          <h2 className="text-[38px] mt-2.5 leading-tight">
            A Few Bucks More,
            <br />
            For Good Reason
          </h2>
          <p className="text-[15.5px] leading-relaxed text-[var(--espresso-2)] mt-5 max-w-md">
            We wouldn&apos;t be Full&apos;Tucky if we cut corners. Our tees are sourced from our
            native land &mdash; proudly made in the USA from 100% organic cotton. Soft, durable,
            and crafted the right way.
          </p>
          <ul className="mt-7 space-y-3 text-[14.5px] text-[var(--espresso-2)]">
            <li className="flex gap-3">
              <Dot />
              100% organic combed ring-spun cotton
            </li>
            <li className="flex gap-3">
              <Dot />
              Made in the USA, sweatshop free
            </li>
            <li className="flex gap-3">
              <Dot />
              Unisex retail cut, lightweight comfort
            </li>
            <li className="flex gap-3">
              <Dot />
              Premium print front &amp; back
            </li>
          </ul>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[var(--espresso)] text-[var(--cream)] px-8 md:px-14 py-20 text-center">
        <h2 className="text-[38px]">WHAT&apos;S YOUR TUCKY?</h2>
        <p className="text-[var(--cream-2)] max-w-lg mx-auto mt-4 leading-relaxed">
          More styles, more stories, and the rest of the lineup are on the way.
        </p>
        <Link href="/about" className="btn btn-cream mt-7 inline-flex">
          Our Story
        </Link>
      </section>

      <Footer />
    </div>
  );
}

function Dot() {
  return (
    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[var(--amber)] shrink-0" />
  );
}

function FilterChip({
  href,
  label,
  count,
  active,
}: {
  href: string;
  label: string;
  count: number;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] border transition-colors"
      style={{
        borderColor: active ? "var(--espresso)" : "var(--line)",
        background: active ? "var(--espresso)" : "transparent",
        color: active ? "var(--cream)" : "var(--espresso)",
      }}
    >
      {label} <span className="opacity-60">({count})</span>
    </Link>
  );
}
