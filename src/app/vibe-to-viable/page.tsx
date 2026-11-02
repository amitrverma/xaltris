import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  FileSearch,
  Gauge,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const hardeningAreas = [
  { title: "Security boundaries", copy: "Strengthen authentication, authorization, secrets, data exposure, unsafe endpoints, and obvious abuse paths.", Icon: ShieldCheck },
  { title: "Data safety", copy: "Protect validation, integrity, destructive operations, migrations, backups, and the places bad input can create bad state.", Icon: Wrench },
  { title: "Reliability", copy: "Improve error handling, third-party failure behavior, recovery paths, and the product's ability to fail safely.", Icon: Gauge },
  { title: "Change confidence", copy: "Add the tests, deployment checks, and structural improvements needed to change the product without quietly breaking it.", Icon: CheckCircle2 },
  { title: "Production visibility", copy: "Add useful logging, monitoring, and diagnostic context so failures become visible and actionable.", Icon: Eye },
  { title: "Right-sized foundations", copy: "Remove the constraints that threaten the next stage without rebuilding the product or engineering for imaginary scale.", Icon: FileSearch },
];

const stages = [
  { label: "01", title: "Locate the consequential risks", copy: "A focused review establishes what is safe, what is fragile, and where hardening will create the most useful change." },
  { label: "02", title: "Harden the critical paths", copy: "Fix the security, data, reliability, and structural problems that could damage users, trust, or delivery momentum." },
  { label: "03", title: "Prove the stronger behavior", copy: "Add tests, operational signals, and deployment confidence around the flows that now need to survive real use." },
  { label: "04", title: "Leave the product easier to evolve", copy: "Document the important decisions and leave a clear view of what is strong now, what can wait, and what to watch next." },
];

const outcomes = [
  "Critical user and data boundaries are enforced more deliberately.",
  "Important failures become visible, traceable, and safer to recover from.",
  "The next product change is less likely to damage something that already works.",
  "The existing product and momentum are preserved wherever that is responsible.",
];

const fit = [
  "You used Claude, Cursor, Lovable, Replit, Bolt, or similar tools to build a working product.",
  "You have users, pilots, or a launch close enough that production behavior now matters.",
  "You want the engineering strengthened without automatically starting again.",
  "You want one senior person accountable for both judgment and targeted remediation.",
];

const notFit = [
  "You only have an idea and need the first version built.",
  "You want a generic code-quality score without implementation work.",
  "You want the cheapest possible patch regardless of future consequences.",
  "You need an ongoing staffed development team rather than a focused intervention.",
];

export const metadata = {
  title: "Vibe to Viable",
  description: "Targeted engineering hardening for AI-built MVPs that need stronger security, data safety, reliability, production visibility, and change confidence.",
  alternates: { canonical: "/vibe-to-viable" },
  openGraph: {
    title: "Vibe to Viable by Xaltris",
    description: "Harden an AI-built MVP for real users without discarding the product momentum already created.",
    url: "https://xaltris.com/vibe-to-viable",
    siteName: "Xaltris",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vibe to Viable by Xaltris",
    description: "Targeted hardening for AI-built MVPs moving from a working prototype to dependable software.",
  },
};

