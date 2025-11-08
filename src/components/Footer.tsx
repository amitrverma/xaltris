export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200  font-montserrat py-8 text-center text-sm transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center space-y-3">
        {/* Copyright */}
        <p >
          &copy; {new Date().getFullYear()} <span className="font-semibold">Xaltris Technologies</span>. All rights reserved.
        </p>

        {/* Optional links */}
        <div className="flex space-x-5text-xs">
          <a href="/privacy" className="hover:text-cyan-500 transition">
            Privacy
          </a>
          <span>•</span>
          <a href="/terms" className="hover:text-cyan-500 transition">
            Terms
          </a>
          <span>•</span>
          <a
            href="mailto:hello@xaltris.com"
            className="hover:text-cyan-500 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
