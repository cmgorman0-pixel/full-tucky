import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)] min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center px-8 py-28 text-center">
        <div className="max-w-lg">
          <div className="eyebrow">404</div>
          <h1 className="text-[56px] md:text-[68px] leading-[0.95] mt-3">
            YOU TOOK A
            <br />
            WRONG TURN.
          </h1>
          <p className="text-[16px] leading-relaxed text-[var(--espresso-2)] mt-6">
            Happens on the back roads too. This page doesn&apos;t exist &mdash; or it moved on
            without telling us.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-9">
            <Link href="/" className="btn">
              Back Home
            </Link>
            <Link href="/shop" className="btn btn-outline">
              Shop the Collection
            </Link>
          </div>
          <p className="text-[14px] text-[var(--espresso-2)] mt-10">
            Looking for something specific? Try the{" "}
            <Link href="/bluegrass-dispatch">Dispatch</Link>, the{" "}
            <Link href="/faq">FAQ</Link>, or just{" "}
            <Link href="/contact">ask us</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
