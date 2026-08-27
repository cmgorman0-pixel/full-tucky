"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-[var(--line)] bg-[var(--cream-2)] px-6 py-8 text-[var(--espresso-2)]">
        Thanks for reaching out &mdash; this form isn&apos;t wired to send email yet, so nothing
        was actually sent. Once real contact handling is set up, this message will be replaced
        with a live confirmation.
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12.5px] font-bold uppercase tracking-wide text-[var(--espresso-2)] mb-2">
            First Name
          </label>
          <input className="w-full px-3.5 py-3 border-[1.5px] border-[var(--line)] bg-[var(--cream-2)] text-sm focus:outline-none focus:border-[var(--amber)]" type="text" />
        </div>
        <div>
          <label className="block text-[12.5px] font-bold uppercase tracking-wide text-[var(--espresso-2)] mb-2">
            Last Name
          </label>
          <input className="w-full px-3.5 py-3 border-[1.5px] border-[var(--line)] bg-[var(--cream-2)] text-sm focus:outline-none focus:border-[var(--amber)]" type="text" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12.5px] font-bold uppercase tracking-wide text-[var(--espresso-2)] mb-2">
            Email
          </label>
          <input className="w-full px-3.5 py-3 border-[1.5px] border-[var(--line)] bg-[var(--cream-2)] text-sm focus:outline-none focus:border-[var(--amber)]" type="email" />
        </div>
        <div>
          <label className="block text-[12.5px] font-bold uppercase tracking-wide text-[var(--espresso-2)] mb-2">
            Phone
          </label>
          <input className="w-full px-3.5 py-3 border-[1.5px] border-[var(--line)] bg-[var(--cream-2)] text-sm focus:outline-none focus:border-[var(--amber)]" type="tel" />
        </div>
      </div>
      <div>
        <label className="block text-[12.5px] font-bold uppercase tracking-wide text-[var(--espresso-2)] mb-2">
          Company Name
        </label>
        <input className="w-full px-3.5 py-3 border-[1.5px] border-[var(--line)] bg-[var(--cream-2)] text-sm focus:outline-none focus:border-[var(--amber)]" type="text" />
      </div>
      <div>
        <label className="block text-[12.5px] font-bold uppercase tracking-wide text-[var(--espresso-2)] mb-2">
          Message
        </label>
        <textarea className="w-full px-3.5 py-3 border-[1.5px] border-[var(--line)] bg-[var(--cream-2)] text-sm focus:outline-none focus:border-[var(--amber)]" rows={5} />
      </div>
      <button type="submit" className="btn self-start mt-1.5">
        Submit
      </button>
    </form>
  );
}
