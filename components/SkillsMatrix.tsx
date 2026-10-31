"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  SKILL_CATEGORIES,
  SKILLS_MATRIX,
  SkillItem,
} from "@/data/skillsMatrix";
import {
  SkillsAIIcon,
  SparklesIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return SKILLS_MATRIX;
    return SKILLS_MATRIX.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient accents */}
      <div
        className="absolute top-1/3 -right-48 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: "var(--accent-glow)" }}
      />
      <div
        className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: "var(--accent-glow)" }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme bg-surface-theme/80 backdrop-blur-md mb-4 shadow-xs">
          <SkillsAIIcon size={16} className="text-accent-theme" />
          <span className="text-xs uppercase tracking-widest font-bold text-accent-theme">
            Verified Technical Arsenal
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title tracking-tight text-primary">
          Skills & Technology Matrix
        </h2>
        <p className="mt-3 text-sm sm:text-base text-secondary leading-relaxed">
          Grounding algorithmic theory in genuine software architectures. Organised by practical engineering domain, with zero fabricated proficiency metrics.
        </p>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="relative z-10 w-full overflow-hidden mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar max-w-full">
        {SKILL_CATEGORIES.map((cat) => {
          const count =
            cat.id === "all"
              ? SKILLS_MATRIX.length
              : SKILLS_MATRIX.filter((s) => s.category === cat.id).length;
          const isActive = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 border ${
                isActive
                  ? "border-accent-theme bg-accent-theme text-white shadow-md font-bold scale-102"
                  : "border-theme bg-surface-theme/70 hover:bg-surface-theme text-secondary hover:text-primary"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-black/25 text-white"
                    : "bg-card-theme border border-theme text-tertiary"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
        </div>
      </div>

      {/* Skills Matrix Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveSkill(skill)}
              className="rounded-2xl border border-theme p-5 flex flex-col justify-between group hover:border-accent-theme transition-all duration-300 shadow-xs cursor-pointer"
              style={{
                backgroundColor: "var(--glass-card-bg)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl border border-theme bg-surface-theme flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                    {skill.iconPath ? (
                      <div className="relative w-6 h-6">
                        <Image
                          src={skill.iconPath}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <SkillsAIIcon size={20} className="text-accent-theme" />
                    )}
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-theme bg-surface-theme/80 text-tertiary">
                    {skill.categoryLabel.split(" ")[0]}
                  </span>
                </div>

                {/* Skill Name */}
                <h4 className="text-base font-bold font-serif-title text-primary group-hover:text-accent-theme transition-colors leading-snug">
                  {skill.name}
                </h4>

                {/* Description */}
                <p className="text-xs text-secondary mt-1.5 leading-relaxed line-clamp-2">
                  {skill.description}
                </p>

                {/* Usage Context Box */}
                <div className="mt-3 p-2.5 rounded-xl border border-theme bg-surface-theme/60 text-[11px] text-secondary">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-accent-theme block mb-0.5">
                    Verified Application
                  </span>
                  <span className="line-clamp-2">{skill.usageContext}</span>
                </div>
              </div>

              {/* Card Footer: Related Project or Accreditation */}
              <div className="pt-3 mt-3 border-t border-theme/60 flex items-center justify-between text-[11px]">
                {skill.relatedProject ? (
                  <span className="text-accent-theme font-medium inline-flex items-center gap-1 group-hover:underline">
                    <span>{skill.relatedProject.name}</span>
                    <ArrowRightIcon size={11} />
                  </span>
                ) : skill.verifiedBy ? (
                  <span className="text-tertiary font-mono truncate max-w-[170px]" title={skill.verifiedBy}>
                    {skill.verifiedBy}
                  </span>
                ) : (
                  <span className="text-tertiary font-mono">Core Capability</span>
                )}

                <span className="text-tertiary text-[10px] group-hover:text-primary transition-colors">
                  Details
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {activeSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-3xl border border-theme bg-surface-theme p-6 sm:p-8 shadow-2xl space-y-4"
              style={{
                backgroundColor: "var(--bg-primary)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl border border-theme bg-surface-theme flex items-center justify-center p-2.5">
                    {activeSkill.iconPath ? (
                      <div className="relative w-7 h-7">
                        <Image
                          src={activeSkill.iconPath}
                          alt={activeSkill.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <SkillsAIIcon size={24} className="text-accent-theme" />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-theme block">
                      {activeSkill.categoryLabel}
                    </span>
                    <h3 className="text-xl font-bold font-serif-title text-primary">
                      {activeSkill.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveSkill(null)}
                  className="w-8 h-8 rounded-full border border-theme bg-surface-theme flex items-center justify-center text-secondary hover:text-primary"
                  aria-label="Close skill modal"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div>
                  <h5 className="text-[11px] uppercase font-bold tracking-wider text-accent-theme mb-1">
                    Architectural Role
                  </h5>
                  <p className="text-secondary leading-relaxed">
                    {activeSkill.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-accent-theme/20 bg-accent-theme/5">
                  <h5 className="text-[11px] uppercase font-bold tracking-wider text-accent-theme mb-1 flex items-center gap-1.5">
                    <SparklesIcon size={12} />
                    <span>Applied Engineering Context</span>
                  </h5>
                  <p className="text-primary font-medium leading-relaxed">
                    {activeSkill.usageContext}
                  </p>
                </div>

                {activeSkill.verifiedBy && (
                  <div className="p-3 rounded-xl border border-theme bg-card-theme/60 flex items-center justify-between text-xs">
                    <span className="text-secondary">Official Credential:</span>
                    <span className="font-bold text-accent-theme">{activeSkill.verifiedBy}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-theme flex items-center justify-between">
                {activeSkill.relatedProject ? (
                  <a
                    href="#projects"
                    onClick={() => setActiveSkill(null)}
                    className="px-4 py-2 rounded-xl bg-accent-theme text-white text-xs font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <span>View {activeSkill.relatedProject.name}</span>
                    <ArrowRightIcon size={13} />
                  </a>
                ) : (
                  <span className="text-xs text-secondary font-mono">Verified in Production & Academics</span>
                )}

                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-4 py-2 rounded-xl border border-theme bg-surface-theme text-xs font-semibold text-secondary hover:text-primary"
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
