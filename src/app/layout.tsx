import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import {
  AMIT_PERSON_ID,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
} from '../lib/site-metadata'
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

const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Xaltris Technologies',
      alternateName: 'Xaltris',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
      founder: {
        '@id': AMIT_PERSON_ID,
      },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: 'Xaltris',
      url: SITE_URL,
      publisher: {
        '@id': ORGANIZATION_ID,
      },
      inLanguage: 'en',
    },
  ],
}

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
        <JsonLd data={siteStructuredData} />
        <Navbar />
        <div className="pt-[80px]">{children}</div>
        <Footer />
      </body>

    </html>
  )
}
