import JsonLd from './JsonLd'

const faqs = [
  {
    question: "How can one person cover both product and technology?",
    answer: [
      "I do not try to imitate a large team. I reduce the distance between understanding the problem, making the technical decisions, and moving the work forward.",
      "Experience provides patterns, trade-offs, and production judgment. Modern tooling accelerates research, implementation, testing, and documentation, but the decisions remain mine.",
      "For Product Build, I personally carry the work across the product and engineering lifecycle. As a Fractional CTO, I apply the same connected judgment around the development team already doing the implementation.",
    ],
  },
  {
    question: "What is the difference between Product Build and Fractional CTO?",
    answer: [
      "Product Build is for a new product that needs both senior judgment and hands-on implementation. I shape the first useful release, make the technical choices, build it, launch it, and strengthen it for real use.",
      "Fractional CTO is for a product and engineering team that already exist. I work alongside the founder and engineers to own technical direction, connect priorities to delivery, improve engineering capability, and strengthen production health.",
      "The standard of ownership is the same. The difference is whether I am building the software directly or leading around the team already building it.",
    ],
  },
  {
    question: "Why not hire a full-time CTO or build a larger team?",
    answer: [
      "Sometimes that is exactly the right move. The question is whether the business is ready to use that capacity well and whether the role is clear enough to hire for deliberately.",
      "Earlier on, senior fractional leadership can provide the decisions, structure, and mentoring the team needs without forcing a permanent organization design too soon. For a new product, one experienced builder can also keep the learning loop tight before more roles become necessary.",
      "The goal is not to avoid building a team. It is to add people when the work genuinely needs them and make each addition with a clearer understanding of the capability required.",
    ],
  },
  {
    question: "Would an agency be a better fit?",
    answer: [
      "An agency can be a good fit when the scope is already clear, parallel capacity is the main need, or the work requires several specialist roles at once.",
      "Xaltris is different: you work directly with the person making the product and technical decisions. That continuity matters when the problem is still evolving and business intent can easily be diluted through handoffs.",
      "If the work needs a staffed delivery organization, I will say so. If it needs one senior owner close to the decisions and delivery, this model is likely to fit better.",
    ],
  },
  {
    question: "Do you only work on MVPs?",
    answer: [
      "No. The useful distinction is not MVP versus production-grade; it is what the product needs to do reliably at its current stage.",
      "I build and lead with production in mind: failure behaviour, maintainability, observability, security, and a clean path for future change. The amount of infrastructure and process should be appropriate for the real risks, not an imagined future scale.",
      "Vibe to Viable is the specialist path for an AI-built MVP that already works but needs targeted engineering hardening before wider use.",
    ],
  },
  {
    question: "Will I retain control of the product?",
    answer: [
      "Yes. The codebase, repositories, cloud accounts, data, and architecture decisions belong to you. Nothing important should depend on an account or process that only I control.",
      "Practical control also means understanding what you own. Decisions and trade-offs stay visible, standard technology is preferred, and the system should remain understandable to the team that inherits or extends it.",
      "The goal is a product and organization that become stronger, not a relationship built on avoidable dependency.",
    ],
  },
  {
    question: "I already have a product. Can you work with it?",
    answer: [
      "Yes, when the need fits one of the two services designed for an existing product.",
      "Fractional CTO is the route when you already have engineers and need senior ownership of technical direction, delivery, engineering capability, and production health. Vibe to Viable is a focused intervention when an AI-built MVP needs targeted hardening and remediation.",
      "What I do not offer is open-ended outsourced maintenance, a generic feature-development queue, or taking over an inherited codebase as its sole long-term engineer. If that is the need, a staffed engineering partner will be a better fit.",
    ],
  },
]

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
        <div className="mb-14 max-w-3xl">
          <p className="type-kicker text-[#53675f]">Frequently asked questions</p>
          <h2 className="type-section-title mt-4">What founders usually want to understand first.</h2>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group rounded-lg border border-[#d7ddd6] bg-white px-6 py-5 transition-colors open:border-[#cc595a]/40">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a53f43] focus-visible:ring-offset-4">
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#3f6759] text-sm font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-xl font-normal leading-7 text-[#183a34]">{faq.question}</span>
                </span>
                <span className="mt-1 text-2xl font-light leading-none text-[#cc595a] transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>

              <div className="space-y-4 pl-12 pr-2 pt-5 text-base leading-7 text-[#53675f] sm:pr-8">
                {faq.answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
