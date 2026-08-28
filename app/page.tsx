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

      {/* LATEST PRODUCTS */}
      <section className="px-8 md:px-14 pt-22 pb-24">
        <div className="text-center mb-12">
          <div className="eyebrow">New Arrivals</div>
          <h2 className="text-4xl mt-2">Latest Products</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
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

      {/* LIVE FULL BE KENTUCKY */}
      <section className="bg-[var(--espresso)] text-[var(--cream)] px-8 md:px-14 py-24 text-center">
        <h2 className="text-[46px]">LIVE FULL. BE KENTUCKY.</h2>
        <p className="text-base leading-relaxed text-[var(--cream-2)] max-w-xl mx-auto mt-5">
          This isn&apos;t for everyone &mdash; and that&apos;s the point. It&apos;s for the ones
          who take pride in where they&apos;re from, who live full and stand a little taller
          because of it. Full&apos;Tucky is more than apparel. It&apos;s a mindset. A reminder
          that pride, grit, and good times still mean something. Welcome to the movement.
        </p>
        <Link href="/about" className="btn btn-cream mt-8 inline-flex">
          Read Our Story
        </Link>
      </section>

      {/* CONTACT TEASER */}
      <section className="px-8 md:px-14 py-20 text-center">
        <div className="eyebrow">Get In Touch</div>
        <h2 className="text-4xl mt-2">We&apos;d Love To Hear From You</h2>
        <p className="text-[var(--espresso-2)] mt-3">
          Questions about an order, wholesale, or just want to talk Kentucky &mdash; reach out.
        </p>
        <Link href="/contact" className="btn mt-5 inline-flex">
          Go to Contact
        </Link>
      </section>

      <Footer />
    </div>
  );
}
