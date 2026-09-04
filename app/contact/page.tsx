import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import { CONTACT_EMAIL, ORDERS_EMAIL, CONTACT_PHONE, SITE_LOCATION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about an order, wholesale, or just want to talk Kentucky? Get in touch with Full'Tucky in Louisville, KY.",
};

export default function Contact() {
  return (
    <div className="max-w-[1440px] mx-auto bg-[var(--cream)]">
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/lifestyle/downtown-group.jpg"
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
                "linear-gradient(to top, rgba(20,14,10,.82), rgba(20,14,10,.3) 60%, rgba(20,14,10,.5))",
            }}
          />
        </div>
        <div className="relative z-10">
          <Header active="/contact" overlay />
          <div className="px-8 md:px-14 pt-16 pb-20 md:pt-20 md:pb-24 max-w-2xl">
            <div className="eyebrow text-[var(--cream-2)]">Get In Touch</div>
            <h1 className="text-5xl md:text-[60px] leading-[0.95] text-[var(--cream)] mt-3">
              SAY HEY.
            </h1>
            <p className="text-[var(--cream-2)] mt-5 max-w-md leading-relaxed">
              Questions about an order, wholesale, a story for the Dispatch, or just want to talk
              Kentucky &mdash; a real person reads every one of these.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-14 md:gap-20 px-8 md:px-14 py-20 max-w-[1150px] mx-auto">
        <ContactForm />

        <div>
          <div className="eyebrow">Reach Us Directly</div>
          <div className="mt-4 text-[15px] leading-loose">
            <div>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div className="text-[var(--espresso-2)]">{CONTACT_PHONE}</div>
            <div className="text-[var(--espresso-2)]">{SITE_LOCATION}</div>
          </div>

          <div className="eyebrow mt-12">Orders &amp; Returns</div>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--espresso-2)]">
            For anything about an existing order, email{" "}
            <a href={`mailto:${ORDERS_EMAIL}`}>{ORDERS_EMAIL}</a>. Our{" "}
            <Link href="/returns">returns and exchanges</Link> policy covers the details &mdash;
            30 days, free exchange shipping &mdash; and the <Link href="/faq">FAQ</Link> answers
            most of the rest.
          </p>

          <div className="eyebrow mt-12">Wholesale &amp; Bulk</div>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--espresso-2)]">
            Shops, teams, events, company orders &mdash; we&apos;re open to it. Use the form and
            tell us what you have in mind.
          </p>

          <div className="eyebrow mt-12">Got a Story?</div>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--espresso-2)]">
            Best backroad, best pour, best tailgate. The{" "}
            <Link href="/bluegrass-dispatch">Bluegrass Dispatch</Link> runs stories from people
            who actually live here.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
