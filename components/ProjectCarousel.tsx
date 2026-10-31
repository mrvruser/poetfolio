"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import {
  CreationsIcon,
  ArrowRightIcon,
  GitHubIcon,
  ExternalLinkIcon,
  SparklesIcon,
} from "@/components/Icons";

export default function ProjectCarousel() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter out ATTS if it's already showcased as the Flagship
  const carouselProjects = projects.filter((p) => p.id !== "atts");

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollByDirection = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") scrollByDirection("left");
    if (e.key === "ArrowRight") scrollByDirection("right");
  };

  return (
    <section
      id="project-carousel"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Specialized Project Carousel"
    >
      {/* Header and Controls */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-theme bg-surface-theme/80 backdrop-blur-md mb-3 shadow-xs">
            <SparklesIcon size={14} className="text-accent-theme" />
            <span className="text-xs uppercase tracking-widest font-bold text-accent-theme">
              Interactive Showcase
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-title tracking-tight text-primary">
            Specialized Projects Carousel
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Drag, swipe, or use arrows to navigate through verified data science, computer vision, and IoT architectures.
          </p>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button
            onClick={() => scrollByDirection("left")}
            disabled={!canScrollLeft}
            className={`w-11 h-11 rounded-2xl border border-theme flex items-center justify-center transition-all ${
              canScrollLeft
                ? "bg-surface-theme text-primary hover:border-accent-theme hover:scale-105 active:scale-95 shadow-sm"
                : "bg-surface-theme/40 text-tertiary cursor-not-allowed opacity-50"
            }`}
            aria-label="Scroll carousel left"
          >
            ←
          </button>
          <button
            onClick={() => scrollByDirection("right")}
            disabled={!canScrollRight}
            className={`w-11 h-11 rounded-2xl border border-theme flex items-center justify-center transition-all ${
              canScrollRight
                ? "bg-surface-theme text-primary hover:border-accent-theme hover:scale-105 active:scale-95 shadow-sm"
                : "bg-surface-theme/40 text-tertiary cursor-not-allowed opacity-50"
            }`}
            aria-label="Scroll carousel right"
          >
            →
          </button>
        </div>
      </div>

      {/* Swipeable / Draggable Track */}
      <div className="relative z-10 w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing max-w-full"
          style={{ scrollSnapType: "x mandatory" }}
        >
        {carouselProjects.map((project) => (
          <div
            key={project.id}
            className="w-[280px] sm:w-[360px] md:w-[400px] shrink-0 snap-start rounded-[2rem] border border-theme p-5 sm:p-6 flex flex-col justify-between group hover:border-accent-theme transition-all duration-300 shadow-sm"
            style={{
              backgroundColor: "var(--glass-card-bg)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            <div>
              {/* Image Preview Container */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-theme bg-surface-theme mb-4 cursor-pointer group/img"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-3 group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 280px, 400px"
                />
                
                {/* Media Type Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-theme bg-black/60 text-white backdrop-blur-xs">
                    {project.imageType}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-3">
                  <span className="text-[10px] text-white font-medium bg-black/60 px-2 py-0.5 rounded">
                    Inspect Architecture
                  </span>
                  <ExternalLinkIcon size={12} className="text-white" />
                </div>
              </div>

              {/* Category & Tagline */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent-theme font-mono">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-accent-theme/10 text-accent-theme border border-accent-theme/20">
                    Featured
                  </span>
                )}
              </div>

              <h3
                onClick={() => setSelectedProject(project)}
                className="text-lg font-bold font-serif-title text-primary group-hover:text-accent-theme transition-colors cursor-pointer leading-snug"
              >
                {project.title}
              </h3>

              <p className="text-xs text-secondary mt-2 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-md border border-theme bg-surface-theme text-secondary font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 mt-4 border-t border-theme flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-bold text-accent-theme hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read Case Study</span>
                <ArrowRightIcon size={12} />
              </button>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent-theme transition-colors p-1.5 rounded-lg border border-theme hover:border-accent-theme"
                  title="View GitHub Repository"
                >
                  <GitHubIcon size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Full Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
