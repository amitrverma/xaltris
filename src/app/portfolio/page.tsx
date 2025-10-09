"use client";

import React, { useMemo, useState } from "react";

const PERIODS = ["All", "Now Building", "Previously Delivered"] as const;
type Period = (typeof PERIODS)[number];

type Item = {
  category: "Product" | "Application" | "Case Study";
  description: string;
  challenges: string[];
  outcomes: string[];
  period?: "Now" | "Past";
};

const ITEMS: Item[] = [
  // Products
  { 
  category: "Product", 
  description: "Clarity — workforce well-being and productivity intelligence platform that identifies inefficiencies, overwork patterns, and underused tools without surveillance.", 
  challenges: [
    "Balancing productivity with employee well-being", 
    "Detecting burnout risks without invasive monitoring", 
    "Providing actionable insights teams actually use"
  ], 
  outcomes: [
    "Improved work-life balance", 
    "Streamlined workflows", 
    "Sustainable team performance"
  ], 
  period: "Now" 
},
{ 
  category: "Product", 
  description: "Momentum — real-time performance management platform with dashboards, activity tracking, and sentiment analytics.", 
  challenges: [
    "Fragmented visibility across teams", 
    "Inability to adjust priorities dynamically", 
    "Need for insights that respect employee context"
  ], 
  outcomes: [
    "Faster, data-driven decision-making", 
    "Proactive workload balancing", 
    "Higher throughput without morale loss"
  ], 
  period: "Now" 
},
{ 
  category: "Product", 
  description: "Lexel — AI-assisted product content generation tool that transforms images into SEO-ready descriptions, features, and marketing copy.", 
  challenges: [
    "Slow, manual product description workflows", 
    "Inconsistent tone and quality", 
    "Scaling content without scaling headcount"
  ], 
  outcomes: [
    "3–5× faster content creation", 
    "Consistent brand voice", 
    "Higher engagement and conversion"
  ], 
  period: "Now" 
},
{
  category: "Product",
  description: "An AI-powered introspection platform that helps individuals untangle thoughts, uncover root causes, and turn self-reflection into actionable growth.",
  challenges: [
    "People feeling stuck, anxious, or unsure how to move forward in personal or professional situations",
    "Common advice addressing symptoms rather than underlying causes",
    "Lack of accessible, private tools for structured self-reflection"
  ],
  outcomes: [
    "Guided introspection that helps users uncover deeper insights and reframe challenges",
    "Turning self-awareness into practical, real-world actions",
    "Accessible anytime, anywhere, with privacy and customization built in"
  ],
  period: "Now"
},
  { category: "Product", description: "Web-based workflow platform enabling end-to-end process management across multiple teams and sites.", challenges: ["Manual spreadsheet tracking created errors and delays", "Limited visibility on utilization and productivity", "Difficult multi-step, multi-location coordination"], outcomes: ["Automated work allocation", "Centralized dashboards for KPIs and SLAs", "Improved cycle time and efficiency"] },
  { category: "Product", description: "Operational performance monitoring tool for tracking productivity and time utilization.", challenges: ["No real-time tracking of productive/offline activities", "Lack of single view for process data", "Manual performance reporting"], outcomes: ["Real-time performance insights", "Customizable reporting", "Better headcount and capacity planning"] },
  { category: "Product", description: "Intelligent quality assessment tool with automated sampling and integration to workflow systems.", challenges: ["Manual quality sampling was time-intensive", "No integration with workflow systems", "High management overhead"], outcomes: ["Automated sampling", "Integration with existing systems", "Real-time and historical reporting"] },
  { category: "Product", description: "Digital visualization platform for operational and organizational KPIs.", challenges: ["No centralized decision support system", "Data scattered across sources", "Limited trend and pattern visibility"], outcomes: ["Unified KPI dashboards", "Drill-down analytics", "Faster, informed decision-making"] },
  { category: "Product", description: "Knowledge and assessment platform for creating and managing quizzes, surveys, and exams.", challenges: ["Dependency on development teams for program setup", "Decentralized exam and survey data"], outcomes: ["Self-serve exam creation", "Real-time dashboards", "Lower development overhead"] },
  { category: "Product", description: "Ideation portal for tracking and managing organizational improvement ideas.", challenges: ["No centralized idea management", "Difficult benefit tracking"], outcomes: ["Defined ideation metrics", "Real-time dashboards", "Quantified benefits"] },
  { category: "Product", description: "IT inventory management system for complete asset lifecycle.", challenges: ["Fragmented asset records", "Manual effort in lifecycle management"], outcomes: ["Real-time asset visibility", "Reduced management effort"] },

  // Applications
  { category: "Application", description: "Attendance management system integrated with swipe card data and policy-based leave management.", challenges: ["Manual attendance tracking prone to errors", "Inefficient payroll reconciliation"], outcomes: ["Automated attendance capture", "Better leave policy compliance", "Streamlined payroll"] },
  { category: "Application", description: "Centralized service desk portal with bot assistance.", challenges: ["Manual ticket creation", "Inconsistent service tracking"], outcomes: ["Automated ticket generation", "Self-service approach", "Reduced manual effort"] },
  { category: "Application", description: "Visitors management system linked with employee database.", challenges: ["Manual visitor logging", "No centralized travel record"], outcomes: ["Complete digitization", "Email notifications", "Centralized history"] },
  { category: "Application", description: "Purchase order management system.", challenges: ["Manual PO tracking", "Lack of approval flow visibility"], outcomes: ["Easy PO creation and approvals", "Real-time tracking"] },
  { category: "Application", description: "Native mobile HR app with attendance, leave, and communication features.", challenges: ["Fragmented HR tools", "Limited mobile accessibility"], outcomes: ["Unified mobile app", "Integration with existing HR systems", "Improved employee accessibility"] },

  // Case Studies
  { category: "Case Study", description: "Secure, scalable workflow management platform for a large-scale operation (~1000 FTEs).", challenges: ["No system to track end-to-end workflow and resource utilization", "Complex multi-function, multi-location operations", "Need for outcome-based monitoring"], outcomes: ["12% reduction in cycle time", "~10% efficiency gain and added capacity", "Significant annual cost benefit"] }
];

