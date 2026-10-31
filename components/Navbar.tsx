"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BookToggle from "@/components/BookToggle";
import { useNavigation } from "@/components/NavigationContext";
import ClassicSidebar from "@/components/ClassicSidebar";
import {
  MenuIcon,
  CloseIcon,
  ReplayIcon,
  GalaxyDashboardIcon,
  ClassicSidebarIcon,
  HomeIcon,
  AboutIcon,
  CreationsIcon,
  OdysseyIcon,
  WritingIcon,
  ContactIcon,
} from "@/components/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { navMode, toggleNavMode } = useNavigation();

  const triggerReplayIntro = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("poetfolio:replay-intro"));
    }
  };

  const navLinks = [
    { label: "Home", href: "/", icon: <HomeIcon size={16} /> },
    { label: "About", href: "/about", icon: <AboutIcon size={16} /> },
    { label: "Creations", href: "/projects", icon: <CreationsIcon size={16} /> },
    { label: "Odyssey", fullLabel: "The Learning Odyssey", href: "/odyssey", icon: <OdysseyIcon size={16} /> },
    { label: "Writing", href: "/writing", icon: <WritingIcon size={16} /> },
    { label: "Contact", href: "/contact", icon: <ContactIcon size={16} /> },
  ];

  // If in Classic Sidebar mode, render the sidebar instead of the horizontal header
  if (navMode === "sidebar") {
    return <ClassicSidebar />;
  }

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-colors duration-300 backdrop-blur-xl bg-surface-theme/85 border-b border-theme shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 grid grid-cols-12 items-center">
        {/* ====================================================================
            LEFT REGION — BRAND IDENTITY (Col 1 to 4 on lg, Col 1 to 8 on mobile)
            ==================================================================== */}
        <div className="col-span-8 lg:col-span-4 flex items-center justify-start min-w-0 pr-2">
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group select-none min-w-0"
            title="Poetfolio — Vijayaregunath T"
          >
            {/* Monogram Badge */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-2xl border border-theme bg-card-theme/80 flex items-center justify-center font-serif-title font-bold text-accent-theme group-hover:scale-105 group-hover:border-accent-theme/40 transition-all shadow-xs">
              <span className="text-xs sm:text-sm">VT</span>
            </div>

            {/* Guaranteed Single-Line Name to eliminate any wrap */}
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-base sm:text-lg lg:text-xl font-bold font-serif-title tracking-tight text-primary whitespace-nowrap group-hover:text-accent-theme transition-colors">
                Vijayaregunath <span className="text-accent-theme">T</span>
              </span>
              <span className="hidden xl:inline-flex items-center text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-theme text-secondary bg-card-theme/70 shrink-0">
                Poetfolio
              </span>
            </div>
          </Link>
        </div>

        {/* ====================================================================
            CENTRE REGION — PRIMARY FLOATING NAVIGATION (Col 5 to 8 on lg, hidden on mobile)
            Mathematically centered relative to the 12-column grid
            ==================================================================== */}
        <div className="hidden lg:col-span-4 lg:flex items-center justify-center">
          <nav
            aria-label="Main Navigation"
            className="inline-flex items-center gap-1 p-1 rounded-full border border-theme/80 bg-card-theme/75 backdrop-blur-xl shadow-xs"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  title={link.fullLabel || link.label}
                  className={`relative px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 select-none ${
                    isActive
                      ? "text-accent-theme font-bold"
                      : "text-secondary hover:text-primary hover:bg-surface-theme/60"
                  }`}
                >
                  {/* Active highlight pill with subtle animation */}
                  {isActive && (
                    <motion.span
                      layoutId="galaxy-nav-active-pill"
                      className="absolute inset-0 rounded-full bg-accent-theme/15 border border-accent-theme/35 shadow-xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ====================================================================
            RIGHT REGION — UTILITY ACTIONS (Col 9 to 12 on lg, Col 9 to 12 on mobile)
            ==================================================================== */}
        <div className="col-span-4 lg:col-span-4 flex items-center justify-end gap-2 sm:gap-2.5">
          {/* Nav Mode Switcher (Galaxy ↔ Classic Sidebar) */}
          <button
            type="button"
            onClick={toggleNavMode}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-theme bg-card-theme/60 hover:border-accent-theme hover:text-accent-theme text-xs font-medium text-secondary transition-all"
            title="Switch navigation style: Galaxy Dashboard ↔ Classic Sidebar"
            aria-label="Switch to Classic Sidebar navigation"
          >
            <ClassicSidebarIcon size={15} className="shrink-0 text-accent-theme" />
            <span className="hidden xl:inline text-[11px] font-semibold">Sidebar</span>
          </button>

          {/* Replay Cinematic Intro Button */}
          <button
            type="button"
            onClick={triggerReplayIntro}
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-theme bg-card-theme/60 hover:border-accent-theme hover:text-accent-theme text-xs font-medium text-secondary transition-all"
            title="Replay cinematic opening sequence"
            aria-label="Replay cinematic intro"
          >
            <ReplayIcon size={14} className="shrink-0 text-accent-theme" />
            <span className="hidden xl:inline text-[11px] font-semibold">Intro</span>
          </button>

          {/* Signature Book ↔ Brain Theme Toggle */}
          <BookToggle showLabel={false} />

          {/* Mobile Drawer Toggle Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-2xl border border-theme text-primary bg-card-theme/60 hover:border-accent-theme transition-colors shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* ====================================================================
          RESPONSIVE MOBILE / TABLET DRAWER
          ==================================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-b border-theme bg-surface-theme/95 backdrop-blur-2xl shadow-2xl"
          >
            <div className="px-5 py-6 space-y-3">
              {/* Navigation Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname === link.href || pathname.startsWith(link.href + "/");

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all ${
                        isActive
                          ? "bg-accent-theme/15 text-accent-theme border border-accent-theme/35 font-bold shadow-xs"
                          : "text-secondary hover:text-primary hover:bg-card-theme border border-transparent"
                      }`}
                    >
                      <span className={isActive ? "text-accent-theme" : "text-tertiary"}>
                        {link.icon}
                      </span>
                      <span>{link.fullLabel || link.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Utility Row in Mobile Drawer */}
              <div className="pt-3 border-t border-theme/60 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    toggleNavMode();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-theme bg-card-theme text-xs font-medium text-secondary hover:text-accent-theme"
                >
                  <ClassicSidebarIcon size={16} className="text-accent-theme" />
                  <span>Switch to Sidebar</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    triggerReplayIntro();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-theme bg-card-theme text-xs font-medium text-secondary hover:text-accent-theme"
                >
                  <ReplayIcon size={16} className="text-accent-theme" />
                  <span>Replay Intro</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
