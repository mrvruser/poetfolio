"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ThreeScene from "@/components/ThreeScene";
import Particles from "@/components/Particles";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import DataScienceJourney from "@/components/DataScienceJourney";
import Projects from "@/components/Projects";
import LearningOdyssey from "@/components/LearningOdyssey";
import GiftMeABook from "@/components/GiftMeABook";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400">
      {/* High-Performance Custom Pointer */}
      <CustomCursor />

      {/* Persistent Global Header & World Flip Toggle */}
      <Navbar />

      {/* HERO SECTION WITH DUAL-WORLD 3D LATTICE & CANVAS PARTICLES */}
      <section className="relative overflow-hidden isolate">
        <ThreeScene />
        <Particles />
        <Hero />
      </section>

      {/* ABOUT / ORIGIN STORY SECTION */}
      <About />

      {/* SKILLS & TECHNICAL TOOLKIT */}
      <Skills />

      {/* THE DATA SCIENCE LEARNING JOURNEY (SWAYAM-NPTEL & IIT/IISc ACCREDITED) */}
      <DataScienceJourney />

      {/* CURATED CREATIONS / PROJECT SHOWCASE & ACCESS REQUEST */}
      <Projects />

      {/* THE SIGNATURE LEARNING ODYSSEY (4 CHAPTERS) */}
      <LearningOdyssey />

      {/* GIFT ME A BOOK ROTATING BANNER */}
      <GiftMeABook />

      {/* CONTACT & VERIFIED SOCIAL FOOTPRINT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
