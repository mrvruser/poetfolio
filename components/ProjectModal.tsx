"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import {
  CloseIcon,
  ExternalLinkIcon,
  EmailIcon,
  WhatsAppIcon,
  CreationsIcon,
} from "@/components/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [showAccessChannels, setShowAccessChannels] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const emailSubject = encodeURIComponent(`Access Request: ${project.title}`);
  const emailBody = encodeURIComponent(
    `Hello Vijayaregunath,\n\nI would like to request authorized access or an engineering demonstration for your project: "${project.title}".\n\nMy Details:\nName: \nOrganization / Institution: \nPurpose of Review: \nLinkedIn / Contact: \n\nThank you!`
  );
  const mailtoLink = `mailto:vijayaregunath005@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  const waText = encodeURIComponent(
    `Hello Vijayaregunath, I came across your portfolio and would like to request access or a demonstration of your project: "${project.title}".`
  );
  const whatsappLink = `https://wa.me/918300398072?text=${waText}`;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/75"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border shadow-2xl transition-colors duration-300"
          style={{
            backgroundColor: "var(--glass-card-bg)",
            borderColor: "var(--border-accent)",
            color: "var(--text-primary)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-2xl border border-theme hover:border-accent-theme hover:scale-105 active:scale-95 transition-all text-secondary hover:text-primary bg-surface-theme/70"
            aria-label="Close project modal"
          >
            <CloseIcon size={18} />
          </button>

          {/* Category & Authorship Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-surface-theme border border-theme text-accent-theme inline-flex items-center gap-1.5">
              <CreationsIcon size={12} />
              <span>{project.category}</span>
            </span>
            <span className="text-xs text-secondary italic">
              • {project.authorship}
            </span>
          </div>

          {/* Title & Tagline */}
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold font-serif-title mb-2 pr-10">
            {project.title}
          </h2>
          <p className="text-sm font-medium mb-6 text-accent-theme">
            {project.tagline}
          </p>

          {/* Full Details */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-secondary mb-6">
            <p>{project.fullDetails}</p>
          </div>

          {/* Verified Metrics / Context */}
          {project.metrics && (
            <div className="p-4 rounded-2xl mb-6 border border-theme bg-surface-theme/60">
              <span className="text-xs font-semibold uppercase tracking-wider block mb-1 text-accent-theme">
                Verified Milestone & Impact
              </span>
              <p className="text-sm font-medium">
                {project.metrics}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wider block mb-3 font-semibold text-secondary">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors bg-surface-theme border-theme text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-theme">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-medium text-sm border border-theme hover:border-accent-theme hover:scale-105 transition-all inline-flex items-center gap-2 bg-surface-theme text-primary"
              >
                <span>GitHub Repository</span>
                <ExternalLinkIcon size={15} />
              </a>
            )}

            <button
              onClick={() => setShowAccessChannels(!showAccessChannels)}
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-md"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "#08090C",
              }}
            >
              {showAccessChannels ? "Hide Options" : "Request Access / Demo"}
            </button>
          </div>

          {/* Access Request Options Drawer */}
          {showAccessChannels && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 p-4 rounded-2xl border border-theme bg-surface-theme/80 space-y-3"
            >
              <p className="text-xs text-secondary">
                Select your preferred communication channel to request full codebase access, institutional credentials, or a live demonstration:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={mailtoLink}
                  className="px-4 py-2 rounded-xl text-xs font-medium border border-theme bg-card-theme hover:border-accent-theme hover:text-accent-theme transition-colors inline-flex items-center gap-2"
                >
                  <EmailIcon size={15} />
                  <span>Email Vijayaregunath</span>
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-medium border border-theme bg-card-theme hover:border-accent-theme hover:text-accent-theme transition-colors inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={15} />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
