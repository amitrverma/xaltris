export const metadata = {
  title: 'About | Xaltris Technologies',
  description:
    'Xaltris blends technology, behavior, and business to deliver practical software that works with instinct, not against it.',
  openGraph: {
    title: 'About Xaltris Technologies',
    description:
      'Learn how Xaltris brings clarity, empathy, and execution to every build — with 20+ years of cross-domain tech expertise.',
    url: 'https://xaltris.com/about',
    siteName: 'Xaltris',
    images: [
      {
        url: '/xaltris-social.png',
        width: 1200,
        height: 630,
        alt: 'About Xaltris',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Xaltris Technologies',
    description:
      'Software, done right — with clarity, care, and experience that spans startups to scale.',
    images: ['/xaltris-social.png'],
  },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] font-montserrat px-6 py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold mb-12 text-[var(--heading)]">
          About Xaltris
        </h1>

        {/* Origin Story */}
        <h2 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
          Why I Started Xaltris
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          After spending over two decades building software — across banks, startups, internal
          platforms, and public products — I saw a pattern. The most impactful solutions weren’t
          just about tech. They were about <strong>clarity</strong>, <strong>empathy</strong>, and{' '}
          <strong>execution</strong>.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
          I’ve always loved building. It’s what I do best. And I’ve been fortunate to do it across
          domains, stacks, and roles. But after my corporate run, I wanted to create something with
          more range and fewer constraints. That’s how Xaltris was born.
        </p>

        {/* What We Do */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm mb-12 transition-all duration-300 hover:shadow-md">
          <h2 className="text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-4">
            What We Do
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            At Xaltris, we help companies move faster and smarter — by combining deep tech experience
            with behavioral insight and business sense.
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Products</strong> you can start using today
            </li>
            <li>
              <strong>Custom tools</strong> designed around your exact needs
            </li>
            <li>
              <strong>Technical leadership</strong> you can lean on (think: fractional CTO)
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We believe great software should be clear, purposeful, and built for the way people
            actually work. Whether we’re writing code, crafting prompts, or solving scale issues —
            we bring clarity and care to everything we ship.
          </p>
        </div>

        {/* What You Get */}
        <h2 className="text-2xl font-bold text-[var(--heading)] mb-4">
          What You Get
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-10 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Builder’s mindset</strong> with enterprise polish
          </li>
          <li>
            <strong>Honest tech</strong> over hype
          </li>
          <li>
            <strong>High-context consulting</strong> without the fluff
          </li>
        </ul>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
          Whether you’re an early-stage founder or a scaling team, we meet you where you are — and
          build from there.
        </p>

        {/* Signature */}
        <p className="text-right text-sm italic text-gray-600 dark:text-gray-400">
          – Amit Verma
          <br />
          Founder, Xaltris Technologies
        </p>
      </div>
    </section>
  );
}
