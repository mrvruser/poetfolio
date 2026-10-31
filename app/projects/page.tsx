"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import FlagshipProject from "@/components/FlagshipProject";
import ProjectCarousel from "@/components/ProjectCarousel";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400 overflow-x-hidden max-w-[100vw]">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <FlagshipProject />
        <ProjectCarousel />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
