import Link from "next/link";
import Image from "next/image";
import { CONTACT_EMAIL, ORDERS_EMAIL, CONTACT_PHONE, SITE_LOCATION } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--espresso)] text-[var(--cream-2)] px-8 md:px-14 pt-14 pb-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1440px] mx-auto">
        <div>
          <Image
            src="/images/fulltucky-logo-light.png"
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
          <div className="eyebrow text-[oklch(70%_.02_80)]">Explore</div>
          <div className="flex flex-col mt-2 text-sm">
            <Link href="/shop" className="text-[var(--cream-2)] py-3">Shop</Link>
            <Link href="/about" className="text-[var(--cream-2)] py-3">About</Link>
            <Link href="/bluegrass-dispatch" className="text-[var(--cream-2)] py-3">Bluegrass Dispatch</Link>
            <Link href="/contact" className="text-[var(--cream-2)] py-3">Contact</Link>
          </div>
        </div>

        <div>
          <div className="eyebrow text-[oklch(70%_.02_80)]">Customer Care</div>
          <div className="flex flex-col mt-2 text-sm">
            <Link href="/faq" className="text-[var(--cream-2)] py-3">FAQ</Link>
            <Link href="/shipping" className="text-[var(--cream-2)] py-3">Shipping</Link>
            <Link href="/returns" className="text-[var(--cream-2)] py-3">Returns &amp; Exchanges</Link>
            <Link href="/terms" className="text-[var(--cream-2)] py-3">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="text-[var(--cream-2)] py-3">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <div className="eyebrow text-[oklch(70%_.02_80)]">Get In Touch</div>
          <div className="flex flex-col gap-2.5 mt-4 text-sm text-[var(--cream-2)]">
            <a href={`mailto:${ORDERS_EMAIL}`} className="text-[var(--cream-2)] py-3">
              {ORDERS_EMAIL}
            </a>
            {CONTACT_EMAIL !== ORDERS_EMAIL && (
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--cream-2)] py-3">
                {CONTACT_EMAIL}
              </a>
            )}
            <span>{CONTACT_PHONE}</span>
            <span>{SITE_LOCATION}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[oklch(35%_.02_50)] mt-11 pt-5 text-[12.5px] text-[oklch(65%_.02_80)] max-w-[1440px] mx-auto">
        &copy;{new Date().getFullYear()} Full&apos;Tucky. All Rights Reserved.
      </div>
    </footer>
  );
}
