import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Xaltris Technologies",
  description: "Privacy policy for Xaltris Technologies.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#638475] text-white font-montserrat px-4 sm:px-8 py-28">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-white/90 text-sm">
          Effective date: February 7, 2026
        </p>

        <div className="mt-8 space-y-6 text-white/95 leading-relaxed">
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
