"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import About from "@/components/About";
import Skills from "@/components/Skills";
import DataScienceJourney from "@/components/DataScienceJourney";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <About />
        <Skills />
        <DataScienceJourney />
      </div>
      <Footer />
    </main>
  );
}
