import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Xaltris Technologies",
  description: "Terms of use for Xaltris Technologies.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#638475] text-white font-montserrat px-4 sm:px-8 py-28">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Terms of Use
        </h1>
        <p className="mt-3 text-white/90 text-sm">
          Effective date: February 7, 2026
        </p>

        <div className="mt-8 space-y-6 text-white/95 leading-relaxed">
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
              className="underline underline-offset-2 hover:text-[#f2c1c2] transition-colors"
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
