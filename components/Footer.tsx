"use client";

import { ArrowUpIcon, GitHubIcon, LinkedInIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-5 sm:px-8 lg:px-12 border-t border-theme transition-colors duration-400 bg-surface-theme/40 text-secondary text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand & Tagline */}
        <div className="text-center md:text-left">
          <p className="font-bold text-sm text-primary font-serif-title mb-1">
            Poetfolio — The Art of Data Insights and Web Solutions
          </p>
          <p className="text-xs text-tertiary">
            © {currentYear} Vijayaregunath T. Built with Next.js, React, Tailwind CSS & Three.js.
          </p>
        </div>

        {/* Center Philosophy Quote */}
        <p className="italic text-center text-xs max-w-md hidden lg:block text-secondary font-serif-title">
          “Where code meets creativity, data becomes insight, and curiosity becomes creation.”
        </p>

        {/* Right Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mrvruser"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-theme transition-colors inline-flex items-center gap-1.5"
          >
            <GitHubIcon size={14} />
            <span>GitHub</span>
          </a>
          <span className="text-tertiary">•</span>
          <a
            href="https://www.linkedin.com/in/mr-vijayaregunath-t-77b427316"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-theme transition-colors inline-flex items-center gap-1.5"
          >
            <LinkedInIcon size={14} />
            <span>LinkedIn</span>
          </a>
          <span className="text-tertiary">•</span>
          <a
            href="#"
            className="hover:text-accent-theme transition-colors font-bold inline-flex items-center gap-1"
          >
            <span>Back to Top</span>
            <ArrowUpIcon size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