const PeriodBadge = ({ period }: { period: "Now" | "Past" }) => (
  <span
    className={
      period === "Now"
        ? "px-2 py-0.5 text-[10px] rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white"
        : "px-2 py-0.5 text-[10px] rounded-full bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 dark:from-zinc-700 dark:to-zinc-900 dark:text-zinc-200"
    }
  >
    {period === "Now" ? "Now" : "Past"}
  </span>
);

const Card = ({ item }: { item: Item }) => {
  const period: "Now" | "Past" = item.period ?? "Past";
  return (
    <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-7 shadow-sm border border-gray-200 dark:border-zinc-800 w-full max-w-[420px] mx-auto transition-colors duration-300">
      {/* Top row: category + period */}
      <div className="mb-2 flex items-center gap-2">
        <span className="px-3 py-1 rounded-full border text-[11px] tracking-wide uppercase border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 bg-gray-100/80 dark:bg-zinc-800/60">
          {item.category}
        </span>
        <PeriodBadge period={period} />
      </div>

      <p className="text-[15px] leading-7 text-gray-800 dark:text-zinc-200">
        {item.description}
      </p>

      <div className="mt-5">
        <p className="text-sm font-extrabold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
          Challenges Addressed
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-7 text-gray-700 dark:text-zinc-200 space-y-1">
          {item.challenges.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </div>

      <div className="mt-5">
        <p className="text-sm font-extrabold text-cyan-600 dark:text-cyan-400 mb-2">
          Outcomes
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-7 text-gray-800 dark:text-zinc-100 space-y-1">
          {item.outcomes.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  const [periodFilter, setPeriodFilter] = useState<Period>("All");

  const visible = useMemo(() => {
    return ITEMS.filter((i) => {
      const period: "Now" | "Past" = i.period ?? "Past";
      const passPeriod =
        periodFilter === "All"
          ? true
          : periodFilter === "Now Building"
          ? period === "Now"
          : period === "Past";
      return passPeriod;
    });
  }, [periodFilter]);

  const intro = useMemo(() => {
    if (periodFilter === "Now Building") {
      return "Active builds and engagements under Xaltris — applying deep engineering leadership for measurable outcomes.";
    }
    if (periodFilter === "Previously Delivered") {
      return "Highlights from prior leadership roles — enterprise-scale platforms and applications delivered across domains.";
    }
    return "A cross-section of solutions delivered at scale — from complex platforms to lean, high-impact tools.";
  }, [periodFilter]);

  return (
    <section className="min-h-screen px-6 py-20 font-montserrat bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Headline + subhead */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-[var(--heading)] text-center">
          What I’ve Built
        </h1>
        <h2 className="text-xl md:text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 text-center mb-2">
          A Proven Track Record at Scale
        </h2>
        <p className="text-gray-700 dark:text-zinc-200 text-center max-w-3xl mx-auto mb-12 leading-8">
          {intro}
        </p>

        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-300 dark:border-zinc-700 mb-10">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setPeriodFilter(p)}
              className={`px-6 py-3 text-lg font-semibold transition relative ${
                periodFilter === p
                  ? 'text-[var(--heading)] dark:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-fuchsia-500'
                  : 'text-gray-500 dark:text-zinc-400 hover:text-[var(--heading)] dark:hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {visible.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-semibold px-6 py-2 rounded-md hover:brightness-110 transition"
          >
            Discuss your build
          </a>
        </div>
      </div>
    </section>
  );
}
