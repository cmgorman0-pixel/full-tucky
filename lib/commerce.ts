/**
 * Commerce settings. These are the knobs to turn once real numbers are decided —
 * nothing here invents a value, and checkout stays disabled until prices are set.
 */

/**
 * Flat shipping charged at checkout, in CENTS. Leave undefined and Stripe will
 * collect a shipping address but add no shipping line — decide this before launch
 * so shipping isn't silently free.
 */
export const SHIPPING_FLAT_CENTS: number | undefined = undefined;

/** Countries the store will ship to. */
export const SHIP_TO_COUNTRIES = ["US"] as const;

/**
 * Kentucky sales tax is NOT calculated automatically. Turning this on requires
 * enabling Stripe Tax in the Stripe dashboard (a paid add-on) and registering
 * the states you collect in.
 */
export const AUTOMATIC_TAX_ENABLED = false;
