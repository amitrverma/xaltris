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
      <div className="mb-5 flex items-center justify-center gap-3 sm:justify-end">
        <button
          type="button"
          aria-label="Previous case studies"
          onClick={() => scrollByPage(-1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white text-[#183a34] transition-all hover:-translate-y-0.5 hover:bg-[#f7f2ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Next case studies"
          onClick={() => scrollByPage(1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white text-[#183a34] transition-all hover:-translate-y-0.5 hover:bg-[#f7f2ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      <div
        ref={railRef}
        className="-mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-3 scroll-smooth px-3 pb-3 [scrollbar-width:none] sm:mx-0 sm:gap-6 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((work) => (
          <article
            key={work.title}
            id={
              work.category === "Operational products"
                ? "operational-products"
                : undefined
            }
            className="flex min-h-[31rem] w-[calc(100vw-3rem)] shrink-0 snap-start flex-col rounded-lg border border-[#d7ddd6] bg-white p-5 shadow-[0_18px_45px_-36px_rgba(22,47,42,0.55)] sm:w-[72%] sm:p-6 lg:w-[calc((100%-1.5rem)/2)]"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="type-meta text-[#cc595a]">
                  {work.category}
                </p>
                <h3 className="type-subsection-title mt-3 text-[#162f2a]">
                  {work.title}
                </h3>
                <p className="type-body mt-1 font-semibold text-[#53675f]">
                  {work.context}
                </p>
              </div>
              <Sparkles
                className="mt-1 h-6 w-6 shrink-0 text-[#cc595a]"
                strokeWidth={1.8}
              />
            </div>

            <p className="type-body mt-5 text-[#334c45]">
              {work.summary}
            </p>
            <p className="type-body mt-5 border-l border-[#d7ddd6] pl-4 text-[#53675f]">
              {work.outcome}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="type-meta rounded-full border border-[#d7ddd6] bg-[#f7f2ea] px-3 py-1 text-[#53675f]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Link
                href={work.pdfHref}
                download
                className="inline-flex items-center gap-2 rounded-md border border-[#e08a8b] bg-[#cc595a] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
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
