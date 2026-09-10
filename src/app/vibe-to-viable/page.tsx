import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Gauge,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

const auditAreas = [
  {
    title: "Architecture",
    copy: "Where the product is structurally sound, tightly coupled, fragile, or unnecessarily complex.",
  },
  {
    title: "Security",
    copy: "Authentication, authorization, data exposure, secrets, unsafe endpoints, and obvious abuse paths.",
  },
  {
    title: "Data",
    copy: "Validation, integrity, destructive operations, migrations, backups, and places bad input can create bad state.",
  },
  {
    title: "Reliability",
    copy: "Error handling, logging, third-party failures, and whether you can tell what happened when something breaks.",
  },
  {
    title: "Change safety",
    copy: "Tests, deployments, risky dependencies, and how likely the next feature is to damage an old one.",
  },
  {
    title: "Scale",
    copy: "The bottlenecks that matter for your likely next stage, without prematurely engineering for millions.",
  },
];

const riskFindings = [
  {
    title: "A user can see another user's data.",
    copy: "The screens look right, but the access rules underneath may not be enforcing ownership.",
    Icon: LockSignal,
  },
  {
    title: "A small change quietly breaks something old.",
    copy: "The product keeps moving, but the important flows have no reliable safety net.",
    Icon: ChangeSignal,
  },
  {
    title: "Errors disappear instead of becoming traceable.",
    copy: "When something fails, you need enough signal to know what happened and what to fix first.",
    Icon: TraceSignal,
  },
];

const planItems = [
  {
    label: "01",
    title: "Safe to leave alone",
    copy: "Things that may be inelegant but are not currently hurting the product. No gold-plating.",
  },
  {
    label: "02",
    title: "Fix before more users",
    copy: "Security, data, and reliability risks that can become incidents, lost trust, or expensive rework.",
  },
  {
    label: "03",
    title: "Fix before the next stage",
    copy: "Structural issues that will slow you down as the product, customer base, or engineering team grows.",
  },
];

const fit = [
  "You used Claude, Cursor, Lovable, Replit, Bolt, or similar tools to build a real working product.",
  "You already have users, pilots, or a launch close enough that reliability now matters.",
  "You like the product and want to rescue the engineering underneath it.",
  "You want one senior person accountable for judgment and execution.",
];

const notFit = [
  "You only have an idea and need someone to build the first version.",
  "You want a generic code quality score with no remediation.",
  "You want the cheapest possible patch regardless of future consequences.",
  "You need a staffed development agency rather than focused engineering ownership.",
];

export const metadata = {
  title: "Vibe to Viable | Xaltris Technologies",
  description:
    "Vibe to Viable is my rescue service for vibe-coded MVPs: I audit the risks, fix what matters, and make the product business-ready.",
  openGraph: {
    title: "Vibe to Viable by Xaltris",
    description:
      "Engineering rescue for vibe-coded MVPs that need security, reliability, and change safety before the next stage.",
    url: "https://xaltris.com/vibe-to-viable",
    siteName: "Xaltris",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vibe to Viable by Xaltris",
    description:
      "A rescue audit and targeted hardening path for vibe-coded MVPs moving from prototype to viable software.",
  },
};

