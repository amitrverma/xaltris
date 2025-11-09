export const metadata = {
  title: 'Clarity | Xaltris Technologies',
  description:
    'A privacy-first workforce insights tool to help your team work smarter and stay healthier. Free for 30 days.',
  openGraph: {
    title: 'Clarity | Xaltris Technologies',
    description:
      'Reduce burnout, eliminate waste, and unlock hidden productivity — without surveillance. Try Clarity free for 30 days.',
    url: 'https://xaltris.com/products/clarity',
    siteName: 'Xaltris',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Clarity by Xaltris',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarity by Xaltris',
    description:
      'Workforce visibility without the creep factor. Smarter work, less burnout. Free for 30 days.',
    images: ['/logo.png'],
  },
};

export default function ClarityPage() {
  return (
    <section className="min-h-screen px-6 py-20 font-montserrat bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <h1 className="text-5xl font-extrabold mb-6">
          Clarity
        </h1>
        <p className="text-lg text-[var(--foreground)]/90 mb-10 leading-relaxed">
          In today’s always-on world, your team’s time, focus, and well-being are quietly under attack.
          Clarity helps you fix that — without micromanagement or surveillance.
        </p>

        {/* Section: Smarter Work */}
        <h2 className="text-2xl font-semibold mb-4 text-[var(--heading)]">
          Work Smarter. Burn Out Less.
        </h2>
        <p className="text-[var(--foreground)]/90 mb-6 leading-relaxed">
          Clarity gives you visibility into how work happens across your organization — so you can reduce
          bottlenecks, eliminate tool waste, and prevent burnout. All while respecting employee privacy.
        </p>

        <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2 mb-10">
          <li>Increase productivity by up to 30% without increasing work hours</li>
          <li>Cut non-essential software spend by 37%</li>
          <li>Reduce screen fatigue and overwork risk by 25%</li>
          <li>Identify peak team performance windows</li>
          <li>Spot underused tools and refocus budgets</li>
        </ul>

        {/* Section: Trust */}
        <h2 className="text-2xl font-semibold mb-4 text-[var(--heading)]">
          Designed for Trust, Not Control
        </h2>
        <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2 mb-10">
          <li>No keystroke logging, no screenshots, no surveillance</li>
          <li>All insights are anonymized and aggregated</li>
          <li>Employees can access their own data to self-correct and improve</li>
        </ul>

        {/* Section: Insights */}
        <h2 className="text-2xl font-semibold mb-4 text-[var(--heading)]">
          What You’ll See with Clarity
        </h2>
        <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2 mb-10">
          <li>Work pattern analytics — tasks, apps, idle time, breaks</li>
          <li>Smart app categorization: Work vs. Communication vs. Leisure</li>
          <li>Historical performance and trend tracking (weekly, monthly, yearly)</li>
          <li>Custom reports to support engagement and retention decisions</li>
          <li>Team-level productivity insights (fully anonymized)</li>
        </ul>

        {/* Section: The Cost */}
        <h2 className="text-2xl font-semibold mb-4 text-[var(--heading)]">
          The Cost of Doing Nothing
        </h2>
        <ul className="list-disc list-inside text-[var(--secondary)] dark:text-[#cc595a] space-y-1 mb-10 font-medium">
          <li>Wasted time</li>
          <li>Burned-out employees</li>
          <li>Tools you’re still paying for but nobody uses</li>
          <li>Competitors already optimizing their workflows</li>
        </ul>

        <p className="text-lg text-[var(--foreground)]/90 mb-10 leading-relaxed">
          Clarity isn’t about tracking people. It’s about empowering better work — across teams, without
          the drama. Try it free for 30 days. No credit card. No strings.
        </p>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://clarity.xaltris.com"
            className="inline-block px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-md hover:bg-[var(--secondary)] transition"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-sm text-[var(--secondary)]">
            No commitment. Just smarter work.
          </p>
        </div>
      </div>
    </section>
  );
}
