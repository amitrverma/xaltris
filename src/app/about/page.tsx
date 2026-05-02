import {
  BrainCircuit,
  Code2,
  GraduationCap,
  Landmark,
  Linkedin,
  Rocket,
  Target,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About | Xaltris Technologies",
  description:
    "About Amit Verma and Xaltris: 22 years of engineering experience, fractional CTO thinking, and AI-accelerated execution for early-stage startups.",
};

const strengths = [
  {
    title: "Builder at heart",
    description: "I turn complex ideas into simple, usable products.",
    Icon: Rocket,
  },
  {
    title: "Technical and commercial",
    description: "I connect engineering choices to business consequences.",
    Icon: Code2,
  },
  {
    title: "AI-powered execution",
    description: "I use AI as leverage without outsourcing judgment.",
    Icon: BrainCircuit,
  },
  {
    title: "Outcome focused",
    description: "Every system is shaped around real use, scale, and impact.",
    Icon: Target,
  },
];

const credentials = [
  {
    title: "B.Tech",
    institution: "National Institute of Technology, Warangal",
    Icon: GraduationCap,
  },
  {
    title: "MBA",
    institution: "Indian Institute of Management Calcutta",
    Icon: Landmark,
  },
];

const corporateHighlights = [
  {
    label: "Enterprise product leadership",
    detail:
      "Led back-office SaaS product development and modernization work across cloud, DevOps, security, and scalable delivery practices.",
  },
  {
    label: "Global engineering teams",
    detail:
      "Built and led high-performing teams working with clients and colleagues across India, the Netherlands, the US, the UK, and South Africa.",
  },
  {
    label: "Platform architecture",
    detail:
      "Designed BPM, SOA, workflow, reporting, desktop analytics, and mobile platforms for real operational use.",
  },
  {
    label: "Measured business impact",
    detail:
      "Drove cost, productivity, reliability, and modernization outcomes in large corporate environments before bringing that judgment to Xaltris.",
  },
];

