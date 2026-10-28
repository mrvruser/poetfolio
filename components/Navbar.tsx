"use client";

import { useState } from "react";
import BookToggle from "@/components/BookToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-18 flex items-center justify-between">
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
              className="text-secondary hover:text-accent-theme hover:scale-105 transition-all py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          <BookToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-theme text-primary bg-card-theme/60 text-base"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden p-6 border-b border-theme bg-surface-theme space-y-3 text-sm font-semibold uppercase tracking-wider shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-secondary hover:text-accent-theme py-2 px-3 rounded-lg hover:bg-card-theme transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
