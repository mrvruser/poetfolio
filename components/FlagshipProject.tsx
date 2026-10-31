"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreationsIcon,
  GitHubIcon,
  ExternalLinkIcon,
  SparklesIcon,
  ArrowRightIcon,
  DocumentResumeIcon,
} from "@/components/Icons";

export default function FlagshipProject() {
  const [activeTab, setActiveTab] = useState<"architecture" | "problem" | "features">("architecture");
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);

  const keyFeatures = [
    {
      title: "9 NAAC/NBA Criteria Modules",
      desc: "Structured evaluation pipelines governing curricular aspects, teaching-learning, research, infrastructure, and institutional values.",
    },
    {
      title: "Role-Based Access Control (RBAC)",
      desc: "Secure multi-tier authorization distinguishing Faculty contributors, Department Heads, and IQAC Central Executive Administrators.",
    },
    {
      title: "Real-Time Compliance Aggregation",
      desc: "Dynamic computation matrices translating departmental faculty uploads into consolidated institutional accreditation readiness scores.",
    },
    {
      title: "Evidence Document Pipeline",
      desc: "Secure cryptographic file indexing ensuring every reported academic publication or event has immutable verification proof.",
    },
  ];

  return (
    <section
      id="featured-application"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[140px]"
        style={{ background: "var(--accent-glow)" }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme bg-surface-theme/80 backdrop-blur-md mb-4 shadow-xs">
          <CreationsIcon size={16} className="text-accent-theme" />
          <span className="text-xs uppercase tracking-widest font-bold text-accent-theme">
            Featured Enterprise Application
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title tracking-tight text-primary">
          ATTS — Academic Task Tracking System
        </h2>
        <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
          An institutional-scale governance platform designed and built for our college Internal Quality Assurance Cell (IQAC), automating multi-criteria national accreditation compliance.
        </p>
      </div>

      {/* Main Enterprise Showcase Container */}
      <div
        className="relative z-10 rounded-[2.5rem] border border-theme p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
        style={{
          backgroundColor: "var(--glass-card-bg)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Architecture & Interactive Visual (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-theme/15 text-accent-theme border border-accent-theme/30">
                  IQAC Institutional Production
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-theme bg-surface-theme text-primary">
                  NAAC / NBA Governance
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={() => setIsDiagramOpen(true)}
                  className="px-3 py-1 rounded-lg border border-theme bg-surface-theme hover:border-accent-theme text-secondary hover:text-primary transition-all flex items-center gap-1.5"
                >
                  <span>Fullscreen Architecture</span>
                  <ExternalLinkIcon size={12} />
                </button>
              </div>
            </div>

            {/* Architecture Diagram Interactive Container */}
            <div
              onClick={() => setIsDiagramOpen(true)}
              className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-theme bg-black/40 shadow-inner cursor-pointer group"
              title="Click to inspect full architecture schematic"
            >
              <Image
                src="/portfolio_assets/projects/atts-architecture.svg"
                alt="ATTS System Architecture Diagram & Data Science Ingestion Pipeline"
                fill
                className="object-contain p-4 group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                <span className="text-xs text-white font-medium bg-black/70 backdrop-blur-xs px-3 py-1 rounded-lg">
                  System Architecture Schematic (Verified Design)
                </span>
                <span className="text-xs text-white/80 font-mono">Zoom In</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent-theme block">
                Enterprise Technology Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "PostgreSQL Relational DB",
                  "FastAPI REST Microservice",
                  "Next.js App Router",
                  "Tailwind CSS v4",
                  "JWT Authentication",
                  "RBAC Authorization",
                  "Docker Containerization",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-xl border border-theme bg-surface-theme/80 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Problem, Solution & Feature Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* View Switcher Tabs */}
            <div className="inline-flex p-1 rounded-xl border border-theme bg-surface-theme text-xs font-medium w-full">
              <button
                onClick={() => setActiveTab("architecture")}
                className={`flex-1 py-2 rounded-lg text-center transition-all ${
                  activeTab === "architecture"
                    ? "bg-accent-theme text-white font-bold shadow-xs"
                    : "text-secondary hover:text-primary"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("problem")}
                className={`flex-1 py-2 rounded-lg text-center transition-all ${
                  activeTab === "problem"
                    ? "bg-accent-theme text-white font-bold shadow-xs"
                    : "text-secondary hover:text-primary"
                }`}
              >
                Problem & Solution
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`flex-1 py-2 rounded-lg text-center transition-all ${
                  activeTab === "features"
                    ? "bg-accent-theme text-white font-bold shadow-xs"
                    : "text-secondary hover:text-primary"
                }`}
              >
                Core Modules
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === "architecture" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-primary">
                  Eliminating Accreditation Bottlenecks
                </h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  Developed in direct collaboration with college administrative leadership. ATTS transforms weeks of manual spreadsheet compilation into an automated, verifiable real-time audit ledger across all teaching departments.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl border border-theme bg-surface-theme/60">
                    <span className="text-2xl font-bold font-serif-title text-accent-theme block">9</span>
                    <span className="text-[11px] text-secondary font-medium">Accreditation Criteria</span>
                  </div>
                  <div className="p-3.5 rounded-2xl border border-theme bg-surface-theme/60">
                    <span className="text-2xl font-bold font-serif-title text-primary block">100%</span>
                    <span className="text-[11px] text-secondary font-medium">Digital Audit Trail</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Problem & Solution */}
            {activeTab === "problem" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="p-4 rounded-2xl border border-red-500/20 bg-red-500/5 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 block">
                    Institutional Pain Point
                  </span>
                  <p className="text-xs text-secondary leading-relaxed">
                    Faculty submissions for NAAC/NBA criteria were scattered across paper documents, personal drives, and email attachments, resulting in data loss and audit panic before national inspections.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-accent-theme/30 bg-accent-theme/5 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent-theme block">
                    Engineered Solution
                  </span>
                  <p className="text-xs text-secondary leading-relaxed">
                    A centralized PostgreSQL ledger where faculty upload evidence directly mapped to criteria targets, with multi-stage verification workflows and exportable NAAC compliance tables.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Core Modules */}
            {activeTab === "features" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {keyFeatures.map((feat) => (
                  <div
                    key={feat.title}
                    className="p-3.5 rounded-xl border border-theme bg-surface-theme/60 space-y-0.5"
                  >
                    <h5 className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <SparklesIcon size={12} className="text-accent-theme" />
                      <span>{feat.title}</span>
                    </h5>
                    <p className="text-[11px] text-secondary leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-theme flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/mrvruser/ATTS-IQAC"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-accent-theme text-white text-xs font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
              >
                <GitHubIcon size={16} />
                <span>View Repository on GitHub</span>
                <ExternalLinkIcon size={12} />
              </a>

              <span className="text-[11px] text-tertiary">
                Institutional Internal Deployment
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Architecture Diagram Modal */}
      <AnimatePresence>
        {isDiagramOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl rounded-3xl border border-theme bg-surface-theme p-6 sm:p-8 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
              style={{
                backgroundColor: "var(--bg-primary)",
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-theme">
                <div>
                  <h3 className="text-xl font-bold font-serif-title text-primary">
                    ATTS Architecture & Ingestion Pipeline Schematic
                  </h3>
                  <p className="text-xs text-secondary">
                    Role-Based Flow • PostgreSQL Criteria Database • Verification Engine
                  </p>
                </div>
                <button
                  onClick={() => setIsDiagramOpen(false)}
                  className="w-9 h-9 rounded-full border border-theme bg-surface-theme flex items-center justify-center text-secondary hover:text-primary"
                  aria-label="Close architecture modal"
                >
                  ✕
                </button>
              </div>

              <div className="relative w-full flex-1 min-h-[400px] my-4 rounded-2xl overflow-hidden bg-black/50 border border-theme flex items-center justify-center p-2">
                <Image
                  src="/portfolio_assets/projects/atts-architecture.svg"
                  alt="ATTS Fullscreen System Architecture Diagram"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="pt-4 border-t border-theme flex items-center justify-between">
                <span className="text-xs text-secondary font-mono">
                  Schema: NAAC C1–C9 • RBAC Engine • JWT Middleware
                </span>
                <a
                  href="https://github.com/mrvruser/ATTS-IQAC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-accent-theme text-white text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <GitHubIcon size={14} />
                  <span>Explore Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
