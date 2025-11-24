export const metadata = {
  title: "About | Xaltris Technologies",
  description:
    "Xaltris blends two decades of engineering experience with modern, AI-accelerated development to deliver clarity, speed, and high-quality software.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] font-montserrat px-6 py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-extrabold mb-8 text-[var(--heading)]">
          About Xaltris
        </h1>

        {/* OPENING PARAGRAPH — the one you said was missing */}
        <p className="leading-relaxed mb-6">
          Xaltris is a one-person software studio built around clarity,
          ownership, and senior engineering craft. I help teams move faster,
          avoid unnecessary complexity, and build software that lasts — with the
          speed of a startup and the discipline of an enterprise engineer.
        </p>

        {/* WHY I STARTED */}
        <h2 className="text-2xl font-bold mb-4 text-[var(--heading)]">
          Why I Started Xaltris
        </h2>

        <p className="leading-relaxed mb-6">
          I’ve always loved building. It’s the work that comes most naturally to
          me — taking an idea, shaping it into a system, and turning that system
          into something reliable and real.
        </p>

        <p className="leading-relaxed mb-6">
          Across <strong>two decades of engineering</strong>, I’ve built banking
          platforms, fintech systems, startup products, internal enterprise
          tools, and large-scale architectures. That breadth taught me what it
          takes to ship well: architecture, engineering, infrastructure, and the
          judgment to balance speed with long-term stability.
        </p>

        <p className="leading-relaxed mb-10">
          But after years inside large teams and corporate structures, I wanted
          a different way to work — <strong>more range, more focus, and fewer
          constraints</strong>. A way to combine strategy and execution without
          bureaucracy or hand-offs.  
          That’s why I built Xaltris — a practice where one experienced engineer
          designs, builds, and ships entire systems, using AI as a multiplier,
          not a dependency.
        </p>

        {/* WHAT I DO — stays on background */}
        <h2 className="text-2xl font-bold mb-6 text-[var(--heading)]">
          What I Do
        </h2>
        <p className="leading-relaxed mb-12">
          Xaltris operates in two modes — offering CTO-level clarity and
          senior-engineer execution for teams that want to ship faster and
          reduce technical risk.
        </p>

        {/* SERVICE CARD 1 — FRACTIONAL CTO */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm mb-12 transition-all duration-300 hover:shadow-md">
          <h3 className="text-2xl font-semibold text-[#cc595a] mb-4">
            Fractional CTO & Technical Leadership
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            For teams that need senior engineering judgment without the overhead of a
            full-time executive. I help you:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Design architecture and system foundations</li>
            <li>Align product direction with the right technical choices</li>
            <li>Turn ideas into clear roadmaps and realistic scopes</li>
            <li>Make trade-offs informed by 20+ years of experience</li>
            <li>Improve reliability, scalability, and performance</li>
            <li>Review engineering work, infrastructure, and processes</li>
            <li>Navigate technical risks with clarity and confidence</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300">
            You get CTO-level clarity, grounded in real-world engineering experience.
          </p>
        </div>

        {/* SERVICE CARD 2 — END-TO-END BUILDS */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm mb-12 transition-all duration-300 hover:shadow-md">
          <h3 className="text-2xl font-semibold text-[#cc595a] mb-4">
            End-to-End Builds
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            For teams that need something built cleanly, quickly, and with full
            accountability — from architecture to deployment.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Custom internal tools, platforms, and workflow systems</li>
            <li>Dashboards, micro-systems, and integrations</li>
            <li>AI-enabled workflows, agents, and automation</li>
            <li>Full-stack builds, prototypes, and MVPs</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You get architecture and implementation from a single senior engineer —
            clean, scoped, and shippable.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            This is end-to-end ownership: idea → architecture → code → deployment →
            scale, with enterprise-grade standards and pragmatic AI where it helps.
          </p>
        </div>

        {/* HOW I WORK */}
        <h2 className="text-2xl font-bold mb-6 text-[var(--heading)]">
          How I Work
        </h2>

        <p className="text-xl font-semibold text-[var(--heading)] mb-6">
          Think clearly. Build cleanly. Ship confidently.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-10">
          <li>A builder’s mindset shaped by 20+ years of experience</li>
          <li>Clear, practical technical decision-making</li>
          <li>No overengineering or hype-driven choices</li>
          <li>Enterprise discipline without enterprise overhead</li>
          <li>Software that stays maintainable long after it ships</li>
        </ul>

        {/* SIGNATURE */}
        <p className="text-right text-sm italic opacity-90">
          – Amit Verma  
          <br />
          Founder, Xaltris Technologies
        </p>
      </div>
    </section>
  );
}
