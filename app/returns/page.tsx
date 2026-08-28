import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { ORDERS_EMAIL } from "@/lib/site";
import { RETURN_WINDOW_DAYS } from "@/lib/commerce";

export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description:
    "How to return or exchange Full'Tucky gear — 30 days, free exchange shipping, straightforward.",
};

export default function Returns() {
  return (
    <LegalPage
      title="Returns &amp; Exchanges"
      active="/returns"
      eyebrow="Customer Care"
    >
      <p>
        If it doesn&apos;t fit right or it isn&apos;t what you hoped for, send it back.
        You have <strong>{RETURN_WINDOW_DAYS} days</strong> from the day your order arrives.
      </p>

      <h2>What we need</h2>
      <p>
        The item has to be unworn, unwashed, and still have its tags on. That&apos;s the only
        real condition &mdash; we&apos;re not going to nitpick, but we can&apos;t resell
        something that&apos;s been out on a Saturday.
      </p>

      <h2>Exchanges are on us</h2>
      <p>
        Wrong size? We cover the shipping both directions. Email us what you have and what you
        need instead, and we&apos;ll send a prepaid label and get the right one out to you.
        Sizing is the most common reason anything comes back, and we&apos;d rather you end up
        with something that fits than not order at all.
      </p>

      <h2>Refunds</h2>
      <p>
        If you&apos;d rather have your money back, that&apos;s fine too. For refunds, return
        shipping is on you &mdash; you can use any carrier you like. Once the item gets here and
        we&apos;ve checked it over, we refund the full purchase price to your original payment
        method. Give your bank a few business days to post it.
      </p>

      <h2>How to start one</h2>
      <p>
        Email <a href={`mailto:${ORDERS_EMAIL}`}>{ORDERS_EMAIL}</a> with your order number and
        whether you want an exchange or a refund. A real person reads it. We&apos;ll reply with
        the return address and, for exchanges, a prepaid label.
      </p>

      <h2>Something wrong with it</h2>
      <p>
        If an item shows up damaged, flawed, or just plain not what you ordered, that&apos;s on
        us &mdash; email us with a photo and we&apos;ll make it right at no cost to you,
        whichever direction you want to go.
      </p>

      <h2>A note on fairness</h2>
      <p>
        We reserve the right to decline a return where there&apos;s clear wear, damage, or a
        pattern of abuse. We don&apos;t expect to ever use that sentence.
      </p>
    </LegalPage>
  );
}
