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
        overlay
          ? "relative z-20 flex items-center justify-between px-6 md:px-14 py-5"
          : "relative flex items-center justify-between px-6 md:px-14 py-5 border-b border-[var(--line)]"
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
        className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
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

      <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
        <Image
          src={overlay ? "/images/fulltucky-logo-light.png" : "/images/fulltucky-logo-dark.png"}
          alt="Full'Tucky"
          width={54}
          height={54}
          priority
          className="object-contain md:w-[66px] md:h-[66px]"
        />
      </Link>

      <div className="hidden md:flex items-center gap-5">
        <span
          className="text-[13px] font-semibold uppercase tracking-wide"
          style={{
            color: idleColor,
            textShadow: overlay ? "0 1px 12px rgba(20,14,10,.55)" : undefined,
          }}
        >
          Sign In
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: idleColor }}
        >
          <path d="M6 8h12l-1 12H7L6 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      </div>

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
              className="text-[13px] font-semibold uppercase tracking-wide py-3 border-b last:border-b-0"
              style={{
                color: active === link.href ? activeColor : idleColor,
                borderColor: overlay ? "oklch(35% .02 50)" : "var(--line)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <span
            className="text-[13px] font-semibold uppercase tracking-wide py-3"
            style={{ color: idleColor }}
          >
            Sign In
          </span>
        </div>
      )}
    </header>
  );
}
