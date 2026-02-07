"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Blog", href: "/blog" },
  { name: "For Good", href: "/for-good" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#638475]/80 border-b border-white/30 text-white px-4 sm:px-8 py-3 font-montserrat transition-colors duration-300">
      <div className="flex items-center justify-between">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center space-y-0 leading-tight group"
        >
          <Image
            src="/logo.png"
            alt="Xaltris logo"
            width={150}
            height={150}
            className="transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-3 text-base font-medium">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                  isActive
                    ? "bg-[#cc595a] border-[#e08a8b] text-white shadow-[0_8px_20px_-12px_rgba(204,89,90,0.9)]"
                    : "text-white/95 border-transparent hover:text-white hover:bg-white/12 hover:border-white/35 hover:-translate-y-0.5"
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
          className="md:hidden p-1 rounded-md hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
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
        <div className="md:hidden mt-4 space-y-3 text-sm font-medium border-t border-white/30 pt-3">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                  isActive
                    ? "bg-[#cc595a] border-[#e08a8b] text-white"
                    : "text-white/95 border-transparent hover:text-white hover:bg-white/12 hover:border-white/35"
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
