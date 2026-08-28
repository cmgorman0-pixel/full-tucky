import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { ORDERS_EMAIL, CONTACT_EMAIL, SITE_LOCATION } from "@/lib/site";
import { PROCESSING_TIME, RETURN_WINDOW_DAYS } from "@/lib/commerce";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Full'Tucky sizing, shipping, returns, wholesale, and getting in touch.",
};

export default function Faq() {
  return (
    <LegalPage
      title="Frequently Asked"
      active="/faq"
      eyebrow="Customer Care"
      showUpdated={false}
    >
      <h2>How do the shirts fit?</h2>
      <p>
        Our hooded sun shirts are a unisex retail cut &mdash; not boxy, not slim. If you&apos;re
        between sizes or want more room to layer, size up. A full size guide with real garment
        measurements is coming; until then, email us and we&apos;ll tell you straight what
        we&apos;d order.
      </p>

      <h2>What do the shirts cost to ship?</h2>
      <p>
        Nothing. <Link href="/shipping">Shipping is free</Link> on every order, no minimum.
      </p>

      <h2>How fast will I get it?</h2>
      <p>
        Orders leave within {PROCESSING_TIME}, then it&apos;s carrier time from{" "}
        {SITE_LOCATION}. You&apos;ll get tracking when it ships.
      </p>

      <h2>What if it doesn&apos;t fit?</h2>
      <p>
        Send it back within {RETURN_WINDOW_DAYS} days. Exchanges are free &mdash; we cover
        shipping both ways. For refunds, return shipping is on you. Full details on the{" "}
        <Link href="/returns">returns page</Link>.
      </p>

      <h2>Where is the gear made?</h2>
      <p>
        Our tees are made in the USA from 100% organic combed ring-spun cotton, sweatshop free.
        We&apos;re a few bucks more than a blank you&apos;d find anywhere, and that&apos;s why.
      </p>

      <h2>Do you sell wholesale or do bulk orders?</h2>
      <p>
        We&apos;re open to it &mdash; shops, teams, events, company orders. Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or use the{" "}
        <Link href="/contact">contact form</Link> and tell us what you have in mind.
      </p>

      <h2>Can I change or cancel an order?</h2>
      <p>
        If it hasn&apos;t shipped, yes &mdash; email{" "}
        <a href={`mailto:${ORDERS_EMAIL}`}>{ORDERS_EMAIL}</a> quickly and we&apos;ll catch it.
        Once it&apos;s moving, you&apos;ll need to return it instead.
      </p>

      <h2>Do you ship outside the US?</h2>
      <p>Not yet. Email us if you&apos;re abroad and we&apos;ll see what&apos;s possible.</p>

      <h2>How do I get a story in the Bluegrass Dispatch?</h2>
      <p>
        Send it to us. Best backroad, best pour, best tailgate &mdash; the{" "}
        <Link href="/bluegrass-dispatch">Dispatch</Link> runs stories from people who actually
        live here, and that includes you.
      </p>

      <h2>Still need something?</h2>
      <p>
        Email <a href={`mailto:${ORDERS_EMAIL}`}>{ORDERS_EMAIL}</a> for anything order-related,
        or <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> for everything else. A real
        person reads both.
      </p>
    </LegalPage>
  );
}
