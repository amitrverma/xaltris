import Link from 'next/link'

import FaqSection from '../components/FaqSection'

const secondFoldOutcomes = [
  {
    label: 'Product clarity',
    copy:
      'Shape the problem, scope the first useful version, and separate what matters now from what can wait.',
  },
  {
    label: 'Technical direction',
    copy:
      'Make architecture, platform, data, integration, and security choices with someone who has lived with systems in production.',
  },
  {
    label: 'Working software',
    copy:
      'Turn direction into usable software quickly through a fractional CTO who builds solo, with less handoff drag and more accountability.',
  },
  {
    label: 'Production discipline',
    copy:
      'Build with the habits that matter after launch: maintainability, observability, reliability, and room to evolve.',
  },
]

const secondFoldProof = [
  ['Enterprise depth', '22 years across products, platforms, teams, and scale'],
  ['One accountable builder', 'CTO-level thinking and hands-on software development'],
  ['AI with judgment', 'Faster delivery without outsourcing architecture or ownership'],
]

export const metadata = {
  title: 'Xaltris Technologies',
  description:
    'Xaltris is a one-person software studio for early-stage startups that need sharp technical direction, clean execution, and fewer layers between strategy and shipping.',
  openGraph: {
    title: 'Xaltris Technologies',
    description:
      'A boutique software studio offering technical direction, product thinking, and clean execution without unnecessary layers.',
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
    description:
      'Technical direction, product thinking, and clean execution for early-stage startups that want a technical co-pilot, not a committee.',
    images: ['/logo.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <main className="relative overflow-hidden bg-[#4f7466] px-6 py-6 text-white transition-colors duration-300 sm:py-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-grid" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <section className="flex min-h-[70vh] items-start pt-12 pb-2 sm:pt-16 sm:pb-4 lg:pt-20">
            <div className="mx-auto w-full max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-[1.28fr_0.72fr] lg:items-end">
                <h1
                  className="type-home-hero max-w-none text-white"
                >
                  <span className="hero-reveal block whitespace-nowrap">From idea</span>
                  <span className="hero-reveal block whitespace-nowrap hero-delay-1">to working</span>
                  <span className="hero-reveal block whitespace-nowrap hero-delay-2 text-white">
                    software
                  </span>
                </h1>

                <div className="hero-proof-wrap hero-reveal hero-delay-3 lg:pb-4">
                  <div className="hero-proof-rail" />
                  <div
                    className="type-hero-metric hero-proof-stack text-left text-[#d9bf69] lg:text-right"
                  >
                    <p className="hero-metric-reveal hero-metric-delay-1">
                      <span className="hero-proof-line whitespace-nowrap">8X Faster</span>
                    </p>
                    <p className="hero-metric-reveal hero-metric-delay-2">
                      <span className="hero-proof-line whitespace-nowrap">4X Cheaper</span>
                    </p>
                    <p className="hero-metric-reveal hero-metric-delay-3">
                      <span className="hero-proof-line whitespace-nowrap">2X Better</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-12 h-px w-36 bg-gradient-to-r from-transparent via-white/28 to-transparent sm:mt-14 sm:w-48 lg:mt-16" />

              <div className="hero-image-pop mx-auto mt-12 flex w-full justify-center sm:mt-14 lg:mt-16">
                <div className="text-center">
                  <p className="hero-software-word text-[3.4rem] font-extrabold leading-none text-white sm:text-[5.4rem] md:text-[7rem] lg:text-[8rem]">
                    SOFTW<span className="text-[#d67f67]">A</span>RE
                  </p>
                  <p
                    className="font-display mt-4 text-[2.8rem] font-extrabold leading-none text-white sm:text-[4rem] md:text-[5rem]"
                  >
                    Done right!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-16 sm:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-6xl border-t border-white/12 pt-12 sm:pt-14 lg:pt-16">
              <div className="grid gap-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
                <div>
                  <h2
                    className="type-section-title max-w-2xl text-white"
                  >
                    Fractional CTO, who builds!
                  </h2>
                  <p className="type-lead mt-6 max-w-2xl text-white">
                    Xaltris is{" "}
                    <Link
                      href="/about"
                      className="font-semibold text-white underline decoration-white/45 underline-offset-4 transition-colors hover:text-[#d9bf69] hover:decoration-[#d9bf69]"
                    >
                      my
                    </Link>{" "}
                    one-person boutique software studio. I use AI with my OI -
                    Original Intelligence, to provide strategic technology
                    solutions (Fractional CTO and software development).
                  </p>
                  <p className="type-lead mt-5 max-w-2xl font-semibold text-white">
                    Powered by <span className="text-[#d9bf69]">AI.</span> Shaped
                    by <span className="text-[#d9bf69]">OI.</span>
                  </p>

                  <div className="mt-9 grid gap-5 border-t border-white/12 pt-6 sm:grid-cols-3">
                    {secondFoldProof.map(([value, label]) => (
                      <div key={value}>
                        <p className="text-2xl font-extrabold text-white">
                          {value}
                        </p>
                        <p className="type-small mt-2 text-white">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md border border-[#e08a8b] bg-[#cc595a] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
                    >
                      Start a conversation
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center rounded-md border border-white/28 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/14"
                    >
                      More About Me
                    </Link>
                  </div>

                  <p className="type-body-lg mt-8 max-w-xl border-l border-white/16 pl-5 text-white">
                    Built for the phase where you need senior judgment before you
                    are ready for a full senior team.
                  </p>
                </div>

                <div className="lg:pt-2">
                  <p className="type-kicker text-[#d9bf69]">
                    What you get
                  </p>
                  <div className="mt-6 grid gap-7">
                    {secondFoldOutcomes.map(({ label, copy }, index) => (
                      <article key={label} className="border-t border-white/10 pt-6">
                        <div className="grid gap-4 sm:grid-cols-[4rem_1fr]">
                            <p className="type-meta text-[#d9bf69]">
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <div>
                            <h3 className="type-card-title text-white">
                              {label}
                            </h3>
                            <p className="type-body-lg mt-3 max-w-xl text-white">
                              {copy}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FaqSection />
    </>
  )
}