const careerArc = [
  "Head of Engineering at Capita",
  "Development Manager at iNautix / BNY Mellon",
  "Engineering Lead at Cordys",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#4f7466] px-6 py-24 text-white transition-colors duration-300 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-12 border-b border-white/12 pb-14 lg:min-h-[34rem] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <aside className="lg:flex lg:h-full lg:items-center lg:justify-center">
            <div className="grid gap-6 sm:grid-cols-[14rem_1fr] sm:items-end lg:block lg:w-full lg:max-w-[25rem]">
              <div className="relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-full border-[7px] border-white/90 bg-[#dce8ff] shadow-[0_18px_50px_rgba(4,42,43,0.16)] sm:max-w-none lg:max-w-[20rem]">
                <Image
                  src="/amit-verma-headshot.jpg"
                  alt="Amit Verma"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 224px, 320px"
                />
              </div>

              <div className="border-t border-white/12 pt-5 lg:mt-7">
                <p className="type-kicker text-[#d9bf69]">
                  Amit Verma
                </p>
                <p className="type-card-title mt-3 max-w-md text-white">
                  Builder. Technologist. Problem solver.
                </p>
                <p className="type-body mt-4 max-w-md text-white">
                  22 years building and scaling technology systems across
                  products, teams, and business contexts.
                </p>
                <a
                  href="https://www.linkedin.com/in/amitrverma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  aria-label="View Amit Verma on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={2} />
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          <div>
            <h1
              className="type-hero max-w-4xl text-white"
            >
              Fractional CTO.
            </h1>
            <p className="type-lead mt-8 max-w-2xl text-white">
              Hi, I am Amit Verma. I started Xaltris in June 2025 to work with
              early-stage startups as a fractional CTO, helping them turn product
              ideas into working software.
            </p>
            <div className="type-body-lg mt-6 max-w-2xl space-y-5 text-white">
              <p>
                I do this by combining CTO-level judgment with hands-on product
                engineering. Supported by AI, I personally handle the full
                software development lifecycle: architecture, implementation,
                integrations, deployment, and the discipline needed to build
                production-grade software.
              </p>
              <p>
                This lets startup CEOs stay focused on customers, product, and
                business growth without carrying the technical burden.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-14 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">
              About me
            </p>
            <h2
              className="type-section-title mt-5 max-w-xl text-white"
            >
              I hold the thread from product thinking to technical delivery.
            </h2>
          </div>

          <div className="type-lead space-y-6 text-white">
            <p>
              I am a technology leader with{" "}
              <span className="font-bold text-[#d9bf69]">22 years</span> of
              experience building and scaling robust software systems across
              domains.
            </p>
            <p>
              As a{" "}
              <span className="font-bold text-[#d9bf69]">
                fractional CTO and hands-on builder,
              </span>{" "}
              I help founders turn ambiguous ideas into usable, scalable products
              quickly and responsibly.
            </p>
            <p>
              I combine{" "}
              <span className="font-bold text-[#d9bf69]">
                AI-accelerated development
              </span>{" "}
              with senior engineering judgment, so speed improves without losing
              clarity, architecture, or ownership.
            </p>
          </div>
        </section>

        <section className="border-t border-white/12 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#d9bf69]">
                Corporate foundation
              </p>
              <h2 className="type-subsection-title mt-4 max-w-md text-white">
                Enterprise depth without enterprise drag.
              </h2>
              <p className="type-body mt-5 max-w-lg text-white">
                Before Xaltris, I spent two decades inside product and engineering
                organizations where software had to survive real scale, governance,
                security, delivery pressure, and changing business needs.
              </p>
              <div className="mt-7 space-y-3">
                {careerArc.map((role) => (
                  <p
                    key={role}
                    className="type-body border-l-2 border-[#d9bf69] pl-4 font-semibold text-white"
                  >
                    {role}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {corporateHighlights.map(({ label, detail }, index) => (
                  <article
                    key={label}
                    className={`${index > 1 ? "sm:border-t sm:border-white/10 sm:pt-7" : "sm:border-t-0 sm:pt-0"} border-t border-white/10 pt-7 first:border-t-0 first:pt-0`}
                  >
                    <p className="type-meta text-[#d9bf69]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="type-card-title mt-3 text-white">
                      {label}
                    </h3>
                    <p className="type-body mt-3 text-white">
                      {detail}
                    </p>
                  </article>
                ))}
              </div>

              <p className="type-body-lg mt-9 border-l border-white/16 pl-5 text-white">
                That background is why Xaltris is not just about moving fast. It
                is about building with the discipline learned from SaaS products,
                BPM platforms, cloud migration, observability, automation, and
                long-running enterprise systems.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/12 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="type-kicker text-[#d9bf69]">
                How I work
              </p>
              <h2 className="type-subsection-title mt-4 max-w-md text-white">
                One clear operating model.
              </h2>
              <p className="type-body mt-5 max-w-lg text-white">
                The same person shaping the product also guides the technical
                decisions, the build, and the path to a working system.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {strengths.map(({ title, description, Icon }, index) => (
                <article
                  key={title}
                  className={`${index > 1 ? "sm:border-t sm:border-white/10 sm:pt-7" : "sm:border-t-0 sm:pt-0"} border-t border-white/10 pt-7 first:border-t-0 first:pt-0`}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d9bf69]">
                      <Icon className="h-6 w-6" strokeWidth={1.9} />
                    </span>
                    <div>
                      <h3 className="type-card-title text-white">
                        {title}
                      </h3>
                      <p className="type-body mt-3 text-white">
                        {description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-white/12 py-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">
              Credentials
            </p>
            <h2 className="type-subsection-title mt-4 text-white">
              Technical depth and business context.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {credentials.map(({ title, institution, Icon }) => (
              <article key={title} className="border-t border-white/10 pt-6">
                <Icon className="h-8 w-8 text-[#d9bf69]" strokeWidth={1.8} />
                <p className="mt-4 text-3xl font-bold text-white">
                  {title}
                </p>
                <p className="type-body mt-2 text-white">
                  {institution}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/12 pt-12 text-center">
          <p className="mx-auto max-w-4xl text-xl font-semibold leading-9 text-white sm:text-2xl sm:leading-10">
            The value is not just speed. It is continuity of thought: product,
            architecture, delivery, and outcome shaped by the same judgment.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[1.25rem] font-bold leading-none text-white sm:gap-x-8 sm:text-[1.55rem]">
            <span className="hidden h-px w-16 bg-[#d9bf69] sm:block" />
            <p>
              Powered by <span className="text-[#d9bf69]">AI.</span>
            </p>
            <p className="text-right">
              Shaped by <span className="text-[#d9bf69]">OI.</span>
            </p>
            <span className="hidden h-px w-16 bg-[#d9bf69] sm:block" />
          </div>
        </section>
      </div>
    </main>
  );
}
