"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  goldColor: string;
  pulseOffset: number;
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = 0;
    let height = 0;

    const goldPalette = [
      "rgba(184, 134, 11, 0.55)",
      "rgba(139, 90, 43, 0.45)",
      "rgba(205, 133, 63, 0.50)",
      "rgba(218, 165, 32, 0.50)",
      "rgba(160, 110, 40, 0.40)",
    ];

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    };

    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -9999, y: -9999 };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const particles: Particle[] = [];
    const count = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 12000));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        size: Math.random() * 2 + 1.2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        goldColor: goldPalette[Math.floor(Math.random() * goldPalette.length)],
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      frame++;

      const isDark = document.documentElement.classList.contains("dark");

      // Draw connection lines between close particles in dark mode (Neural Web)
      if (isDark) {
        ctx.strokeStyle = "rgba(0, 245, 212, 0.08)";
        ctx.lineWidth = 0.75;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle pointer proximity interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 0.8;
          p.y += (dy / dist) * force * 0.8;
        }

        if (isDark) {
          // 🌑 Dark World — Neon Cyan Nodes
          ctx.shadowBlur = 12;
          ctx.shadowColor = "#00F5D4";
          ctx.fillStyle = "#00F5D4";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // ☀️ Light World — Luminous Golden Halos (Parchment Atmosphere)
          const pulse = Math.sin(frame * 0.03 + p.pulseOffset);
          const glowSize = p.size + pulse * 1.1;

          // Outer halo
          const gradient = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, glowSize * 5
          );
          gradient.addColorStop(0, p.goldColor);
          gradient.addColorStop(0.35, "rgba(218, 165, 32, 0.35)");
          gradient.addColorStop(1, "rgba(218, 165, 32, 0)");

          ctx.beginPath();
          ctx.arc(p.x, p.y, glowSize * 5, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Bright inner core
          ctx.shadowBlur = 14;
          ctx.shadowColor = "rgba(255, 215, 0, 0.8)";
          ctx.fillStyle = p.goldColor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.shadowBlur = 0;
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
