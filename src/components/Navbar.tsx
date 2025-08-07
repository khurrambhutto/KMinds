"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems: Array<{ href: string; label: string; external?: boolean }> = [
    { href: "/#services", label: "Services" },
    { href: "/#tech", label: "Tech" },
    { href: "/#process", label: "Process" },
    { href: "/projects", label: "Projects" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          <span className="text-foreground">KMinds</span>{" "}
          <span className="text-teal-600">solutions</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-teal-600">
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-md bg-teal-600 text-white px-4 py-2 hover:bg-teal-500"
          >
            Get a quote
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-black/5 dark:hover:bg-white/10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-teal-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-md bg-teal-600 text-white px-4 py-2 hover:bg-teal-500"
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


