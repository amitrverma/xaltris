import JsonLd from './JsonLd'

const faqs = [
  {
    question: "How can one person realistically handle everything?",
    answer: [
      "The honest answer: I'm not doing it the way you're imagining. This isn't one person doing the work of many. It's working at a different level of leverage.",
      "I don't start from zero. I start with two decades of software patterns, trade-offs, failure modes, and an instinct for what scales and what doesn't. Modern tooling — AI-assisted development, cloud-native infrastructure, and automation — changes the mechanics of delivery.",
      "I'm not trying to replicate a team. I remove what slows teams down. The same person understands the problem, makes the decisions, and builds the system. I hold the full thread from business problem to architecture, code, and deployment, so nothing is diluted, re-explained, or lost in transit.",
      "I define the system first, use that as the instruction layer for AI, generate a structured first pass, then review, refine, integrate, test, and iterate continuously. AI is a force multiplier, but the leverage comes from judgment: what to build, what to delay, and what actually matters.",
      "So yes, I work solo. That's exactly the point. If you want software that is eight times sooner, four times cheaper, and twice better, we should work together.",
    ],
  },
  {
    question: "Why not just build an in-house tech team?",
    answer: [
      "A couple of engineers — perhaps a junior or two — with you guiding them can sound reasonable. If technology is your business and you're deeply technical, it can work. Roll up your sleeves, build the team, stay close to the code, and own it end to end.",
      "But if technology is an enabler, the game changes. Your job is to talk to customers, find product-market fit, manage burn rate, and shape the business — not manage engineering. Build a team too early and you end up running the business and running engineering. That's the trade-off.",
      "Working with me, you don't carry that layer. Senior technical ownership and business-first thinking keep the system moving without pulling you into day-to-day engineering decisions. AI keeps execution fast; experience keeps it on track.",
    ],
  },
  {
    question: "Isn't hiring an agency the safer option?",
    answer: [
      "That depends on what you mean by safe — and for whom. Agencies charge for time; I charge for results. That isn't only a pricing difference. It changes the incentive behind every decision. Their ideal engagement is a long one. Mine is a successful one.",
      "The person in the pitch is often not the person writing your system. What you say in discovery passes through a project manager, gets interpreted by a tech lead, and lands with a developer who joined last Tuesday. Every handoff is a place where intent gets lost.",
      "I'm the person in both rooms. What I hear shapes every technical decision that follows, with no loss of intent in transit. The same context flows through the problem, architecture, code, and deployment. AI helps with execution; judgment stays focused where it matters.",
      "Agencies work when the problem is already well defined and execution is the primary need. In an early-stage product, the problem is still evolving, so continuity of thinking matters more than continuity of structure. You don't need a committee. You need someone whose success depends on yours.",
    ],
  },
  {
    question: "What if you haven't worked in our domain before?",
    answer: [
      "Every domain has nuances — language, constraints, and edge cases that insiders carry without thinking. That knowledge matters. But in early-stage products, the hardest questions are usually not domain-specific: how do you turn a vague idea into something testable, and how do you build a system that can evolve as you learn? Those are thinking problems.",
      "Domain knowledge should live with the product owner — that's you. My role is to extract it properly by asking the questions insiders often skip: what does the real workflow look like, where does the current process break, and what happens when the system fails the user?",
      "The underlying product patterns repeat across domains: authentication, workflows, access control, integrations, data flows, and edge cases. The surface changes; the core does not. Someone without the history can also challenge assumptions that have never been challenged.",
      "AI accelerates research, context, terminology, and edge-case discovery. Judgment decides what to trust, ignore, and validate with you. Domain knowledge matters, but early on what matters more is how quickly it can be understood, structured, and turned into a working system.",
    ],
  },
  {
    question: "What about UI and UX?",
    answer: [
      "A great designer will outperform me on visual and interaction design. I won't pretend otherwise. But that isn't where most products lose time.",
      "What gets designed and what goes live are rarely the same thing. Real data, users, and constraints appear, and reality always has the upper hand. Instead of treating design as a fixed handoff, I prefer a build, react, and refine loop: see the product working early, react in context, and improve it quickly.",
      "If you want a first cut — brand, visual language, and core screens — bring in a designer, knowing that it is a starting point rather than a destination. The shipped UI will be shaped more by what users do than by what the design file shows.",
      "I make iteration fast and coherent by bridging design decisions with engineering reality and pushing back early when it costs a conversation rather than a sprint. When deeper visual or interaction work is needed, you bring in the right person. UI and UX are not ignored; they are treated honestly as something that emerges through building, not something that always precedes it.",
    ],
  },
  {
    question: "Do you only build MVPs?",
    answer: [
      "No. But MVP versus production-grade is not really the question. The question is whether one person can build software that actually holds up.",
      "Production-grade means more than code that runs. It means a system that handles failure gracefully, can be observed when something goes wrong, and can be maintained, extended, and improved without taking everything apart. The bar hasn't changed; the mechanics have.",
      "AI can handle code generation, test scaffolding, and documentation. Cloud platforms absorb operational overhead, and automation covers large parts of the lifecycle. One experienced builder with modern tooling can now cover ground that once required several people.",
      "Production-grade is a mindset before it is a methodology: think about failure modes, maintainability, and scale from the first decision rather than bolting them on later. That comes from two decades of shipping systems and living with them in production.",
      "Every feature shipped is a working feature — not a placeholder or a stub. It works at its current level and becomes smarter as the product evolves. The product does not flip between broken and fixed; it stays usable while it improves. That's not MVP thinking. That's how every stage should work.",
    ],
  },
  {
    question: "What happens when the product starts to grow?",
    answer: [
      "It should. If it doesn't, we have a bigger problem. Growth reveals whether the foundation was built to last or built to be replaced.",
      "The real risk isn't starting small. It's building something that needs rewriting the moment it works — either because it was over-engineered too early or held together by shortcuts that later become walls. Both are avoidable.",
      "I build for today without trapping tomorrow: standard, proven technology; clean architecture; no clever shortcuts that create hidden debt; and structure where it matters. As the product grows, it should extend rather than require rebuilding.",
      "Growth isn't only about systems; it's about people. More product does not automatically mean more people. Hire too early and you create drag. Hire too late and you create bottlenecks. The sequence matters more than the speed.",
      "Because I don't have a team to sell you, the hiring answer stays honest: sometimes not yet; sometimes now, with a clear view of who and why. I ask those questions early because they shape decisions now.",
      "The goal is not to keep everything dependent on me. The system should scale, the codebase should remain understandable, decisions should be documented, and a team should be able to step in without friction. Growth should feel like progress, not a reset.",
    ],
  },
  {
    question: "Will I still have control over the product?",
    answer: [
      "You should. It's your product. But control isn't only ownership; it's understanding. You can own the code and still be stuck if you don't know why it works the way it does or how to change it. That's how dependency creeps in.",
      "Everything is yours, with no exceptions: the codebase, repositories, cloud accounts, and architecture decisions. Nothing sits behind my accounts, and nothing is locked behind a process or relationship.",
      "Ownership only matters when you understand it. Decisions are explained rather than merely made, trade-offs stay visible, and the system remains readable to you — not only to me. You are not dependent on me to interpret your own product.",
      "That principle shapes the build: standard, widely adopted technology; simple, readable architecture; and decisions documented as they are made. If you hire a team, bring in another partner, or pivot tomorrow, you can do it without friction.",
      "Control on paper means you own it but cannot touch it without asking. Real control means knowing what you have, why it was built that way, and what it takes to change it. Control isn't just legal. It's practical.",
    ],
  },
  {
    question: "I already have a product. Can you maintain it, add features, or take it over?",
    answer: [
      "Honest answer: no — not as a general maintenance, feature-development, or takeover engagement. My full-cycle product engineering work is for new, greenfield products built from scratch.",
      "The way I work is built around owning the full context from day one: the architecture decisions, the trade-offs, and the reasoning behind every choice. That continuity is where the value comes from. It cannot be reconstructed after the fact; it has to be there from the start.",
      "Inheriting someone else's system means inheriting their decisions, debt, and constraints. That's a different kind of engagement. There are people who do it well; I'm not one of them.",
      "If you're building something new and want someone accountable to the outcome from the first line of code, that's the conversation I'm here for. Vibe to Viable is the narrow exception: a bounded audit-and-hardening service for early AI-built prototypes, not ongoing ownership of an inherited product.",
    ],
  },
  {
    question: "Can you really deliver faster, cheaper, and better?",
    answer: [
      "It sounds aggressive, but it isn't built on longer hours or cutting corners. It comes from changing how software is built.",
      "Eight times faster: software delays come from unclear direction, role handoffs, and rework caused by late decisions. A zero-layer model removes much of that friction — the person deciding is the person building. AI compresses build time, while clarity and ownership eliminate resets.",
      "Four times cheaper: traditional cost structures scale with people and coordination — people, time, and overhead. This model reduces cost at the source through single ownership, no idle capacity, and no coordination layers. You pay for outcomes, not process.",
      "Twice better: quality is not added at the end; it is built into how the system operates. Engineering rigor starts on day one with automated tests, code-quality checks, and continuous validation. Features ship early in usable form, so real feedback arrives continuously and adjustments happen before complexity compounds.",
      "That is how eight times faster, four times cheaper, and twice better shows up in practice: not as a claim, but as a consequence of the structure.",
    ],
  },
];

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer.join(' '),
    },
  })),
}

export default function FaqSection() {
  return (
    <section className="border-t border-[#d7ddd6] bg-[#f7f2ea] px-6 py-20 text-[#183a34] sm:py-24">
      <JsonLd data={faqStructuredData} />
      <div className="mx-auto max-w-6xl">
        <div>
          <div className="mb-14 max-w-3xl">
            <p className="type-kicker text-[#53675f]">Frequently asked questions</p>
            <h2 className="type-section-title mt-4">
              What startup CEOs usually want to know first.
            </h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-[#d7ddd6] bg-white px-6 py-5 transition-colors open:border-[#cc595a]/40"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a53f43] focus-visible:ring-offset-4">
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#3f6759] text-sm font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xl font-normal leading-7 text-[#183a34]">
                      {faq.question}
                    </span>
                  </span>
                  <span
                    className="mt-1 text-2xl font-light leading-none text-[#cc595a] transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="space-y-4 pl-12 pr-2 pt-5 text-base leading-7 text-[#53675f] sm:pr-8">
                  {faq.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
