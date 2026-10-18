import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import ExperienceYears from '../components/ExperienceYears'
import FaqSection from '../components/FaqSection'
import SiteCta from '../components/SiteCta'
import { calculateExperienceYears } from '../lib/experience'

const outcomes = [
  {
    label: 'Product clarity',
    copy: 'Turn an ambiguous idea into a focused product plan, with the first useful release separated from everything that can wait.',
  },
  {
    label: 'Technical direction',
    copy: 'Make architecture, platform, data, integration, and security decisions with someone who has lived with systems in production.',
  },
  {
    label: 'Hands-on delivery',
    copy: 'Keep product thinking and implementation in the same pair of hands, so less intent is lost between strategy and shipping.',
  },
  {
    label: 'Production discipline',
    copy: 'Build for real use with maintainability, observability, reliability, and a clean path for the product and team to grow.',
  },
]

const featuredWork = [
  {
    category: 'B2B marketplace',
    title: 'Veltrix Global Connect',
    context: 'Verified employers and recruitment agencies working through governed mandates, collaboration, and finance workflows.',
    result: 'Replaced fragmented coordination across email and spreadsheets with an auditable operating platform.',
    href: '/case-studies/veltrix-case-study.pdf',
  },
  {
    category: 'Agentic AI platform',
    title: 'SarasAI Cloud Labs',
    context: 'Natural-language learning objectives become reviewable cloud labs, learner instructions, rubrics, and provisioning artifacts.',
    result: 'Turned ad-hoc lab authoring into a governed, human-reviewed workflow across AWS, Azure, and GCP.',
    href: '/case-studies/sarasai-case-study.pdf',
  },
  {
    category: 'AI-assisted coaching',
    title: 'Better Corporate Life',
    context: 'Course content, guided exercises, reflection, accountability, and coach support brought into one longitudinal product.',
    result: 'Grounded AI conversations in curated domain content, user context, progress, and analytics.',
    href: '/case-studies/stocai-case-study.pdf',
  },
]

const engagementSteps = [
  {
    number: '01',
    title: 'Clarify',
    copy: 'Understand the business goal, users, constraints, and riskiest assumptions before committing to a large build.',
  },
  {
    number: '02',
    title: 'Build and learn',
    copy: 'Ship a useful version early, put it in front of real users, and let evidence shape the next decision.',
  },
  {
    number: '03',
    title: 'Strengthen',
    copy: 'Add the operational discipline, documentation, and structure needed for sustained use and future growth.',
  },
]

const startingPoints = [
  {
    number: '01',
    label: 'Starting with an idea',
    title: 'Shape and build the right first product.',
    copy: 'Move from ambition to a focused release, sound technical direction, and working software.',
    href: '/how-i-help',
    action: 'See how I help',
  },
  {
    number: '02',
    label: 'Starting with a prototype',
    title: 'Make your AI-built MVP business-ready.',
    copy: 'Find the security, data, reliability, and change risks—then fix what matters without starting over.',
    href: '/vibe-to-viable',
    action: 'Explore Vibe to Viable',
  },
  {
    number: '03',
    label: 'Looking for evidence',
    title: 'See the systems behind the promises.',
    copy: 'Review startup products, AI platforms, and enterprise systems shaped around real operational needs.',
    href: '/portfolio',
    action: 'View selected work',
  },
]

const startingPointStyles = [
  {
    border: 'border-t-[#cc595a]',
    number: 'bg-[#a53f43] text-white',
    label: 'text-[#a53f43]',
  },
  {
    border: 'border-t-[#d9bf69]',
    number: 'bg-[#d9bf69] text-[#183a34]',
    label: 'text-[#53675f]',
  },
  {
    border: 'border-t-[#315348]',
    number: 'bg-[#315348] text-white',
    label: 'text-[#315348]',
  },
]

