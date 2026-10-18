import { ArrowRight, CheckCircle2, Code2, Compass, ShieldCheck } from "lucide-react";
import Link from "next/link";

import SiteCta from "../../components/SiteCta";

const paths = [
  {
    label: "Build",
    title: "Turn an early idea into a real product.",
    copy: "For startups that need product clarity, technical direction, and hands-on engineering without assembling a full senior team.",
    points: [
      "Shape the smallest useful first release",
      "Make architecture and platform decisions",
      "Build, integrate, deploy, and strengthen",
    ],
    href: "/contact",
    action: "Talk through your idea",
    Icon: Code2,
  },
  {
    label: "Rescue",
    title: "Turn an AI-built prototype into viable software.",
    copy: "For teams that moved fast with AI and now need to understand the security, data, reliability, and change risks underneath the demo.",
    points: [
      "Establish what is actually safe",
      "Rank risks by business consequence",
      "Fix what matters without starting over",
    ],
    href: "/vibe-to-viable",
    action: "Explore Vibe to Viable",
    Icon: ShieldCheck,
  },
];

const stages = [
  ["01", "Clarify", "Get the product goal, users, constraints, and riskiest assumptions into the open."],
  ["02", "Commit", "Choose the smallest responsible path and make the decisions that unblock delivery."],
  ["03", "Build and learn", "Ship working software early, then let real evidence shape what comes next."],
  ["04", "Strengthen", "Add the operational discipline the product needs for sustained use and growth."],
];

export const metadata = {
  title: "How I Help | Fractional CTO & Product Engineering",
  description:
    "Fractional CTO leadership, full-cycle product engineering, and engineering rescue for early-stage startups.",
  alternates: { canonical: "/how-i-help" },
};

export default function HowIHelpPage() {
  return (
    <main className="bg-[#f7f2ea] text-[#162f2a]">
      <section className="relative overflow-hidden bg-[#3f6759] px-6 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="hero-grid" /></div>
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">How I help</p>
            <h1 className="hero-primary-title mt-6 max-w-5xl text-white">
              Senior product judgment, applied where it matters most.
            </h1>
          </div>
          <div className="border-t border-white/18 pt-6 lg:mb-2">
            <p className="type-lead max-w-2xl text-white/92">
              I work with early-stage startups to shape the product, set the technical direction, and build the software—one accountable partner from concept to launch.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#a53f43]">Choose your starting point</p>
              <h2 className="type-section-title mt-5">Two paths. The same accountability.</h2>
              <p className="type-body-lg mt-6 text-[#334c45]">
                The right engagement depends on what already exists—not on forcing every startup through the same process.
              </p>
            </div>
            <div className="grid gap-6">
              {paths.map(({ label, title, copy, points, href, action, Icon }) => (
                <article key={label} className="rounded-xl border border-[#d7ddd6] bg-white p-7 shadow-[0_20px_55px_-42px_rgba(22,47,42,0.65)] sm:p-8">
                  <div className="flex items-start gap-5">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f7f2ea] text-[#315348]"><Icon className="h-6 w-6" strokeWidth={1.9} /></span>
                    <div>
                      <p className="type-meta text-[#a53f43]">{label}</p>
                      <h3 className="type-subsection-title mt-2">{title}</h3>
                    </div>
                  </div>
                  <p className="type-body-lg mt-6 text-[#334c45]">{copy}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                    {points.map((point) => (
                      <li key={point} className="flex gap-2.5 border-t border-[#d7ddd6] pt-3 text-sm font-semibold leading-6 text-[#334c45]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#cc595a]" />{point}
                      </li>
                    ))}
                  </ul>
                  <Link href={href} className="mt-7 inline-flex items-center gap-2 font-semibold text-[#a53f43] underline decoration-[#a53f43]/30 underline-offset-4 hover:decoration-[#a53f43]">
                    {action}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#315348] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#d9bf69]">How the work moves</p>
              <h2 className="type-section-title mt-5 text-white">A direct path from ambiguity to evidence.</h2>
              <p className="type-body-lg mt-6 text-white/84">Strategy and implementation stay connected, so decisions do not disappear between decks, handoffs, and delivery teams.</p>
            </div>
            <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {stages.map(([number, title, copy]) => (
                <li key={number} className="border-t border-white/18 pt-5">
                  <p className="type-meta text-[#d9bf69]">{number}</p>
                  <h3 className="type-card-title mt-3 text-white">{title}</h3>
                  <p className="type-body mt-3 text-white/82">{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="type-kicker text-[#a53f43]">The operating model</p>
            <h2 className="type-section-title mt-5">Senior enough to decide. Hands-on enough to deliver.</h2>
          </div>
          <div className="rounded-xl border border-[#d7ddd6] bg-white p-7 sm:p-9">
            <Compass className="h-8 w-8 text-[#cc595a]" strokeWidth={1.8} />
            <p className="type-lead mt-6 text-[#183a34]">The same judgment stays with the work—from the first product question through architecture, implementation, launch, and the next real constraint.</p>
            <p className="type-body mt-5 text-[#53675f]">This model works best when you want a senior technical partner who can reduce ambiguity and produce the software—not a strategy-only adviser or a staffed development agency.</p>
          </div>
        </div>
      </section>

      <SiteCta />
    </main>
  );
}
