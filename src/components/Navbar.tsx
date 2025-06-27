
'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
   { name: 'About', href: '/about' },
   { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full bg-black text-white px-4 sm:px-8 py-4 font-montserrat backdrop-blur">
      <div className="flex items-center justify-between">

    <Link href="/" className="flex flex-col items-center justify-center space-y-0 leading-tight">
      {/* Logo on top */}
      <Image src="/logo.png" alt="Xaltris logo" width={60} height={60}/>
      
      {/* Brand name below */}
      <span className="text-lg font-semibold tracking-wide">xaltris</span>
    </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-md font-medium">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`transition hover:text-cyan-400 ${
                pathname === href ? 'text-cyan-400' : 'text-white'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>



        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm font-medium">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`block transition hover:text-cyan-400 ${
                pathname === href ? 'text-cyan-400' : 'text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
