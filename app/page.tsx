import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import ProductCard from "@/components/ProductCard";
import { getCatalog } from "@/lib/catalog";

// Pick up new products added in Stripe without a redeploy.
export const revalidate = 60;

export default async function Home() {
  const { items } = await getCatalog();
  const featured = items.slice(0, 4);

  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col overflow-hidden bg-gradient-to-br from-[oklch(62%_.14_60)] to-[oklch(28%_.05_40)]">
        <HeroVideo />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,14,10,.72), rgba(20,14,10,.08) 55%, rgba(20,14,10,.5))",
          }}
        />

        <Header active="/" overlay />

        <div className="relative z-10 mt-auto px-8 md:px-14 pb-16 max-w-2xl">
          <div className="eyebrow text-[var(--cream-2)]">Louisville, KY</div>
          <h1 className="text-5xl md:text-6xl leading-[0.98] text-[var(--cream)] mt-2.5">
            IT&apos;S NOT JUST SOUTHERN.
            <br />
            IT&apos;S FULL&apos;TUCKY.
          </h1>
          <p className="text-base leading-relaxed text-[var(--cream-2)] mt-5 max-w-lg">
            We&apos;re built from the same dirt, sweat, and bourbon that make Kentucky what it
            is. Every shirt, hoodie, and hat is made to feel like that favorite spot &mdash; the
            tailgate, the backyard fire, the back road you know by heart. Comfortable as hell,
            tough enough to keep up, and proud enough to wear anywhere.
          </p>
          <div className="mt-7">
            <Link href="/shop" className="btn btn-cream">
              Shop the Collection
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-8 md:px-14 pt-24 pb-28">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <div className="eyebrow">New Arrivals</div>
            <h2 className="text-[42px] mt-2 leading-none">The Latest</h2>
          </div>
          <Link
            href="/shop"
            className="inline-block py-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[var(--espresso)] border-b-2 border-[var(--amber)] hover:text-[var(--barnred)]"
          >
            See the full collection
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 md:gap-x-10">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 3} />
          ))}
        </div>
      </section>

      {/* ROOTED WHERE IT MATTERS */}
      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[340px] md:min-h-[520px]">
          <Image
            src="/images/lifestyle/downtown-walk.jpg"
            alt="Three friends in Full'Tucky gear crossing a downtown Kentucky street"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 bg-[var(--cream-2)]">
          <div className="eyebrow">Our Roots</div>
          <h2 className="text-[40px] mt-2.5">Rooted Where It Matters</h2>
          <p className="text-[15.5px] leading-relaxed text-[var(--espresso-2)] mt-4.5 max-w-md">
            We didn&apos;t make this to fit in &mdash; we made it to stand out. Kentucky has a
            culture all its own, and we&apos;re not watering it down. Our designs pull from
            what&apos;s real: the rolling hills, the horse barns, the Friday night lights, the
            sound of gravel under your boots.
          </p>
          <p className="text-[15.5px] leading-relaxed text-[var(--espresso-2)] mt-3.5 max-w-md">
            We keep things simple &mdash; premium fabrics, clean fits, bold detail. Because when
            you live Full&apos;Tucky, you don&apos;t have to shout to be heard. You just have to
            wear it.
          </p>
        </div>
      </section>

      {/* LIVE FULL BE KENTUCKY — full-bleed landscape band.
          Swap this image for a licensed Kentucky landscape (rolling hills, horse
          fence line, bourbon barrel run) when one is available; the layout and
          scrim are already sized for a wide horizon shot. */}
      <section className="relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden">
        <Image
          src="/images/lifestyle/statement-band.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(20,14,10,.86), rgba(20,14,10,.55) 55%, rgba(20,14,10,.35))",
          }}
        />
        <div className="relative z-10 px-8 md:px-14 py-24 max-w-2xl">
          <h2 className="text-[46px] md:text-[58px] leading-[0.95] text-[var(--cream)]">
            LIVE FULL.
            <br />
            BE KENTUCKY.
          </h2>
          <p className="text-base leading-relaxed text-[var(--cream-2)] mt-6 max-w-lg">
            This isn&apos;t for everyone &mdash; and that&apos;s the point. It&apos;s for the ones
            who take pride in where they&apos;re from, who live full and stand a little taller
            because of it. Full&apos;Tucky is more than apparel. It&apos;s a mindset.
          </p>
          <Link href="/about" className="btn btn-cream mt-8 inline-flex">
            Read Our Story
          </Link>
        </div>
      </section>

      {/* DISPATCH TEASER */}
      <section className="px-8 md:px-14 py-20 border-b border-[var(--line)]">
        <div className="max-w-3xl">
          <div className="eyebrow">The Bluegrass Dispatch</div>
          <h2 className="text-[36px] mt-2.5 leading-tight">
            Stories Worth Telling. Miles Worth Driving.
          </h2>
          <p className="text-[15.5px] leading-relaxed text-[var(--espresso-2)] mt-4 max-w-xl">
            Trail tips, tailgate lore, bourbon runs, and backroad finds &mdash; from the people
            who make Kentucky what it is.
          </p>
          <Link href="/bluegrass-dispatch" className="btn btn-outline mt-7 inline-flex">
            Read the Dispatch
          </Link>
        </div>
      </section>

      {/* CONTACT TEASER */}
      <section className="px-8 md:px-14 py-24 text-center">
        <div className="eyebrow">Get In Touch</div>
        <h2 className="text-[36px] mt-2.5">We&apos;d Love To Hear From You</h2>
        <p className="text-[var(--espresso-2)] mt-3.5 max-w-md mx-auto leading-relaxed">
          Questions about an order, wholesale, or just want to talk Kentucky &mdash; reach out.
        </p>
        <Link href="/contact" className="btn mt-7 inline-flex">
          Go to Contact
        </Link>
      </section>

      <Footer />
    </div>
  );
}
