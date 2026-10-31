"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  SparklesIcon,
  OdysseyCertifidesIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
} from "@/components/Icons";

interface HonourItem {
  id: string;
  title: string;
  award: string;
  issuer: string;
  year: string;
  category: "Academic & Tech" | "Innovation & Venture" | "Cultural & Literary";
  description: string;
  image?: string;
  imageType?: string;
}

const HONOURS_LIST: HonourItem[] = [
  {
    id: "h-discipline-star",
    title: "NPTEL Discipline Star in Data Science",
    award: "National Domain Accreditation (415 Total Marks)",
    issuer: "NPTEL, Ministry of Education, Govt. of India",
    year: "2026",
    category: "Academic & Tech",
    description:
      "Awarded for completing 6 intensive multi-week core and elective courses across IIT Madras, IIT Roorkee, IISc Bangalore, IIT Bombay, and IIT Delhi.",
    image: "/portfolio_assets/gallery/LI-POST-062_LI-POST-062_img_01.jpg",
    imageType: "Verified National Certificate Scan",
  },
  {
    id: "h-nptel-believer",
    title: "NPTEL Believer Distinction",
    award: "Multi-Semester Academic Persistence",
    issuer: "SWAYAM-NPTEL, Govt. of India",
    year: "2025–2026",
    category: "Academic & Tech",
    description:
      "Recognized by NPTEL for sustained academic excellence, continuous course registrations, and high-percentile proctored exam clearances.",
    image: "/portfolio_assets/thumbnails/LI-POST-066_LI-POST-066_doc_cover_0.jpg",
    imageType: "IIT Madras Course Record",
  },
  {
    id: "h-sih-4x",
    title: "4× Consecutive Smart India Hackathon Shortlist",
    award: "College-Level First Rank Screening Shortlist",
    issuer: "Ministry of Education's Innovation Cell (MIC)",
    year: "2023–2026",
    category: "Innovation & Venture",
    description:
      "Selected through four consecutive institutional evaluation cycles to represent MSEC: ShieldConnect (2023), AArACaN (2024), Sports Assess (2025), and HPS-50 (2026).",
    image: "/portfolio_assets/projects/sports-assess-cv.svg",
    imageType: "Kinematics System Visualizer",
  },
  {
    id: "h-slam-poetry",
    title: "2nd Prize in State-Level Slam Poetry",
    award: "State Second Prize & Silver Accolade",
    issuer: "State Youth Cultural & Literary Assembly",
    year: "2024",
    category: "Cultural & Literary",
    description:
      "Honored for original bilingual spoken-word performance fusing classical Tamil verse and contemporary philosophical themes.",
  },
  {
    id: "h-tngss-delegate",
    title: "Institutional Delegate — TNGSS & GENESIS",
    award: "Official Student Delegation Appointment",
    issuer: "StartupTN & Institutional Innovation Council",
    year: "2024–2025",
    category: "Innovation & Venture",
    description:
      "Appointed by college leadership to represent MSEC-IIF at premier startup summits, connecting student ventures with venture capitalists and state incubators.",
  },
];

export default function HonoursShowcase() {
  const [selectedHonour, setSelectedHonour] = useState<HonourItem | null>(null);

  return (
    <section
      id="achievements"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 -right-48 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: "var(--accent-glow)" }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme bg-surface-theme/80 backdrop-blur-md mb-4 shadow-xs">
          <SparklesIcon size={16} className="text-accent-theme" />
          <span className="text-xs uppercase tracking-widest font-bold text-accent-theme">
            Verified Accolades
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title tracking-tight text-primary">
          Honours, Distinctions & Recognition
        </h2>
        <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
          Tangible recognition awarded for academic persistence, national competitive problem solving, and literary excellence.
        </p>
      </div>

      {/* Honours Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HONOURS_LIST.map((honour) => (
          <div
            key={honour.id}
            className="rounded-[2rem] border border-theme p-6 sm:p-7 flex flex-col justify-between group hover:border-accent-theme transition-all duration-300 shadow-sm"
            style={{
              backgroundColor: "var(--glass-card-bg)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            <div>
              {/* Optional Visual Preview */}
              {honour.image && (
                <div
                  onClick={() => setSelectedHonour(honour)}
                  className="relative w-full aspect-16/9 rounded-xl overflow-hidden border border-theme bg-surface-theme mb-4 cursor-pointer group/img"
                >
                  <Image
                    src={honour.image}
                    alt={honour.title}
                    fill
                    className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-2.5">
                    <span className="text-[10px] text-white font-medium bg-black/60 px-2 py-0.5 rounded">
                      Inspect Evidence
                    </span>
                    <ExternalLinkIcon size={12} className="text-white" />
                  </div>
                </div>
              )}

              {/* Tag & Year Bar */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-theme bg-surface-theme text-accent-theme">
                  {honour.category}
                </span>
                <span className="text-xs font-mono font-bold text-secondary">
                  {honour.year}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg font-bold font-serif-title text-primary group-hover:text-accent-theme transition-colors leading-snug">
                {honour.title}
              </h3>
              <p className="text-xs font-semibold text-accent-theme mt-1">
                {honour.award}
              </p>
              <p className="text-[11px] text-tertiary font-mono mt-0.5">
                {honour.issuer}
              </p>

              <p className="text-xs text-secondary mt-3 leading-relaxed">
                {honour.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-theme flex items-center justify-between">
              <span className="text-[10px] text-tertiary uppercase font-mono">
                Verified Record
              </span>
              {honour.image && (
                <button
                  onClick={() => setSelectedHonour(honour)}
                  className="text-xs font-bold text-accent-theme hover:underline inline-flex items-center gap-1"
                >
                  <span>View Proof</span>
                  <ArrowRightIcon size={12} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Proof Modal */}
      <AnimatePresence>
        {selectedHonour && selectedHonour.image && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-3xl border border-theme bg-surface-theme p-6 sm:p-8 shadow-2xl"
              style={{
                backgroundColor: "var(--bg-primary)",
              }}
            >
              <div className="flex items-start justify-between pb-4 border-b border-theme">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-theme">
                    {selectedHonour.category} • {selectedHonour.year}
                  </span>
                  <h3 className="text-xl font-bold font-serif-title text-primary mt-1">
                    {selectedHonour.title}
                  </h3>
                  <p className="text-xs text-secondary">{selectedHonour.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedHonour(null)}
                  className="w-8 h-8 rounded-full border border-theme bg-surface-theme flex items-center justify-center text-secondary hover:text-primary"
                  aria-label="Close proof dialog"
                >
                  ✕
                </button>
              </div>

              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-theme bg-black/40 my-4">
                <Image
                  src={selectedHonour.image}
                  alt={selectedHonour.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <p className="text-xs text-secondary leading-relaxed">
                {selectedHonour.description}
              </p>

              <div className="pt-4 mt-4 border-t border-theme flex justify-end">
                <button
                  onClick={() => setSelectedHonour(null)}
                  className="px-4 py-2 rounded-xl bg-accent-theme text-white text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
