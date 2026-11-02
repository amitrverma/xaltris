import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Code2,
  Compass,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import SiteCta from "../../components/SiteCta";

const outcomes = [
  "A focused first release",
  "Sound technical foundations",
  "Working software in real use",
  "A product that can keep evolving",
];

const responsibilities = [
  {
    number: "01",
    label: "Shape",
    title: "Turn ambition into a product decision.",
    copy: "Clarify the users, workflow, constraints, and smallest release that can create useful evidence.",
    Icon: Compass,
  },
  {
    number: "02",
    label: "Design",
    title: "Make the consequential technical choices.",
    copy: "Choose the architecture, platform, data model, integrations, and security approach for the stage ahead.",
    Icon: Layers3,
  },
  {
    number: "03",
    label: "Build",
    title: "Turn the decisions into working software.",
    copy: "Implement the product across interface, backend, infrastructure, integrations, testing, and deployment.",
    Icon: Code2,
  },
  {
    number: "04",
    label: "Strengthen",
    title: "Prepare the product for real use.",
    copy: "Add observability, maintainability, reliability, documentation, and the discipline needed to keep learning safely.",
    Icon: ShieldCheck,
  },
];

const stages = [
  ["01", "Find the right first product", "Separate the essential workflow from everything that can wait."],
  ["02", "Build a usable release", "Put the complete core journey into working software early."],
  ["03", "Learn from reality", "Use real feedback and operational evidence to shape the next decision."],
  ["04", "Leave room to grow", "Strengthen the system without prematurely building for an imagined future."],
];

const fit = [
  "You have a product idea or business workflow that needs to become software.",
  "You want a senior technical counterpart, not a chain of account and delivery roles.",
  "The product is new enough for its foundations to be shaped deliberately.",
  "You value a focused first release and evidence over a large speculative roadmap.",
];

export const metadata = {
  title: "Product Build for Founder-Led Teams",
  description:
    "Direct, full-cycle product engineering for founder-led teams—from product clarity and architecture through implementation, launch, and production discipline.",
  alternates: { canonical: "/product-build" },
  openGraph: {
    title: "Product Build for Founder-Led Teams | Xaltris",
    description:
      "One accountable partner from the first product decision through architecture, implementation, launch, and evolution.",
    url: "https://xaltris.com/product-build",
    siteName: "Xaltris",
    type: "website",
  },
};

export default function ProductBuildPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f2ea] text-[#162f2a]">
      <section className="relative overflow-hidden bg-[#3f6759] px-6 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="hero-grid" />
          <div className="absolute -right-20 top-8 h-72 w-72 rounded-full bg-[#d9bf69]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-20">
          <div>
            <p className="type-kicker text-[#d9bf69]">Product Build · One continuous owner</p>
            <h1 className="hero-primary-title mt-6 max-w-5xl text-white">
              Turn an early product idea
              <span className="block text-[#d9bf69]">into dependable software.</span>
            </h1>
          </div>

          <div className="border-t border-white/20 pt-6 lg:mb-2">
            <p className="type-lead max-w-2xl text-white/94">
              Work directly with me across product framing, technical direction,
              implementation, launch, and evolution—with one accountable owner
              carrying the thread throughout.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#a53f43] bg-[#a53f43] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8f3438] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                Talk through your idea
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="#responsibility" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
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
            <p className="type-kicker text-[#d9bf69]">What you gain</p>
            <h2 className="type-section-title mt-5 max-w-lg text-white">A shorter distance from intent to reality.</h2>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 border-t border-white/18 pt-5 text-white">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d9bf69]" aria-hidden="true" />
                <span className="type-body-lg font-semibold">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="responsibility" className="bg-[#f7f2ea] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
            <div>
              <p className="type-kicker text-[#a53f43]">What I take responsibility for</p>
              <h2 className="type-section-title mt-5 max-w-xl">Product thinking and technical delivery stay connected.</h2>
            </div>
            <p className="type-body-lg max-w-2xl text-[#334c45] lg:justify-self-end">
              The person hearing the business problem also makes the architecture
              decisions and builds the system, reducing handoffs, reinterpretation,
              and avoidable rework.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {responsibilities.map(({ number, label, title, copy, Icon }) => (
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
            <p className="type-kicker text-[#a53f43]">How the work moves</p>
            <h2 className="type-section-title mt-5 max-w-xl">Working software early. Evidence before expansion.</h2>
            <p className="type-body-lg mt-6 max-w-lg text-[#334c45]">The goal is not to predict the entire product. It is to make the next responsible decision and keep the product usable while it evolves.</p>
          </div>
          <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {stages.map(([number, title, copy]) => (
              <li key={number} className="border-t border-[#d7ddd6] pt-5">
                <p className="type-meta text-[#a53f43]">{number}</p>
                <h3 className="type-card-title mt-3">{title}</h3>
                <p className="type-body mt-3 text-[#53675f]">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#315348] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">When this is useful</p>
            <h2 className="type-section-title mt-5 max-w-xl text-white">For a new product that needs both judgment and execution.</h2>
            <p className="type-body-lg mt-6 max-w-lg text-white/88">If you already have engineers and need senior leadership around them, Fractional CTO is the better starting point.</p>
            <Link href="/fractional-cto" className="mt-6 inline-flex items-center gap-2 font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white">
              Explore Fractional CTO<ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-xl border border-white/18 bg-[#183a34] p-7 sm:p-8">
            <Rocket className="h-8 w-8 text-[#d9bf69]" strokeWidth={1.8} aria-hidden="true" />
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
        eyebrow="Bring the product ambition"
        title="Bring the idea, the workflow, and the constraints already known."
        copy="We will work out the smallest useful first release and whether Product Build is the right engagement."
        action="Discuss a product build"
      />
    </main>
  );
}
