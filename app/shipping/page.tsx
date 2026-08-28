import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { ORDERS_EMAIL, SITE_LOCATION } from "@/lib/site";
import { PROCESSING_TIME, SHIP_TO_COUNTRIES } from "@/lib/commerce";

export const metadata: Metadata = {
  title: "Shipping",
  description:
    "Free shipping on every Full'Tucky order, shipped from Louisville, Kentucky.",
};

export default function Shipping() {
  return (
    <LegalPage title="Shipping" active="/shipping" eyebrow="Customer Care">
      <p>
        <strong>Shipping is free on every order.</strong> No minimum, no threshold to hit, no
        surprise line at checkout. It&apos;s built into what you already paid.
      </p>

      <h2>Where we ship</h2>
      <p>
        Right now we ship within the United States only. Everything goes out from{" "}
        {SITE_LOCATION}.
      </p>

      <h2>How long it takes</h2>
      <p>
        Orders are packed and handed off within {PROCESSING_TIME}. After that it&apos;s up to
        the carrier &mdash; typically a few more days depending on how far it&apos;s going.
        You&apos;ll get a confirmation email as soon as your order is placed, and tracking once
        it ships.
      </p>

      <h2>Need to change an order</h2>
      <p>
        If you catch a wrong size or address before it ships, email{" "}
        <a href={`mailto:${ORDERS_EMAIL}`}>{ORDERS_EMAIL}</a> as fast as you can and we&apos;ll
        fix it if it hasn&apos;t already gone out. Once a package is moving we can&apos;t redirect
        it, but you can always{" "}
        <Link href="/returns">return or exchange it</Link> when it arrives.
      </p>

      <h2>Lost or damaged in transit</h2>
      <p>
        If a package goes missing or shows up beat up, tell us. We&apos;ll work it out with the
        carrier and get you taken care of &mdash; that&apos;s not your problem to chase down.
      </p>

      <h2>International</h2>
      <p>
        Not yet. If you&apos;re outside the {SHIP_TO_COUNTRIES.length === 1 ? "US" : "listed countries"}{" "}
        and want Full&apos;Tucky gear, email us and we&apos;ll see what we can do.
      </p>
    </LegalPage>
  );
}
