"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const faqs = [
  {
    question: "How can one person realistically handle everything?",
    answer: [
      "The honest answer is: not the way you're imagining.",
      "This isn't one person doing the work of many. It's one experienced engineer working with a different level of leverage. After two decades of building software, I'm not starting from zero. I bring pattern recognition, technical judgment, and modern tools, including AI, automation, and cloud-native workflows.",
      "The advantage is not doing more alone. It's removing friction. In larger teams, context often gets diluted through handoffs, meetings, and layers. When one person holds the full thread, from business problem to architecture to code to deployment, decisions move faster and intent stays intact.",
      'AI helps accelerate execution, but judgment still drives direction. The value comes from knowing what to build now, where the risks are, and what "good enough" means in production.',
      "In practice, that means clear scoping, fast iteration, early deployment, and continuous validation. Fewer coordination layers. Tighter feedback loops. One clear path from idea to working software.",
      "So yes, I work solo, but not in isolation, and never without discipline. This works best when you want a senior technical partner who can think and build end to end.",
    ],
    carouselImages: [
      "/xaltris-faq-linkedin/1.webp",
      "/xaltris-faq-linkedin/2.webp",
      "/xaltris-faq-linkedin/3.webp",
      "/xaltris-faq-linkedin/4.webp",
      "/xaltris-faq-linkedin/5.webp",
      "/xaltris-faq-linkedin/6.webp",
      "/xaltris-faq-linkedin/7.webp",
      "/xaltris-faq-linkedin/8.webp",
      "/xaltris-faq-linkedin/9.webp",
    ],
  },
  {
    question: "Why not just build an in-house tech team?",
    answer: [
      'On paper, building internally sounds like the most stable option. In practice, early on, it often creates overhead before it creates leverage.',
      "Hiring a strong team takes time, money, management attention, and enough product clarity to point that team in the right direction. If the roadmap is still shifting, adding headcount can amplify ambiguity rather than resolve it.",
      "The deeper issue is that speed in software is rarely a headcount problem. It is a clarity problem. Slowdown usually starts upstream: shifting requirements, deferred decisions, and architecture that keeps getting revisited. When the thinking is fuzzy, you do not get slow output. You get fast chaos.",
      "That is where a different model helps. A fractional CTO does not just add execution capacity. The role is to remove the bottleneck at the top by asking the right questions early: what are we actually trying to achieve, what matters now versus later, and what can be simplified or deferred? Once that ambiguity is reduced, execution moves much faster.",
      "AI has changed this further. A lot of execution can now be accelerated, so adding more people does not automatically increase speed the way it once did. What matters more is how quickly an idea becomes something real: built, seen, tested, and improved.",
      "With fewer layers, that loop stays tight. Work does not sit in queues or get diluted through interpretation. It moves.",
    ],
    carouselImages: [
      "/xaltris-faq-2-linkedin/1.webp",
      "/xaltris-faq-2-linkedin/2.webp",
      "/xaltris-faq-2-linkedin/3.webp",
      "/xaltris-faq-2-linkedin/4.webp",
      "/xaltris-faq-2-linkedin/5.webp",
      "/xaltris-faq-2-linkedin/6.webp",
      "/xaltris-faq-2-linkedin/7.webp",
      "/xaltris-faq-2-linkedin/8.webp",
      "/xaltris-faq-2-linkedin/9.webp",
    ],
  },
  {
    question: "Isn't hiring an agency the safer option?",
    answer: [
      "Safer for whom?",
      "Agencies often optimize for continuity of billing, not continuity of product thinking. They bring structure, roles, and process, which can look like reduced risk. But in many software projects, the real risk does not come from too few people. It comes from gaps between people: more layers, more handoffs, and more distance between what is said, what is understood, and what actually gets built.",
      'There is another issue hidden inside the word "safer." In practice, agencies often distribute risk rather than reduce it. The person in the pitch is rarely the person shaping the system day to day. I prefer a different model: the same person hears the problem, makes the decisions, designs the architecture, writes the code, and sees it through to deployment. That continuity matters.',
      'AI has also changed the equation. A lot of execution can now be accelerated. So the key question is no longer "How many people are building this?" It is "How clearly is this being thought through?"',
      "That's why I work with less friction. The same context flows from problem understanding to decisions to architecture to code to deployment. AI speeds up execution. Judgment keeps the system coherent. Feedback loops stay tighter, and the product evolves without losing its shape.",
      "This doesn't mean agencies do not work. They do, especially when the problem is already well-defined and execution is the main need. But when the product is still taking shape, continuity often matters more than structure.",
    ],
    carouselImages: [
      "/xaltris-faq-3-linkedin/1.webp",
      "/xaltris-faq-3-linkedin/2.webp",
      "/xaltris-faq-3-linkedin/3.webp",
      "/xaltris-faq-3-linkedin/4.webp",
      "/xaltris-faq-3-linkedin/5.webp",
      "/xaltris-faq-3-linkedin/6.webp",
      "/xaltris-faq-3-linkedin/7.webp",
      "/xaltris-faq-3-linkedin/8.webp",
      "/xaltris-faq-3-linkedin/9.webp",
    ],
  },
  {
    question: "What if you haven't worked in our domain before?",
    answer: [
      "Fair point. Every domain has its own language, constraints, and edge cases, and those nuances matter.",
      "But early-stage product problems are often less domain-specific than people think. The hard part is usually understanding what users actually need, separating signal from noise, turning vague ideas into something usable, and building systems that can evolve as you learn. Those are not domain problems first. They are thinking problems.",
      "Domain knowledge should live with the product owner, not the engineering layer. My role is not to replace that knowledge. It is to extract it properly, ask the right questions, and translate it into something buildable.",
      "And across industries, the underlying patterns repeat more than the surface suggests: workflows, permissions, integrations, data flow, failure points. The context changes. The core mechanics often do not.",
      'There is also an advantage to not being too deep in the domain. You are less attached to "how it has always been done," which sometimes makes it easier to spot simpler or better solutions.',
      "AI helps accelerate the learning curve through research and context gathering, but judgment still matters when deciding what to trust, what to ignore, and what to validate.",
      "So yes, domain knowledge matters. But early on, what matters more is how quickly it can be understood, structured, and translated into a working system.",
    ],
    carouselImages: [
      "/xaltris-faq-4-linkedin/1.webp",
      "/xaltris-faq-4-linkedin/2.webp",
      "/xaltris-faq-4-linkedin/3.webp",
      "/xaltris-faq-4-linkedin/4.webp",
      "/xaltris-faq-4-linkedin/5.webp",
      "/xaltris-faq-4-linkedin/6.webp",
      "/xaltris-faq-4-linkedin/7.webp",
      "/xaltris-faq-4-linkedin/8.webp",
      "/xaltris-faq-4-linkedin/9.webp",
    ],
  },
  {
    question: "What about UI and UX?",
    answer: [
      "It's a valid concern. Good products are not just functional. They need to feel intuitive, usable, and well thought through. A great designer will outperform me on pure visual and interaction design, and I won't pretend otherwise.",
      "What I bring is the ability to bridge the gap where many products struggle most: between design and engineering. I can brief a designer clearly, evaluate design decisions against technical reality, and make sure what gets designed can actually be built cleanly. That gap is where time, money, and intent often get lost.",
      "In practice, UI/UX rarely works as a neat sequence of design, handoff, and build. What looks good in a design file often needs to change once it meets real data, real constraints, and real user behavior. Good UX usually comes through iteration, not a one-time pass.",
      "That is why I prefer a tighter loop: idea, screen, feedback, refinement. You see the product working early, react in context, and improve it while it is still easy to shape. The product evolves with reality, not just in mockups.",
      "And when a product needs deeper design work, whether branding, visual identity, or more advanced UX, I bring in focused design expertise deliberately. Not as a default layer, but where it genuinely matters.",
      "So UI/UX is not ignored. It is handled through clarity upfront, iteration in context, and the right expertise when the product calls for it.",
      "In real products, clarity rarely comes from perfect screens alone. It emerges through use.",
    ],
    carouselImages: [
      "/xaltris-faq-5-linkedin/1.webp",
      "/xaltris-faq-5-linkedin/2.webp",
      "/xaltris-faq-5-linkedin/3.webp",
      "/xaltris-faq-5-linkedin/4.webp",
      "/xaltris-faq-5-linkedin/5.webp",
      "/xaltris-faq-5-linkedin/6.webp",
      "/xaltris-faq-5-linkedin/7.webp",
      "/xaltris-faq-5-linkedin/8.webp",
      "/xaltris-faq-5-linkedin/9.webp",
    ],
  },
  {
    question: "Do you only build MVPs?",
    answer: [
      "It's a fair question, because production-grade software is not just code. It includes testing, deployment, observability, handling failures gracefully, and maintaining the system after it goes live. Traditionally, that kind of work required multiple functions and larger teams.",
      "What has changed is not the standard. The bar is still high. What has changed is how much of the mechanics can now be accelerated. AI can help with code generation, test scaffolding, debugging, and documentation. Cloud platforms, managed services, and automation also reduce a lot of the old operational overhead.",
      "But production-grade software still does not happen by accident. It starts with how the system is thought through from the beginning. Production-grade is a mindset before it is a methodology. It means designing for failure modes, observability, and scale from the first decision, not bolting them on later.",
      "That kind of thinking does not come from team size. It comes from experience. It comes from having built systems, shipped them, and lived with them in production long enough to know what breaks, what matters, and what should be simplified before it becomes a problem.",
      "There is also an advantage in continuity. When one person holds the full context from architecture to code to deployment, the production mindset stays consistent across the system. It does not get diluted through layers or lost in handoffs.",
      "So the answer is not that one person can magically do everything. It is that one experienced builder, using modern tooling and disciplined practices, can absolutely create systems that are robust, maintainable, and ready for real-world use.",
      "Production-grade is not about team size. It is about how seriously the system is designed, built, and run.",
    ],
    carouselImages: [
      "/xaltris-faq-6-linkedin/1.webp",
      "/xaltris-faq-6-linkedin/2.webp",
      "/xaltris-faq-6-linkedin/3.webp",
      "/xaltris-faq-6-linkedin/4.webp",
      "/xaltris-faq-6-linkedin/5.webp",
      "/xaltris-faq-6-linkedin/6.webp",
      "/xaltris-faq-6-linkedin/7.webp",
      "/xaltris-faq-6-linkedin/8.webp",
      "/xaltris-faq-6-linkedin/9.webp",
    ],
  },
  {
    question: "What happens when the product starts to grow?",
    answer: [
      "It should. If it doesn't, we have a bigger problem.",
      "Early-stage products are not built to be perfect. They are built to learn, adapt, and find what works. But that does not mean they should be fragile. The real risk is not starting small. It is building something that needs to be rewritten the moment it starts working.",
      "My approach is simple: build for today, but do not trap tomorrow. That means using standard, proven stacks, keeping the architecture clean, avoiding clever shortcuts that create hidden debt, and adding structure where it matters. When the product grows, it should not need to be rebuilt. It should need to be extended.",
      "Growth is not just about systems. It is also about people. I am not a permanent substitute for a team. Part of my role is helping you understand when more capacity is actually needed, what the first important hires should be, and how to avoid creating drag too early or bottlenecks too late.",
      'Because I do not have a team to sell you, the answer to "when do we need more people?" can stay honest. Sometimes the answer is not yet. Sometimes it is now, and here is exactly who.',
      "The goal is not to keep everything dependent on me. The goal is to make sure that when the product grows, the system scales, the codebase is understandable, decisions are documented, and a team can step in without friction.",
      "Growth should feel like progress, not a reset.",
    ],
    carouselImages: [
      "/xaltris-faq-7-linkedin/1.webp",
      "/xaltris-faq-7-linkedin/2.webp",
      "/xaltris-faq-7-linkedin/3.webp",
      "/xaltris-faq-7-linkedin/4.webp",
      "/xaltris-faq-7-linkedin/5.webp",
      "/xaltris-faq-7-linkedin/6.webp",
      "/xaltris-faq-7-linkedin/7.webp",
      "/xaltris-faq-7-linkedin/8.webp",
      "/xaltris-faq-7-linkedin/9.webp",
    ],
  },
  {
    question: "Will I still have control over the product?",
    answer: [
      "You should. It's your product. Any setup that reduces your control over your own system is a risk, regardless of who is building it.",
      "The hidden issue in many engagements is not lack of control on paper. It is lack of visibility in practice. Over time, that turns into dependency.",
      "My approach is the opposite: more control, not less, and more informed control. You own the codebase, the repositories, the cloud accounts, and the architecture decisions. Nothing sits behind my accounts, and nothing is locked behind process.",
      "Just as importantly, you understand what you own. I work in a way that keeps you in the loop, makes key decisions visible, and keeps the system transparent. You are not dependent on me to interpret your own product.",
      "That also shapes how the system is built: standard technologies, simple architecture, clear documentation, and no cleverness that only one person understands. If you later hire a team, bring in another partner, or take the product in a new direction, you should be able to do that without friction.",
      "The goal is not to make myself indispensable. A good engagement should leave the product cleaner, more understandable, and easier for others to step into.",
      "So yes, you retain control. Not just legally. Practically.",
    ],
    carouselImages: [
      "/xaltris-faq-8-linkedin/1.webp",
      "/xaltris-faq-8-linkedin/2.webp",
      "/xaltris-faq-8-linkedin/3.webp",
      "/xaltris-faq-8-linkedin/4.webp",
      "/xaltris-faq-8-linkedin/5.webp",
      "/xaltris-faq-8-linkedin/6.webp",
      "/xaltris-faq-8-linkedin/7.webp",
      "/xaltris-faq-8-linkedin/8.webp",
    ],
  },
  {
    question: "I already have a product. Can you maintain it, add features, or take it over?",
    answer: [
      "Yes, assuming the existing product is in a shape that can be understood and improved responsibly.",
      "A lot of work is not greenfield. Sometimes the job is to take over an existing codebase, stabilize it, fix what is fragile, add features, and create enough clarity that future development stops feeling risky.",
      "The first step is not writing code. It is understanding what is there: architecture, deployment, dependencies, data model, operational risks, and where the real bottlenecks are. Some systems need steady feature work. Others need cleanup before more work is safe.",
      "I am comfortable stepping into that kind of situation. The goal is not to pretend the existing system is perfect, and not to recommend a rewrite by reflex. It is to figure out what should be preserved, what should be simplified, and what should be changed in the least disruptive way.",
      "That usually means a phased approach: assess, stabilize, document, improve, then extend. You keep momentum without compounding hidden debt.",
      "So yes, I can take over an existing product, maintain it, and continue building. The important part is doing it with enough technical judgment that the system becomes easier to work with over time, not harder.",
    ],
    carouselImages: [
      "/xaltris-faq-9-linkedin/1.webp",
      "/xaltris-faq-9-linkedin/2.webp",
      "/xaltris-faq-9-linkedin/3.webp",
      "/xaltris-faq-9-linkedin/4.webp",
      "/xaltris-faq-9-linkedin/5.webp",
      "/xaltris-faq-9-linkedin/6.webp",
    ],
  },
  {
    question: "Can you really deliver faster, cheaper, and better?",
    answer: [
      "Only if the comparison is honest.",
      "A senior operator using modern tooling can often move dramatically faster because less time is lost to coordination, handoffs, project management overhead, and rework caused by diluted context. AI and automation increase that leverage further, especially for implementation, testing, debugging, and operational setup.",
      "Cheaper does not mean low-effort. It means you are paying for concentrated judgment and execution instead of carrying the cost structure of a larger team before the product actually needs one.",
      "Better is the part that matters most. Faster and cheaper are useless if the product is incoherent, brittle, or pointed at the wrong problem. The upside of this model is not just output volume. It is tighter thinking, tighter feedback loops, and fewer chances for intent to get lost between people.",
      "That said, this is not magic and it is not universally true. Some problems do require larger teams, deeper specialization, or a longer runway. The model works best when clarity, speed of iteration, and continuity of ownership matter more than organizational scale.",
      "So the claim is not that every project will literally be 8X sooner, 4X cheaper, and 2X better. It is that, in the right context, you can get materially more leverage with less drag.",
    ],
    carouselImages: [
      "/xaltris-faq-10-linkedin/1.webp",
      "/xaltris-faq-10-linkedin/2.webp",
      "/xaltris-faq-10-linkedin/3.webp",
      "/xaltris-faq-10-linkedin/4.webp",
      "/xaltris-faq-10-linkedin/5.webp",
      "/xaltris-faq-10-linkedin/6.webp",
      "/xaltris-faq-10-linkedin/7.webp",
      "/xaltris-faq-10-linkedin/8.webp",
      "/xaltris-faq-10-linkedin/9.webp",
      "/xaltris-faq-10-linkedin/10.webp",
      "/xaltris-faq-10-linkedin/11.webp",
    ],
  },
];

