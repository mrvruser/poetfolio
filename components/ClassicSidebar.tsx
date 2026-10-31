"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/components/NavigationContext";
import BookToggle from "@/components/BookToggle";
import {
  HomeIcon,
  AboutIcon,
  CreationsIcon,
  OdysseyIcon,
  WritingIcon,
  ContactIcon,
  GalaxyDashboardIcon,
  ClassicSidebarIcon,
  ReplayIcon,
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
  EmailIcon,
} from "@/components/Icons";

export default function ClassicSidebar() {
  const { navMode, setNavMode, sidebarOpen, setSidebarOpen, toggleSidebar } = useNavigation();
  const pathname = usePathname();

  if (navMode !== "sidebar") return null;

  const navItems = [
    { label: "Home", href: "/", icon: <HomeIcon size={20} /> },
    { label: "About", href: "/about", icon: <AboutIcon size={20} /> },
    { label: "Creations", href: "/projects", icon: <CreationsIcon size={20} /> },
    { label: "The Learning Odyssey", href: "/odyssey", icon: <OdysseyIcon size={20} /> },
    { label: "Writing", href: "/writing", icon: <WritingIcon size={20} /> },
    { label: "Contact", href: "/contact", icon: <ContactIcon size={20} /> },
  ];

  const triggerReplayIntro = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("poetfolio:replay-intro"));
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Main Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-screen z-50 flex flex-col justify-between border-r border-theme transition-all duration-300 shadow-xl ${
          sidebarOpen ? "w-[270px]" : "w-[76px]"
        }`}
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-subtle)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
        aria-label="Classic Sidebar Navigation"
      >
        {/* Top Header & Brand */}
        <div className="p-4 sm:p-5 border-b border-theme/60 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 overflow-hidden select-none group"
            title="Poetfolio — Vijayaregunath T"
          >
            <div className="w-10 h-10 shrink-0 rounded-2xl border border-theme bg-card-theme flex items-center justify-center font-serif-title font-bold text-accent-theme group-hover:scale-105 transition-transform shadow-xs">
              VT
            </div>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="whitespace-nowrap"
              >
                <span className="font-serif-title font-bold text-sm tracking-tight text-primary block leading-tight">
                  Vijayaregunath <span className="text-accent-theme">T</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-tertiary">
                  Classic Sidebar
                </span>
              </motion.div>
            )}
          </Link>

          {/* Collapse/Expand Toggle on Desktop */}
          <button
            type="button"
            onClick={toggleSidebar}
            className="p-2 rounded-xl border border-theme/80 bg-surface-theme/80 hover:bg-card-theme text-secondary hover:text-primary transition-colors text-xs"
            title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            aria-label="Toggle sidebar collapse"
          >
            <ClassicSidebarIcon size={16} />
          </button>
        </div>

        {/* Center Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-1.5 no-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-semibold transition-all duration-200 group relative ${
                  isActive
                    ? "bg-accent-theme/15 text-accent-theme border border-accent-theme/35 shadow-xs font-bold"
                    : "text-secondary hover:text-primary hover:bg-card-theme/60 border border-transparent"
                }`}
                title={item.label}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                    isActive ? "text-accent-theme" : "text-secondary group-hover:text-primary"
                  }`}
                >
                  {item.icon}
                </div>

                {sidebarOpen && (
                  <span className="truncate whitespace-nowrap tracking-wide">
                    {item.label}
                  </span>
                )}

                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r bg-accent-theme" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Utility Actions & Switcher */}
        <div className="p-3 sm:p-4 border-t border-theme/60 space-y-3">
          {/* Switch to Galaxy Dashboard Mode */}
          <button
            type="button"
            onClick={() => setNavMode("galaxy")}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border border-theme bg-card-theme/80 hover:border-accent-theme hover:text-accent-theme text-xs font-medium text-secondary transition-all"
            title="Switch back to Galaxy Dashboard horizontal header"
          >
            <GalaxyDashboardIcon size={17} className="shrink-0 text-accent-theme" />
            {sidebarOpen && (
              <span className="truncate whitespace-nowrap">
                Galaxy Dashboard
              </span>
            )}
          </button>

          {/* Replay Cinematic Intro */}
          <button
            type="button"
            onClick={triggerReplayIntro}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border border-theme bg-surface-theme/80 hover:border-accent-theme hover:text-accent-theme text-xs font-medium text-secondary transition-all"
            title="Replay cinematic opening sequence"
          >
            <ReplayIcon size={16} className="shrink-0 text-accent-theme" />
            {sidebarOpen && (
              <span className="truncate whitespace-nowrap">
                Replay Intro
              </span>
            )}
          </button>

          {/* Theme Toggle & Social Strip */}
          <div className="pt-2 flex items-center justify-between gap-2">
            <BookToggle showLabel={false} />

            {sidebarOpen && (
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/mrvruser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-theme bg-surface-theme flex items-center justify-center text-secondary hover:text-accent-theme hover:border-accent-theme transition-colors"
                  title="GitHub Profile (mrvruser)"
                >
                  <GitHubIcon size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mr-vijayaregunath-t-77b427316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl border border-theme bg-surface-theme flex items-center justify-center text-secondary hover:text-accent-theme hover:border-accent-theme transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedInIcon size={14} />
                </a>
                <a
                  href="https://wa.me/918300398072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl border border-theme bg-surface-theme flex items-center justify-center text-secondary hover:text-accent-theme hover:border-accent-theme transition-colors"
                  title="WhatsApp Chat"
                >
                  <WhatsAppIcon size={14} />
                </a>
                <a
                  href="mailto:vijayaregunath005@gmail.com"
                  className="w-8 h-8 rounded-xl border border-theme bg-surface-theme flex items-center justify-center text-secondary hover:text-accent-theme hover:border-accent-theme transition-colors"
                  title="Send Email"
                >
                  <EmailIcon size={14} />
                </a>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Floating Toggle Button for Sidebar when closed on mobile */}
      {!sidebarOpen && (
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-40 w-11 h-11 rounded-2xl border border-theme bg-surface-theme/90 backdrop-blur-md shadow-lg flex items-center justify-center text-primary"
          aria-label="Open sidebar"
        >
          <ClassicSidebarIcon size={20} />
        </button>
      )}
    </>
  );
}