export const metadata = {
  title: { absolute: 'Fractional CTO & Product Engineering for Startups | Xaltris' },
  description:
    'Xaltris helps early-stage founders turn product ideas into production-ready software through fractional CTO leadership and hands-on engineering.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fractional CTO & Product Engineering for Startups | Xaltris',
    description:
      'Senior technical direction and hands-on product engineering for early-stage founders—from product clarity to production-ready software.',
    url: 'https://xaltris.com',
    siteName: 'Xaltris',
    images: [
      {
        url: '/xaltris-social.png',
        width: 1500,
        height: 1500,
        alt: 'Xaltris Technologies',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Fractional CTO & Product Engineering for Startups | Xaltris',
    description:
      'Senior technical direction and hands-on product engineering for early-stage founders.',
    images: ['/xaltris-social.png'],
  },
}

export default function HomePage() {
  const experienceYears = calculateExperienceYears()

  return (
    <>
      <main>
        <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#3f6759] px-6 py-14 text-white sm:py-16 lg:py-14">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="hero-grid" />
            <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#d9bf69]/10 blur-3xl" />
            <div className="absolute -bottom-28 left-[36%] h-64 w-64 rounded-full bg-[#cc595a]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 xl:gap-20">
            <div>
              <p className="type-kicker text-[#d9bf69]">
                Fractional CTO + full cycle product engineer
              </p>
              <h1 className="hero-primary-title mt-6 max-w-4xl text-balance text-white">
                From early idea to
                <span className="block text-[#d9bf69]">production-ready product.</span>
              </h1>
              <p className="type-lead mt-7 max-w-2xl text-white">
                I work with early-stage startups to turn product ambition into clear
                technical direction and working software—one accountable partner from
                concept to launch.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#a53f43] bg-[#a53f43] px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8f3438] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3f6759]"
                >
                  Talk through your idea
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-md border border-white/35 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  See selected work
                </Link>
              </div>

              <p className="mt-6 max-w-xl border-l border-white/35 pl-4 text-sm leading-6 text-white">
                Start with a rough concept or early prototype. For AI-built MVPs,
                Vibe to Viable is a separate audit-and-hardening path.
              </p>
            </div>

            <aside className="relative overflow-hidden rounded-2xl border border-white/25 border-t-4 border-t-[#d9bf69] bg-[#f7f2ea] p-7 text-[#162f2a] shadow-[0_30px_90px_-44px_rgba(10,32,28,0.95)] sm:p-9">
              <span className="pointer-events-none absolute -right-2 -top-10 font-display text-[9rem] font-extrabold leading-none text-[#cc595a]/[0.08]" aria-hidden="true">
                01
              </span>

              <div className="relative flex items-center gap-4 border-b border-[#d7ddd6] pb-6">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#ddd7d1] shadow-[0_10px_30px_-18px_rgba(22,47,42,0.7)]">
                  <Image
                    src="/amit-verma.png"
                    alt=""
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="type-meta text-[#53675f]">Work directly with</p>
                  <p className="mt-1 text-xl font-bold leading-tight text-[#162f2a]">
                    Amit Verma
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#53675f]">
                    Founder &amp; Fractional CTO
                  </p>
                </div>
              </div>

              <h2 className="type-subsection-title relative mt-6 max-w-lg">
                One partner from product decision to production.
              </h2>

              <ol className="relative mt-7 space-y-4">
                {[
                  ['01', 'Shape', 'Scope the right first version.'],
                  ['02', 'Build', 'Turn decisions into working software.'],
                  ['03', 'Strengthen', 'Prepare for real use and growth.'],
                ].map(([number, title, copy]) => (
                  <li key={number} className="grid grid-cols-[2rem_1fr] gap-4 border-t border-[#d7ddd6] pt-4 first:border-t-0 first:pt-0">
                    <span className="type-meta pt-1 text-[#a53f43]">{number}</span>
                    <span>
                      <span className="block text-base font-bold leading-6 text-[#162f2a]">{title}</span>
                      <span className="mt-0.5 block text-sm leading-6 text-[#53675f]">{copy}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <div className="relative mt-7 border-t border-[#d7ddd6] pt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#53675f]">
                  Powered by AI. Shaped by OI.
                </p>
                <Link
                  href="/vibe-to-viable"
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-[#a53f43] underline decoration-[#a53f43]/35 underline-offset-4 hover:decoration-[#a53f43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a53f43]"
                >
                  Explore Vibe to Viable
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-[#315348] px-6 pb-20 text-white sm:pb-24">
          <div className="mx-auto max-w-7xl border-t border-white/15 pt-16">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <div>
                <p className="type-kicker text-[#d9bf69]">What you gain</p>
                <h2 className="type-section-title mt-5 max-w-xl text-white">
                  Senior judgment before you need a full senior team.
                </h2>
                <p className="type-body-lg mt-6 max-w-xl text-white">
                  Xaltris is Amit Verma&apos;s one-person software studio, combining
                  fractional CTO leadership with hands-on product delivery.
                </p>
                <p className="type-body mt-5 max-w-xl border-l-2 border-[#d9bf69] pl-5 text-white">
                  <ExperienceYears initialYears={experienceYears} /> years across
                  products, platforms, teams, and production systems inform every
                  engagement.
                </p>
              </div>

              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {outcomes.map(({ label, copy }, index) => (
                  <article key={label} className="border-t border-white/20 pt-6">
                    <p className="type-meta text-[#d9bf69]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="type-card-title mt-3 text-white">{label}</h3>
                    <p className="type-body mt-3 text-white">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 text-[#162f2a] sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
              <div>
                <p className="type-kicker text-[#a53f43]">Where are you now?</p>
                <h2 className="type-section-title mt-5">Start from the situation you actually have.</h2>
              </div>
              <p className="type-body-lg max-w-2xl text-[#334c45] lg:justify-self-end">
                You do not need to diagnose the engagement model. Choose the closest starting point and we can work out the right next move.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {startingPoints.map((item, index) => (
                <article key={item.number} className={`flex flex-col rounded-xl border border-[#d7ddd6] border-t-4 bg-[#f7f2ea] p-6 shadow-[0_18px_50px_-42px_rgba(22,47,42,0.65)] sm:p-7 ${startingPointStyles[index].border}`}>
                  <div className="flex items-center justify-between gap-4">
                    <p className={`inline-flex h-9 w-9 items-center justify-center rounded-full type-meta ${startingPointStyles[index].number}`}>{item.number}</p>
                    <p className={`type-meta text-right ${startingPointStyles[index].label}`}>{item.label}</p>
                  </div>
                  <h3 className="type-card-title mt-6">{item.title}</h3>
                  <p className="type-body mt-4 text-[#53675f]">{item.copy}</p>
                  <Link href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-[#a53f43] underline decoration-[#a53f43]/30 underline-offset-4 hover:decoration-[#a53f43]">
                    {item.action}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f2ea] px-6 py-20 text-[#162f2a] sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="type-kicker text-[#a53f43]">Selected work</p>
                <h2 className="type-section-title mt-5">Proof in working systems.</h2>
              </div>
              <div className="lg:justify-self-end">
                <p className="type-body-lg max-w-2xl text-[#334c45]">
                  Products built across marketplaces, cloud learning, operations,
                  and AI-assisted experiences—each shaped around a real workflow.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {featuredWork.map((work) => (
                <article
                  key={work.title}
                  className="flex flex-col rounded-xl border border-[#d7ddd6] border-t-4 border-t-[#d9bf69] bg-white p-6 shadow-[0_18px_50px_-40px_rgba(22,47,42,0.65)]"
                >
                  <p className="type-meta text-[#a53f43]">{work.category}</p>
                  <h3 className="type-card-title mt-3">{work.title}</h3>
                  <p className="type-body mt-4 text-[#334c45]">{work.context}</p>
                  <p className="type-body mt-5 border-l-2 border-[#cc595a] pl-4 text-[#53675f]">
                    {work.result}
                  </p>
                  <Link
                    href={work.href}
                    className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-[#a53f43] underline decoration-[#a53f43]/30 underline-offset-4 hover:decoration-[#a53f43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a53f43]"
                  >
                    Read the case study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#183a34] px-6 py-3 font-semibold text-[#183a34] transition-colors hover:bg-[#183a34] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183a34] focus-visible:ring-offset-2"
              >
                Explore the full portfolio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#183a34] px-6 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="type-kicker text-[#d9bf69]">How the work moves</p>
              <h2 className="type-section-title mt-5 text-white">
                Clarity first. Working software early. Discipline throughout.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {engagementSteps.map((step) => (
                <article key={step.number} className="border-t border-white/20 pt-6">
                  <p className="type-meta text-[#d9bf69]">{step.number}</p>
                  <h3 className="type-card-title mt-3 text-white">{step.title}</h3>
                  <p className="type-body mt-3 text-white/90">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FaqSection />
      <SiteCta />
    </>
  )
}
