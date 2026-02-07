import Image from 'next/image'

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
        url: '/logo.png',
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
    images: ['/logo.png'],
  },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 text-center overflow-hidden bg-[#638475] text-white transition-colors duration-300 font-montserrat">
      {/* Optional soft background gradient for depth */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="relative z-10">
        {/* Headline */}
        <Image
          src="/software.png"
          alt="Xaltris logo"
          width={1200}
          height={1200}
          className="transition-transform group-hover:scale-105"
        />

        {/* Subheading */}
        <p className="mt-8 text-base sm:text-xl max-w-xl mx-auto leading-relaxed">
          Whether you&apos;re launching, scaling, or just stuck —{' '}
          <br className="hidden sm:block" />
          Xaltris helps you move forward with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-lg">
          <a
            href="/products"
            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl font-semibold tracking-wide
                       bg-[#cc595a] text-white border border-[#e08a8b]
                       shadow-[0_10px_26px_-12px_rgba(204,89,90,0.9)] hover:shadow-[0_14px_30px_-12px_rgba(204,89,90,0.95)]
                       hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:brightness-95
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b2b3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#638475]
                       transition-all duration-300 text-base sm:text-lg"
          >
            The Xaltris Tools
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl font-semibold tracking-wide
                       bg-white/10 text-white/95 border border-white/25 backdrop-blur-sm
                       shadow-[0_10px_24px_-14px_rgba(0,0,0,0.45)] hover:text-white hover:bg-white/18 hover:border-white/40
                       hover:-translate-y-0.5 active:translate-y-0 active:bg-white/14 focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#638475]
                       transition-all duration-300 text-base sm:text-lg"
          >
            Talk to Me
          </a>
        </div>
      </div>
    </main>
  );
}
