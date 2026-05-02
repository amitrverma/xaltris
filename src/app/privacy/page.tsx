import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Xaltris Technologies",
  description: "Privacy policy for Xaltris Technologies.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] px-4 py-20 text-[#162f2a] sm:px-8 sm:py-24">
      <section className="mx-auto max-w-3xl rounded-lg border border-[#d7ddd6] bg-white p-8 shadow-[0_18px_45px_-36px_rgba(22,47,42,0.55)] sm:p-10">
        <h1 className="type-section-title">
          Privacy Policy
        </h1>
        <p className="type-meta mt-3 text-[#7c8b85]">
          Effective date: February 7, 2026
        </p>

        <div className="type-body mt-8 space-y-6 text-[#53675f]">
          <p>
            Xaltris Technologies collects only the information required to
            respond to inquiries and deliver services. We do not sell personal
            information.
          </p>
          <p>
            If you submit information through forms or email, we use it for
            communication, project delivery, and support. Data is retained only
            as long as needed for these purposes and legal obligations.
          </p>
          <p>
            For privacy requests, contact{" "}
            <a
              href="mailto:hello@xaltris.com"
              className="font-semibold text-[#cc595a] underline underline-offset-2 transition-colors hover:text-[#a74648]"
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
