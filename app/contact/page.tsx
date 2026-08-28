import type { Metadata } from "next";
import Link from "next/link";
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
      <Header active="/contact" />

      <div className="px-8 md:px-14 pt-14 pb-2 text-center">
        <div className="eyebrow">Get In Touch</div>
        <h1 className="text-5xl mt-2">We&apos;d Love To Hear From You</h1>
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 px-8 md:px-14 pt-12 pb-24 max-w-[1100px] mx-auto">
        <ContactForm />

        <div>
          <div className="eyebrow">Reach Us Directly</div>
          <div className="mt-4 text-[15px] leading-loose">
            <div>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div>{CONTACT_PHONE}</div>
            <div>{SITE_LOCATION}</div>
          </div>

          <div className="eyebrow mt-10">Orders &amp; Returns</div>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--espresso-2)]">
            For anything about an existing order, email{" "}
            <a href={`mailto:${ORDERS_EMAIL}`}>{ORDERS_EMAIL}</a>. Our{" "}
            <Link href="/returns">returns and exchanges</Link> policy covers the details, and
            the <Link href="/faq">FAQ</Link> answers most of the rest.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
