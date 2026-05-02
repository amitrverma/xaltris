import {
  Building2,
  Download,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import PortfolioCarousel from "../../components/PortfolioCarousel";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata = {
  title: "Portfolio | Xaltris Technologies",
  description:
    "Case studies, products, and corporate-era platforms built by Amit Verma and Xaltris Technologies.",
  openGraph: {
    title: "Portfolio | Xaltris Technologies",
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
    title: "Portfolio | Xaltris Technologies",
    description:
      "A portfolio of case studies, products, and enterprise systems built with technical depth and product judgment.",
    images: ["/logo.png"],
  },
};

const categories = [
  { label: "Startup / AI work", href: "#startup-ai-work" },
  { label: "Operational products", href: "#operational-products" },
  { label: "Featured foundation", href: "#featured-foundation" },
  { label: "Corporate systems", href: "#corporate-systems" },
];

const caseStudies = [
  {
    category: "Startup / AI work",
    title: "SarasAI",
    context: "AI product and platform work",
    summary:
      "A supplied case study for SarasAI. The PDF is available for download; the on-page summary can be deepened once a text-extractable version is available.",
    outcome: "AI-first product work with a practical delivery lens.",
    tags: ["AI product", "Platform thinking", "PDF available"],
    pdfHref: "/case-studies/sarasai-case-study.pdf",
  },
  {
    category: "Startup / AI work",
    title: "Neurocient",
    context: "AI and product engineering",
    summary:
      "A supplied case study for Neurocient. The PDF is available for download; the page can be enriched further when OCR or text extraction is available.",
    outcome: "Applied AI, product judgment, and engineering execution.",
    tags: ["AI product", "Product engineering", "PDF available"],
    pdfHref: "/case-studies/neurocient-case-study.pdf",
  },
  {
    category: "Startup / AI work",
    title: "StocAI",
    context: "Fractional CTO for an AI-driven startup",
    summary:
      "Technical strategy, product architecture, and team scaling for an AI-first startup moving from early product direction to structured delivery.",
    outcome:
      "Senior technical direction where product clarity, architecture, and execution model matter most.",
    tags: ["Fractional CTO", "AI strategy", "Team scaling"],
    pdfHref: "/case-studies/stocai-case-study.pdf",
  },
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
      className="inline-flex items-center gap-2 rounded-2xl border border-[#e08a8b] bg-[#cc595a] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
    >
      <Download className="h-4 w-4" strokeWidth={1.8} />
      Know more
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#638475] px-6 py-24 text-white font-montserrat transition-colors duration-300 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7d281]">
              Portfolio
            </p>
            <h1
              className={`${playfairDisplay.className} mt-5 max-w-4xl text-[4.25rem] font-extrabold leading-[0.92] tracking-[-0.035em] text-white sm:text-[5.2rem] md:text-[6.4rem] lg:text-[7rem]`}
            >
              Proof of work.
              <span className="block text-[#f8f4ee]">Curated by signal.</span>
            </h1>
          </div>

          <div className="border-t border-white/12 pt-6 lg:mb-3">
            <p className="max-w-xl text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
              A portfolio of AI products, operational platforms, and corporate-era
              systems. The goal is not to show every project. It is to show the
              pattern: senior judgment translated into working software.
            </p>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-[#f8f4ee] sm:text-lg">
              Powered by <span className="text-[#e7d281]">AI.</span> Shaped by{" "}
              <span className="text-[#e7d281]">OI.</span>
            </p>
          </div>
        </section>

        <section className="grid gap-12 py-14 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7d281]">
              Browse by signal
            </p>
            <div className="mt-6 space-y-3">
              {categories.map((category, index) => (
                <a
                  key={category.label}
                  href={category.href}
                  className="group flex items-center justify-between border-t border-white/10 py-3 text-left text-base font-semibold text-white/78 transition-colors hover:text-white"
                >
                  <span>{category.label}</span>
                  <span className="text-sm text-[#e7d281]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </div>
          </aside>

          <div>
            <section id="startup-ai-work" className="scroll-mt-28">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7d281]">
                    Xaltris era
                  </p>
                  <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#f8f4ee] sm:text-4xl">
                    Current case studies, two at a time.
                  </h2>
                </div>
                <p className="max-w-sm text-base leading-7 text-white/66">
                  Fractional CTO thinking, solo-builder execution, and focused AI
                  productization.
                </p>
              </div>

              <PortfolioCarousel items={caseStudies} />
            </section>

            <section id="featured-foundation" className="scroll-mt-28 pt-12">
              <article className="rounded-lg border border-white/12 bg-white/8 p-6 backdrop-blur sm:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7d281]">
                      Corporate foundation
                    </p>
                    <h2
                      className={`${playfairDisplay.className} mt-4 max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.03em] text-[#f8f4ee] sm:text-5xl lg:text-[3.8rem]`}
                    >
                      Two decades of operational systems that scaled.
                    </h2>
                    <p className="mt-4 text-base font-semibold text-white/66">
                      Cordys, iNautix / BNY Mellon, Capita
                    </p>
                  </div>
                  <PdfAction href="/case-studies/corporate-longitudinal-case-study.pdf" />
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.82fr]">
                  <p className="text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
                    A long-running body of enterprise work: workflow systems,
                    operational intelligence platforms, quality and audit tools,
                    performance systems, and internal utilities used at
                    organizational scale.
                  </p>
                  <p className="border-l border-white/16 pl-5 text-base leading-7 text-white/66 sm:text-lg sm:leading-8">
                    Replaced fragile Excel-driven workflows, improved visibility
                    and auditability, supported thousands of users, and created
                    sustained gains in cycle time, capacity, and managerial
                    confidence.
                  </p>
                </div>

                <div id="corporate-systems" className="mt-8 grid gap-4 sm:grid-cols-2">
                  {corporateSystems.map((system) => (
                    <div key={system} className="flex items-start gap-3 border-t border-white/10 pt-4">
                      <Building2
                        className="mt-1 h-5 w-5 shrink-0 text-[#e7d281]"
                        strokeWidth={1.8}
                      />
                      <p className="text-base font-semibold leading-7 text-[#f8f4ee]">
                        {system}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
