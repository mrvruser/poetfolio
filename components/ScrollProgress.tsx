"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none origin-left"
      aria-hidden="true"
    >
      <motion.div
        className="h-full"
        style={{
          scaleX,
          transformOrigin: "0%",
          background: "linear-gradient(90deg, var(--accent-primary) 0%, #00F5D4 50%, var(--accent-primary) 100%)",
          boxShadow: "0 0 10px var(--accent-glow)",
        }}
      />
    </div>
  );
}
