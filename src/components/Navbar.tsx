"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "How I help", href: "/how-i-help" },
  { name: "Work", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/12 bg-[#638475] px-4 text-white shadow-[0_14px_40px_-28px_rgba(0,0,0,0.8)] transition-colors duration-300 sm:px-8">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="group -ml-3 flex flex-col items-center justify-center space-y-0 leading-tight sm:-ml-[20px]"
        >
          <Image
            src="/logo.png"
            alt="Xaltris logo"
            width={176}
            height={80}
            className="h-16 w-auto transition-transform group-hover:scale-[1.03] sm:h-20"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/12 bg-[#183a34]/20 p-1 text-sm font-semibold md:flex">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href || Boolean(pathname?.startsWith(`${href}/`)) || (href === "/how-i-help" && pathname === "/vibe-to-viable");
            return (
              <Link
                key={name}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#183a34] shadow-[0_10px_26px_-18px_rgba(0,0,0,0.55)]"
                    : "text-white hover:bg-[#183a34]/28"
                }`}
              >
                {name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#f7f2ea] px-4 py-2 text-[#183a34] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            Let&apos;s talk
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-full p-2 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:hidden"
        >
          {isOpen ? (
            <X size={26} className="text-white" />
          ) : (
            <Menu size={26} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div id="mobile-navigation" className="mx-auto mt-3 max-h-[calc(100dvh-5.75rem)] max-w-7xl space-y-2 overflow-y-auto rounded-t-lg border-t border-white/12 bg-[#183a34]/24 p-3 pb-4 text-sm font-semibold md:hidden">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href || Boolean(pathname?.startsWith(`${href}/`)) || (href === "/how-i-help" && pathname === "/vibe-to-viable");
            return (
              <Link
                key={name}
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                  isActive
                    ? "bg-white text-[#183a34]"
                    : "text-white hover:bg-[#183a34]/30"
                }`}
              >
                {name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between rounded-md bg-[#f7f2ea] px-3 py-2.5 text-[#183a34] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Let&apos;s talk
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </header>
  );
}
