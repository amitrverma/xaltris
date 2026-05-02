"use client";

import { ChevronLeft, ChevronRight, Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

type CaseStudy = {
  category: string;
  title: string;
  context: string;
  summary: string;
  outcome: string;
  tags: string[];
  pdfHref: string;
};

export default function PortfolioCarousel({ items }: { items: CaseStudy[] }) {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollByPage(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction * rail.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Previous case studies"
          onClick={() => scrollByPage(-1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white transition-all hover:-translate-y-0.5 hover:border-white/32 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Next case studies"
          onClick={() => scrollByPage(1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white transition-all hover:-translate-y-0.5 hover:border-white/32 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      <div
        ref={railRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((work) => (
          <article
            key={work.title}
            id={
              work.category === "Operational products"
                ? "operational-products"
                : undefined
            }
            className="flex min-h-[31rem] w-[88%] shrink-0 snap-start flex-col rounded-lg border border-white/12 bg-white/7 p-6 backdrop-blur sm:w-[72%] lg:w-[calc((100%-1.5rem)/2)]"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-[#e7d281]">
                  {work.category}
                </p>
                <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#f8f4ee]">
                  {work.title}
                </h3>
                <p className="mt-1 text-base font-semibold text-white/66">
                  {work.context}
                </p>
              </div>
              <Sparkles
                className="mt-1 h-6 w-6 shrink-0 text-[#e7d281]"
                strokeWidth={1.8}
              />
            </div>

            <p className="mt-5 text-base leading-7 text-white/76">
              {work.summary}
            </p>
            <p className="mt-5 border-l border-white/16 pl-4 text-base leading-7 text-white/64">
              {work.outcome}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/72"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Link
                href={work.pdfHref}
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-[#e08a8b] bg-[#cc595a] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                <Download className="h-4 w-4" strokeWidth={1.8} />
                Know more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
