import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Xaltris Technologies.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] px-4 py-20 text-[#162f2a] sm:px-8 sm:py-24">
      <section className="mx-auto max-w-3xl rounded-lg border border-[#d7ddd6] bg-white p-8 shadow-[0_18px_45px_-36px_rgba(22,47,42,0.55)] sm:p-10">
        <h1 className="type-section-title">
          Terms of Use
        </h1>
        <p className="type-meta mt-3 text-[#7c8b85]">
          Effective date: February 7, 2026
        </p>

        <div className="type-body mt-8 space-y-6 text-[#53675f]">
          <p>
            By using this site, you agree to use it lawfully and not interfere
            with service availability, security, or integrity.
          </p>
          <p>
            Content on this site is provided for informational purposes and may
            be updated without notice. Unauthorized reuse of proprietary
            materials is prohibited.
          </p>
          <p>
            Questions about these terms can be sent to{" "}
            <a
              href="mailto:hello@xaltris.com"
              className="font-semibold text-[#a53f43] underline underline-offset-2 transition-colors hover:text-[#8f3438]"
            >
              hello@xaltris.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
