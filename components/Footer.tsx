import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--espresso)] text-[var(--cream-2)] px-8 md:px-14 pt-14 pb-7">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1440px] mx-auto">
        <div>
          <Image
            src="/images/fulltucky-logo-black.jpg"
            alt="Full'Tucky"
            width={58}
            height={58}
            className="object-contain"
          />
          <p className="text-[13.5px] leading-relaxed mt-3 max-w-xs text-[oklch(80%_.01_80)]">
            Apparel built from the same dirt, sweat, and bourbon that make Kentucky what it is.
          </p>
        </div>
        <div>
          <div className="eyebrow text-[oklch(70%_.02_80)]">Quick Links</div>
          <div className="flex flex-col gap-2.5 mt-4 text-sm">
            <Link href="/about" className="text-[var(--cream-2)]">About</Link>
            <Link href="/shop" className="text-[var(--cream-2)]">Shop</Link>
            <Link href="/bluegrass-dispatch" className="text-[var(--cream-2)]">Bluegrass Dispatch</Link>
            <Link href="/contact" className="text-[var(--cream-2)]">Contact</Link>
          </div>
        </div>
        <div>
          <div className="eyebrow text-[oklch(70%_.02_80)]">Contact</div>
          <div className="flex flex-col gap-2.5 mt-4 text-sm text-[var(--cream-2)]">
            <span>[YOUR PHONE NUMBER]</span>
            <span>Louisville, KY</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[oklch(35%_.02_50)] mt-11 pt-5 text-[12.5px] text-[oklch(65%_.02_80)] max-w-[1440px] mx-auto">
        &copy;{new Date().getFullYear()} Full&apos;Tucky. All Rights Reserved.
      </div>
    </footer>
  );
}
