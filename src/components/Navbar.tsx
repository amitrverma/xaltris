"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "For Good", href: "/for-good" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/12 bg-[#638475]/92 px-4 text-white shadow-[0_14px_40px_-28px_rgba(0,0,0,0.8)] backdrop-blur-md transition-colors duration-300 sm:px-8">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="group -ml-[20px] flex flex-col items-center justify-center space-y-0 leading-tight"
        >
          <Image
            src="/logo.png"
            alt="Xaltris logo"
            width={176}
            height={80}
            className="h-20 w-auto transition-transform group-hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="-mr-[20px] hidden items-center gap-1 rounded-full border border-white/10 bg-white/8 px-2 py-1 text-sm font-semibold md:flex">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`rounded-full px-3.5 py-2 transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#183a34] shadow-[0_10px_26px_-18px_rgba(0,0,0,0.55)]"
                    : "text-white hover:bg-white/12"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
        <div className="mx-auto mt-3 max-w-7xl space-y-2 border-t border-white/12 pt-3 text-sm font-semibold md:hidden">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                  isActive
                    ? "bg-white text-[#183a34]"
                    : "text-white hover:bg-white/12"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
