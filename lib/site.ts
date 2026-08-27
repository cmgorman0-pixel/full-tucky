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

/** Placeholder until real contact details are confirmed for public display. */
export const CONTACT_EMAIL = "[YOUR EMAIL ADDRESS]";
export const CONTACT_PHONE = "[YOUR PHONE NUMBER]";
export const MAILING_ADDRESS = "[YOUR BUSINESS MAILING ADDRESS]";

/** Date the legal pages were last edited. Bump when their text changes. */
export const LEGAL_LAST_UPDATED = "August 27, 2026";
