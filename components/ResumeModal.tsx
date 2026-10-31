"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DocumentResumeIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  SparklesIcon,
  SkillsAIIcon
} from "@/components/Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] rounded-[2rem] border border-theme bg-surface-theme shadow-2xl flex flex-col overflow-hidden"
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border-subtle)",
          }}
        >
          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-theme flex items-center justify-between bg-card-theme/50 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border border-theme bg-surface-theme flex items-center justify-center text-accent-theme">
                <DocumentResumeIcon size={20} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-serif-title text-primary">
                  Official Verified Curriculum Vitae
                </h3>
                <p className="text-xs text-secondary">
                  T. Vijayaregunath • Verified Academic & Technical Placement Profile
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-theme bg-surface-theme flex items-center justify-center text-secondary hover:text-primary transition-colors text-sm"
                aria-label="Close resume viewer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Modal Body / Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-primary">
            {/* Contact & Identity Strip */}
            <div className="p-5 rounded-2xl border border-theme bg-card-theme/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-theme">
                  Candidate Dossier
                </span>
                <h2 className="text-2xl font-bold font-serif-title text-primary mt-0.5">
                  T. VIJAYAREGUNATH
                </h2>
                <p className="text-xs sm:text-sm font-medium text-secondary mt-1">
                  B.Tech. (Hons.) Artificial Intelligence & Data Science | Entry-Level AI/ML & Full-Stack Engineer
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-secondary">
                  <span className="inline-flex items-center gap-1.5">
                    <LocationIcon size={13} className="text-accent-theme" />
                    Ramanathapuram, Tamil Nadu, India
                  </span>
                  <a
                    href="mailto:vijayaregunatht@gmail.com"
                    className="inline-flex items-center gap-1.5 hover:text-accent-theme"
                  >
                    <EmailIcon size={13} className="text-accent-theme" />
                    vijayaregunatht@gmail.com
                  </a>
                  <a
                    href="https://github.com/mrvruser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent-theme"
                  >
                    <GitHubIcon size={13} className="text-accent-theme" />
                    github.com/mrvruser
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vijayaregunath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent-theme"
                  >
                    <LinkedInIcon size={13} className="text-accent-theme" />
                    linkedin.com/in/vijayaregunath
                  </a>
                </div>
              </div>

              {/* Fast Download Bar */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                <a
                  href="/resume.pdf"
                  download="T_VIJAYAREGUNATH_RESUME.pdf"
                  className="px-4 py-2.5 rounded-xl bg-accent-theme text-white text-xs font-bold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
                >
                  <DocumentResumeIcon size={15} />
                  <span>Download PDF</span>
                </a>
                <a
                  href="/T_VIJAYAREGUNATH_RESUME.docx"
                  download="T_VIJAYAREGUNATH_RESUME.docx"
                  className="px-4 py-2.5 rounded-xl border border-theme bg-surface-theme text-primary text-xs font-bold inline-flex items-center justify-center gap-2 hover:border-accent-theme transition-colors shadow-xs"
                >
                  <ExternalLinkIcon size={14} />
                  <span>Download Word (.docx)</span>
                </a>
              </div>
            </div>

            {/* Academic Standing */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-theme" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent-theme">
                  Education & Academic Standing
                </h4>
              </div>
              <div className="p-5 rounded-2xl border border-theme bg-surface-theme/80 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="text-base font-bold text-primary">
                    B.Tech. in Artificial Intelligence & Data Science (Honours)
                  </h5>
                  <span className="text-xs font-mono font-bold text-accent-theme">
                    2023 – 2027 (Expected)
                  </span>
                </div>
                <p className="text-xs text-secondary font-medium">
                  Mohamed Sathak Engineering College (MSEC), Kilakarai — Anna University
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-card-theme border border-theme font-bold text-accent-theme">
                    Current Semester SGPA: 9.76 / 10.0
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-card-theme border border-theme font-bold text-primary">
                    Cumulative CGPA: 8.85 / 10.0 (Up to 6th Semester)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-card-theme border border-theme text-secondary">
                    Standing: Honours Degree Track • Zero History of Arrears
                  </span>
                </div>
              </div>
            </div>

            {/* SWAYAM-NPTEL National Specialization */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-theme" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent-theme">
                  SWAYAM-NPTEL National Domain Certification in Data Science
                </h4>
              </div>
              <div className="p-5 rounded-2xl border border-theme bg-surface-theme/80 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-theme/60 pb-3">
                  <span className="text-xs font-bold text-primary">
                    6 Multi-Semester Intensive Courses (415 Total Marks) • IIT Madras, IIT Roorkee, IISc, IIT Bombay, IIT Delhi
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-accent-theme/15 text-accent-theme border border-accent-theme/30">
                    Discipline Star & Believer
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl border border-theme bg-card-theme/50">
                    <span className="font-bold text-primary block">Python for Data Science</span>
                    <span className="text-secondary text-[11px]">IIT Madras • 82% (Elite + Silver)</span>
                  </div>
                  <div className="p-3 rounded-xl border border-theme bg-card-theme/50">
                    <span className="font-bold text-primary block">Data Analytics with Python</span>
                    <span className="text-secondary text-[11px]">IIT Roorkee • 75% (Elite + Silver)</span>
                  </div>
                  <div className="p-3 rounded-xl border border-theme bg-card-theme/50">
                    <span className="font-bold text-primary block">Foundations of Deep Learning</span>
                    <span className="text-secondary text-[11px]">IISc Bangalore • 61% (Elite)</span>
                  </div>
                  <div className="p-3 rounded-xl border border-theme bg-card-theme/50">
                    <span className="font-bold text-primary block">Learning Analytics Tools</span>
                    <span className="text-secondary text-[11px]">IIT Bombay • 69% (Elite)</span>
                  </div>
                  <div className="p-3 rounded-xl border border-theme bg-card-theme/50">
                    <span className="font-bold text-primary block">Intro to Machine Learning</span>
                    <span className="text-secondary text-[11px]">IIT Madras • 66% (Elite)</span>
                  </div>
                  <div className="p-3 rounded-xl border border-theme bg-card-theme/50">
                    <span className="font-bold text-primary block">Intro to Large Language Models (LLMs)</span>
                    <span className="text-secondary text-[11px]">IIT Delhi & IIT Bombay • 62% (Elite)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Technical Stack */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-theme" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent-theme">
                  Technical Arsenal
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl border border-theme bg-surface-theme/80 space-y-1">
                  <span className="font-bold text-accent-theme block text-[11px] uppercase tracking-wider">
                    Programming & Languages
                  </span>
                  <p className="text-secondary text-xs leading-relaxed">
                    Python (NumPy, Pandas, SciPy), C/C++, Java, SQL (PostgreSQL, MySQL), TypeScript, JavaScript.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-theme bg-surface-theme/80 space-y-1">
                  <span className="font-bold text-accent-theme block text-[11px] uppercase tracking-wider">
                    AI, ML & Data Science
                  </span>
                  <p className="text-secondary text-xs leading-relaxed">
                    PyTorch, TensorFlow, Scikit-Learn, OpenCV, Hugging Face Transformers, LangChain, RAG architectures.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-theme bg-surface-theme/80 space-y-1">
                  <span className="font-bold text-accent-theme block text-[11px] uppercase tracking-wider">
                    Web & Systems
                  </span>
                  <p className="text-secondary text-xs leading-relaxed">
                    Next.js, React, Node.js, FastAPI, Flask, Tailwind CSS, Three.js, Docker, Git, Linux, AWS Cloud.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Flagship Projects */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-theme" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent-theme">
                  Production Engineering Projects
                </h4>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-theme bg-surface-theme/80">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-primary">
                      ATTS — Academic Task & Compliance Tracking System
                    </h5>
                    <a
                      href="https://github.com/mrvruser/ATTS-IQAC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent-theme hover:underline inline-flex items-center gap-1"
                    >
                      <GitHubIcon size={12} />
                      <span>mrvruser/ATTS-IQAC</span>
                    </a>
                  </div>
                  <p className="text-xs text-secondary mt-1 leading-relaxed">
                    Full-stack administrative platform governing 9 NAAC/NBA criteria for college IQAC, featuring real-time compliance matrices and automated faculty reporting.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-theme bg-surface-theme/80">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-primary">
                      Credit Score & Financial Risk Classification Model
                    </h5>
                    <a
                      href="https://github.com/mrvruser/Credit-Score-model-Task1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent-theme hover:underline inline-flex items-center gap-1"
                    >
                      <GitHubIcon size={12} />
                      <span>mrvruser/Credit-Score-model-Task1</span>
                    </a>
                  </div>
                  <p className="text-xs text-secondary mt-1 leading-relaxed">
                    Machine learning risk classification pipeline analyzing historical credit behavior, customer debt-to-income ratios, and loan default probabilities.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-theme bg-surface-theme/80">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-primary">
                      Flipkart E-Commerce Data Analytics Pipeline
                    </h5>
                    <a
                      href="https://github.com/mrvruser/flipkart-product-analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent-theme hover:underline inline-flex items-center gap-1"
                    >
                      <GitHubIcon size={12} />
                      <span>mrvruser/flipkart-product-analysis</span>
                    </a>
                  </div>
                  <p className="text-xs text-secondary mt-1 leading-relaxed">
                    End-to-end data engineering scraper and statistical analytics pipeline uncovering pricing distortions and discount patterns across e-commerce categories.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership & Institutional Governance */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-theme" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent-theme">
                  Leadership & Institutional Governance
                </h4>
              </div>
              <div className="p-5 rounded-2xl border border-theme bg-surface-theme/80 space-y-2 text-xs text-secondary leading-relaxed">
                <p>
                  • <strong>Executive Head — MSEC-IIF:</strong> Directed institution-wide innovation initiatives and represented college at Tamil Nadu Global Startup Summit (TNGSS) and GENESIS.
                </p>
                <p>
                  • <strong>IIT Bombay NEC (Advanced Track):</strong> Led the institutional team through the National Entrepreneurship Challenge, publishing 12 structured enterprise case studies.
                </p>
                <p>
                  • <strong>Student Governance:</strong> Founded the <em>Campus Career Committee</em> and <em>Hostel Welfare Committee</em>, establishing institutional communication channels between student body and administration.
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-theme flex flex-wrap items-center justify-between gap-3 bg-card-theme/50 backdrop-blur-md">
            <span className="text-[11px] text-tertiary font-mono">
              Verified Dossier • Anna University & NPTEL Synchronized
            </span>

            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download="T_VIJAYAREGUNATH_RESUME.pdf"
                className="px-4 py-2 rounded-xl bg-accent-theme text-white text-xs font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <DocumentResumeIcon size={14} />
                <span>Save PDF</span>
              </a>
              <a
                href="/T_VIJAYAREGUNATH_RESUME.docx"
                download="T_VIJAYAREGUNATH_RESUME.docx"
                className="px-4 py-2 rounded-xl border border-theme bg-surface-theme text-xs font-bold text-primary inline-flex items-center gap-2 hover:border-accent-theme transition-colors"
              >
                <ExternalLinkIcon size={13} />
                <span>Save DOCX</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
