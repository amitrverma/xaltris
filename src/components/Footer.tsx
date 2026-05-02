export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#183a34] py-9 text-center text-sm text-white transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
        <p className="text-white">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Xaltris Technologies</span>. All rights
          reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <a
            href="/privacy"
            className="rounded-full px-3 py-1.5 text-white transition-all duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Privacy
          </a>
          <span className="text-white/25">&middot;</span>
          <a
            href="/terms"
            className="rounded-full px-3 py-1.5 text-white transition-all duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Terms
          </a>
          <span className="text-white/25">&middot;</span>
          <a
            href="mailto:hello@xaltris.com"
            className="rounded-full px-3 py-1.5 text-white transition-all duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Contact
          </a>
          <span className="text-white/25">&middot;</span>
          <a
            href="https://www.linkedin.com/in/amitrverma/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-1.5 text-white transition-all duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
