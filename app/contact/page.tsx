"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Contact from "@/components/Contact";
import GiftMeABook from "@/components/GiftMeABook";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <Contact />
        <GiftMeABook />
      </div>
      <Footer />
    </main>
  );
}
