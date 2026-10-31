"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SkillsLeadershipIcon,
  SparklesIcon,
  OdysseyCollegeIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "@/components/Icons";

interface TimelineEvent {
  period: string;
  role: string;
  organization: string;
  chapterTitle: string;
  badge: string;
  description: string;
  responsibilities: string[];
  outcomes: string[];
  tags: string[];
}

const TIMELINE_DATA: TimelineEvent[] = [
  {
    period: "2024 — Present",
    role: "Executive Head",
    organization: "MSEC-IIF (Centre for Innovation & Entrepreneurship)",
    chapterTitle: "Chapter IV: Institutional Innovation",
    badge: "Executive Leadership",
    description:
      "Directing student incubation and startup mentorship programs across Mohamed Sathak Engineering College. Spearheaded institutional delegations to state and national startup summits.",
    responsibilities: [
      "Mentored interdisciplinary student founder cohorts preparing for national hackathons and seed grants.",
      "Coordinated college delegation representation at Tamil Nadu Global Startup Summit (TNGSS) and GENESIS.",
      "Architected the internal IT asset and project inventory workflow for student prototype tracking.",
    ],
    outcomes: [
      "Over 12 published entrepreneurship whitepapers and venture case analyses.",
      "Established institutional partnerships and student participation pipelines.",
    ],
    tags: ["Leadership", "Ecosystem Building", "Startup Incubation", "Governance"],
  },
  {
    period: "2024 — 2025",
    role: "Team Lead & Lead Intern",
    organization: "IIT Bombay National Entrepreneurship Challenge (NEC Advanced Track)",
    chapterTitle: "Chapter III: The National Venture Crucible",
    badge: "IIT Bombay E-Cell",
    description:
      "Spearheaded the institutional cohort through the intensive National Entrepreneurship Challenge conducted by E-Cell, IIT Bombay, competing in the elite Advanced Track.",
    responsibilities: [
      "Conducted detailed industry problem validation and product-market fit feasibility studies.",
      "Authored 12 structured enterprise case studies evaluating market dynamics and financial models.",
      "Facilitated campus workshops on lean venture methodology and startup financial modeling.",
    ],
    outcomes: [
      "Ranked among competitive national collegiate delegations in the Advanced Track.",
      "Published comprehensive entrepreneurship portfolio published on LinkedIn archives.",
    ],
    tags: ["Venture Building", "Market Validation", "IIT Bombay", "Case Studies"],
  },
  {
    period: "2023 — 2026",
    role: "4× Consecutive Shortlisted Competitor",
    organization: "Smart India Hackathon (Ministry of Education, Govt. of India)",
    chapterTitle: "Chapter II: The National Hackathon Arena",
    badge: "National Competitor",
    description:
      "Demonstrated persistent technical problem-solving by qualifying four consecutive years through rigorous college screening to represent MSEC at the national level.",
    responsibilities: [
      "2026 — HPS-50: Hybrid propulsion flight avionics and sensor bus architecture.",
      "2025 — Team SPARKZ Sports Assess: Edge AI pose estimation kinematics platform for grassroots athletes.",
      "2024 — AArACaN: Autonomous obstacle-negotiating agricultural rover with ESP32 telemetry.",
      "2023 — ShieldConnect: Decentralized collaborative cyber threat intelligence sharing ledger.",
    ],
    outcomes: [
      "Recognized with college-level shortlisting awards across 4 consecutive hackathon cycles.",
      "Delivered fully functional hardware and software prototypes evaluated by expert juries.",
    ],
    tags: ["SIH Finalist", "Computer Vision", "Embedded IoT", "Avionics"],
  },
  {
    period: "2023 — Present",
    role: "Founder & Student Convener",
    organization: "Campus Career Committee & Hostel Welfare Committee",
    chapterTitle: "Chapter I: Civic Governance & Student Welfare",
    badge: "Student Governance",
    description:
      "Founded two pivotal student governance councils to establish structured, transparent communication channels between the student body and administrative authorities.",
    responsibilities: [
      "Initiated the Campus Career Committee to coordinate placement bootcamps and peer programming circles.",
      "Established the Hostel Welfare Committee to represent resident student grievances and facility upgrades.",
      "Facilitated weekly grievance reviews directly with principal and wardens.",
    ],
    outcomes: [
      "Enhanced placement preparation participation across AI & DS departments.",
      "Resolved institutional residential concerns through proactive, peaceful civic engagement.",
    ],
    tags: ["Student Advocacy", "Civic Welfare", "Placement Mentorship"],
  },
];

export default function CareerTimeline() {
  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: "var(--accent-glow)" }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme bg-surface-theme/80 backdrop-blur-md mb-4 shadow-xs">
          <SkillsLeadershipIcon size={16} className="text-accent-theme" />
          <span className="text-xs uppercase tracking-widest font-bold text-accent-theme">
            Verified Track Record
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title tracking-tight text-primary">
          Professional & Leadership Timeline
        </h2>
        <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
          Chronological record of institutional leadership, venture challenge representation, and competitive national hackathon milestones.
        </p>
      </div>

      {/* Timeline Stream */}
      <div className="relative z-10 space-y-8 sm:space-y-12 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent-theme before:via-theme before:to-transparent">
        {TIMELINE_DATA.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={item.chapterTitle}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col sm:flex-row items-start ${
                isEven ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node Center Marker */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-accent-theme bg-surface-theme flex items-center justify-center text-accent-theme z-20 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-theme" />
              </div>

              {/* Content Card */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                <div
                  className="rounded-[2rem] border border-theme p-6 sm:p-8 hover:border-accent-theme transition-all duration-300 shadow-sm"
                  style={{
                    backgroundColor: "var(--glass-card-bg)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                  }}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full border border-theme bg-surface-theme text-accent-theme">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-secondary">
                      {item.period}
                    </span>
                  </div>

                  <span className="text-xs text-tertiary italic font-serif-title block mb-1">
                    {item.chapterTitle}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-primary leading-snug">
                    {item.role}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-semibold text-accent-theme mt-0.5 mb-3">
                    {item.organization}
                  </h4>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-1.5 pt-3 border-t border-theme/60 text-xs text-secondary">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary block mb-1">
                      Key Mandates & Initiatives:
                    </span>
                    {item.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-accent-theme font-bold">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcomes list */}
                  <div className="space-y-1 pt-3 mt-3 border-t border-theme/60 text-xs">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent-theme block mb-1">
                      Verified Impact:
                    </span>
                    {item.outcomes.map((out, i) => (
                      <div key={i} className="text-secondary font-medium">
                        ✓ {out}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-theme/60">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-md border border-theme bg-surface-theme text-secondary font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
