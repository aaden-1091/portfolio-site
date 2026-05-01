"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#work",    label: "Work"    },
  { href: "#about",   label: "About"   },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 mix-blend-difference text-white"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Home" className="hover:opacity-70 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect width="24" height="24" fill="currentColor" />
            <path d="M16 8L8 16M8 8H16V16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-widest">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:line-through transition-all">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-sm font-semibold uppercase tracking-widest"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-ink flex flex-col justify-center items-center gap-10"
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-background text-4xl font-bold tracking-tight hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
