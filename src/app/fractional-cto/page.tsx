import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Compass,
  Gauge,
  Network,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import SiteCta from "../../components/SiteCta";

const changes = [
  "Clearer technology decisions",
  "More predictable delivery",
  "Stronger engineering capability",
  "Fewer avoidable production risks",
];

const responsibilityAreas = [
  {
    number: "01",
    label: "Direction",
    title: "Make the important technical choices.",
    copy: "Architecture, platform, security, data, integration, and roadmap decisions grounded in the business.",
    Icon: Compass,
  },
  {
    number: "02",
    label: "Delivery",
    title: "Keep priorities connected to execution.",
    copy: "Surface blockers, resolve trade-offs, and intervene when delivery is at risk.",
    Icon: Gauge,
  },
  {
    number: "03",
    label: "Team",
    title: "Strengthen the team that already exists.",
    copy: "Improve review quality, technical judgment, ways of working, and internal capability.",
    Icon: UsersRound,
  },
  {
    number: "04",
    label: "Reliability",
    title: "Prepare the product for real use.",
    copy: "Improve production readiness, observability, maintainability, resilience, and control of technical debt.",
    Icon: ShieldCheck,
  },
];

const connection = [
  ["01", "Business priorities", "What must change"],
  ["02", "Technical direction", "What matters now"],
  ["03", "Team execution", "How work moves"],
  ["04", "Production outcomes", "What survives use"],
];

const fit = [
  "You already have engineers, but important technology decisions need a clear senior owner.",
  "Business priorities and engineering execution are drifting apart.",
  "Delivery risks, technical trade-offs, or production concerns are becoming harder to control.",
  "You want the existing team to build stronger judgment and become less dependent on escalation.",
];

const workingPractices = [
  ["Product and technology roadmap", "Translate business priorities into an achievable technical sequence and make the trade-offs visible."],
  ["Architecture and integration decisions", "Review the choices that are expensive to reverse and keep the system appropriate for its real stage."],
  ["Delivery and risk reviews", "Surface blockers, dependencies, and quality risks early enough for the team to act on them."],
  ["Engineering capability", "Improve review quality, mentoring, hiring decisions, ownership, and the team's ability to solve harder problems independently."],
  ["Production health", "Use incidents, observability, reliability signals, and technical debt to decide where engineering attention belongs."],
  ["Founder and stakeholder translation", "Make technical consequences understandable so business decisions are made with the right context."],
];

export const metadata = {
  title: "Fractional CTO for Founder-Led Product Teams",
  description:
    "Ongoing senior technology leadership for founders and engineering teams: technical direction, delivery leadership, stronger engineering capability, and production health.",
  alternates: { canonical: "/fractional-cto" },
  openGraph: {
    title: "Fractional CTO for Founder-Led Product Teams | Xaltris",
    description:
      "Senior technology leadership that connects business priorities to technical direction, team execution, and production outcomes.",
    url: "https://xaltris.com/fractional-cto",
    siteName: "Xaltris",
    type: "website",
  },
};

