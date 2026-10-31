"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import About from "@/components/About";
import EditorialBento from "@/components/EditorialBento";
import SkillsMatrix from "@/components/SkillsMatrix";
import DataScienceJourney from "@/components/DataScienceJourney";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400 overflow-x-hidden max-w-[100vw]">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <About />
        <EditorialBento />
        <SkillsMatrix />
        <DataScienceJourney />
      </div>
      <Footer />
    </main>
  );
}
