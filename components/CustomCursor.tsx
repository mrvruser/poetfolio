"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover pointer (disable on touch screens/mobile)
    const isFinePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-enabled");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, input, textarea, [role='button'], .cursor-pointer");
      isHovering = !!interactive;
    };

    const renderLoop = () => {
      // Smooth interpolation for outer trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        const size = isHovering ? 48 : 28;
        const offset = size / 2;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate3d(${ringX - offset}px, ${ringY - offset}px, 0) scale(${isHovering ? 1.15 : 1})`;
      }

      animId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", checkHover);
    animId = requestAnimationFrame(renderLoop);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", checkHover);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Inner precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full transition-opacity duration-200"
        style={{
          backgroundColor: "var(--accent-primary)",
          boxShadow: "0 0 10px var(--accent-glow)",
        }}
        aria-hidden="true"
      />

      {/* Outer ambient trailing halo */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-all duration-150 ease-out"
        style={{
          borderColor: "var(--accent-primary)",
          backgroundColor: "rgba(0, 245, 212, 0.05)",
          boxShadow: "0 0 20px var(--accent-glow)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
