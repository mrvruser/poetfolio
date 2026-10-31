"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import CinematicOpening from "@/components/CinematicOpening";
import ThreeScene from "@/components/ThreeScene";
import Particles from "@/components/Particles";
import Hero from "@/components/Hero";
import EditorialBento from "@/components/EditorialBento";
import About from "@/components/About";
import SkillsMatrix from "@/components/SkillsMatrix";
import FlagshipProject from "@/components/FlagshipProject";
import ProjectCarousel from "@/components/ProjectCarousel";
import DataScienceJourney from "@/components/DataScienceJourney";
import CareerTimeline from "@/components/CareerTimeline";
import HonoursShowcase from "@/components/HonoursShowcase";
import LearningOdyssey from "@/components/LearningOdyssey";
import GiftMeABook from "@/components/GiftMeABook";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400 overflow-x-hidden max-w-[100vw]">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Cinematic Opening Sequence (Two Worlds, One Mind) */}
      <CinematicOpening />

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

      {/* EDITORIAL BENTO: EXECUTIVE PILLARS & ACADEMIC STANDING */}
      <EditorialBento />

      {/* ABOUT / ORIGIN STORY SECTION */}
      <About />

      {/* SKILLS & TECHNOLOGY MATRIX (AUTHENTIC ICONS, ZERO FAKE BARS) */}
      <SkillsMatrix />

      {/* FEATURED ENTERPRISE APPLICATION: ATTS IQAC COMPLIANCE ENGINE */}
      <FlagshipProject />

      {/* SPECIALIZED PROJECTS CAROUSEL (SWIPEABLE / DRAGGABLE TRACK) */}
      <ProjectCarousel />

      {/* THE DATA SCIENCE LEARNING JOURNEY (SWAYAM-NPTEL & IIT/IISc ACCREDITED) */}
      <DataScienceJourney />

      {/* PROFESSIONAL CAREER & LEADERSHIP TIMELINE */}
      <CareerTimeline />

      {/* HONOURS, DISTINCTIONS & RECOGNITION */}
      <HonoursShowcase />

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
