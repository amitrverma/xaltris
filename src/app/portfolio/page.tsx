import {
  Building2,
  Download,
} from "lucide-react";
import Link from "next/link";
import PortfolioCarousel from "../../components/PortfolioCarousel";
import SiteCta from "../../components/SiteCta";

export const metadata = {
  title: "Work",
  description:
    "Case studies, products, and enterprise platforms built by Amit Verma and Xaltris Technologies.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Work | Xaltris Technologies",
    description:
      "Selected startup, product, and enterprise platform work from Xaltris and Amit Verma's corporate engineering career.",
    url: "https://xaltris.com/portfolio",
    siteName: "Xaltris",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Xaltris portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Xaltris Technologies",
    description:
      "A portfolio of case studies, products, and enterprise systems built with technical depth and product judgment.",
    images: ["/logo.png"],
  },
};

const caseStudies = [
  {
    category: "Operational products",
    title: "Veltrix Global Connect",
    context: "Trusted B2B recruitment marketplace",
    summary:
      "Built a governed marketplace connecting verified employers with verified recruitment agencies through structured mandates, KYB verification, candidate collaboration, task queues, and finance ledger visibility.",
    outcome:
      "Turned fragmented hiring coordination across email, spreadsheets, and informal channels into auditable workflows for trust, mandate execution, collaboration, and commercial closeout.",
    tags: ["Next.js and FastAPI", "PostgreSQL", "B2B marketplace"],
    pdfHref: "/case-studies/veltrix-case-study.pdf",
    websiteHref: "https://www.veltrixconnect.com/",
  },
  {
    category: "Startup / AI work",
    title: "SarasAI Cloud Labs",
    context: "AI-assisted governed multi-cloud lab generation platform",
    summary:
      "Built a governed, agentic AI platform that turns natural-language learning objectives into reviewable lab specifications, learner instructions, grading rubrics, and infrastructure provisioning artifacts.",
    outcome:
      "Replaced ad-hoc lab authoring with an auditable LMS-integrated workflow grounded in approved AWS, Azure, and GCP service catalogues, with human review, lifecycle tracking, and controlled provisioning.",
    tags: ["React, Vite, and Tailwind", "FastAPI", "Gemini", "ChromaDB", "PostgreSQL"],
    pdfHref: "/case-studies/sarasai-case-study.pdf",
    websiteHref: "https://cloud-lab-frontend-240554129702.us-central1.run.app/",
  },
  {
    category: "Startup / AI work",
    title: "Better Corporate Life",
    context: "Domain-specific AI assistant for career progression",
    summary:
      "Built a structured professional development platform that combines course video, guided exercises, AI-assisted reflection, accountability partners, and coach support for promotion readiness and leadership growth.",
    outcome:
      "Moved career coaching beyond isolated generic LLM conversations by grounding AI interactions in curated domain content, retrieved user context, course progress, and longitudinal analytics.",
    tags: ["React and FastAPI", "PostgreSQL and pgvector", "OpenAI", "RAG"],
    pdfHref: "/case-studies/stocai-case-study.pdf",
    websiteHref: "https://www.bettercorporatelife.com/",
  },
  {
    category: "Operational products",
    title: "Ferox Tech Services",
    context: "Visibility, workflow control, and AI-assisted quality",
    summary:
      "Built and validated Momentum for real-time performance visibility, Flow for workflow and operations management, Lexel for AI-assisted e-commerce content QA, and LiveContext for call-center agent assistance.",
    outcome:
      "Moved fragmented operational tracking toward live visibility, stronger workflow discipline, reduced manual coordination, and controlled AI experimentation.",
    tags: ["React and .NET", "Azure SQL", "Workflow and AI POCs"],
    pdfHref: "/case-studies/ferox-case-study.pdf",
    websiteHref: "https://www.ferox-ts.com/",
  },
  {
    category: "Startup / AI work",
    title: "Neurocient Labs",
    context: "Behavioural intelligence platform for sustainable habit change",
    summary:
      "Built a lightweight behavior-change platform that helps users make sense of identity-based tiny actions, daily check-ins, micro-challenges, notes, and friction moments over time.",
    outcome:
      "Turned everyday behavioural signals into calm weekly reflections that surface patterns, acknowledge effort, reduce self-judgment, and suggest realistic adjustments for steady progress.",
    tags: ["React and FastAPI", "PostgreSQL", "OpenAI", "Behavioural design"],
    pdfHref: "/case-studies/neurocient-case-study.pdf",
    websiteHref: "https://neurocient.com/",
  },
];

