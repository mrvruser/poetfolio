"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ARTICLES, ArticleItem } from "@/data/articles";
import { ArrowRightIcon, CloseIcon, ExternalLinkIcon, SparklesIcon } from "@/components/Icons";

export default function Writing() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const seriesList = ["All", "Industrial Insights", "Founder Stories", "Motivation Series", "Thought Leadership"];

  const filteredArticles =
    filter === "All"
      ? ARTICLES
      : ARTICLES.filter((a) => a.series === filter);

  return (
    <section className="relative py-24 px-5 sm:px-8 lg:px-12 transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-theme bg-surface-theme text-accent-theme inline-block mb-3">
            Editorial & Thought Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Writing & Industrial Insights
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-secondary leading-relaxed">
            Curated analysis, founder case studies, and policy frameworks published for the MSEC Entrepreneurship Development Cell and the IIT Bombay National Entrepreneurship Challenge.
          </p>
        </div>

        {/* Filter Series Pills */}
        <div className="flex justify-center flex-wrap gap-2.5 sm:gap-3 mb-14">
          {seriesList.map((series) => {
            const active = filter === series;
            return (
              <button
                key={series}
                type="button"
                onClick={() => setFilter(series)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  active
                    ? "shadow-md scale-105"
                    : "border-theme bg-surface-theme/60 text-secondary hover:text-primary hover:border-accent-theme"
                }`}
                style={{
                  backgroundColor: active ? "var(--accent-primary)" : undefined,
                  borderColor: active ? "var(--accent-primary)" : undefined,
                  color: active ? "#08090C" : undefined,
                  boxShadow: active ? "0 0 16px var(--accent-glow)" : undefined,
                }}
              >
                {series}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <motion.article
              key={art.id}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedArticle(art)}
              className="p-6 rounded-3xl border border-theme bg-card-theme/90 backdrop-blur-sm flex flex-col justify-between cursor-pointer hover:border-accent-theme transition-all shadow-sm hover:shadow-xl group"
            >
              <div className="space-y-4">
                {art.coverImage && (
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-900 border border-theme">
                    <Image
                      src={art.coverImage}
                      alt={art.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold text-accent-theme border border-accent-theme/40">
                      {art.series}
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-[11px] text-secondary mb-2">
                    <span className="font-mono">{art.date.slice(0, 10)}</span>
                    {art.likes > 0 && (
                      <span className="inline-flex items-center gap-1 text-accent-theme">
                        <SparklesIcon size={11} />
                        <span>{art.likes} likes</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold font-serif-title text-primary group-hover:text-accent-theme transition-colors leading-snug">
                    {art.title}
                  </h3>
                </div>

                <p className="text-xs text-secondary line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-theme flex items-center justify-between">
                <span className="text-xs font-semibold text-accent-theme group-hover:underline inline-flex items-center gap-1.5">
                  <span>Read Analysis</span>
                  <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-secondary font-mono">{art.postId}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl my-8 p-6 sm:p-10 rounded-3xl border border-theme bg-surface-theme shadow-2xl max-h-[85vh] overflow-y-auto"
              >
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-2xl border border-theme bg-card-theme flex items-center justify-center text-primary hover:text-accent-theme hover:border-accent-theme transition-colors"
                  aria-label="Close modal"
                >
                  <CloseIcon size={18} />
                </button>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-theme block mb-2">
                      {selectedArticle.series} • {selectedArticle.date.slice(0, 10)}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif-title text-primary leading-tight pr-10">
                      {selectedArticle.title}
                    </h2>
                  </div>

                  {selectedArticle.coverImage && (
                    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-theme">
                      <Image
                        src={selectedArticle.coverImage}
                        alt={selectedArticle.title}
                        fill
                        sizes="800px"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-4 text-sm sm:text-base leading-relaxed text-secondary whitespace-pre-line border-t border-theme pt-6">
                    {selectedArticle.fullText}
                  </div>

                  {selectedArticle.externalLink && (
                    <div className="pt-6 border-t border-theme flex items-center justify-between">
                      <a
                        href={selectedArticle.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider text-[#08090C] hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-md"
                        style={{ backgroundColor: "var(--accent-primary)" }}
                      >
                        <span>View Original Article on LinkedIn</span>
                        <ExternalLinkIcon size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
