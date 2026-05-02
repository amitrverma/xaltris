import GoodCodeTitle from "@/components/GoodCodeTitle";
import GoodCodeLabel from "@/components/GoodCodeLabel";

export const metadata = {
  title: "The Good Code Project - For Good | Xaltris Technologies",
  description:
    "A quarterly initiative by Xaltris offering pro bono strategy, mentorship, AI guidance, and technical support to mission-driven teams.",
};

const causes = [
  {
    title: "Human Potential & Mental Wellbeing",
    desc: "Tools and guidance that help people feel calmer, clearer, more grounded, and connected.",
  },
  {
    title: "Education, Youth & Lifelong Learning",
    desc: "From teachers needing strategy guidance to students building projects, anything that expands knowledge and capability.",
  },
  {
    title: "Environmental Conservation & Climate Action",
    desc: "Projects that enable awareness, action, or stewardship through tech, storytelling, or system design.",
  },
  {
    title: "Humanitarian & Social Equity",
    desc: "Grassroots organizations doing high-impact work with limited resources, often needing clarity, structure, and simple systems.",
  },
  {
    title: "Health, Wellness & Preventive Care",
    desc: "Initiatives that make health simpler, earlier, and more community-driven.",
  },
];

export default function ForGoodPage() {
  return (
    <main className="bg-[#f7f2ea] text-[#162f2a]">
      <section className="bg-[#4f7466] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">
              For Good
            </p>
            <h1
              className="type-hero mt-5 max-w-4xl text-white"
            >
              <GoodCodeTitle className="text-white" />
            </h1>
            <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              Because good code should do good, too.
            </p>
          </div>

          <div className="border-t border-white/16 pt-7 text-white lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="type-body-lg space-y-5">
              <p>
                I spend about 10% of my time on one project pro bono: a build
                that creates genuine impact but might not have the budget to
                access senior engineering talent.
              </p>
              <p>
                It is my way of paying it forward, using twenty-odd years of
                experience and practical AI leverage to help mission-driven
                founders, educators, or non-profits turn ideas into working
                products.
              </p>
              <p>
                No invoices, no shortcuts, no compromises on quality. Just clean
                architecture, thoughtful design, and technology built for good.
              </p>
            </div>

            <a
              href="mailto:hello@xaltris.com?subject=Nomination%20for%20The%20Good%20Code%20Project"
              className="mt-8 inline-flex rounded-md border border-[#e08a8b] bg-[#cc595a] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-20px_rgba(204,89,90,0.8)] transition hover:-translate-y-0.5 hover:bg-[#b94f51]"
            >
              Nominate for <GoodCodeLabel className="ml-1 inline" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <div>
            <p className="type-kicker text-[#cc595a]">
              Causes I Support
            </p>
            <h2
              className="type-section-title mt-4"
            >
              Technology that strengthens people, communities, and the planet.
            </h2>
            <div className="type-body mt-6 space-y-5 text-[#53675f]">
              <p>
                <GoodCodeTitle className="inline" /> focuses on causes where
                thoughtful technology, clean design, and human insight can create
                real, lasting change.
              </p>
              <p>
                These are the spaces where a single well-built tool can unlock
                outsized impact for communities that need it and ideas that
                cannot wait for funding cycles.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {causes.map((cause) => (
              <article
                key={cause.title}
                className="rounded-lg border border-[#d7ddd6] bg-white p-5 shadow-[0_18px_45px_-38px_rgba(22,47,42,0.55)]"
              >
                <p className="type-card-title text-[#162f2a]">
                  {cause.title}
                </p>
                <p className="type-body mt-2 text-[#53675f]">
                  {cause.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="type-kicker text-[#cc595a]">
            The Core Principle
          </p>
          <h2
            className="type-section-title mt-4"
          >
            If a project makes life better, fairer, calmer, or more human, it
            belongs here.
          </h2>
          <p className="type-lead mx-auto mt-6 max-w-2xl text-[#53675f]">
            Quarter after quarter, I choose one initiative that aligns with
            these values and give it the architecture, craftsmanship, and
            execution it deserves.
          </p>
          <a
            href="mailto:hello@xaltris.com?subject=Nomination%20for%20The%20Good%20Code%20Project"
            className="mt-8 inline-flex rounded-md border border-[#e08a8b] bg-[#cc595a] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-20px_rgba(204,89,90,0.8)] transition hover:-translate-y-0.5 hover:bg-[#b94f51]"
          >
            Nominate for <GoodCodeLabel className="ml-1 inline" />
          </a>
        </div>
      </section>

      <div className="bg-[#183a34] px-6 py-10 text-center text-sm font-semibold text-white">
        Original Intelligence (OI) x Artificial Intelligence (AI).
      </div>
    </main>
  );
}
