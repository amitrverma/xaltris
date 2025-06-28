export const metadata = {
  title: 'Xaltris Technologies',
  description:
    'Software, done right. Smarter tools, custom platforms, and AI-powered solutions — built with experience, delivered with care.',
  openGraph: {
    title: 'Xaltris Technologies',
    description:
      'Smarter tools, custom platforms, and AI-powered solutions — built with experience, delivered with care.',
    url: 'https://xaltris.com',
    siteName: 'Xaltris',
    images: [
      {
        url: '/xaltris-social.png',
        width: 1200,
        height: 630,
        alt: 'Xaltris Technologies Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xaltris Technologies',
    description: 'Software, done right. Smarter tools, built with care.',
    images: ['/xaltris-social.png'],
  },
}

export default function HomePage() {
  return (
    <main className="relative bg-black text-white min-h-screen flex items-center justify-center px-4 text-center overflow-hidden">
      <div>
        <h1 className="text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[160px] xl:text-[200px] leading-[1.1] font-extrabold font-montserrat">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">
    Software,
  </span>
  <br />
  Done Right!
</h1>

        <p className="mt-6 text-[1.25rem] text-gray-400 max-w-xl mx-auto">
          Whether you&apos;re launching, scaling, or just stuck — <br />
          xaltris helps you move forward with confidence.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/products"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-md font-semibold text-white hover:brightness-110 transition"
          >
            See Our Tools
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-600 rounded-md font-semibold text-white hover:border-white transition"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </main>
  )
}
