import Link from "next/link";

export const metadata = {
  title: "Solutions | Xaltris Technologies",
  description:
    "Whether you need strategic guidance, custom tools, or AI-driven workflows — Xaltris helps you solve the right problems, faster.",
  openGraph: {
    title: "Solutions | Xaltris Technologies",
    description:
      "Explore how Xaltris delivers strategic tech leadership, custom builds, and practical AI solutions — built with care, not fluff.",
    url: "https://xaltris.com/solutions",
    siteName: "Xaltris",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Solutions by Xaltris",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions by Xaltris",
    description:
      "Fractional CTO. Internal platforms. Quietly effective AI. Xaltris builds what your business really needs.",
    images: ["/logo.png"],
  },
};

export default function SolutionsPage() {
  return (
    <section className="min-h-screen w-full bg-[#638475] text-white font-montserrat px-6 py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-extrabold mb-6 text-[var(--heading)]">
          Solutions
        </h1>
        <p className=" mb-12 leading-relaxed max-w-3xl">
          Not every challenge needs a product. Some need judgment, speed, and
          someone who’s been there before. These are the kinds of problems we
          help solve at Xaltris.
        </p>

        {/* Fractional CTO */}
        <div className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold text-[#cc595a] mb-2">
            Fractional CTO
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Strategic tech leadership without the full-time overhead. I help
            you architect smartly, ship faster, and avoid overengineering. Ideal
            for scaling startups or solo founders who need experienced technical
            judgment.
          </p>
          <Link
            href="/blog/fractional-cto"
            className="text-sm text-[#cc595a] hover:underline font-semibold"
          >
            Read more →
          </Link>
        </div>

        {/* Custom Builds (Merged with AI-Powered Solutions) */}
        <div className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold text-[#cc595a] mb-2">
            Custom-Built Solutions
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Need something that doesn’t exist yet? I design and deliver
            internal platforms, microtools, workflow fixes, and quietly
            effective AI-powered automations — all built from scratch. Clean.
            Scoped. Shippable.
          </p>

          <p className="text-gray-700 leading-relaxed mb-3">
            I use AI only where it solves a real operational problem — not to
            experiment, not to add complexity, and never as a gimmick. Just
            pragmatic, efficient, low-drama AI woven into custom solutions when
            it actually matters.
          </p>

          {/* Portfolio Link */}
          <Link
            href="/portfolio"
            className="text-sm text-[#cc595a] hover:underline font-semibold"
          >
            See Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}