export default function VibeToViablePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#4f7466] text-white">
      <section className="relative overflow-hidden bg-[#3f6759] px-5 py-12 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-grid" />
        </div>

        <div className="relative mx-auto max-w-7xl border-b border-white/18 pb-12 sm:pb-14">
          <div className="max-w-5xl">
            <p className="type-kicker text-[#f1d778]">Vibe to Viable</p>
            <h1 className="mt-6 max-w-[13ch] font-display text-[clamp(2.85rem,13vw,6.6rem)] font-extrabold leading-[0.98] text-white sm:text-[clamp(3.35rem,7.4vw,6.6rem)]">
              Vibe coded your MVP?
              <span className="mt-3 block whitespace-nowrap text-[clamp(1.28rem,5.75vw,4.5rem)] leading-[1.02] text-[#f1d778] min-[380px]:text-[clamp(1.45rem,6.4vw,4.5rem)] sm:text-[0.68em]">
                Now make it business-ready.
              </span>
            </h1>
            <p className="type-lead mt-8 max-w-2xl text-white/94">
              You used AI to get from idea to working product fast. I help find
              the hidden security, data, reliability, and change risks, then fix
              what matters so you can put real users and customers on it with
              confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#e08a8b] bg-[#cc595a] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Get a rescue audit
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <a
                href="#audit"
                className="inline-flex items-center justify-center rounded-md border border-white/28 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                See what gets checked
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#315348] px-6 py-14 sm:py-16">
        <RiskLens />
      </section>

      <section id="audit" className="bg-[#f7f2ea] px-6 py-20 text-[#203530] sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#cc595a]">Start here</p>
              <h2 className="type-section-title mt-5 max-w-xl text-[#203530]">
                The Vibe Code Rescue Audit.
              </h2>
              <p className="type-body-lg mt-6 max-w-lg text-[#334c45]">
                Before changing anything, I establish what is actually true.
                You get a senior-engineering view of the product, translated
                into decisions you can make.
              </p>
              <div className="mt-8 rounded-lg border border-[#d8d1c3] bg-white/64 p-6">
                <p className="type-body font-semibold text-[#203530]">
                  You are not buying a list of technical complaints.
                </p>
                <p className="type-body mt-3 text-[#334c45]">
                  You are buying clarity: what can stay, what must change, what
                  can wait, and why.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {auditAreas.map(({ title, copy }) => (
                <article
                  key={title}
                  className="rounded-lg border border-[#d8d1c3] bg-white/64 p-6"
                >
                  <FileSearch
                    className="h-6 w-6 text-[#cc595a]"
                    strokeWidth={1.9}
                  />
                  <h3 className="type-card-title mt-4 text-[#203530]">{title}</h3>
                  <p className="type-body mt-3 text-[#334c45]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/12 bg-[#638475] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#d9bf69]">What you leave with</p>
              <h2 className="type-section-title mt-5 max-w-xl text-white">
                A rescue plan, not a code review.
              </h2>
              <p className="type-body-lg mt-6 max-w-lg text-white">
                Everything is ranked by business consequence, not engineering
                neatness.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {planItems.map(({ label, title, copy }) => (
                <article
                  key={title}
                  className="rounded-lg border border-white/16 bg-white/8 p-6"
                >
                  <p className="type-meta text-[#d9bf69]">{label}</p>
                  <h3 className="type-card-title mt-5 text-white">{title}</h3>
                  <p className="type-body mt-3 text-white">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#315348] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#d9bf69]">Good fit / bad fit</p>
              <h2 className="type-section-title mt-5 max-w-xl text-white">
                For founders who want to preserve momentum, not start over.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <FitList title="Good fit" items={fit} tone="good" />
              <FitList title="Probably not a fit" items={notFit} tone="risk" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] px-6 py-20 text-[#203530] sm:py-24">
        <div className="mx-auto max-w-7xl rounded-lg bg-[#203530] px-8 py-10 text-white shadow-[0_22px_70px_-32px_rgba(32,53,48,0.85)] sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="type-kicker text-[#d9bf69]">Vibe to Viable</p>
              <h2 className="type-section-title mt-4 max-w-3xl text-white">
                You vibe coded the app.
                <span className="block text-[#d9bf69]">I make it viable.</span>
              </h2>
              <p className="type-body-lg mt-5 max-w-3xl text-white">
                Start with a rescue audit. You will get a straight answer on
                what is safe, what is risky, what to fix first, and what not to
                waste time on.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#e08a8b] bg-[#cc595a] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Get a rescue audit
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function RiskLens() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
      <div>
        <p className="type-kicker text-[#f1d778]">Audit lens</p>
        <h2 className="type-section-title mt-5 max-w-xl text-white">
          What &quot;it works&quot; can still hide.
        </h2>
        <p className="type-body-lg mt-6 max-w-lg text-white/88">
          The demo can look solid while the product underneath is carrying risks
          a non-technical founder should not have to guess about.
        </p>
      </div>

      <div className="rounded-lg border border-white/18 bg-[#183a34] p-6 shadow-[0_28px_90px_-44px_rgba(0,0,0,0.95)] sm:p-7">
        <div className="grid gap-5">
          {riskFindings.map(({ title, copy, Icon }) => (
            <article
              key={title}
              className="flex gap-4 border-t border-white/12 pt-5 first:border-t-0 first:pt-0"
            >
              <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f1d778]">
                <Icon />
              </span>
              <div>
                <h3 className="type-body-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="type-body mt-2 text-white/84">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function LockSignal() {
  return <ShieldCheck className="h-5 w-5" strokeWidth={1.9} />;
}

function ChangeSignal() {
  return <TriangleAlert className="h-5 w-5" strokeWidth={1.9} />;
}

function TraceSignal() {
  return <FileSearch className="h-5 w-5" strokeWidth={1.9} />;
}

function FitList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "good" | "risk";
}) {
  const Icon = tone === "good" ? CheckCircle2 : TriangleAlert;

  return (
    <article className="rounded-lg border border-white/16 bg-white/8 p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#d9bf69]">
          {tone === "good" ? (
            <ShieldCheck className="h-6 w-6" strokeWidth={1.9} />
          ) : (
            <Gauge className="h-6 w-6" strokeWidth={1.9} />
          )}
        </span>
        <h3 className="type-card-title text-white">{title}</h3>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-white">
            <Icon
              className={`mt-1 h-5 w-5 shrink-0 ${
                tone === "good" ? "text-[#d9bf69]" : "text-[#f0b3a6]"
              }`}
              strokeWidth={2}
            />
            <span className="type-body">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
