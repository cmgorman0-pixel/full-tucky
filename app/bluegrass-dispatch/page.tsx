import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Bluegrass Dispatch | Full'Tucky",
};

export default function BluegrassDispatch() {
  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <Header active="/bluegrass-dispatch" />

      <div className="px-8 py-28 text-center flex flex-col items-center">
        <Image
          src="/images/bluegrass-dispatch-logo.png"
          alt="The Bluegrass Dispatch"
          width={170}
          height={178}
        />
        <p className="text-[var(--espresso-2)] italic mt-5 max-w-md">
          Stories worth telling. Miles worth driving.
        </p>
        <div className="eyebrow mt-10">Coming Soon</div>
        <p className="text-[var(--espresso-2)] mt-3 max-w-md">
          The Bluegrass Dispatch &mdash; trail tips, tailgate lore, and stories from the road
          &mdash; is on its way. Check back soon.
        </p>
      </div>

      <Footer />
    </div>
  );
}
