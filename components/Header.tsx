"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/bluegrass-dispatch", label: "Bluegrass Dispatch" },
  { href: "/contact", label: "Contact" },
];

export default function Header({
  active,
  overlay = false,
}: {
  active?: string;
  overlay?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const idleColor = overlay ? "var(--cream)" : "var(--espresso)";
  const activeColor = overlay ? "var(--amber)" : "var(--barnred)";
  const barColor = overlay ? "var(--cream)" : "var(--espresso)";

  return (
    <header
      className={
        // Grid on desktop so the logo is truly centred regardless of how wide the
        // nav is; flex on mobile where the logo is absolutely positioned instead.
        overlay
          ? "relative z-20 flex md:grid md:grid-cols-3 items-center justify-between px-6 md:px-14 py-5"
          : "relative flex md:grid md:grid-cols-3 items-center justify-between px-6 md:px-14 py-5 border-b border-[var(--line)]"
      }
    >
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] font-semibold uppercase tracking-wide"
            style={{
              color: active === link.href ? activeColor : idleColor,
              textShadow: overlay ? "0 1px 12px rgba(20,14,10,.55)" : undefined,
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        className="md:hidden flex flex-col justify-center items-start gap-1.5 w-11 h-11 -ml-1"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className="block h-[1.8px] w-6 transition-transform"
          style={{
            background: barColor,
            ...(open ? { transform: "translateY(6.5px) rotate(45deg)" } : {}),
          }}
        />
        <span
          className="block h-[1.8px] w-6 transition-opacity"
          style={{ background: barColor, ...(open ? { opacity: 0 } : {}) }}
        />
        <span
          className="block h-[1.8px] w-6 transition-transform"
          style={{
            background: barColor,
            ...(open ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}),
          }}
        />
      </button>

      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:justify-self-center"
      >
        <Image
          src={overlay ? "/images/fulltucky-logo-light.png" : "/images/fulltucky-logo-dark.png"}
          alt="Full'Tucky"
          width={54}
          height={54}
          priority
          className="object-contain md:w-[66px] md:h-[66px]"
        />
      </Link>

      {/* Sign In and the cart icon lived here. Pulled deliberately: there are no
          accounts and no cart, so they were dead affordances visitors would tap.
          Bring Sign In back with the Bluegrass Dispatch forum, and the cart when
          checkout moves off Stripe's hosted page. */}
      <div className="hidden md:block" aria-hidden="true" />

      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 flex flex-col py-4 px-6 gap-1 z-30"
          style={{
            background: overlay ? "var(--espresso)" : "var(--cream)",
            borderBottom: overlay ? "none" : "1px solid var(--line)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[13px] font-semibold uppercase tracking-wide py-4 border-b last:border-b-0"
              style={{
                color: active === link.href ? activeColor : idleColor,
                borderColor: overlay ? "oklch(35% .02 50)" : "var(--line)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
