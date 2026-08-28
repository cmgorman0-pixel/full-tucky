/**
 * Canonical site URL. Update this when the real domain is connected —
 * metadata, sitemap, and robots all derive from it.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://full-tucky.vercel.app";

export const SITE_NAME = "Full'Tucky";
export const LEGAL_ENTITY = "Full Tucky LLC";
export const SITE_TAGLINE = "Beyond Southern";
export const SITE_LOCATION = "Louisville, KY";

export const CONTACT_EMAIL = "sales@fulltucky.com";

/**
 * Order, return, and exchange enquiries.
 *
 * Points at sales@ because that mailbox is confirmed live. Switch to
 * orders@fulltucky.com ONLY once that mailbox actually exists — this address is
 * printed on the returns and shipping pages, so a dead alias means customers
 * emailing about returns get nothing back.
 */
export const ORDERS_EMAIL = "sales@fulltucky.com";

export const CONTACT_PHONE = "[YOUR PHONE NUMBER]";
export const MAILING_ADDRESS = "[YOUR BUSINESS MAILING ADDRESS]";

/** Date the legal pages were last edited. Bump when their text changes. */
export const LEGAL_LAST_UPDATED = "August 27, 2026";
