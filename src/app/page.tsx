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
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 text-center overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 font-montserrat">
      {/* Optional soft background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 dark:via-zinc-900/40 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Headline */}
        <h1 className="text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[160px] xl:text-[200px] leading-[1.1] font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-600">
            Software,
          </span>
          <br />
          Done Right!
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
          Whether you&apos;re launching, scaling, or just stuck —
          <br className="hidden sm:block" />
          Xaltris helps you move forward with confidence.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/products"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 rounded-md font-semibold text-white hover:brightness-110 transition"
          >
            See Our Tools
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-md font-semibold text-[var(--foreground)] hover:border-[var(--foreground)] transition"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </main>
  );
}
