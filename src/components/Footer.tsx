export default function Footer() {
  return (
    <footer className="w-full border-t border-white/30 bg-[#638475] text-white font-montserrat py-8 text-center text-sm transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center space-y-3">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Xaltris Technologies</span>. All rights
          reserved.
        </p>

        <div className="flex items-center space-x-3 text-sm">
          <a
            href="/privacy"
            className="px-2.5 py-1 rounded-md border border-transparent text-white/95 transition-all duration-200 hover:text-white hover:bg-white/12 hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Privacy
          </a>
          <span>&middot;</span>
          <a
            href="/terms"
            className="px-2.5 py-1 rounded-md border border-transparent text-white/95 transition-all duration-200 hover:text-white hover:bg-white/12 hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Terms
          </a>
          <span>&middot;</span>
          <a
            href="mailto:hello@xaltris.com"
            className="px-2.5 py-1 rounded-md border border-transparent text-white/95 transition-all duration-200 hover:text-white hover:bg-white/12 hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
