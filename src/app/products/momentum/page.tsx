export const metadata = {
  title: 'Momentum | Xaltris Technologies',
  description:
    'Real-time workforce performance, without the guesswork. Track, analyze, and improve how your team works — all in one place.',
  openGraph: {
    title: 'Momentum | Xaltris Technologies',
    description:
      'A powerful performance management platform that gives you real-time insights into productivity, engagement, and efficiency — without micromanagement.',
    url: 'https://xaltris.com/products/momentum',
    siteName: 'Xaltris',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Momentum by Xaltris',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momentum by Xaltris',
    description:
      'Real-time insights. Smart tracking. Burnout prevention. Try it free for 30 days.',
    images: ['/logo.png'],
  },
};

export default function MomentumPage() {
  return (
    <section className="min-h-screen px-6 py-20 font-montserrat bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <h1 className="text-5xl font-extrabold mb-6">
          Momentum
        </h1>
        <p className="text-lg text-[var(--foreground)]/90 mb-10 leading-relaxed">
          Momentum gives you full visibility into how work happens across your organization — in real
          time. From performance monitoring to engagement analytics, it&apos;s your single source of truth
          for operational productivity.
        </p>

        {/* Section: Visibility */}
        <h2 className="text-2xl font-semibold mb-4 text-[var(--heading)]">
          See What&apos;s Really Going On
        </h2>
        <p className="text-[var(--foreground)]/90 mb-6 leading-relaxed">
          Most performance problems aren&apos;t about effort — they&apos;re about misalignment, inefficiency,
          or lack of visibility. Momentum helps you surface what&apos;s working, what&apos;s not, and where
          to focus — without micromanaging.
        </p>

        <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2 mb-10">
          <li>Track productive and non-productive time by task, role, or channel</li>
          <li>Pinpoint where time is going — and where it&apos;s being lost</li>
          <li>Identify idle patterns and reduce them by up to 20%</li>
          <li>Improve team productivity by 15% through smarter management</li>
          <li>Spot burnout early with the built-in Mood-o-Meter</li>
        </ul>

        {/* Section: Operational Teams */}
        <h2 className="text-2xl font-semibold mb-4 text-[var(--heading)]">
          Built for Operational Teams
        </h2>
        <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2 mb-10">
          <li>Live dashboards with intraday performance tracking</li>
          <li>Role-based insights across voice, chat, and back-office workflows</li>
          <li>Unified reporting across teams, locations, and channels</li>
          <li>Track shrinkage, adherence, and throughput — in real time</li>
        </ul>

        {/* Section: Custom Fit */}
        <h2 className="text-2xl font-semibold mb-4 text-[var(--heading)]">
          Custom-Fit for How You Work
        </h2>
        <p className="text-[var(--foreground)]/90 mb-6 leading-relaxed">
          Momentum adapts to your environment — not the other way around. Configure workflows, metrics,
          and user roles without wasting days in setup.
        </p>

        <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2 mb-10">
          <li>Fast setup — 40% quicker than traditional performance tools</li>
          <li>Define your own roles, activities, and metrics</li>
          <li>Integrates seamlessly across multiple channels and tools</li>
        </ul>

        {/* Section: Final Call */}
        <h2 className="text-2xl font-semibold mb-4 text-[var(--heading)]">
          Don&apos;t Manage in the Dark
        </h2>
        <p className="text-[var(--foreground)]/90 mb-8 leading-relaxed">
          Whether you&apos;re running an operations team, a service desk, or a support org — you can&apos;t
          afford to guess. Momentum gives you the data you need to lead with clarity, every day.
        </p>

        <p className="text-lg text-[var(--foreground)]/90 mb-10 leading-relaxed">
          Try Momentum free for 30 days — no sales calls, no setup fee, no commitment.
        </p>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://momentum.xaltris.com"
            className="inline-block px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-md hover:bg-[var(--secondary)] transition"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-sm text-[var(--secondary)]">
            All signal. No noise.
          </p>
        </div>
      </div>
    </section>
  );
}
