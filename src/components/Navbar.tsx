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
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-[var(--background)]/80 border-b border-gray-200 dark:border-zinc-800 text-[var(--foreground)] px-4 sm:px-8 py-3 font-montserrat transition-colors duration-300">
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
        <nav className="hidden md:flex space-x-6 text-[15px] font-medium">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-[#cc595a] text-white" // active = bg + text change
                    : "text-[var(--foreground)] hover:text-[#cc595a]" // hover = ONLY text color
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
          className="md:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        >
          {isOpen ? (
            <X size={26} className="text-[var(--foreground)]" />
          ) : (
            <Menu size={26} className="text-[var(--foreground)]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm font-medium border-t border-gray-200 dark:border-zinc-800 pt-3">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-[#cc595a] text-white"
                    : "text-[var(--foreground)] hover:text-[#cc595a]"
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
