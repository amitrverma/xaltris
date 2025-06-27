import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'xaltris',
  description: 'Human-aligned systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-black text-white font-montserrat">
        <Navbar />
        <main className="pt-[80px]">{children}</main>
         <Footer />
      </body>
    </html>
  )
}
