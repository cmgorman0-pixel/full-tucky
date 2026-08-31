import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full'Tucky is built from the same dirt, sweat, and bourbon that make Kentucky what it is. Beyond Southern — layered, practical, proud, evolving.",
};

export default function About() {
  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/lifestyle/statement-band.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(20,14,10,.82), rgba(20,14,10,.25) 60%, rgba(20,14,10,.55))",
            }}
          />
        </div>
        <div className="relative z-10">
          <Header active="/about" overlay />
          <div className="px-8 md:px-14 pt-20 pb-24 md:pt-28 md:pb-32 max-w-3xl">
            <div className="eyebrow text-[var(--cream-2)]">Our Story</div>
            <h1 className="text-5xl md:text-[68px] leading-[0.95] text-[var(--cream)] mt-3">
              EVERYBODY&apos;S GOT
              <br />
              A SPOT.
            </h1>
          </div>
        </div>
      </div>

      {/* THE FEELING */}
      <section className="max-w-2xl mx-auto px-8 py-24">
        <p className="text-[19px] leading-[1.75] text-[var(--espresso)]">
          Maybe it&apos;s a bend in the creek where the fish actually bite, and you&apos;ve never
          told anybody exactly where it is. Maybe it&apos;s a gravel pull-off you know by feel in
          the dark. Maybe it&apos;s your grandmother&apos;s kitchen in August, the window unit
          running, somebody arguing about the game in the next room.
        </p>
        <p className="text-[17px] leading-[1.8] text-[var(--espresso-2)] mt-6">
          Whatever it is, you can put yourself back there in about half a second. That&apos;s the
          feeling we&apos;re after. Not a state on a map &mdash; the specific places and people
          that made you, the ones you&apos;d drive four hours to get back to.
        </p>
        <p className="text-[17px] leading-[1.8] text-[var(--espresso-2)] mt-5">
          Full&apos;Tucky is for the ones who show up early, stay late, and don&apos;t need an
          excuse to have a good time. Every shirt, hoodie, and hat is made to feel like that
          favorite spot &mdash; the tailgate, the backyard fire, the back road you know by heart.
        </p>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-[var(--espresso)] px-8 md:px-14 py-24">
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-[32px] md:text-[42px] leading-[1.15] text-[var(--cream)] font-[family-name:var(--font-display)]">
            &ldquo;Southern used to mean something specific.
            <br />
            Now it&apos;s a costume.&rdquo;
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--cream-2)] mt-8 max-w-xl mx-auto">
            Accents exaggerated for clicks. Tradition flattened into an aesthetic. That&apos;s not
            where this comes from.
          </p>
        </blockquote>
      </section>

      {/* BEYOND SOUTHERN */}
      <section className="max-w-2xl mx-auto px-8 py-24">
        <div className="eyebrow">What Beyond Southern Means</div>
        <h2 className="text-[40px] mt-3 leading-tight">We Don&apos;t Fit In A Box</h2>
        <p className="text-[17px] leading-[1.8] text-[var(--espresso-2)] mt-6">
          Kentucky &mdash; and places like it &mdash; don&apos;t fit neatly into a box. We&apos;re
          not old South, not Midwest, not Appalachian in the way outsiders expect. We&apos;re
          layered. Contradictory. Practical. Proud. Evolving.
        </p>
        <p className="text-[17px] leading-[1.8] text-[var(--espresso-2)] mt-5">
          That&apos;s what Beyond Southern means. It&apos;s the recognition that culture
          isn&apos;t frozen in time. That respect for where you&apos;re from doesn&apos;t require
          pretending it&apos;s 1954. That work ethic doesn&apos;t need to be announced. That
          identity doesn&apos;t need defending every five minutes.
        </p>
        <p className="text-[19px] leading-[1.7] text-[var(--espresso)] mt-6 font-semibold">
          This isn&apos;t about abandoning tradition. It&apos;s about refusing to reduce it.
        </p>
        <p className="text-[17px] leading-[1.8] text-[var(--espresso-2)] mt-5">
          If &ldquo;Southern&rdquo; feels too small a word for what you know this place to be,
          you&apos;re not alone. That&apos;s why this is here.
        </p>
      </section>

      {/* ROOTED — SPLIT */}
      <section className="grid md:grid-cols-2 border-t border-[var(--line)]">
        <div className="relative min-h-[360px] md:min-h-[560px]">
          <Image
            src="/images/lifestyle/downtown-walk.jpg"
            alt="Friends in Full'Tucky gear on a Kentucky main street"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 bg-[var(--cream-2)]">
          <div className="eyebrow">Our Roots</div>
          <h2 className="text-[38px] mt-2.5 leading-tight">Rooted Where It Matters</h2>
          <p className="text-[15.5px] leading-relaxed text-[var(--espresso-2)] mt-5 max-w-md">
            We didn&apos;t make this to fit in &mdash; we made it to stand out. Our designs pull
            from what&apos;s real: the rolling hills, the horse barns, the Friday night lights,
            the sound of gravel under your boots.
          </p>
          <p className="text-[15.5px] leading-relaxed text-[var(--espresso-2)] mt-4 max-w-md">
            We didn&apos;t want another cookie-cutter brand pretending to understand Kentucky. We
            wanted something real. Something built from the same dirt roads, smoky barrooms, and
            Friday night lights that raised us. So we made it ourselves.
          </p>
        </div>
      </section>

      {/* MADE RIGHT — SPLIT REVERSED */}
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 order-2 md:order-1">
          <div className="eyebrow">How It&apos;s Made</div>
          <h2 className="text-[38px] mt-2.5 leading-tight">A Few Bucks More</h2>
          <p className="text-[15.5px] leading-relaxed text-[var(--espresso-2)] mt-5 max-w-md">
            We wouldn&apos;t be Full&apos;Tucky if we cut corners. Our tees are sourced from our
            native land &mdash; made in the USA from 100% organic cotton, sweatshop free. Soft,
            durable, crafted the right way.
          </p>
          <p className="text-[15.5px] leading-relaxed text-[var(--espresso-2)] mt-4 max-w-md">
            Whether it&apos;s a classic tee that breaks in perfectly or a hoodie that feels like
            it&apos;s been yours for years, everything we make is meant to last and meant to
            represent. We don&apos;t overthink it &mdash; we just do it right.
          </p>
        </div>
        <div className="relative min-h-[360px] md:min-h-[560px] order-1 md:order-2">
          <Image
            src="/images/lifestyle/hat-back.jpg"
            alt="Beyond Southern embroidery on a Full'Tucky cap"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="max-w-2xl mx-auto px-8 py-24 text-center">
        <div className="eyebrow">Who It&apos;s For</div>
        <h2 className="text-[40px] mt-3 leading-tight">For The Ones Who Live Full</h2>
        <p className="text-[17px] leading-[1.8] text-[var(--espresso-2)] mt-6">
          The folks who make their own way. The ones who clock in, grind hard, and still find
          time to live life wide open. The ones who pour a little extra, laugh a little louder,
          and don&apos;t care what anyone else thinks.
        </p>
        <p className="text-[17px] leading-[1.8] text-[var(--espresso-2)] mt-5">
          The everyday legend, the weekend wanderer, the backbone of the Bluegrass. We&apos;re
          proud to call Kentucky home, and we&apos;re proud to wear it on our sleeves.
        </p>
      </section>

      {/* CLOSING */}
      <section className="relative min-h-[460px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-poster.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(20,14,10,.7)]" />
        <div className="relative z-10 text-center px-8 py-20">
          <h2 className="text-[46px] md:text-[56px] text-[var(--cream)] leading-none">
            WHAT&apos;S YOUR TUCKY?
          </h2>
          <p className="text-[var(--cream-2)] max-w-lg mx-auto mt-6 leading-relaxed">
            A brand every Kentuckian can see themselves in &mdash; east to west, city to country,
            Cards and Cats, young and old. Welcome to the Full&apos;Tucky Collective.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-9">
            <Link href="/shop" className="btn btn-cream">
              Shop the Collection
            </Link>
            <Link
              href="/bluegrass-dispatch"
              className="btn"
              style={{
                background: "transparent",
                border: "1.5px solid var(--cream-2)",
                color: "var(--cream)",
              }}
            >
              Read the Dispatch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
