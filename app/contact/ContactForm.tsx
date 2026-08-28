"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "skipped" | "error";

const field =
  "w-full px-3.5 py-3 border-[1.5px] border-[var(--line)] bg-[var(--cream-2)] text-sm text-[var(--espresso)] focus:outline-none focus:border-[var(--amber)]";
const label =
  "block text-[12.5px] font-bold uppercase tracking-wide text-[var(--espresso-2)] mb-2";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  if (status === "sent") {
    return (
      <div className="border border-[var(--line)] bg-[var(--cream-2)] px-6 py-8">
        <div className="eyebrow">Message Sent</div>
        <p className="text-[var(--espresso-2)] mt-3 leading-relaxed">
          Thanks for reaching out &mdash; we got it, and we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  if (status === "skipped") {
    return (
      <div className="border border-[var(--line)] bg-[var(--cream-2)] px-6 py-8">
        <div className="eyebrow">Not Connected Yet</div>
        <p className="text-[var(--espresso-2)] mt-3 leading-relaxed">
          This form isn&apos;t hooked up to send email yet, so nothing was delivered. Email us
          directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold">
            {CONTACT_EMAIL}
          </a>{" "}
          and we&apos;ll get right back to you.
        </p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.skipped) return setStatus("skipped");
      if (res.ok && json.sent) return setStatus("sent");

      setStatus("error");
      setError(
        res.status === 429
          ? "Too many messages in a short window. Give it a few minutes and try again."
          : json.error || "Something went wrong sending that."
      );
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Check your connection and try again.");
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      {/* Honeypot — hidden from real visitors, catches scripted submissions. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="firstName">
            First Name
          </label>
          <input id="firstName" name="firstName" className={field} type="text" required />
        </div>
        <div>
          <label className={label} htmlFor="lastName">
            Last Name
          </label>
          <input id="lastName" name="lastName" className={field} type="text" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" className={field} type="email" required />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" className={field} type="tel" />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="company">
          Company Name
        </label>
        <input id="company" name="company" className={field} type="text" />
      </div>

      <div>
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" className={field} rows={5} required />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn self-start mt-1.5 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>

      {status === "error" && (
        <p className="text-[13.5px] text-[var(--barnred)]">
          {error} You can also email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
