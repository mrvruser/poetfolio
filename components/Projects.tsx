"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI & ML", "Data Science", "Full Stack", "Mobile & IoT"];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-6 sm:px-10 lg:px-20 transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-theme bg-surface-theme text-accent-theme inline-block mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-title mb-4">
            Curated Creations & Engineering
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-secondary leading-relaxed">
            From autonomous multi-agent cognitive systems and computer vision kinematics to enterprise campus accreditation platforms and rural commerce architectures.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex justify-center flex-wrap gap-2.5 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                  active
                    ? "shadow-md scale-105"
                    : "hover:scale-102 border-theme bg-surface-theme/50 text-secondary hover:text-primary"
                }`}
                style={{
                  backgroundColor: active ? "var(--accent-primary)" : undefined,
                  borderColor: active ? "var(--accent-primary)" : undefined,
                  color: active ? "#08090C" : undefined,
                  boxShadow: active ? "0 0 15px var(--accent-glow)" : undefined,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(p)}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div>
                  {/* Category & Status Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-theme bg-surface-theme text-accent-theme">
                      {p.category}
                    </span>
                    {p.featured && (
                      <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full border border-theme bg-surface-theme text-secondary">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-title mb-2 group-hover:text-accent-theme transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-medium text-accent-theme mb-3">
                    {p.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm leading-relaxed text-secondary mb-6">
                    {p.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg border border-theme bg-surface-theme/70 text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="text-[11px] font-medium px-2 py-1 rounded-lg border border-theme text-secondary">
                        +{p.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-theme flex items-center justify-between text-xs font-semibold text-accent-theme">
                    <span>Explore Architecture & Metrics</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
