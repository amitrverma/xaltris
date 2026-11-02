import { ArrowRight } from "lucide-react";
import Link from "next/link";

type SiteCtaProps = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  action?: string;
};

export default function SiteCta({
  eyebrow = "Start with the current situation",
  title = "Tell me where the product and team are now.",
  copy = "Bring the idea, the product, or the delivery problem. We will work out what matters first and which kind of support fits.",
  action = "Tell me where you are",
}: SiteCtaProps) {
  return (
    <section className="bg-[#f7f2ea] px-6 py-16 text-[#162f2a] sm:py-20">
      <div className="mx-auto max-w-7xl rounded-xl bg-[#183a34] px-7 py-9 text-white shadow-[0_24px_70px_-38px_rgba(32,53,48,0.85)] sm:px-10 sm:py-11">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="type-kicker text-[#d9bf69]">{eyebrow}</p>
            <h2 className="type-section-title mt-4 max-w-3xl text-white">{title}</h2>
            <p className="type-body-lg mt-5 max-w-3xl text-white/84">{copy}</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#a53f43] bg-[#a53f43] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8f3438] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
            {action}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
