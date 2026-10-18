import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["How I help", "/how-i-help"],
      ["Vibe to Viable", "/vibe-to-viable"],
      ["Work", "/portfolio"],
    ],
  },
  {
    title: "Xaltris",
    links: [
      ["About", "/about"],
      ["Blog", "/blog"],
      ["For Good", "/for-good"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#183a34] px-6 py-12 text-sm text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/12 pb-10 md:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          <div>
            <p className="font-display text-3xl font-extrabold leading-tight">Xaltris</p>
            <p className="mt-4 max-w-sm leading-7 text-white/78">
              Fractional CTO leadership and full-cycle product engineering for early-stage startups.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="type-meta text-[#d9bf69]">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link className="text-white/78 transition-colors hover:text-white" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="type-meta text-[#d9bf69]">Start a conversation</p>
            <p className="mt-4 leading-7 text-white/78">Have a new product idea or an early prototype that needs senior technical judgment?</p>
            <Link href="/contact" className="mt-5 inline-flex rounded-md bg-[#a53f43] px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8f3438]">
              Tell me where you are
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-white/64 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Xaltris Technologies.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <a href="mailto:hello@xaltris.com" className="hover:text-white">Email</a>
            <a href="https://www.linkedin.com/in/amitrverma/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
