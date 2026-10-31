"use client";

import { useState } from "react";
import BookToggle from "@/components/BookToggle";
import { MenuIcon, CloseIcon } from "@/components/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const triggerReplayIntro = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("poetfolio:replay-intro"));
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Creations", href: "/projects" },
    { label: "The Learning Odyssey", href: "/odyssey" },
    { label: "Writing", href: "/writing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-colors duration-300 backdrop-blur-xl bg-surface-theme/80 border-b border-theme shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Identity Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <span className="text-xl sm:text-2xl font-bold font-serif-title tracking-tight text-primary group-hover:text-accent-theme transition-colors">
            Vijayaregunath <span className="text-accent-theme">T</span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-theme text-secondary hidden sm:inline-block bg-card-theme/60">
            Poetfolio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-secondary hover:text-accent-theme transition-all py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-theme transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side Controls: Book ↔ Brain Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={triggerReplayIntro}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-theme bg-card-theme/60 hover:border-accent-theme hover:text-accent-theme text-[11px] font-semibold text-secondary transition-all"
            title="Replay cinematic introduction sequence"
          >
            <span>Replay Intro</span>
          </button>

          <BookToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl border border-theme text-primary bg-card-theme/60 hover:border-accent-theme transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden p-6 border-b border-theme bg-surface-theme/95 backdrop-blur-2xl space-y-2 text-sm font-semibold uppercase tracking-wider shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-secondary hover:text-accent-theme py-2.5 px-4 rounded-xl hover:bg-card-theme transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
