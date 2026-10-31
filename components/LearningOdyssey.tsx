"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CERTIFIDES, CertificateItem } from "@/data/certifides";
import { COLLEGE_LIFE, CollegeLifeItem } from "@/data/college_life";
import { EXPLORES, ExploreItem } from "@/data/explores";
import {
  OdysseyExploresIcon,
  OdysseyProjectsIcon,
  OdysseyCertifidesIcon,
  OdysseyCollegeIcon,
  SearchIcon,
  ExternalLinkIcon,
  DocumentResumeIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@/components/Icons";

export default function LearningOdyssey() {
  const [activeTab, setActiveTab] = useState<"explores" | "projects" | "certifides" | "college">("certifides");
  const [certSearch, setCertSearch] = useState<string>("");
  const [certIssuerFilter, setCertIssuerFilter] = useState<string>("All");

  const chapters = [
    {
      id: "explores" as const,
      title: "Explores",
      icon: <OdysseyExploresIcon size={24} className="text-accent-theme" />,
      subtitle: "Beyond familiar horizons, every journey leaves a story worth remembering.",
      badge: "Inquiries & Science",
    },
    {
      id: "projects" as const,
      title: "Projects",
      icon: <OdysseyProjectsIcon size={24} className="text-accent-theme" />,
      subtitle: "From the first line of code to solutions shaped by curiosity and persistence.",
      badge: "Hands-on Code",
    },
    {
      id: "certifides" as const,
      title: "Certifides",
      icon: <OdysseyCertifidesIcon size={24} className="text-accent-theme" />,
      subtitle: "Every certificate marks a lesson learned; every skill opens another door.",
      badge: `${CERTIFIDES.length} Credentials`,
    },
    {
      id: "college" as const,
      title: "College Life",
      icon: <OdysseyCollegeIcon size={24} className="text-accent-theme" />,
      subtitle: "Beyond classrooms and deadlines, these are the moments that make the journey unforgettable.",
      badge: "Leadership & Campus",
    },
  ];

  // Certifides filters
  const issuers = useMemo(() => {
    const set = new Set<string>();
    CERTIFIDES.forEach((c) => set.add(c.issuer));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredCerts = useMemo(() => {
    return CERTIFIDES.filter((c) => {
      const matchSearch =
        c.title.toLowerCase().includes(certSearch.toLowerCase()) ||
        c.description.toLowerCase().includes(certSearch.toLowerCase()) ||
        c.issuer.toLowerCase().includes(certSearch.toLowerCase());
      const matchIssuer = certIssuerFilter === "All" || c.issuer === certIssuerFilter;
      return matchSearch && matchIssuer;
    });
  }, [certSearch, certIssuerFilter]);

  return (
    <section id="odyssey" className="relative py-28 px-5 sm:px-8 lg:px-12 transition-colors duration-400 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Intro */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-theme bg-surface-theme text-accent-theme inline-block mb-3">
            Signature Narrative
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-title mb-5">
            THE LEARNING ODYSSEY
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-secondary italic font-serif-title">
            “From curious footsteps across new horizons to ideas shaped through code, every experience becomes a chapter in my journey. This is where learning meets adventure, where discoveries become memories, and where every milestone tells a story.”
          </p>
        </div>

        {/* 4 Chapter Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 mb-12">
          {chapters.map((chap) => {
            const isActive = activeTab === chap.id;
            return (
              <button
                key={chap.id}
                type="button"
                onClick={() => setActiveTab(chap.id)}
                className={`p-4 sm:p-5 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? "scale-103 shadow-lg"
                    : "border-theme bg-surface-theme/50 hover:bg-surface-theme/80 hover:border-accent-theme text-secondary"
                }`}
                style={{
                  backgroundColor: isActive ? "var(--glass-card-bg)" : undefined,
                  borderColor: isActive ? "var(--accent-primary)" : undefined,
                  boxShadow: isActive ? "0 0 20px var(--accent-glow)" : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl border border-theme bg-surface-theme/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {chap.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-theme bg-surface-theme/80 text-secondary">
                    {chap.badge}
                  </span>
                </div>
                <div>
                  <h3 className={`text-base sm:text-lg font-bold font-serif-title ${isActive ? "text-accent-theme" : "text-primary"}`}>
                    {chap.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Chapter Active Content Canvas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-10 rounded-[2rem] border shadow-xl"
            style={{
              backgroundColor: "var(--glass-card-bg)",
              borderColor: "var(--border-subtle)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            {/* Header of Active Chapter */}
            <div className="border-b border-theme pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-primary">
                  {chapters.find((c) => c.id === activeTab)?.title}
                </h3>
                <p className="text-sm italic text-accent-theme mt-1">
                  {chapters.find((c) => c.id === activeTab)?.subtitle}
                </p>
              </div>
            </div>

            {/* TAB 1: EXPLORES */}
            {activeTab === "explores" && (
              <div className="space-y-8">
                <p className="text-sm sm:text-base leading-relaxed text-secondary">
                  Traveling through science, natural ecosystems, and deep astrophysics. Exploring how microscopic technologies revolutionize space exploration and how precision sensors bring monumental shifts to sustainable agriculture.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {EXPLORES.map((ex) => (
                    <div
                      key={ex.id}
                      className="p-6 rounded-3xl border border-theme bg-surface-theme/70 space-y-4 hover:border-accent-theme transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase font-bold tracking-wider text-accent-theme">
                          Deep-Tech Inquiry
                        </span>
                        <span className="text-[11px] text-secondary font-mono">{ex.date.slice(0, 10)}</span>
                      </div>
                      <h4 className="text-xl font-bold font-serif-title text-primary">
                        {ex.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                        {ex.summary}
                      </p>
                      {ex.images.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {ex.images.slice(0, 2).map((img, idx) => (
                            <div key={idx} className="relative h-32 rounded-xl overflow-hidden bg-slate-900 border border-theme">
                              <Image src={img} alt={ex.title} fill sizes="200px" className="object-cover" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: PROJECTS */}
            {activeTab === "projects" && (
              <div className="space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-secondary">
                  Engineering real-world solutions is an evolutionary dialogue between theory and practice. From optimizing feature engineering in financial risk models to orchestrating multi-agent state machines, every experiment deepens practical intuition.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                  <div className="p-6 rounded-2xl border border-theme bg-surface-theme">
                    <span className="text-xs font-bold text-accent-theme uppercase tracking-wider block mb-1">
                      Full Stack Systems
                    </span>
                    <h4 className="font-bold font-serif-title text-base mb-2">ATTS Institutional Accreditation</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Deployed on campus to track 9 NAAC/NBA criteria with role-based access for over 100 faculty members across MongoDB & MySQL.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl border border-theme bg-surface-theme">
                    <span className="text-xs font-bold text-accent-theme uppercase tracking-wider block mb-1">
                      Embodied AI & Memory
                    </span>
                    <h4 className="font-bold font-serif-title text-base mb-2">Three-Companion Cognitive Ecology</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Prototyped persistent episodic vector memory with local Ollama models maintaining continuous relationships across reboots.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl border border-theme bg-surface-theme">
                    <span className="text-xs font-bold text-accent-theme uppercase tracking-wider block mb-1">
                      Edge Computer Vision
                    </span>
                    <h4 className="font-bold font-serif-title text-base mb-2">Sports Assess Kinematics Engine</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Assessing sprint velocity, jump biomechanics, and agility drills on edge hardware to discover grassroots athletic talent.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <a
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-[#08090C] hover:scale-105 transition-transform shadow-md"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  >
                    <span>View All 14 Creations & Repositories</span>
                    <ArrowRightIcon size={15} />
                  </a>
                </div>
              </div>
            )}

            {/* TAB 3: CERTIFIDES */}
            {activeTab === "certifides" && (
              <div className="space-y-8">
                {/* Poetic Reflection */}
                <div className="p-6 rounded-2xl border border-theme bg-surface-theme/60 text-center">
                  <p className="italic text-sm sm:text-base leading-relaxed text-primary font-serif-title">
                    “Delved deep into the realms of cloud technologies,<br />
                    grasping how data seamlessly journeys across architectures.<br />
                    Learned to craft secure, scalable, intelligent systems<br />
                    that promise resilience and dynamic innovation.<br />
                    Each concept pushing me closer to engineering a smarter tomorrow.”
                  </p>
                  <span className="block mt-3 text-xs uppercase tracking-widest text-accent-theme font-semibold">
                    — Vijayaregunath T (Reflections on Distributed Systems)
                  </span>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-theme pb-6">
                  <div className="relative flex-1 max-w-md">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-tertiary pointer-events-none">
                      <SearchIcon size={16} />
                    </div>
                    <input
                      type="text"
                      placeholder="Search credentials (e.g. Python, LLM, Deep Learning, AWS, Cisco)..."
                      value={certSearch}
                      onChange={(e) => setCertSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-theme bg-surface-theme text-xs text-primary placeholder-gray-400 focus:outline-none focus:border-accent-theme"
                    />
                  </div>
                  <div className="flex items-center gap-2 max-w-full overflow-x-auto pb-1 sm:pb-0 text-xs">
                    <span className="text-secondary whitespace-nowrap">Filter Issuer:</span>
                    <select
                      value={certIssuerFilter}
                      onChange={(e) => setCertIssuerFilter(e.target.value)}
                      className="max-w-[170px] sm:max-w-xs px-3 py-2 rounded-xl border border-theme bg-surface-theme text-primary text-xs focus:outline-none"
                    >
                      {issuers.slice(0, 8).map((iss) => (
                        <option key={iss} value={iss}>
                          {iss}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredCerts.slice(0, 18).map((c) => (
                    <div
                      key={c.id}
                      className="p-5 rounded-2xl border border-theme bg-surface-theme/70 flex flex-col justify-between hover:border-accent-theme transition-all duration-300 shadow-sm group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-theme text-accent-theme">
                            {c.issuer.split("(")[0].trim()}
                          </span>
                          <span className="text-[10px] text-secondary font-mono">
                            {c.date ? c.date.slice(0, 10) : "Verified"}
                          </span>
                        </div>

                        <h4 className="text-base font-bold font-serif-title leading-snug text-primary group-hover:text-accent-theme transition-colors">
                          {c.title}
                        </h4>

                        {c.score && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card-theme border border-theme text-xs font-semibold text-accent-theme">
                            <SparklesIcon size={12} />
                            <span>{c.score}</span>
                          </div>
                        )}

                        <p className="text-xs text-secondary line-clamp-3 leading-relaxed">
                          {c.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-theme flex items-center justify-between">
                        {c.pdfUrl ? (
                          <a
                            href={c.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-accent-theme hover:underline inline-flex items-center gap-1.5"
                          >
                            <span>View Original PDF</span>
                            <ExternalLinkIcon size={13} />
                          </a>
                        ) : (
                          <span className="text-xs text-secondary">Verified Record</span>
                        )}

                        {c.hasPdf && (
                          <a
                            href={c.pdfUrl!}
                            download
                            className="p-1.5 rounded-lg border border-theme hover:border-accent-theme hover:text-accent-theme text-xs transition-colors"
                            title="Download Certificate PDF"
                            aria-label="Download Certificate PDF"
                          >
                            <DocumentResumeIcon size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {filteredCerts.length > 18 && (
                  <p className="text-center text-xs text-secondary italic pt-2">
                    Showing 18 of {filteredCerts.length} certificates matching your filter. Use the search box above to locate specific credentials.
                  </p>
                )}
              </div>
            )}

            {/* TAB 4: COLLEGE LIFE */}
            {activeTab === "college" && (
              <div className="space-y-8">
                <p className="text-sm sm:text-base leading-relaxed text-secondary">
                  Leadership, community service, and campus innovation. From organizing BytZtorm'25 and mentoring hackathon teams to leading the MSEC-IIF Entrepreneurship Cell and participating in state sports.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {COLLEGE_LIFE.slice(0, 9).map((cl) => (
                    <div
                      key={cl.id}
                      className="p-5 rounded-2xl border border-theme bg-surface-theme/70 space-y-4 hover:border-accent-theme transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-accent-theme">
                            Campus Life
                          </span>
                          <span className="text-[10px] text-secondary font-mono">{cl.date.slice(0, 10)}</span>
                        </div>
                        <h4 className="text-base font-bold font-serif-title text-primary">
                          {cl.title}
                        </h4>
                        <p className="text-xs text-secondary line-clamp-4 leading-relaxed">
                          {cl.summary}
                        </p>
                      </div>

                      {cl.images.length > 0 && (
                        <div className="relative h-40 rounded-xl overflow-hidden bg-slate-900 border border-theme mt-3">
                          <Image
                            src={cl.images[0]}
                            alt={cl.title}
                            fill
                            sizes="(max-width: 768px) 300px, 400px"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
