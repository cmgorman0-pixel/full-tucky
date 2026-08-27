import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/bluegrass-dispatch", label: "Bluegrass Dispatch" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ active }: { active?: string }) {
  return (
    <header className="flex items-center justify-between px-8 md:px-14 py-5 border-b border-[var(--line)]">
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] font-semibold uppercase tracking-wide"
            style={{ color: active === link.href ? "var(--barnred)" : "var(--espresso)" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="/">
        <Image
          src="/images/fulltucky-logo-white.jpg"
          alt="Full'Tucky"
          width={66}
          height={66}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-5">
        <span className="text-[13px] font-semibold uppercase tracking-wide text-[var(--espresso)]">
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
          className="text-[var(--espresso)]"
        >
          <path d="M6 8h12l-1 12H7L6 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      </div>
    </header>
  );
}