export default function FractionalCtoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f2ea] text-[#162f2a]">
      <section className="relative overflow-hidden bg-[#3f6759] px-6 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="hero-grid" />
          <div className="absolute -right-20 top-8 h-72 w-72 rounded-full bg-[#d9bf69]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-20">
          <div>
            <p className="type-kicker text-[#d9bf69]">
              Fractional CTO · Continuous technology partnership
            </p>
            <h1 className="hero-primary-title mt-6 max-w-5xl text-white">
              Senior technology leadership
              <span className="block text-[#d9bf69]">for teams already building.</span>
            </h1>
          </div>

          <div className="border-t border-white/20 pt-6 lg:mb-2">
            <p className="type-lead max-w-2xl text-white/94">
              I work alongside founders and existing engineering teams as their
              Fractional CTO—connecting business priorities to technical direction
              and helping the team deliver with greater confidence.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#a53f43] bg-[#a53f43] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8f3438] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Discuss your technology priorities
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#responsibility"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                See what I take on
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#183a34] px-6 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">What changes</p>
            <h2 className="type-section-title mt-5 max-w-lg text-white">
              Technology gets a clear owner.
            </h2>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {changes.map((change) => (
              <li key={change} className="flex gap-3 border-t border-white/18 pt-5 text-white">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d9bf69]" aria-hidden="true" />
                <span className="type-body-lg font-semibold">{change}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
            <div>
              <p className="type-kicker text-[#a53f43]">The connection</p>
              <h2 className="type-section-title mt-5 max-w-xl">
                Senior judgment stays close to the work.
              </h2>
            </div>
            <p className="type-body-lg max-w-2xl text-[#334c45] lg:justify-self-end">
              Decisions, architecture, delivery, team capability, and production
              health are treated as one connected responsibility—not separate
              conversations that drift apart.
            </p>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl bg-[#d7ddd6] p-px sm:grid-cols-2 lg:grid-cols-4">
            {connection.map(([number, title, copy]) => (
              <li key={number} className="bg-[#f7f2ea] p-6 lg:p-7">
                <p className="type-meta text-[#a53f43]">{number}</p>
                <h3 className="mt-4 text-base font-bold leading-6 text-[#162f2a]">{title}</h3>
                <p className="type-small mt-2 text-[#53675f]">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="responsibility" className="bg-[#f7f2ea] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="type-kicker text-[#a53f43]">What I take responsibility for</p>
            <h2 className="type-section-title mt-5">
              Direction, delivery, team strength, and reliability.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {responsibilityAreas.map(({ number, label, title, copy, Icon }) => (
              <article key={label} className="rounded-xl border border-[#d7ddd6] bg-white p-7 shadow-[0_20px_55px_-44px_rgba(22,47,42,0.6)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="type-meta text-[#a53f43]">{number} · {label}</p>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f2ea] text-[#315348]">
                    <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="type-subsection-title mt-5 max-w-lg">{title}</h3>
                <p className="type-body-lg mt-4 text-[#334c45]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="type-kicker text-[#a53f43]">What this looks like in practice</p>
            <h2 className="type-section-title mt-5 max-w-xl">Leadership embedded in the decisions and work that already exist.</h2>
            <p className="type-body-lg mt-6 max-w-lg text-[#334c45]">This is not a parallel strategy track. The work happens around the real product, roadmap, engineers, delivery pressure, and production constraints.</p>
          </div>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {workingPractices.map(([title, copy], index) => (
              <article key={title} className="border-t border-[#d7ddd6] pt-5">
                <p className="type-meta text-[#a53f43]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="type-card-title mt-3">{title}</h3>
                <p className="type-body mt-3 text-[#53675f]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#315348] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">When this is useful</p>
            <h2 className="type-section-title mt-5 max-w-xl text-white">
              For founder-led teams with engineers and real constraints.
            </h2>
            <p className="type-body-lg mt-6 max-w-lg text-white/88">
              Fractional CTO support adds senior ownership around the team you
              already have. It is not a replacement for the engineers doing the work.
            </p>
            <Link href="/case-studies/corporate-longitudinal-case-study.pdf" className="mt-6 inline-flex items-center gap-2 font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white">
              See the enterprise leadership foundation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-xl border border-white/18 bg-[#183a34] p-7 sm:p-8">
            <Network className="h-8 w-8 text-[#d9bf69]" strokeWidth={1.8} aria-hidden="true" />
            <ul className="mt-6 space-y-5">
              {fit.map((item) => (
                <li key={item} className="flex gap-3 border-t border-white/14 pt-5 first:border-t-0 first:pt-0">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d9bf69]" aria-hidden="true" />
                  <span className="type-body-lg text-white/92">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteCta
        eyebrow="Bring the real constraints"
        title="Bring the product, the team, and the decisions that need ownership."
        copy="We will work out where senior technology leadership can create the most useful change."
        action="Discuss Fractional CTO support"
      />
    </main>
  );
}
