"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookThemeIcon, BrainThemeIcon, SparklesIcon } from "@/components/Icons";

export default function CinematicOpening({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const handleFinish = useCallback(() => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("poetfolio_intro_played", "true");
    }
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Check reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setReducedMotion(true);
        handleFinish();
        return;
      }

      // Check if already played in this session
      const alreadyPlayed = sessionStorage.getItem("poetfolio_intro_played");
      if (!alreadyPlayed) {
        setIsVisible(true);
      }
    }

    // Global listener to replay intro upon user request
    const handleReplayEvent = () => {
      setIsVisible(true);
      setStage(0);
    };
    window.addEventListener("poetfolio:replay-intro", handleReplayEvent);

    return () => {
      window.removeEventListener("poetfolio:replay-intro", handleReplayEvent);
    };
  }, [handleFinish]);

  // Stage timeline choreography (Refined 3.5s total duration)
  useEffect(() => {
    if (!isVisible || reducedMotion) return;

    // Stage 0 -> 1: Book emergence (500ms)
    const t1 = setTimeout(() => setStage(1), 500);
    // Stage 1 -> 2: Book transforms into Brain/Neural Network (1500ms)
    const t2 = setTimeout(() => setStage(2), 1500);
    // Stage 2 -> 3: Poetfolio Illuminated Wordmark (2500ms)
    const t3 = setTimeout(() => setStage(3), 2500);
    // Stage 3 -> 4: Exit dissolve (3200ms)
    const t4 = setTimeout(() => setStage(4), 3200);
    // Finish (3600ms)
    const t5 = setTimeout(() => handleFinish(), 3600);

    // Silent keyboard listener for Escape and Space keys to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        handleFinish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, reducedMotion, handleFinish]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cinematic-opening-container"
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === 4 ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none"
        style={{
          backgroundColor: "#07080B",
          color: "#FFFFFF",
        }}
        role="dialog"
        aria-label="Poetfolio cinematic introduction"
      >
        {/* Background Atmospheric Glows */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Warm Literary Amber Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: stage >= 1 && stage < 2 ? 0.35 : 0.15,
              scale: stage >= 1 ? 1.1 : 0.8,
            }}
            transition={{ duration: 1.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "#B8860B" }}
          />

          {/* Cyber Neon Cyan Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: stage >= 2 ? 0.4 : 0.1,
              scale: stage >= 2 ? 1.2 : 0.8,
            }}
            transition={{ duration: 1.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "#00F5D4" }}
          />

          {/* Fine Grid Lattice */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Elegant Glass Skip Button (No visible ESC badge, keyboard shortcut remains active) */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30">
          <button
            onClick={handleFinish}
            type="button"
            className="group px-4 py-2 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 hover:border-white/40 backdrop-blur-xl text-xs font-semibold tracking-wider text-white/80 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            aria-label="Skip introduction"
          >
            <span>Skip Intro</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] group-hover:scale-125 transition-transform" />
          </button>
        </div>

        {/* Center Stage Presentation */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl mx-auto">
          {/* Metamorphosis Icon: Book ➔ Brain */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-8 flex items-center justify-center">
            {/* Stage 1: Book Floating & Opening */}
            <AnimatePresence>
              {stage < 2 && (
                <motion.div
                  key="stage-book"
                  initial={{ opacity: 0, scale: 0.6, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center text-[#E5C378]"
                >
                  <div className="p-6 rounded-3xl border border-[#B8860B]/40 bg-[#16120D]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(184,134,11,0.3)]">
                    <BookThemeIcon size={56} strokeWidth={1.5} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stage 2 & 3: Neural Brain Awakening */}
            <AnimatePresence>
              {stage >= 2 && (
                <motion.div
                  key="stage-brain"
                  initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center text-[#00F5D4]"
                >
                  <div className="p-6 rounded-3xl border border-[#00F5D4]/40 bg-[#0B1516]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,245,212,0.4)]">
                    <BrainThemeIcon size={56} strokeWidth={1.5} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dynamic Eyebrow Concept */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 text-[11px] uppercase tracking-widest text-white/70"
          >
            <SparklesIcon size={13} className="text-[#00F5D4]" />
            <span>
              {stage < 2
                ? "The Literary Universe"
                : stage === 2
                ? "The Digital Intelligence"
                : "Two Worlds, One Mind"}
            </span>
          </motion.div>

          {/* Poetfolio Brand Mark */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif-title tracking-tight text-white mb-2"
          >
            POETFOLIO
          </motion.h1>

          {/* Subtitle / Candidate Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base text-white/70 font-medium tracking-wide"
          >
            T. Vijayaregunath • Aspiring AI & Data Science Professional
          </motion.p>

          {/* Animated Progress Bar */}
          <div className="w-48 h-1 rounded-full bg-white/10 mt-8 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "linear" }}
              className="h-full bg-gradient-to-r from-[#B8860B] via-[#00F5D4] to-[#B8860B]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
