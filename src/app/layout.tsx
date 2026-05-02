import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://xaltris.com"),

  title: {
    default: "Xaltris Technologies",
    template: "%s | Xaltris",
  },

  description:
    "Software, done right. Smarter tools, custom platforms, and AI-powered solutions built with experience and delivered with care.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="color-scheme" content="light" />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C5YDN2R0Q9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C5YDN2R0Q9');
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <div className="pt-[80px]">{children}</div>
        <Footer />
      </body>

    </html>
  )
}
