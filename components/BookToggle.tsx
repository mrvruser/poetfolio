"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookThemeIcon, BrainThemeIcon } from "@/components/Icons";

interface BookToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function BookToggle({ className = "", showLabel = true }: BookToggleProps) {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("poetfolio_theme");
    if (saved) {
      const darkActive = saved === "dark";
      setIsDark(darkActive);
      document.documentElement.classList.toggle("dark", darkActive);
    } else {
      // Default to technological dark mode as established in Poetfolio identity
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("poetfolio_theme", nextDark ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div
        className={`w-11 h-11 rounded-2xl border border-cyan-400/30 bg-[#101319] flex items-center justify-center opacity-80 ${className}`}
        aria-hidden="true"
      >
        <span className="w-5 h-5 rounded-full border border-cyan-400/40 animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Theme World Pill Indicator (Responsive) */}
      {showLabel && (
        <span
          className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 backdrop-blur-md border shadow-sm"
          style={{
            borderColor: isDark ? "rgba(0, 245, 212, 0.25)" : "rgba(184, 134, 11, 0.3)",
            backgroundColor: isDark ? "rgba(16, 19, 25, 0.75)" : "rgba(234, 219, 197, 0.8)",
            color: isDark ? "#00F5D4" : "#B8860B",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: isDark ? "#00F5D4" : "#B8860B",
              boxShadow: isDark ? "0 0 8px #00F5D4" : "0 0 8px #B8860B",
            }}
          />
          {isDark ? "Digital World" : "Literary World"}
        </span>
      )}

      {/* Interactive Morphing Toggle Button */}
      <motion.button
        type="button"
        onClick={toggleTheme}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTheme();
          }
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden shadow-md group"
        style={{
          backgroundColor: isDark ? "rgba(16, 19, 25, 0.9)" : "rgba(244, 232, 210, 0.9)",
          borderColor: isDark ? "#00F5D4" : "#B8860B",
          boxShadow: isDark
            ? "0 0 18px rgba(0, 245, 212, 0.35)"
            : "0 0 18px rgba(184, 134, 11, 0.28)",
        }}
        aria-label={`Switch to ${isDark ? "Literary World (Book)" : "Digital World (Brain)"}`}
        title={`Toggle universe: currently in ${isDark ? "Digital World (Dark)" : "Literary World (Light)"}`}
      >
        {/* Subtle radial ambient background glow */}
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-300 group-hover:opacity-75"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(0, 245, 212, 0.25) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(184, 134, 11, 0.25) 0%, transparent 70%)",
          }}
        />

        {/* Animate Presence between Book and Brain */}
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="brain"
              initial={{ rotate: -70, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 70, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[#00F5D4] flex items-center justify-center drop-shadow-[0_0_8px_rgba(0,245,212,0.6)]"
            >
              <BrainThemeIcon size={24} strokeWidth={1.8} />
            </motion.div>
          ) : (
            <motion.div
              key="book"
              initial={{ rotate: 70, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -70, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[#B8860B] flex items-center justify-center drop-shadow-[0_0_6px_rgba(184,134,11,0.5)]"
            >
              <BookThemeIcon size={24} strokeWidth={1.8} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
