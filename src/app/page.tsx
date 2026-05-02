import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import FaqSection from '../components/FaqSection'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
})

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
      <main className="relative overflow-hidden bg-[#638475] px-6 py-6 text-white font-montserrat transition-colors duration-300 sm:py-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-orb hero-orb-left" />
          <div className="hero-orb hero-orb-right" />
          <div className="hero-grid" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <section className="flex min-h-[70vh] items-start pt-12 pb-2 sm:pt-16 sm:pb-4 lg:pt-20">
            <div className="mx-auto w-full max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-[1.28fr_0.72fr] lg:items-end">
                <h1
                  className={`${playfairDisplay.className} max-w-none text-[3.55rem] font-extrabold leading-[0.9] tracking-[-0.035em] text-white sm:text-[5.5rem] md:text-[7rem] lg:text-[7.8rem] xl:text-[8.4rem]`}
                >
                  <span className="hero-reveal block whitespace-nowrap">From idea</span>
                  <span className="hero-reveal block whitespace-nowrap hero-delay-1">to working</span>
                  <span className="hero-reveal block whitespace-nowrap hero-delay-2 text-[#f8f4ee]">
                    software
                  </span>
                </h1>

                <div className="hero-proof-wrap hero-reveal hero-delay-3 lg:pb-4">
                  <div className="hero-proof-rail" />
                  <div
                    className={`${playfairDisplay.className} hero-proof-stack text-left text-[3.3rem] font-extrabold leading-[0.88] tracking-[-0.045em] text-[#f0d57c] sm:text-[4.25rem] md:text-[5.1rem] lg:text-right lg:text-[5.75rem]`}
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
                  <Image
                    src="/software.png"
                    alt="Software done right"
                    width={5000}
                    height={1812}
                    priority
                    className="h-auto w-full max-w-[18rem] sm:max-w-[26rem] md:max-w-[34rem] lg:max-w-[40rem]"
                    sizes="(max-width: 640px) 288px, (max-width: 768px) 416px, (max-width: 1024px) 544px, 640px"
                  />
              </div>
            </div>
          </section>

          <section className="relative py-16 sm:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-6xl border-t border-white/12 pt-12 sm:pt-14 lg:pt-16">
              <div className="grid gap-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
                <div>
                  <h2
                    className={`${playfairDisplay.className} max-w-2xl text-4xl font-extrabold leading-[0.98] tracking-[-0.03em] text-[#f8f4ee] sm:text-5xl lg:text-[3.7rem]`}
                  >
                    Fractional CTO, who builds!
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
                    Xaltris is{" "}
                    <Link
                      href="/about"
                      className="font-semibold text-[#f8f4ee] underline decoration-white/35 underline-offset-4 transition-colors hover:text-[#e7d281] hover:decoration-[#e7d281]"
                    >
                      my
                    </Link>{" "}
                    one-person boutique software studio. I use AI with my OI -
                    Original Intelligence, to provide strategic technology
                    solutions (Fractional CTO and software development).
                  </p>
                  <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#f8f4ee] sm:text-xl sm:leading-9">
                    Powered by <span className="text-[#e7d281]">AI.</span> Shaped
                    by <span className="text-[#e7d281]">OI.</span>
                  </p>

                  <div className="mt-9 grid gap-5 border-t border-white/12 pt-6 sm:grid-cols-3">
                    {secondFoldProof.map(([value, label]) => (
                      <div key={value}>
                        <p className="text-2xl font-extrabold tracking-[-0.03em] text-[#f8f4ee]">
                          {value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/66">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-2xl border border-[#e08a8b] bg-[#cc595a] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
                    >
                      Start a conversation
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/8 px-7 py-3.5 text-base font-semibold text-white/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/12"
                    >
                      More About Me
                    </Link>
                  </div>

                  <p className="mt-8 max-w-xl border-l border-white/16 pl-5 text-base leading-7 text-white/66 sm:text-lg">
                    Built for the phase where you need senior judgment before you
                    are ready for a full senior team.
                  </p>
                </div>

                <div className="lg:pt-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7d281]">
                    What you get
                  </p>
                  <div className="mt-6 grid gap-7">
                    {secondFoldOutcomes.map(({ label, copy }, index) => (
                      <article key={label} className="border-t border-white/10 pt-6">
                        <div className="grid gap-4 sm:grid-cols-[4rem_1fr]">
                          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#e7d281]">
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <div>
                            <h3 className="text-2xl font-bold leading-tight tracking-[-0.025em] text-[#f8f4ee]">
                              {label}
                            </h3>
                            <p className="mt-3 max-w-xl text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
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
