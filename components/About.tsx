"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 sm:px-10 lg:px-20 transition-colors duration-400">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-theme bg-surface-theme text-accent-theme inline-block mb-3">
            Origin Story
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Where Literature Meets Code
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-secondary leading-relaxed">
            A personal narrative of curiosity becoming creation — rooted in classical Tamil literature, mathematical logic, and machine intelligence.
          </p>
        </div>

        {/* Narrative & Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Story Column */}
          <div className="md:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed text-secondary">
            <p>
              Growing up with an avid appreciation for classical Tamil literature — especially the grand historical tapestries of Kalki Krishnamurthy — I learned early that the greatest stories are defined by rhythm, depth, and deliberate structure. When I began programming, I found the exact same poetry in clean codebases and elegant mathematical algorithms.
            </p>
            <p>
              Currently pursuing my <strong>B.Tech. (Honours) in Artificial Intelligence and Data Science</strong> at Mohamed Sathak Engineering College (Anna University), I have sustained a cumulative <strong>CGPA of 8.85 / 10.0</strong> with a current <strong>SGPA of 9.76 / 10.0</strong>, qualifying for the elite Honours degree track with zero history of arrears.
            </p>
            <p>
              My engineering philosophy revolves around building intelligent systems that solve authentic human challenges: from <strong>ATTS</strong>, an enterprise academic tracking system governing 9 NAAC/NBA criteria for our college IQAC, to <strong>Sports Assess</strong>, an edge computer vision kinematics model helping undiscovered rural athletes benchmark their physical agility for state scouts.
            </p>
            <p>
              As Executive Head of <strong>MSEC-IIF</strong> and lead intern for the <strong>IIT Bombay National Entrepreneurship Challenge (NEC Advanced Track)</strong>, I have spearheaded 12 published entrepreneurship blogs, represented the institution at global startup summits (TNGSS, GENESIS), and founded both the <em>Campus Career Committee</em> and <em>Hostel Welfare Committee</em> to strengthen student governance.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-theme block mb-2">
                Languages & Cultural Roots
              </span>
              <p className="text-xs sm:text-sm text-secondary">
                <strong>Tamil</strong> (Native Mother Tongue) • <strong>English</strong> (Professional Working) • <strong>Spanish</strong> (Beginner) • <strong>German</strong> (Beginner) | State-Level Chorus Singer (VIT Chennai) & 2nd Prize in State Slam Poetry.
              </p>
            </div>
          </div>

          {/* Highlights & Verified Metrics Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl border border-theme bg-card-theme shadow-sm">
              <span className="text-xs uppercase font-bold tracking-wider text-accent-theme block mb-1">
                Academic Standing
              </span>
              <h3 className="text-2xl font-bold font-serif-title text-primary mb-1">
                9.76 SGPA / 8.85 CGPA
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                B.Tech. Honours in AI & Data Science (2023–2027). Consistently maintained top academic percentile with zero arrears.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-theme bg-card-theme shadow-sm">
              <span className="text-xs uppercase font-bold tracking-wider text-accent-theme block mb-1">
                National Hackathon Track Record
              </span>
              <h3 className="text-xl font-bold font-serif-title text-primary mb-1">
                4× Consecutive SIH Finalist
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                Shortlisted at college level every single year from 2023 to 2026: ShieldConnect (2023), AArACaN (2024), Team SPARKZ Sports Assess (2025), and HPS-50 (2026).
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-theme bg-card-theme shadow-sm">
              <span className="text-xs uppercase font-bold tracking-wider text-accent-theme block mb-1">
                NPTEL / SWAYAM Honors
              </span>
              <h3 className="text-xl font-bold font-serif-title text-primary mb-1">
                Discipline Star in Data Science
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                6 Elite qualifications across IIT Madras (82%), IIT Roorkee (75%), IIT Bombay (69%), and IISc Bangalore (61%).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

