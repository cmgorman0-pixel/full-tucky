import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full'Tucky was born out of pride in where we're from. Built from the same dirt roads and Friday night lights that raised us.",
};

export default function About() {
  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <Header active="/about" />

      <div className="relative h-[420px]">
        <Image
          src="/images/lifestyle/downtown-group.jpg"
          alt="Three friends in Full'Tucky gear walking through downtown"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(20,14,10,.72), rgba(20,14,10,.32))" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <div className="eyebrow text-[var(--cream-2)]">Our Story</div>
            <h1 className="text-5xl md:text-6xl text-[var(--cream)] mt-2.5">
              BUILT FROM THE GROUND UP
            </h1>
          </div>
        </div>
      </div>

      <section className="max-w-2xl mx-auto px-8 py-20">
        <p className="text-base leading-relaxed text-[var(--espresso-2)]">
          Full&apos;Tucky was born out of pride &mdash; pride in where we&apos;re from, how we
          were raised, and what we stand for. We didn&apos;t want another cookie-cutter brand
          pretending to understand Kentucky. We wanted something real. Something built from the
          same dirt roads, smoky barrooms, and Friday night lights that raised us.
        </p>
        <p className="text-base leading-relaxed text-[var(--espresso-2)] mt-4.5">
          So, we made it ourselves. What started as a local idea turned into a movement &mdash; a
          lifestyle that celebrates Kentucky&apos;s grit, its heart, and its no-BS way of living.
          We didn&apos;t follow a trend; we built our own. Because this isn&apos;t just southern
          &mdash; it&apos;s beyond southern.
        </p>

        <div className="flex items-center gap-2.5 my-13">
          <span className="h-px w-12 bg-[var(--line)]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber)]" />
          <span className="h-px w-12 bg-[var(--line)]" />
        </div>

        <div className="eyebrow">How We Build</div>
        <h2 className="text-4xl mt-2.5">Made the Right Way</h2>
        <p className="text-base leading-relaxed text-[var(--espresso-2)] mt-5">
          Every piece we design is built with purpose. Premium fabrics, soft feel, and details
          that mean something. We don&apos;t overthink it &mdash; we just do it right. Whether
          it&apos;s a classic tee that breaks in perfectly or a hoodie that feels like it&apos;s
          been yours for years, everything we make is meant to last and meant to represent.
        </p>
        <p className="text-base leading-relaxed text-[var(--espresso-2)] mt-4.5">
          Our inspiration runs deep &mdash; bourbon barrels, horse fences, gravel drives, and
          that unmistakable Kentucky toughness. We&apos;re not chasing mass-produced style;
          we&apos;re creating something that feels like home. When you pull on Full&apos;Tucky,
          you&apos;re wearing a reminder of who you are and where you come from.
        </p>

        <div className="flex items-center gap-2.5 my-13">
          <span className="h-px w-12 bg-[var(--line)]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber)]" />
          <span className="h-px w-12 bg-[var(--line)]" />
        </div>

        <div className="eyebrow">Who It&apos;s For</div>
        <h2 className="text-4xl mt-2.5">For the Ones Who Live Full</h2>
        <p className="text-base leading-relaxed text-[var(--espresso-2)] mt-5">
          Full&apos;Tucky is for the folks who make their own way. The ones who clock in, grind
          hard, and still find time to live life wide open. The ones who pour a little extra,
          laugh a little louder, and don&apos;t care what anyone else thinks.
        </p>
        <p className="text-base leading-relaxed text-[var(--espresso-2)] mt-4.5">
          This brand is for you &mdash; the everyday legend, the weekend wanderer, the backbone
          of the Bluegrass. We&apos;re proud to call Kentucky home, and we&apos;re proud to wear
          it on our sleeves.
        </p>
      </section>

      <section className="bg-[var(--espresso)] text-[var(--cream)] px-8 md:px-14 py-24 text-center">
        <h2 className="text-[40px]">WHAT&apos;S YOUR TUCKY?</h2>
        <p className="text-base leading-relaxed text-[var(--cream-2)] max-w-lg mx-auto mt-5">
          Welcome to the Full&apos;Tucky Collective. Live full. Live Kentucky.
        </p>
      </section>

      <Footer />
    </div>
  );
}
