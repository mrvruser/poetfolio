"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SkillsAIIcon,
  SparklesIcon,
  OdysseyCertifidesIcon,
  CreationsIcon,
  SkillsLeadershipIcon,
  ArrowRightIcon,
  GitHubIcon,
  ExternalLinkIcon,
  DocumentResumeIcon,
} from "@/components/Icons";

export default function EditorialBento() {
  return (
    <section
      id="editorial-bento"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-15 blur-[120px]"
        style={{ background: "var(--accent-glow)" }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme bg-surface-theme/80 backdrop-blur-md mb-4 shadow-xs">
          <SparklesIcon size={14} className="text-accent-theme" />
          <span className="text-xs uppercase tracking-widest font-bold text-accent-theme">
            Executive Profile & Verified Pillars
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title tracking-tight text-primary">
          Engineering Mind, Literary Soul
        </h2>
        <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
          An editorial synthesis of academic precision, national certifications, institutional leadership, and practical software engineering.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        
        {/* PANEL 1: Academic Standing & Anna University Honours (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 rounded-3xl border border-theme p-6 sm:p-8 flex flex-col justify-between group hover:border-accent-theme transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: "var(--glass-card-bg)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-theme text-accent-theme bg-surface-theme">
                Anna University Honours Track
              </span>
              <span className="text-xs font-mono text-secondary">2023–2027</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-primary mb-2">
              9.76 SGPA / 8.85 CGPA
            </h3>
            <p className="text-xs sm:text-sm font-medium text-accent-theme mb-3">
              B.Tech. in Artificial Intelligence & Data Science (Honours)
            </p>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Consistently sustained top academic percentile across all semesters at Mohamed Sathak Engineering College (MSEC) with zero history of arrears. Qualified for the elite Anna University Honours degree curriculum.
            </p>

            <div className="grid grid-cols-3 gap-2.5 mt-5 pt-5 border-t border-theme/60 text-center">
              <div className="p-2.5 rounded-xl border border-theme bg-surface-theme/60">
                <span className="text-base sm:text-lg font-bold font-serif-title text-accent-theme block">9.76</span>
                <span className="text-[10px] text-secondary uppercase font-semibold">Current SGPA</span>
              </div>
              <div className="p-2.5 rounded-xl border border-theme bg-surface-theme/60">
                <span className="text-base sm:text-lg font-bold font-serif-title text-primary block">8.85</span>
                <span className="text-[10px] text-secondary uppercase font-semibold">Cumulative CGPA</span>
              </div>
              <div className="p-2.5 rounded-xl border border-theme bg-surface-theme/60">
                <span className="text-base sm:text-lg font-bold font-serif-title text-accent-theme block">0</span>
                <span className="text-[10px] text-secondary uppercase font-semibold">Standing Arrears</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-theme flex items-center justify-between">
            <span className="text-xs text-secondary font-medium">Verified by Controller of Examinations</span>
            <a
              href="#about"
              className="text-xs font-bold text-accent-theme hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore Origin</span>
              <ArrowRightIcon size={13} />
            </a>
          </div>
        </motion.div>

        {/* PANEL 2: SWAYAM-NPTEL National Specialization (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5 rounded-3xl border border-theme p-6 sm:p-8 flex flex-col justify-between group hover:border-accent-theme transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: "var(--glass-card-bg)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-theme text-accent-theme bg-surface-theme">
                National Accreditation
              </span>
              <OdysseyCertifidesIcon size={18} className="text-accent-theme" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-primary mb-2">
              NPTEL Discipline Star in Data Science
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Awarded domain certification by the Ministry of Education for completing 6 intensive multi-week courses across IIT Madras, IIT Roorkee, IISc Bangalore, IIT Bombay, and IIT Delhi.
            </p>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl border border-theme bg-surface-theme/50">
                <span className="text-primary font-medium">IIT Madras (Python for Data Science)</span>
                <span className="font-bold text-accent-theme">82% (Silver)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl border border-theme bg-surface-theme/50">
                <span className="text-primary font-medium">IIT Roorkee (Data Analytics)</span>
                <span className="font-bold text-accent-theme">75% (Silver)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl border border-theme bg-surface-theme/50">
                <span className="text-primary font-medium">IISc Bangalore (Deep Learning)</span>
                <span className="font-bold text-accent-theme">61% (Elite)</span>
              </div>
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-theme flex items-center justify-between">
            <span className="text-xs font-mono text-tertiary">415 Total Marks</span>
            <a
              href="#data-science-journey"
              className="text-xs font-bold text-accent-theme hover:underline inline-flex items-center gap-1.5"
            >
              <span>View 6 Pathways</span>
              <ArrowRightIcon size={13} />
            </a>
          </div>
        </motion.div>

        {/* PANEL 3: Flagship Enterprise Software (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-5 rounded-3xl border border-theme p-6 sm:p-8 flex flex-col justify-between group hover:border-accent-theme transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: "var(--glass-card-bg)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-theme text-accent-theme bg-surface-theme">
                Flagship Enterprise System
              </span>
              <a
                href="https://github.com/mrvruser/ATTS-IQAC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent-theme transition-colors"
                title="View GitHub Repository"
              >
                <GitHubIcon size={16} />
              </a>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-primary mb-2">
              ATTS — Academic Task Tracking System
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Full-stack institutional compliance governance engine automating 9 NAAC/NBA evaluation criteria for our college Internal Quality Assurance Cell (IQAC), eliminating administrative bottlenecks.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {["PostgreSQL", "Next.js", "FastAPI", "RBAC Auth", "NAAC/NBA"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-theme bg-surface-theme text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-theme flex items-center justify-between">
            <span className="text-xs text-secondary font-medium">9 Criteria Automated</span>
            <a
              href="#featured-application"
              className="text-xs font-bold text-accent-theme hover:underline inline-flex items-center gap-1.5"
            >
              <span>Inspect Architecture</span>
              <ArrowRightIcon size={13} />
            </a>
          </div>
        </motion.div>

        {/* PANEL 4: Institutional Leadership & Hackathons (Span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-4 rounded-3xl border border-theme p-6 sm:p-8 flex flex-col justify-between group hover:border-accent-theme transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: "var(--glass-card-bg)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-theme text-accent-theme bg-surface-theme">
                Leadership & Governance
              </span>
              <SkillsLeadershipIcon size={18} className="text-accent-theme" />
            </div>

            <h3 className="text-xl font-bold font-serif-title text-primary mb-2">
              Executive Head & SIH Finalist
            </h3>
            <ul className="text-xs text-secondary space-y-2 mt-3">
              <li className="flex items-start gap-2">
                <span className="text-accent-theme font-bold">•</span>
                <span><strong>Executive Head — MSEC-IIF:</strong> Directed startup innovation initiatives, representing college at TNGSS and GENESIS summits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-theme font-bold">•</span>
                <span><strong>IIT Bombay NEC Team Lead:</strong> Advanced Track lead intern, publishing 12 structured enterprise blogs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-theme font-bold">•</span>
                <span><strong>4× SIH Finalist (2023–2026):</strong> Shortlisted consecutively across 4 national Smart India Hackathon editions.</span>
              </li>
            </ul>
          </div>

          <div className="pt-5 mt-5 border-t border-theme flex items-center justify-between">
            <span className="text-xs font-mono text-tertiary">4-Year Track Record</span>
            <a
              href="#experience"
              className="text-xs font-bold text-accent-theme hover:underline inline-flex items-center gap-1.5"
            >
              <span>View Timeline</span>
              <ArrowRightIcon size={13} />
            </a>
          </div>
        </motion.div>

        {/* PANEL 5: Multilingual & Literary Roots (Span 3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-3 rounded-3xl border border-theme p-6 sm:p-8 flex flex-col justify-between group hover:border-accent-theme transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: "var(--glass-card-bg)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-theme text-accent-theme bg-surface-theme">
                Humanities
              </span>
              <span className="text-xs font-mono text-secondary">4 Languages</span>
            </div>

            <h3 className="text-xl font-bold font-serif-title text-primary mb-2">
              Linguistic & Creative Roots
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Grounding computational intelligence in classical prose, bilingual poetry, and philosophical inquiry.
            </p>

            <div className="mt-4 space-y-1.5 text-xs">
              <p className="text-primary font-medium"><strong>Tamil</strong> • Native Mother Tongue</p>
              <p className="text-primary font-medium"><strong>English</strong> • Professional Working</p>
              <p className="text-secondary"><strong>Spanish & German</strong> • Beginner</p>
              <div className="pt-2 text-[11px] text-accent-theme font-semibold">
                ★ 2nd Prize in State Slam Poetry
              </div>
            </div>
          </div>

          <div className="pt-5 mt-5 border-t border-theme flex items-center justify-between">
            <span className="text-[11px] text-tertiary">Bibliophile</span>
            <a
              href="#writing"
              className="text-xs font-bold text-accent-theme hover:underline inline-flex items-center gap-1.5"
            >
              <span>Read Essays</span>
              <ArrowRightIcon size={13} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
