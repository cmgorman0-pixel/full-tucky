import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false },
};

export default function CheckoutSuccess() {
  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <Header active="/shop" />

      <div className="max-w-xl mx-auto px-8 py-28 text-center">
        <div className="eyebrow">Thank You</div>
        <h1 className="text-5xl mt-2">You&apos;re All Set</h1>
        <p className="text-[var(--espresso-2)] mt-5 leading-relaxed">
          Your order came through and a receipt is on its way to your email. We&apos;ll be in
          touch when it ships.
        </p>
        <Link href="/shop" className="btn mt-8 inline-flex">
          Back to the Shop
        </Link>
      </div>

      <Footer />
    </div>
  );
}