export default function VibeToViablePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#3f6759] text-white">
      <section className="relative overflow-hidden bg-[#3f6759] px-6 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="hero-grid" /></div>
        <div className="relative mx-auto max-w-7xl border-b border-white/18 pb-12 sm:pb-14">
          <div className="max-w-5xl">
            <p className="type-kicker text-[#d9bf69]">Vibe to Viable · Product hardening</p>
            <h1 className="hero-primary-title mt-6 max-w-[13ch] text-white">
              Your AI-built MVP works.
              <span className="mt-3 block text-[clamp(1.28rem,5.75vw,4.5rem)] leading-[1.02] text-[#d9bf69] min-[380px]:text-[clamp(1.45rem,6.4vw,4.5rem)] sm:text-[0.68em]">Now make it dependable.</span>
            </h1>
            <p className="type-lead mt-8 max-w-2xl text-white/94">I strengthen the parts of an AI-built product that can damage trust when real users arrive: security boundaries, data safety, failure behavior, production visibility, and confidence in future changes.</p>
            <p className="type-body-lg mt-5 max-w-2xl border-l border-white/30 pl-5 text-white/86">A focused review identifies where intervention matters. The center of the engagement is the hardening work that follows.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#a53f43] bg-[#a53f43] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f3438] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                Discuss product hardening<ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </Link>
              <a href="#hardening" className="inline-flex items-center justify-center rounded-md border border-white/28 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">See what gets strengthened</a>
            </div>
          </div>
        </div>
      </section>

      <section id="hardening" className="bg-[#f7f2ea] px-6 py-20 text-[#162f2a] sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#a53f43]">What gets hardened</p>
              <h2 className="type-section-title mt-5 max-w-xl text-[#183a34]">Strengthen what real use will expose.</h2>
              <p className="type-body-lg mt-6 max-w-lg text-[#334c45]">The goal is not to make every line elegant. It is to change the product where weak engineering can become lost data, broken trust, repeated incidents, or a product nobody can safely extend.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {hardeningAreas.map(({ title, copy, Icon }) => (
                <article key={title} className="rounded-lg border border-[#d7ddd6] bg-white/70 p-6">
                  <Icon className="h-6 w-6 text-[#cc595a]" strokeWidth={1.9} aria-hidden="true" />
                  <h3 className="type-card-title mt-4 text-[#183a34]">{title}</h3>
                  <p className="type-body mt-3 text-[#334c45]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#315348] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#d9bf69]">How the work moves</p>
              <h2 className="type-section-title mt-5 max-w-xl text-white">Diagnose briefly. Harden deliberately.</h2>
              <p className="type-body-lg mt-6 max-w-lg text-white/88">The initial review prevents effort being wasted on cosmetic cleanup. Most of the work is spent changing and proving the product where it materially needs to become stronger.</p>
            </div>
            <ol className="grid gap-5 sm:grid-cols-2">
              {stages.map(({ label, title, copy }) => (
                <li key={label} className="rounded-lg border border-white/16 bg-white/8 p-6">
                  <p className="type-meta text-[#d9bf69]">{label}</p>
                  <h3 className="type-card-title mt-4 text-white">{title}</h3>
                  <p className="type-body mt-3 text-white/86">{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#162f2a] sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="type-kicker text-[#a53f43]">What changes</p>
            <h2 className="type-section-title mt-5 max-w-xl">A product better prepared for users, incidents, and the next release.</h2>
          </div>
          <ul className="rounded-xl border border-[#d7ddd6] bg-[#f7f2ea] p-7 sm:p-8">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 border-t border-[#d7ddd6] pt-5 first:border-t-0 first:pt-0">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#cc595a]" aria-hidden="true" />
                <span className="type-body-lg text-[#334c45]">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#315348] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#d9bf69]">Good fit / bad fit</p>
              <h2 className="type-section-title mt-5 max-w-xl text-white">For founders who want to preserve momentum and strengthen what they have.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <FitList title="Good fit" items={fit} />
              <FitList title="Probably not a fit" items={notFit} muted />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] px-6 py-20 text-[#162f2a] sm:py-24">
        <div className="mx-auto max-w-7xl rounded-lg bg-[#183a34] px-8 py-10 text-white shadow-[0_22px_70px_-32px_rgba(32,53,48,0.85)] sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="type-kicker text-[#d9bf69]">Vibe to Viable</p>
              <h2 className="type-section-title mt-4 max-w-3xl text-white">Keep the momentum.<span className="block text-[#d9bf69]">Strengthen the product underneath it.</span></h2>
              <p className="type-body-lg mt-5 max-w-3xl text-white/88">Start with the product as it exists. I will identify the consequential risks, harden what matters, and leave the system safer to use and change.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#a53f43] bg-[#a53f43] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f3438] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
              Discuss product hardening<ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FitList({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <article className="rounded-lg border border-white/16 bg-white/8 p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#d9bf69]">
          {muted ? <Gauge className="h-6 w-6" strokeWidth={1.9} /> : <ShieldCheck className="h-6 w-6" strokeWidth={1.9} />}
        </span>
        <h3 className="type-card-title text-white">{title}</h3>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-white">
            <CheckCircle2 className={`mt-1 h-5 w-5 shrink-0 ${muted ? "text-[#f0b3a6]" : "text-[#d9bf69]"}`} strokeWidth={2} aria-hidden="true" />
            <span className="type-body">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
