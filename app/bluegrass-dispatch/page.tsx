import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sortedPosts, formatPostDate, DISPATCH_CATEGORIES } from "@/lib/dispatch";

export const metadata: Metadata = {
  title: "The Bluegrass Dispatch",
  description:
    "Stories worth telling. Miles worth driving. Trail tips, tailgate lore, bourbon runs, and backroad finds from the people who make Kentucky what it is.",
};

export default function BluegrassDispatch({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const all = sortedPosts();
  const active = searchParams?.category;
  const posts = active ? all.filter((p) => p.category === active) : all;
  const [lead, ...rest] = posts;

  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <Header active="/bluegrass-dispatch" />

      {/* MASTHEAD */}
      <section className="px-8 md:px-14 pt-16 pb-12 text-center flex flex-col items-center border-b border-[var(--line)]">
        <Image
          src="/images/bluegrass-dispatch-logo.png"
          alt="The Bluegrass Dispatch"
          width={140}
          height={147}
          priority
        />
        <p className="text-[var(--espresso-2)] italic mt-6 text-[17px]">
          Stories worth telling. Miles worth driving.
        </p>
        <p className="text-[var(--espresso-2)] mt-4 max-w-xl leading-relaxed text-[15px]">
          The storytelling heart of Full&apos;Tucky &mdash; favorite trails, campfire memories,
          hidden gems, and slices of Kentucky life.
        </p>
      </section>

      {/* CATEGORY FILTER */}
      <div className="px-8 md:px-14 pt-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <Chip href="/bluegrass-dispatch" label="All" active={!active} />
          {DISPATCH_CATEGORIES.map((c) => (
            <Chip
              key={c}
              href={`/bluegrass-dispatch?category=${encodeURIComponent(c)}`}
              label={c}
              active={active === c}
            />
          ))}
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-[var(--espresso-2)] py-24 px-8">
          No dispatches in this category yet.
        </p>
      ) : (
        <section className="px-8 md:px-14 pt-12 pb-24">
          {/* LEAD STORY */}
          <Link href={`/bluegrass-dispatch/${lead.slug}`} className="group block mb-20">
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center">
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--cream-2)]">
                {lead.image && (
                  <Image
                    src={lead.image}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                )}
              </div>
              <div>
                <div className="eyebrow">{lead.category}</div>
                <h2 className="text-[38px] leading-[1.05] mt-3 text-[var(--espresso)]">
                  {lead.title}
                </h2>
                <p className="text-[15.5px] leading-relaxed text-[var(--espresso-2)] mt-4">
                  {lead.excerpt}
                </p>
                <div className="mt-5 text-[12px] uppercase tracking-[0.14em] text-[var(--espresso-2)] opacity-70">
                  {formatPostDate(lead.date)}
                </div>
              </div>
            </div>
          </Link>

          {/* REST */}
          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 border-t border-[var(--line)] pt-16">
              {rest.map((p) => (
                <Link key={p.slug} href={`/bluegrass-dispatch/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--cream-2)]">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <div className="eyebrow mt-5">{p.category}</div>
                  <h3 className="text-[22px] leading-tight mt-2 text-[var(--espresso)]">
                    {p.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-[var(--espresso-2)] mt-2.5">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 text-[12px] uppercase tracking-[0.14em] text-[var(--espresso-2)] opacity-70">
                    {formatPostDate(p.date)}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}

      {/* COMMUNITY NOTE */}
      <section className="bg-[var(--espresso)] text-[var(--cream)] px-8 md:px-14 py-20 text-center">
        <h2 className="text-[34px]">Got a Story?</h2>
        <p className="text-[var(--cream-2)] max-w-lg mx-auto mt-4 leading-relaxed">
          Best backroad you&apos;ve driven, best pour you&apos;ve had, best tailgate you&apos;ve
          thrown &mdash; send it our way and we&apos;ll run it.
        </p>
        <Link href="/contact" className="btn btn-cream mt-7 inline-flex">
          Send It In
        </Link>
      </section>

      <Footer />
    </div>
  );
}

function Chip({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] border transition-colors"
      style={{
        borderColor: active ? "var(--espresso)" : "var(--line)",
        background: active ? "var(--espresso)" : "transparent",
        color: active ? "var(--cream)" : "var(--espresso)",
      }}
    >
      {label}
    </Link>
  );
}
