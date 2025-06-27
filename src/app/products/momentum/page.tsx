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
        url: '/xaltris-social.png',
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
    images: ['/xaltris-social.png'],
  },
}


export default function MomentumPage() {
  return (
    <section className="min-h-screen px-6 py-20 font-montserrat text-white bg-black max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6 text-fuchsia-400">Momentum</h1>
      <p className="text-lg text-gray-300 mb-10">
        Momentum gives you full visibility into how work happens across your organization — in real time. From performance monitoring to engagement analytics, it’s your single source of truth for operational productivity.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-white">See What’s Really Going On</h2>
      <p className="text-gray-300 mb-6">
        Most performance problems aren’t about effort — they’re about misalignment, inefficiency, or lack of visibility. Momentum helps you surface what’s working, what’s not, and where to focus — without micromanaging.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
        <li>Track productive and non-productive time by task, role, or channel</li>
        <li>Pinpoint where time is going — and where it’s being lost</li>
        <li>Identify idle patterns and reduce them by up to 20%</li>
        <li>Improve team productivity by 15% just by managing better</li>
        <li>Spot burnout early with our built-in Mood-o-Meter</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-white">Built for Operational Teams</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
        <li>Live dashboards with intraday performance tracking</li>
        <li>Role-based insights across voice, chat, and back office workflows</li>
        <li>Unified reporting across teams, locations, and channels</li>
        <li>Track shrinkage, adherence, and throughput — in real time</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-white">Custom-Fit for How You Work</h2>
      <p className="text-gray-300 mb-6">
        Momentum adapts to your environment — not the other way around. Configure workflows, metrics, and user roles without wasting days in setup.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-10">
        <li>Fast setup — 40% quicker than traditional performance tools</li>
        <li>Define your own roles, activities, and metrics</li>
        <li>Integrates easily across multiple channels and tools</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-white">Don’t Manage in the Dark</h2>
      <p className="text-gray-300 mb-8">
        Whether you're running an operations team, a service desk, or a support org — you can’t afford to guess. Momentum gives you the data you need to lead with clarity, every day.
      </p>

      <p className="text-lg text-gray-300 mb-6">
        Try Momentum free for 30 days — no sales calls, no setup fee, no commitment.
      </p>

      <div className="mt-8 text-center">
        <a
          href="https://momentum.xaltris.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold rounded-md hover:brightness-110 transition"
        >
          Start Free Trial
        </a>
        <p className="mt-2 text-sm text-gray-300">All signal. No noise.</p>
      </div>
    </section>
  )
}
