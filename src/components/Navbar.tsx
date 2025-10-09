'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-[var(--background)]/80 border-b border-gray-200 dark:border-zinc-800 text-[var(--foreground)] px-4 sm:px-8 py-3 font-montserrat transition-colors duration-300">
      <div className="flex items-center justify-between">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center space-y-0 leading-tight group"
        >
          <Image
            src="/logo-black.png"
            alt="Xaltris logo"
            width={56}
            height={56}
            className="transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-semibold tracking-wide transition-colors">
            xaltris
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-[15px] font-medium">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`relative pb-1 transition-colors duration-200 hover:text-cyan-500 ${
                pathname === href
                  ? 'text-cyan-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-cyan-500 after:to-fuchsia-500'
                  : 'text-[var(--foreground)]'
              }`}
            >
              {name}
            </Link>
          ))}
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
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`block transition-colors hover:text-cyan-500 ${
                pathname === href ? 'text-cyan-500' : 'text-[var(--foreground)]'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
