"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

export default function WritingPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400 overflow-x-hidden max-w-[100vw]">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <Writing />
      </div>
      <Footer />
    </main>
  );
}
