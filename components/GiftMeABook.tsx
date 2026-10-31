"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookGiftIcon, ExternalLinkIcon } from "@/components/Icons";

export default function GiftMeABook() {
  const [index, setIndex] = useState(0);

  const phrases = [
    "Gift me a book.",
    "Fuel my curiosity.",
    "Support my learning journey.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const giftBookMailto = `mailto:vijayaregunath005@gmail.com?subject=Book Recommendation or Gift for Vijayaregunath&body=Hello Vijayaregunath,%0D%0A%0D%0AI would love to recommend or gift you a book for your learning journey!%0D%0A%0D%0ABook Title:%20%0D%0AAuthor:%20%0D%0AWhy you will enjoy it:%20`;

  return (
    <section className="relative py-20 px-5 sm:px-8 lg:px-12 transition-colors duration-400">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-[2.5rem] border border-theme bg-card-theme/90 backdrop-blur-md shadow-xl relative overflow-hidden">
          {/* Ambient Decorative Badge */}
          <div className="w-16 h-16 rounded-3xl border border-accent-theme bg-surface-theme/80 mx-auto flex items-center justify-center mb-6 text-accent-theme shadow-sm">
            <BookGiftIcon size={32} />
          </div>

          {/* Rotating Phrase Heading */}
          <div className="h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-2xl sm:text-4xl font-bold font-serif-title text-primary tracking-tight"
              >
                {phrases[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-secondary leading-relaxed mt-4 mb-8">
            Rather than conventional sponsorships, the greatest fuel for curiosity is a transformative book. Whether it explores theoretical physics, classical literature, artificial intelligence, or human philosophy — knowledge shared is the greatest catalyst for innovation.
          </p>

          {/* Favorite Literary Inspirations */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-8 text-xs text-secondary">
            <span className="font-semibold text-accent-theme">Current Literary Passions:</span>
            <span className="px-3 py-1 rounded-full border border-theme bg-surface-theme">Ponniyin Selvan (Kalki)</span>
            <span className="px-3 py-1 rounded-full border border-theme bg-surface-theme">Sivagamiyin Sabatham</span>
            <span className="px-3 py-1 rounded-full border border-theme bg-surface-theme">Deep Learning & Attention</span>
            <span className="px-3 py-1 rounded-full border border-theme bg-surface-theme">Theoretical Astrophysics</span>
          </div>

          {/* CTA Action */}
          <div>
            <a
              href={giftBookMailto}
              className="px-8 py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-105 inline-flex items-center gap-2.5 shadow-md group"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "#08090C",
                boxShadow: "0 0 24px var(--accent-glow)",
              }}
            >
              <span>Recommend or Gift a Book</span>
              <ExternalLinkIcon size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
