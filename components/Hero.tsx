"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ResumeModal from "@/components/ResumeModal";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DocumentResumeIcon,
  CreationsIcon,
  ContactIcon,
  LinkedInIcon,
  GitHubIcon,
  XTwitterIcon,
  EmailIcon,
  SparklesIcon,
} from "@/components/Icons";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const verifiedMetrics = [
    { value: "9.76", label: "Current SGPA", sub: "10.0 Scale" },
    { value: "8.85", label: "Honours CGPA", sub: "Zero Arrears" },
    { value: "4×", label: "SIH Finalist", sub: "2023–2026" },
    { value: "6", label: "IIT/IISc Elites", sub: "Discipline Star" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mr-vijayaregunath-t-77b427316",
      icon: <LinkedInIcon size={16} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/mrvruser",
      icon: <GitHubIcon size={16} />,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/RhConqueror?t=qszqmX_cMg6LmDDkZA&s=08",
      icon: <XTwitterIcon size={16} />,
    },
    {
      name: "Email",
      href: "mailto:vijayaregunath005@gmail.com",
      icon: <EmailIcon size={16} />,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex flex-col justify-center pt-28 pb-16 px-5 sm:px-8 lg:px-12 xl:px-16 overflow-hidden"
    >
      {/* Ambient background lighting gradient */}
      <div className="absolute inset-0 pointer-events-none hero-dark-gradient dark:block hidden" />
      <div className="absolute inset-0 pointer-events-none hero-literary-gradient dark:hidden block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 xl:gap-20 my-auto">
        
        {/* ===================================================================
            LEFT COLUMN: TYPOGRAPHIC IDENTITY & ACTIONS (60% on desktop)
            =================================================================== */}
        <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6 sm:space-y-7">
          
          {/* Eyebrow Identity Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-theme bg-surface-theme/80 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-theme opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-theme" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-accent-theme">
              Aspiring AI & Data Science Professional • Bibliophile
            </span>
          </motion.div>

          {/* Master Name & Distinction */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold font-serif-title tracking-tight leading-[1.08]">
              VIJAYAREGUNATH <span className="text-accent-theme">T</span>
            </h1>
            <p className="text-lg sm:text-2xl font-serif-title italic text-secondary font-medium tracking-normal">
              The Art of Data Insights and Web Solutions
            </p>
          </motion.div>

          {/* Poetic & Engineering Philosophy Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base lg:text-lg text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
          >
            Where code meets creativity, data becomes insight, and curiosity becomes creation. Rooted in classical literature, mathematical algorithms, and neural architectures — engineering solutions with humanistic purpose.
          </motion.p>

          {/* Verified Academic & Leadership Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 pt-1"
          >
            {verifiedMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-3.5 rounded-2xl border border-theme bg-card-theme/80 backdrop-blur-sm shadow-sm text-center lg:text-left transition-all duration-300 hover:border-accent-theme group"
              >
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-2xl sm:text-3xl font-bold font-serif-title text-accent-theme leading-none">
                    {metric.value}
                  </span>
                </div>
                <p className="text-xs font-semibold text-primary mt-1 leading-tight">
                  {metric.label}
                </p>
                <p className="text-[10px] text-tertiary font-mono">
                  {metric.sub}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
          >
            {/* Primary CTA: Explore Creations */}
            <a
              href="#projects"
              className="px-6 sm:px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md inline-flex items-center gap-2 group"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "#08090C",
                boxShadow: "0 0 24px var(--accent-glow)",
              }}
            >
              <CreationsIcon size={18} strokeWidth={2} />
              <span>Explore My Work</span>
              <ArrowDownIcon
                size={15}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>

            {/* Secondary CTA: Let's Connect */}
            <a
              href="#contact"
              className="px-5 sm:px-6 py-3.5 rounded-2xl font-semibold text-xs sm:text-sm border border-theme bg-surface-theme/80 hover:bg-surface-theme hover:border-accent-theme hover:scale-105 active:scale-95 transition-all duration-300 text-primary inline-flex items-center gap-2"
            >
              <ContactIcon size={17} />
              <span>Let’s Connect</span>
            </a>

            {/* Tertiary Action: Verified Resume Modal & Download */}
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="px-5 sm:px-6 py-3.5 rounded-2xl font-semibold text-xs sm:text-sm border border-theme bg-card-theme/60 hover:border-accent-theme hover:text-accent-theme hover:scale-105 active:scale-95 transition-all duration-300 text-secondary inline-flex items-center gap-2"
              title="Inspect official verified placement resume & download formats"
            >
              <DocumentResumeIcon size={17} />
              <span>Verified Resume</span>
            </button>
          </motion.div>

          {/* Verified Social Channels Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs text-secondary"
          >
            <span className="text-[11px] uppercase tracking-wider font-semibold text-tertiary mr-1">
              Connect:
            </span>
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-theme bg-surface-theme/60 hover:bg-surface-theme hover:text-accent-theme hover:border-accent-theme transition-all duration-200"
                aria-label={s.name}
              >
                {s.icon}
                <span className="font-medium text-[11px]">{s.name}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ===================================================================
            RIGHT COLUMN: REFINED GLASS-LIKE PERSONAL PORTRAIT (40% on desktop)
            =================================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full sm:w-auto flex justify-center lg:justify-end"
        >
          <div className="relative group select-none">
            
            {/* Ambient Halo Glow behind Frame */}
            <div
              className="absolute -inset-2 sm:-inset-6 rounded-[2.5rem] opacity-50 sm:opacity-65 blur-xl sm:blur-2xl transition-all duration-500 group-hover:opacity-90 pointer-events-none"
              style={{
                background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Decorative Cybernetic / Literary Corner Brackets */}
            <div className="absolute -top-1.5 -left-1.5 sm:-top-2.5 sm:-left-2.5 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-accent-theme rounded-tl-xl pointer-events-none z-20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2.5 sm:-right-2.5 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-accent-theme rounded-br-xl pointer-events-none z-20 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

            {/* Main Glassmorphic Photo Frame */}
            <div
              className="relative w-[256px] h-[328px] sm:w-[320px] sm:h-[410px] md:w-[340px] md:h-[435px] lg:w-[360px] lg:h-[460px] xl:w-[380px] xl:h-[485px] rounded-[2rem] p-3 sm:p-3.5 border transition-all duration-500 shadow-2xl overflow-hidden"
              style={{
                backgroundColor: "var(--glass-card-bg)",
                borderColor: "var(--border-accent)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Inner Photographic Canvas */}
              <div className="relative w-full h-full rounded-[1.4rem] overflow-hidden bg-slate-900 border border-theme">
                {!imgError ? (
                  <Image
                    src="/persona/ChatGPT_Image_Aug_22_2026_10_33_58_PM.png"
                    alt="Vijayaregunath T — Aspiring AI & Data Science Professional Portrait"
                    fill
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 340px, 380px"
                    priority
                    quality={92}
                    onError={() => setImgError(true)}
                    className="object-cover object-[center_20%] filter contrast-[1.03] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  /* Elegant Graceful Fallback if image fails to load */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-surface-theme">
                    <div className="w-20 h-20 rounded-full border-2 border-accent-theme flex items-center justify-center mb-4 text-2xl font-serif-title font-bold text-accent-theme">
                      VT
                    </div>
                    <p className="font-serif-title font-bold text-lg text-primary">Vijayaregunath T</p>
                    <p className="text-xs text-accent-theme font-medium mt-1">Aspiring AI & Data Science Professional</p>
                  </div>
                )}

                {/* Subtle Cinematic Vignette Gradient */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,9,12,0.02) 0%, rgba(8,9,12,0.15) 55%, rgba(8,9,12,0.85) 100%)",
                  }}
                />

                {/* Top Corner Identity Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-semibold tracking-wide text-white flex items-center gap-1.5 shadow-sm">
                  <SparklesIcon size={12} className="text-accent-theme" />
                  <span>Honours Track</span>
                </div>

                {/* Bottom Glass Inset Caption Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 text-white shadow-lg transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold font-serif-title leading-tight text-white">
                        Vijayaregunath T
                      </p>
                      <p className="text-[11px] text-cyan-300 font-medium mt-0.5">
                        B.Tech. (Hons.) AI & Data Science
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/15 text-gray-200">
                      Anna Univ.
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Subtle Scroll Down Prompt at the Base */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 w-full flex justify-center pt-8 pb-2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest text-tertiary hover:text-accent-theme transition-colors group"
          aria-label="Scroll to origin story"
        >
          <span className="font-semibold text-[10px]">Explore Origin Story</span>
          <ArrowDownIcon
            size={14}
            className="animate-bounce text-accent-theme mt-0.5 transition-transform group-hover:translate-y-1"
          />
        </a>
      </motion.div>

      {/* Interactive Official Verified Resume Showcase Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
