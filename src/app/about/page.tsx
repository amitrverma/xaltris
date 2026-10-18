import { BrainCircuit, Code2, Download, GraduationCap, Landmark, Linkedin, Rocket, Target } from "lucide-react";
import Image from "next/image";

import ExperienceYears from "../../components/ExperienceYears";
import JsonLd from "../../components/JsonLd";
import SiteCta from "../../components/SiteCta";
import { calculateExperienceYears } from "../../lib/experience";
import { AMIT_PERSON_ID, ORGANIZATION_ID, SITE_URL } from "../../lib/site-metadata";

const companyProfileHref = "/case-studies/xaltris-technologies.pdf";

export const metadata = {
  title: "About Amit Verma",
  description: "About Amit Verma and Xaltris: deep engineering experience, fractional CTO thinking, and AI-accelerated execution for early-stage startups.",
  alternates: { canonical: "/about" },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": AMIT_PERSON_ID,
  name: "Amit Verma",
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/amit-verma.png`,
  jobTitle: "Founder and Fractional CTO",
  worksFor: { "@id": ORGANIZATION_ID },
  sameAs: ["https://www.linkedin.com/in/amitrverma/"],
};

const strengths = [
  { title: "Builder at heart", description: "I turn complex ideas into simple, usable products.", Icon: Rocket },
  { title: "Technical and commercial", description: "I connect engineering choices to business consequences.", Icon: Code2 },
  { title: "AI-powered execution", description: "I use AI as leverage without outsourcing judgment.", Icon: BrainCircuit },
  { title: "Outcome focused", description: "Every system is shaped around real use, scale, and impact.", Icon: Target },
];

const corporateHighlights = [
  ["Enterprise product leadership", "Led back-office SaaS product development and modernization across cloud, DevOps, security, and scalable delivery practices."],
  ["Global engineering teams", "Built and led teams working with clients and colleagues across India, the Netherlands, the US, the UK, and South Africa."],
  ["Platform architecture", "Designed BPM, SOA, workflow, reporting, desktop analytics, and mobile platforms for real operational use."],
  ["Measured business impact", "Drove cost, productivity, reliability, and modernization outcomes in large corporate environments before bringing that judgment to Xaltris."],
];

const careerArc = ["Head of Engineering at Capita", "Development Manager at iNautix / BNY Mellon", "Engineering Lead at Cordys"];

export default function AboutPage() {
  const experienceYears = calculateExperienceYears();

  return (
    <>
      <JsonLd data={personStructuredData} />
      <main className="bg-[#f7f2ea] text-[#162f2a]">
        <section className="relative overflow-hidden bg-[#3f6759] px-6 py-16 text-white sm:py-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="hero-grid" /></div>
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
            <div>
              <p className="type-kicker text-[#d9bf69]">About Amit</p>
              <h1 className="hero-primary-title mt-6 max-w-4xl text-white">Fractional CTO. Hands-on builder.</h1>
              <p className="type-lead mt-7 max-w-2xl text-white/92">I founded Xaltris to help early-stage startups turn product ambition into clear technical direction and working software.</p>
              <p className="type-body-lg mt-5 max-w-2xl text-white/82">I combine CTO-level judgment with full-cycle product engineering, personally carrying the work through architecture, implementation, integrations, deployment, and production discipline.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/amitrverma/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/28 bg-white/10 px-4 py-2.5 font-semibold text-white transition hover:bg-white/15"><Linkedin className="h-4 w-4" />LinkedIn</a>
                <a href={companyProfileHref} download className="inline-flex items-center gap-2 rounded-md border border-white/28 bg-white/10 px-4 py-2.5 font-semibold text-white transition hover:bg-white/15"><Download className="h-4 w-4" />Company profile</a>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/20 bg-[#f7f2ea] p-7 text-[#162f2a] shadow-[0_30px_90px_-44px_rgba(10,32,28,0.95)] sm:p-9">
              <div className="grid gap-6 sm:grid-cols-[9rem_1fr] sm:items-center">
                <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white bg-[#ddd7d1] shadow-[0_14px_35px_-22px_rgba(22,47,42,0.8)]">
                  <Image src="/amit-verma.png" alt="Amit Verma" fill priority className="object-contain" sizes="144px" />
                </div>
                <div><p className="type-meta text-[#a53f43]">Work directly with</p><h2 className="type-subsection-title mt-2">Amit Verma</h2><p className="type-body mt-2 text-[#53675f]">Founder &amp; Fractional CTO</p></div>
              </div>
              <div className="mt-7 border-t border-[#d7ddd6] pt-6">
                <p className="font-display text-4xl font-extrabold leading-none text-[#315348]"><ExperienceYears initialYears={experienceYears} />+ years</p>
                <p className="type-body mt-3 text-[#53675f]">Building and scaling technology systems across products, teams, and business contexts.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div><p className="type-kicker text-[#a53f43]">The operating idea</p><h2 className="type-section-title mt-5">I hold the thread from product thinking to technical delivery.</h2></div>
            <div className="type-lead space-y-6 text-[#334c45]">
              <p>Early-stage products rarely fail because nobody can write code. They struggle when product intent, technical choices, and implementation drift apart.</p>
              <p>I keep those concerns connected: shaping what should be built, making the consequential engineering decisions, and staying close enough to the code to ensure the intent survives.</p>
              <p>AI accelerates the work. Experience determines what deserves to be built, where the risks are, and when speed is creating debt instead of progress.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#315348] px-6 py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div><p className="type-kicker text-[#d9bf69]">How I work</p><h2 className="type-section-title mt-5 text-white">One clear operating model.</h2><p className="type-body-lg mt-6 text-white/82">The same person shaping the product guides the technical direction, the build, and the path to a working system.</p></div>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {strengths.map(({ title, description, Icon }) => (
                <article key={title} className="border-t border-white/18 pt-5"><Icon className="h-7 w-7 text-[#d9bf69]" strokeWidth={1.8} /><h3 className="type-card-title mt-4 text-white">{title}</h3><p className="type-body mt-3 text-white/80">{description}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="type-kicker text-[#a53f43]">Enterprise experience</p><h2 className="type-section-title mt-5">Large-scale discipline, startup-speed execution.</h2>
                <p className="type-body-lg mt-6 text-[#53675f]">Two decades inside product and engineering organizations taught me what software needs when governance, security, delivery pressure, and operational complexity become real.</p>
                <div className="mt-7 space-y-3">{careerArc.map((role) => <p key={role} className="border-l-2 border-[#cc595a] pl-4 font-semibold text-[#183a34]">{role}</p>)}</div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {corporateHighlights.map(([label, detail], index) => (
                  <article key={label} className="rounded-xl border border-[#d7ddd6] bg-white p-6"><p className="type-meta text-[#a53f43]">{String(index + 1).padStart(2, "0")}</p><h3 className="type-card-title mt-3">{label}</h3><p className="type-body mt-3 text-[#53675f]">{detail}</p></article>
                ))}
              </div>
            </div>
            <div className="mt-14 grid gap-6 border-t border-[#d7ddd6] pt-10 sm:grid-cols-2">
              <div className="flex gap-4"><GraduationCap className="h-8 w-8 shrink-0 text-[#cc595a]" /><div><p className="type-card-title">B.Tech</p><p className="type-body mt-1 text-[#53675f]">National Institute of Technology Warangal</p></div></div>
              <div className="flex gap-4"><Landmark className="h-8 w-8 shrink-0 text-[#cc595a]" /><div><p className="type-card-title">MBA</p><p className="type-body mt-1 text-[#53675f]">Indian Institute of Management Calcutta</p></div></div>
            </div>
          </div>
        </section>

        <SiteCta eyebrow="Work directly with Amit" title="One partner from the first product decision to production." copy="If you need senior technical judgment and someone prepared to stay close to implementation, let’s talk about where the product is now." />
      </main>
    </>
  );
}
