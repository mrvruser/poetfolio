"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 sm:px-10 border-t border-theme transition-colors duration-400 bg-surface-theme/40 text-secondary text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand & Tagline */}
        <div className="text-center md:text-left">
          <p className="font-bold text-sm text-primary font-serif-title mb-1">
            Poetfolio — The Art of Data Insights and Web Solutions
          </p>
          <p className="text-xs">
            © {currentYear} Vijayaregunath T. Built with Next.js, React, Tailwind CSS & Three.js.
          </p>
        </div>

        {/* Center Philosophy Quote */}
        <p className="italic text-center text-xs max-w-md hidden lg:block">
          “Where code meets creativity, data becomes insight, and curiosity becomes creation.”
        </p>

        {/* Right Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vijayaregunath-t"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-theme transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/mr-vijayaregunath-t-77b427316"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-theme transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="#"
            className="hover:text-accent-theme transition-colors font-bold"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

