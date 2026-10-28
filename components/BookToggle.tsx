"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BookToggle() {
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
      // Default to dark mode as requested in tech identity
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
      <div className="fixed top-5 right-5 z-50 w-12 h-12 rounded-xl border border-cyan-400/40 bg-[#101217]" />
    );
  }

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3">
      {/* Theme World Label Pill (Desktop Hint) */}
      <span className="hidden md:inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 backdrop-blur-md border shadow-sm border-theme bg-surface-theme text-secondary">
        {isDark ? "Technological World" : "Literary World"}
      </span>

      <motion.button
        type="button"
        onClick={toggleTheme}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTheme();
          }
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={{ rotateY: isDark ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-12 h-12 flex items-center justify-center rounded-xl border transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          transformStyle: "preserve-3d",
          backgroundColor: isDark ? "#101217" : "#EADECA",
          borderColor: isDark ? "#00F5D4" : "#B8860B",
          boxShadow: isDark
            ? "0 0 16px rgba(0, 245, 212, 0.45)"
            : "0 0 16px rgba(184, 134, 11, 0.35)",
        }}
        aria-label={`Switch to ${isDark ? "Literary World (Light)" : "Technological World (Dark)"}`}
        title={`Toggle to ${isDark ? "Literary Mode" : "Technological Mode"}`}
      >
        {/* FRONT: BOOK (Visible when rotateY is 0 -> Light Mode) */}
        <div
          className="absolute inset-0 flex items-center justify-center text-xl select-none"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span role="img" aria-label="Book Icon" className="drop-shadow-sm">
            📖
          </span>
        </div>

        {/* BACK: BRAIN / NEURAL TECH (Visible when rotateY is 180 -> Dark Mode) */}
        <div
          className="absolute inset-0 flex items-center justify-center text-xl select-none"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <span
            role="img"
            aria-label="Neural Brain Icon"
            style={{
              filter: "drop-shadow(0 0 6px #00F5D4)",
            }}
          >
            🧠
          </span>
        </div>
      </motion.button>
    </div>
  );
}
