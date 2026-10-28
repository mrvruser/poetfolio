"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const subtitles = [
    "The Art of Data Insights and Web Solutions",
    "Where code meets creativity, data becomes insight, and curiosity becomes creation",
    "B.Tech. (Hons.) AI & Data Science • SGPA: 9.76 | CGPA: 8.85",
    "Executive Head @ MSEC-IIF • IIT Bombay NEC Track Lead",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [subtitles.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Typographic Narrative & Actions (60% width) */}
        <div className="w-full lg:w-3/5 text-center lg:text-left space-y-7">
          
          {/* Eyebrow Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-theme bg-surface-theme/90 backdrop-blur-md shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-theme">
              Aspiring AI & Data Science Professional • Creative Technologist
            </span>
          </motion.div>

          {/* Large Fluid Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-serif-title tracking-tight leading-[1.1]">
              VIJAYAREGUNATH <span className="text-accent-theme">T</span>
            </h1>
          </motion.div>

          {/* Rotating Dynamic Subtitle */}
          <div className="h-16 sm:h-12 flex items-center justify-center lg:justify-start">
            <motion.p
              key={subtitleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-base sm:text-xl text-secondary font-medium leading-relaxed"
            >
              {subtitles[subtitleIndex]}
            </motion.p>
          </div>

          {/* Verified Metrics Bento Grid Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2"
          >
            <div className="p-3.5 sm:p-4 rounded-2xl border border-theme bg-card-theme/90 backdrop-blur-sm shadow-sm text-center lg:text-left">
              <span className="text-2xl sm:text-3xl font-bold font-serif-title text-accent-theme block leading-none mb-1">
                9.76
              </span>
              <span className="text-xs text-secondary font-medium">Current SGPA</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl border border-theme bg-card-theme/90 backdrop-blur-sm shadow-sm text-center lg:text-left">
              <span className="text-2xl sm:text-3xl font-bold font-serif-title text-accent-theme block leading-none mb-1">
                8.85
              </span>
              <span className="text-xs text-secondary font-medium">Honours CGPA</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl border border-theme bg-card-theme/90 backdrop-blur-sm shadow-sm text-center lg:text-left">
              <span className="text-2xl sm:text-3xl font-bold font-serif-title text-accent-theme block leading-none mb-1">
                4×
              </span>
              <span className="text-xs text-secondary font-medium">SIH Finalist</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl border border-theme bg-card-theme/90 backdrop-blur-sm shadow-sm text-center lg:text-left">
              <span className="text-2xl sm:text-3xl font-bold font-serif-title text-accent-theme block leading-none mb-1">
                6
              </span>
              <span className="text-xs text-secondary font-medium">IIT/IISc Elites</span>
            </div>
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-md inline-flex items-center gap-2"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "#08090C",
                boxShadow: "0 0 22px var(--accent-glow)",
              }}
            >
              <span>Explore Creations</span>
              <span>↓</span>
            </a>

            <a
              href="#odyssey"
              className="px-6 py-3.5 rounded-2xl font-semibold text-sm border border-theme bg-surface-theme/80 hover:bg-surface-theme hover:scale-105 transition-all duration-300 text-primary"
            >
              The Learning Odyssey
            </a>

            <a
              href="/resume.pdf"
              download="T_VIJAYAREGUNATH_RESUME.pdf"
              className="px-6 py-3.5 rounded-2xl font-semibold text-sm border border-theme bg-surface-theme/50 hover:border-cyan-400 hover:text-accent-theme hover:scale-105 transition-all duration-300 text-secondary inline-flex items-center gap-2"
              title="Download official verified 1-page placement resume (PDF)"
            >
              <span>Download Resume</span>
              <span>📄</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Portrait Flip Card (40% width) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full sm:w-80 lg:w-96 flex justify-center perspective-1000"
        >
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative w-72 h-[380px] sm:w-80 sm:h-[420px] cursor-pointer select-none group"
            title="Click to flip portrait card"
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full relative rounded-3xl p-3 border shadow-2xl transition-all"
              style={{
                transformStyle: "preserve-3d",
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-accent)",
                boxShadow: "0 25px 50px -15px var(--accent-glow)",
              }}
            >
              {/* FRONT: Authentic Portrait */}
              <div
                className="absolute inset-3 rounded-2xl overflow-hidden flex flex-col justify-between"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative w-full h-full bg-slate-900">
                  <Image
                    src="/persona/VR_Photo_Linkedin_Profile.jpg"
                    alt="Vijayaregunath T — Professional Portrait"
                    fill
                    sizes="(max-width: 768px) 300px, 350px"
                    priority
                    className="object-cover object-top filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  {/* Portrait Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-lg font-bold font-serif-title leading-tight">Vijayaregunath T</p>
                    <p className="text-xs text-cyan-300 font-medium">B.Tech. (Hons.) AI & Data Science</p>
                    <p className="text-[11px] text-gray-300 mt-1">MSEC • Anna University</p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white/90 border border-white/20">
                  Tap to flip ↻
                </div>
              </div>

              {/* BACK: Executive Persona & Credentials */}
              <div
                className="absolute inset-3 rounded-2xl p-6 flex flex-col justify-between"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  backgroundColor: "var(--bg-surface)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-theme pb-3 mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-accent-theme block">
                        Verified Credentials
                      </span>
                      <h3 className="font-bold font-serif-title text-lg">Vijayaregunath T</h3>
                    </div>
                    <span className="text-2xl">🎓</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-2.5 rounded-xl border border-theme bg-card-theme">
                      <span className="text-[10px] text-secondary font-semibold block uppercase">Institutional Leadership</span>
                      <strong className="text-accent-theme text-sm">Executive Head @ MSEC-IIF</strong>
                      <p className="text-[11px] text-secondary mt-0.5">MSME & DPIIT incubation governance</p>
                    </div>

                    <div className="p-2.5 rounded-xl border border-theme bg-card-theme">
                      <span className="text-[10px] text-secondary font-semibold block uppercase">IIT Bombay Track</span>
                      <strong className="text-accent-theme text-sm">NEC Advanced Lead @ EDC</strong>
                      <p className="text-[11px] text-secondary mt-0.5">100% milestone completion & 12 blogs</p>
                    </div>

                    <div className="p-2.5 rounded-xl border border-theme bg-card-theme">
                      <span className="text-[10px] text-secondary font-semibold block uppercase">Cultural Representation</span>
                      <strong className="text-accent-theme text-sm">State Chorus & Poetry 2nd Prize</strong>
                      <p className="text-[11px] text-secondary mt-0.5">MY Bharat Nasha Mukt Yuva (VIT Chennai)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-theme text-center">
                  <span className="text-[11px] text-accent-theme uppercase tracking-wider font-semibold">
                    Tap to return ↻
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
