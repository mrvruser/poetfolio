"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  DATA_SCIENCE_DOMAIN,
  DataScienceCourse
} from "@/data/dataScienceJourney";
import {
  SkillsAIIcon,
  SparklesIcon,
  ExternalLinkIcon,
  GitHubIcon,
  DocumentResumeIcon,
  OdysseyCertifidesIcon,
  ArrowRightIcon
} from "@/components/Icons";

export default function DataScienceJourney() {
  const [activeFilter, setActiveFilter] = useState<"all" | "core" | "elective">("all");
  const [selectedCourse, setSelectedCourse] = useState<DataScienceCourse | null>(null);

  const courses =
    activeFilter === "all"
      ? [...DATA_SCIENCE_DOMAIN.coreCourses, ...DATA_SCIENCE_DOMAIN.electiveCourses]
      : activeFilter === "core"
      ? DATA_SCIENCE_DOMAIN.coreCourses
      : DATA_SCIENCE_DOMAIN.electiveCourses;

  return (
    <section
      id="data-science-journey"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient accents */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: "var(--accent-glow)" }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: "var(--accent-glow)" }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme bg-surface-theme/80 backdrop-blur-md mb-4 shadow-xs">
          <SkillsAIIcon size={16} className="text-accent-theme" />
          <span className="text-xs uppercase tracking-widest font-bold text-accent-theme">
            Academic Rigor • National Accreditation
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title tracking-tight text-primary">
          The Data Science Learning Journey
        </h2>
        <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
          Exploring the art of data, intelligence, and engineering. A structured multi-semester
          specialization accredited by premier Indian Institutes of Technology (IITs) and the Indian
          Institute of Science (IISc Bangalore), bridging statistical theory directly to production software.
        </p>
      </div>

      {/* Domain Milestone Hero Feature Card */}
      <div
        className="relative z-10 mb-16 rounded-[2rem] border border-theme p-6 sm:p-10 shadow-xl overflow-hidden"
        style={{
          backgroundColor: "var(--glass-card-bg)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text / Honours Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-theme/15 text-accent-theme border border-accent-theme/30">
                {DATA_SCIENCE_DOMAIN.subtitle}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-theme bg-surface-theme text-primary">
                {DATA_SCIENCE_DOMAIN.totalScore}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-primary leading-snug">
              {DATA_SCIENCE_DOMAIN.title}
            </h3>

            <p className="text-sm sm:text-base text-secondary leading-relaxed">
              {DATA_SCIENCE_DOMAIN.summary}
            </p>

            {/* Special Recognitions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {DATA_SCIENCE_DOMAIN.honours.map((honour) => (
                <div
                  key={honour.title}
                  className="p-4 rounded-2xl border border-theme bg-surface-theme/70 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-accent-theme">
                        {honour.badge}
                      </span>
                      <SparklesIcon size={14} className="text-accent-theme" />
                    </div>
                    <h4 className="text-sm font-bold font-serif-title text-primary">
                      {honour.title}
                    </h4>
                    <p className="text-xs text-secondary mt-1 leading-relaxed">
                      {honour.description}
                    </p>
                  </div>
                  <span className="text-[10px] text-tertiary mt-3 font-mono">
                    {honour.issuer}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-theme text-xs text-secondary">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-accent-theme" />
                3 Core Courses (IIT Madras & IIT Roorkee)
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-accent-theme" />
                3 Advanced Electives (IISc, IIT Bombay, IIT Delhi)
              </span>
            </div>
          </div>

          {/* Right Visual Column — Infographic */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-theme bg-surface-theme shadow-md group">
              <Image
                src={DATA_SCIENCE_DOMAIN.milestoneImage}
                alt="SWAYAM-NPTEL Domain Certification Milestone in Data Science"
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white border border-white/20 w-fit mb-1">
                  National Milestone Infographic
                </span>
                <p className="text-xs text-white/90 font-medium">
                  Official LinkedIn Milestone Announcement & Verified Pathway Verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-primary">
            Curriculum & Practical Applied Systems
          </h3>
          <p className="text-xs sm:text-sm text-secondary">
            Click on any course to examine its verified document preview and applied project implementation.
          </p>
        </div>

        <div className="inline-flex p-1 rounded-xl border border-theme bg-surface-theme text-xs font-medium">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === "all"
                ? "bg-accent-theme text-white shadow-xs font-bold"
                : "text-secondary hover:text-primary"
            }`}
          >
            All Courses (6)
          </button>
          <button
            onClick={() => setActiveFilter("core")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === "core"
                ? "bg-accent-theme text-white shadow-xs font-bold"
                : "text-secondary hover:text-primary"
            }`}
          >
            Core Foundations (3)
          </button>
          <button
            onClick={() => setActiveFilter("elective")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === "elective"
                ? "bg-accent-theme text-white shadow-xs font-bold"
                : "text-secondary hover:text-primary"
            }`}
          >
            Specialized Electives (3)
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-theme p-5 flex flex-col justify-between group hover:border-accent-theme transition-all duration-300 shadow-sm"
              style={{
                backgroundColor: "var(--glass-card-bg)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div>
                {/* Top Badge Bar */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-theme text-accent-theme bg-surface-theme">
                    {course.type} • {course.duration}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      course.scoreCategory === "Elite + Silver"
                        ? "border-amber-400/40 bg-amber-400/10 text-amber-500 dark:text-amber-300"
                        : "border-cyan-400/40 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300"
                    }`}
                  >
                    {course.score} ({course.scoreCategory})
                  </span>
                </div>

                {/* Document Preview Thumbnail */}
                <div
                  onClick={() => setSelectedCourse(course)}
                  className="relative w-full h-36 rounded-xl overflow-hidden border border-theme bg-surface-theme/90 mb-3.5 cursor-pointer group/img"
                  title="Click to inspect verified certificate"
                >
                  <Image
                    src={course.thumbnailUrl}
                    alt={course.title}
                    fill
                    className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-2.5">
                    <span className="text-[10px] text-white font-medium bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded">
                      Inspect Document
                    </span>
                    <ExternalLinkIcon size={12} className="text-white" />
                  </div>
                </div>

                {/* Course Title & Institution */}
                <h4 className="text-base sm:text-lg font-bold font-serif-title text-primary leading-snug group-hover:text-accent-theme transition-colors">
                  {course.title}
                </h4>
                <p className="text-xs text-secondary mt-1 font-medium">
                  {course.institution}
                </p>

                {course.rollNumber && (
                  <p className="text-[10px] text-tertiary font-mono mt-1">
                    Roll: {course.rollNumber}
                  </p>
                )}

                {/* Key Syllabus Topics */}
                <div className="mt-3 pt-3 border-t border-theme/60">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-accent-theme block mb-1.5">
                    Core Competencies
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {course.keyTopics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="text-[10px] px-2 py-0.5 rounded-md border border-theme bg-surface-theme text-secondary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applied In Practice Callout */}
                <div className="mt-3.5 p-3 rounded-xl border border-accent-theme/20 bg-accent-theme/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-accent-theme flex items-center gap-1">
                      <SparklesIcon size={11} /> Applied In Practice
                    </span>
                    {course.appliedProject.repoUrl && (
                      <a
                        href={course.appliedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent-theme transition-colors"
                        title="View Project Source Code"
                      >
                        <GitHubIcon size={12} />
                      </a>
                    )}
                  </div>
                  <h5 className="text-xs font-bold text-primary">
                    {course.appliedProject.title}
                  </h5>
                  <p className="text-[11px] text-secondary mt-0.5 leading-relaxed line-clamp-2">
                    {course.appliedProject.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-theme flex items-center justify-between gap-2">
                <a
                  href={course.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-accent-theme hover:underline inline-flex items-center gap-1.5"
                >
                  <DocumentResumeIcon size={14} />
                  <span>View Original PDF</span>
                </a>

                <button
                  onClick={() => setSelectedCourse(course)}
                  className="text-xs font-medium text-secondary hover:text-primary inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRightIcon size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal / Document Inspector */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-3xl border border-theme bg-surface-theme p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-theme text-accent-theme">
                    {selectedCourse.type} • {selectedCourse.duration}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-primary mt-2">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary font-medium">
                    {selectedCourse.institution}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="w-8 h-8 rounded-full border border-theme bg-surface-theme flex items-center justify-center text-secondary hover:text-primary"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              {/* Document Image Zoom */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-theme bg-black/20 my-4">
                <Image
                  src={selectedCourse.thumbnailUrl}
                  alt={selectedCourse.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl border border-theme bg-card-theme">
                  <span className="text-xs text-secondary">Verified Score:</span>
                  <span className="text-sm font-bold text-accent-theme">
                    {selectedCourse.score} ({selectedCourse.scoreCategory})
                  </span>
                  {selectedCourse.rollNumber && (
                    <span className="text-xs text-tertiary font-mono">
                      Roll: {selectedCourse.rollNumber}
                    </span>
                  )}
                </div>

                <div>
                  <h5 className="text-xs uppercase font-bold tracking-wider text-accent-theme mb-1.5">
                    Topics Mastered
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCourse.keyTopics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2.5 py-1 rounded-lg border border-theme bg-surface-theme text-primary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-accent-theme/30 bg-accent-theme/5">
                  <h5 className="text-xs uppercase font-bold tracking-wider text-accent-theme mb-1">
                    Applied In Practice
                  </h5>
                  <h6 className="text-sm font-bold text-primary">
                    {selectedCourse.appliedProject.title}
                  </h6>
                  <p className="text-xs text-secondary mt-1 leading-relaxed">
                    {selectedCourse.appliedProject.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-6 mt-6 border-t border-theme">
                <a
                  href={selectedCourse.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-accent-theme text-white text-xs font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <DocumentResumeIcon size={14} />
                  <span>Download Verified Certificate PDF</span>
                  <ExternalLinkIcon size={12} />
                </a>

                {selectedCourse.appliedProject.repoUrl && (
                  <a
                    href={selectedCourse.appliedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl border border-theme bg-surface-theme text-xs font-bold text-primary inline-flex items-center gap-2 hover:border-accent-theme transition-colors"
                  >
                    <GitHubIcon size={14} />
                    <span>Project Repo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