type FaqItem = (typeof faqs)[number];

function FaqLinkedInModal({
  faq,
  index,
  onOpen,
}: {
  faq: FaqItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex w-full cursor-pointer items-start justify-between gap-6 rounded-[1.75rem] border border-[#cbd4cb] bg-[#f7f3ec]/92 px-6 py-5 text-left transition-colors hover:border-[#cc595a]/35 hover:bg-[#fbf7f0]"
      aria-haspopup="dialog"
    >
      <div className="flex items-start gap-4">
        <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#638475] text-sm font-bold text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="text-lg font-normal leading-7 text-[#203530] sm:text-xl">
            {faq.question}
          </h3>
        </div>
      </div>

      <span className="mt-1 text-2xl font-light leading-none text-[#cc595a] transition-transform duration-200 group-hover:scale-110">
        +
      </span>
    </button>
  );
}

export default function FaqSection() {
  const [activeLinkedInFaq, setActiveLinkedInFaq] = useState<FaqItem | null>(
    null,
  );
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (!activeLinkedInFaq) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveLinkedInFaq(null);
      }

      if (!activeLinkedInFaq.carouselImages?.length) {
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveSlideIndex((currentIndex) =>
          currentIndex === activeLinkedInFaq.carouselImages!.length - 1
            ? 0
            : currentIndex + 1,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveSlideIndex((currentIndex) =>
          currentIndex === 0
            ? activeLinkedInFaq.carouselImages!.length - 1
            : currentIndex - 1,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeLinkedInFaq]);

  const closeModal = () => {
    setActiveLinkedInFaq(null);
    setActiveSlideIndex(0);
  };

  const openModal = (faq: FaqItem) => {
    setActiveLinkedInFaq(faq);
    setActiveSlideIndex(0);
  };

  const goToPreviousSlide = () => {
    if (!activeLinkedInFaq?.carouselImages?.length) {
      return;
    }

    setActiveSlideIndex((currentIndex) =>
      currentIndex === 0
        ? activeLinkedInFaq.carouselImages!.length - 1
        : currentIndex - 1,
    );
  };

  const goToNextSlide = () => {
    if (!activeLinkedInFaq?.carouselImages?.length) {
      return;
    }

    setActiveSlideIndex((currentIndex) =>
      currentIndex === activeLinkedInFaq.carouselImages!.length - 1
        ? 0
        : currentIndex + 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#728d7f_0%,#d7ddd6_16%,#f2eee6_30%,#f4efe7_100%)] px-6 py-24 text-[#203530]">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 flex max-w-3xl flex-col gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6f7f74]">
              Frequently Asked Questions
            </p>
            <p className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Questions worth asking before you choose how to build.
            </p>
          </div>

          <p className="text-base leading-8 text-[#3e564d] sm:text-lg">
            Hiring a one-person studio should come with questions about risk,
            capacity, price, and how the work will actually get done. This
            section answers those questions before a call ever starts.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) =>
            faq.carouselImages ? (
              <FaqLinkedInModal
                key={faq.question}
                faq={faq}
                index={index}
                onOpen={() => openModal(faq)}
              />
            ) : (
              <details
                key={faq.question}
                className="group rounded-[1.75rem] border border-[#cbd4cb] bg-[#f7f3ec]/92 px-6 py-5 transition-colors open:border-[#cc595a]/35 open:bg-[#fbf7f0]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#638475] text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-normal leading-7 text-[#203530] sm:text-xl">
                      {faq.question}
                    </h3>
                  </div>

                  <span className="mt-1 text-2xl font-light leading-none text-[#cc595a] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="space-y-4 pl-12 pr-8 pt-4 text-base font-normal leading-8 text-[#4b5f58]">
                  {faq.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ),
          )}
        </div>

        {activeLinkedInFaq ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#203530]/70 px-4 py-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="linkedin-faq-modal-title"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-5xl rounded-[2rem] bg-[#f8f3eb] p-4 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.65)] sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <h3 id="linkedin-faq-modal-title" className="sr-only">
                {activeLinkedInFaq.question}
              </h3>

              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b8c6bd] bg-white text-2xl leading-none text-[#203530] transition-colors hover:border-[#cc595a] hover:text-[#cc595a] sm:right-6 sm:top-2"
                aria-label="Close dialog"
              >
                X
              </button>

              <div className="rounded-[1.5rem] border border-[#d7ddd7] bg-white p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-[1.25rem] bg-[#efe7db]">
                  <div className="relative h-[70vh] min-h-[540px] w-full">
                    <Image
                      src={activeLinkedInFaq.carouselImages?.[activeSlideIndex] ?? ""}
                      alt={`${activeLinkedInFaq.question} page ${
                        activeSlideIndex + 1
                      }`}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-contain"
                    />
                    <button
                      type="button"
                      onClick={goToPreviousSlide}
                      className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-2xl font-semibold text-[#203530] shadow-[0_12px_30px_-16px_rgba(32,53,48,0.7)] transition-all hover:scale-105 hover:bg-white"
                      aria-label="Previous page"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      onClick={goToNextSlide}
                      className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-2xl font-semibold text-[#203530] shadow-[0_12px_30px_-16px_rgba(32,53,48,0.7)] transition-all hover:scale-105 hover:bg-white"
                      aria-label="Next page"
                    >
                      {">"}
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeLinkedInFaq.carouselImages?.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveSlideIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeSlideIndex
                          ? "w-10 bg-[#cc595a]"
                          : "w-2.5 bg-[#b8c6bd] hover:bg-[#638475]"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-12 rounded-[2rem] bg-[#203530] px-8 py-8 text-white shadow-[0_22px_70px_-32px_rgba(32,53,48,0.85)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#e7d281]">
                Still Evaluating Fit?
              </p>
              <p className="text-lg leading-8 text-white/90">
                The fastest way to remove uncertainty is to talk through the
                actual problem, constraints, and business stakes.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-[#e08a8b] bg-[#cc595a] px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
            >
              Start the conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
