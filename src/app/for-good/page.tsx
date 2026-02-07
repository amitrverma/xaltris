import GoodCodeTitle from "@/components/GoodCodeTitle";
import GoodCodeLabel from "@/components/GoodCodeLabel";

export const metadata = {
  title: "The Good Code Project – For Good | Xaltris Technologies",
  description:
    "A quarterly initiative by Xaltris offering pro bono strategy, mentorship, AI guidance, and technical support to mission-driven teams.",
};

export default function ForGoodPage() {
  return (
    <div className="w-full bg-[#638475] text-white">
      {/* ================= HERO ================= */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block mb-8">
            <h1 className="text-5xl font-extrabold text-[var(--heading)] leading-tight">
              <GoodCodeTitle className="text-5xl md:text-6xl leading-tight" />
            </h1>

            <p className="text-xl font-semibold text-right text-foreground mt-2">
              Because good code should do good, too.
            </p>
          </div>

          {/* Body */}
          <div className="space-y-6 text-[1.1rem] leading-relaxed font-light bg-white p-8 rounded-xl border border-white/10 shadow-sm text-gray-700">
            <p>
              I spend about 10% my time on one project pro bono - a build that
              creates genuine impact but might not have the budget to access
              senior engineering talent.
            </p>

            <p>
              It’s my way of paying it forward — using twenty-odd years of
              experience (and a bit of AI magic) to help mission-driven
              founders, educators, or non-profits turn ideas into working
              products.
            </p>

            <p>
              No invoices, no shortcuts, no compromises on quality. Just clean
              architecture, thoughtful design, and technology built for good —
              in every sense of the word.
            </p>

            <p>
              If you know a cause, community, or creator doing meaningful work
              and could use a hand,
            </p>

            <div>
              <a
                href="mailto:hello@xaltris.com?subject=Nomination%20for%20The%20Good%20Code%20Project"
                className="inline-block px-6 py-3 bg-[#cc595a] text-white rounded-md text-sm font-medium tracking-wide hover:bg-[#b54f52] transition shadow-md"
              >
                Nominate for <GoodCodeLabel className="inline" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAUSES ================= */}
      <section className="py-14 border-t border-white/30 border-b backdrop-blur-sm text-foreground">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Causes I Support</h2>

          <p className="text-2xl font-semibold mb-6">
            Technology that strengthens people, communities, and the planet.
          </p>

          <div className="space-y-4 text-[1.1rem] leading-relaxed font-light mb-12">
            <p>
              <GoodCodeTitle className="inline" /> focuses on causes where
              thoughtful technology, clean design, and human insight can create
              real, lasting change.
            </p>

            <p>
              These are the spaces where a single well-built tool can unlock
              outsized impact — for communities that need it, initiatives that
              deserve it, and ideas that can’t wait for funding cycles.
            </p>

            <p>Here’s where I choose to direct my time, talent, and craft.</p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Human Potential & Mental Wellbeing",
                desc: "Tools and guidance that help people feel calmer, clearer, more grounded, and connected.",
              },
              {
                title: "Education, Youth & Lifelong Learning",
                desc: "From teachers needing strategy guidance to students building projects — anything that expands knowledge and capability.",
              },
              {
                title: "Environmental Conservation & Climate Action",
                desc: "Projects that enable awareness, action, or stewardship through tech, storytelling, or system design.",
              },
              {
                title: "Humanitarian & Social Equity",
                desc: "Grassroots organizations doing high-impact work with limited resources — often needing clarity, structure, and simple systems.",
              },
              {
                title: "Health, Wellness & Preventive Care",
                desc: "Initiatives that make health simpler, earlier, and more community-driven.",
              },
            ].map((cause, i) => (
              <div
                key={i}
                className="border-l-4 border-[#cc595a] pl-6 py-2 bg-white rounded-md text-gray-700"
              >
                <p className="font-semibold text-lg">{cause.title}</p>
                <p className="text-[1.05rem] font-light leading-relaxed mt-1">
                  {cause.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE PRINCIPLE ================= */}
      <section className="py-14 text-foreground">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-bold mb-6">The Core Principle</h3>

          <div className="space-y-6 text-[1.1rem] leading-relaxed font-light">
            <p className="text-2xl font-semibold">
              If a project makes life better, fairer, calmer, or more human — it
              belongs here.
            </p>

            <p>
              That’s the heart of <GoodCodeTitle className="inline" />.
            </p>

            <p>
              Quarter after quarter, I choose one initiative that aligns with
              these values and give it everything I’ve got: the architecture,
              the craftsmanship, the execution — with zero invoices and zero
              compromises.
            </p>

            <p>
              If you know a cause, community, or creator who fits these causes
              and could use a hand,
            </p>

            <a
              href="mailto:hello@xaltris.com?subject=Nomination%20for%20The%20Good%20Code%20Project"
              className="inline-block px-6 py-3 bg-[#cc595a] text-white rounded-md text-sm font-medium tracking-wide hover:bg-[#b54f52] transition shadow-md"
            >
              Nominate for <GoodCodeLabel className="inline" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="py-12 text-center text-sm font-light opacity-80">
        Original Intelligence (OI) × Artificial Intelligence (AI).
      </div>
    </div>
  );
}
