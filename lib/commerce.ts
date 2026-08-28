/**
 * Commerce settings. These are the knobs to turn once real numbers are decided —
 * nothing here invents a value, and checkout stays disabled until prices are set.
 */

/**
 * Flat shipping charged at checkout, in CENTS.
 *
 * Set to 0 — Full'Tucky ships free, with the cost built into product prices.
 * Because of that, product prices must absorb roughly $6 per order (typical
 * USPS Ground Advantage for a hat or shirt) or every sale eats that margin.
 *
 * Set to undefined to omit the shipping line entirely; any positive number
 * charges that amount.
 */
export const SHIPPING_FLAT_CENTS: number | undefined = 0;

/** Countries the store will ship to. */
export const SHIP_TO_COUNTRIES = ["US"] as const;

/**
 * Sales tax is deliberately OFF for launch (decided 2026-08-27) — no tax is
 * calculated or collected, so the customer's total equals the product price.
 *
 * Turning this on requires enabling Stripe Tax in the dashboard (a paid add-on),
 * setting an origin address, assigning product tax codes, and entering the
 * registrations for each state you collect in.
 */
export const AUTOMATIC_TAX_ENABLED = false;