const corporateSystems = [
  "Workflow management systems",
  "Operational intelligence platforms",
  "Quality and audit systems",
  "Performance visibility systems",
  "Enterprise utilities",
  "BPM and SOA platforms",
];

function PdfAction({ href }: { href: string }) {
  return (
    <Link
      href={href}
      download
      className="inline-flex items-center gap-2 rounded-md border border-[#a53f43] bg-[#a53f43] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8f3438]"
    >
      <Download className="h-4 w-4" strokeWidth={1.8} />
      Know more
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#162f2a]">
      <section className="relative overflow-hidden bg-[#3f6759] px-6 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="hero-grid" /></div>
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">Selected work</p>
            <h1 className="hero-primary-title mt-6 max-w-4xl text-white">Proof in working systems.</h1>
          </div>
          <div className="border-t border-white/18 pt-6 lg:mb-2">
            <p className="type-lead max-w-xl text-white">
              Startup products and enterprise platforms built around real workflows, showing the same pattern throughout: senior judgment translated into working software.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
            <section id="startup-ai-work" className="scroll-mt-28">
              <div className="mb-8 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
                <div>
                  <p className="type-kicker text-[#a53f43]">
                    Current Xaltris work
                  </p>
                  <h2 className="type-section-title mt-4 text-[#162f2a]">
                    Startup and AI case studies.
                  </h2>
                </div>
                <p className="type-body-lg max-w-2xl text-[#53675f] lg:justify-self-end">
                  Fractional CTO thinking, hands-on execution, and focused AI
                  productization for early-stage teams.
                </p>
              </div>

              <PortfolioCarousel items={caseStudies} />
            </section>
        </div>
      </section>

      <section id="featured-foundation" className="scroll-mt-28 bg-[#315348] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
              <article className="rounded-lg border border-[#d7ddd6] bg-white p-6 text-[#162f2a] shadow-[0_18px_45px_-36px_rgba(22,47,42,0.55)] sm:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="type-kicker text-[#a53f43]">
                      Enterprise experience
                    </p>
                    <h2
                      className="type-section-title mt-4 max-w-3xl text-[#162f2a]"
                    >
                      Two decades building operational systems at scale.
                    </h2>
                    <p className="type-body mt-4 font-semibold text-[#53675f]">
                      Cordys, iNautix / BNY Mellon, Capita
                    </p>
                  </div>
                  <PdfAction href="/case-studies/corporate-longitudinal-case-study.pdf" />
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.82fr]">
                  <p className="type-lead text-[#334c45]">
                    A long-running body of enterprise work: workflow systems,
                    operational intelligence platforms, quality and audit tools,
                    performance systems, and internal utilities used at
                    organizational scale.
                  </p>
                  <p className="type-body-lg border-l border-[#d7ddd6] pl-5 text-[#53675f]">
                    Replaced fragile Excel-driven workflows, improved visibility
                    and auditability, supported thousands of users, and created
                    sustained gains in cycle time, capacity, and managerial
                    confidence.
                  </p>
                </div>

                <div id="corporate-systems" className="mt-8 grid gap-4 sm:grid-cols-2">
                  {corporateSystems.map((system) => (
                    <div key={system} className="flex items-start gap-3 border-t border-[#d7ddd6] pt-4">
                      <Building2
                        className="mt-1 h-5 w-5 shrink-0 text-[#cc595a]"
                        strokeWidth={1.8}
                      />
                      <p className="type-body font-semibold text-[#162f2a]">
                        {system}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
        </div>
      </section>

      <SiteCta
        eyebrow="Your product could be next"
        title="Bring me the workflow that needs to become software."
        copy="The first conversation is about the business problem, the stage you are at, and what a useful next step would look like."
      />
    </main>
  );
}
