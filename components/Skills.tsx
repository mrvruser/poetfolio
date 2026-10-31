"use client";

import { motion } from "framer-motion";
import {
  SkillsAIIcon,
  SkillsWebIcon,
  SkillsDatabaseIcon,
  SkillsProgrammingIcon,
  SkillsToolsIcon,
  SkillsLeadershipIcon,
} from "@/components/Icons";

export default function Skills() {
  const skillCategories = [
    {
      category: "Artificial Intelligence & Data Science",
      icon: <SkillsAIIcon size={26} className="text-accent-theme" />,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Large Language Models (LLMs)",
        "Computer Vision",
        "OpenCV & MediaPipe",
        "Scikit-Learn",
        "XGBoost & Random Forest",
        "Isolation Forest",
        "Exploratory Data Analysis (EDA)",
        "Feature Engineering",
        "Pandas & NumPy",
        "Seaborn & Matplotlib",
      ],
    },
    {
      category: "Full Stack & Web Engineering",
      icon: <SkillsWebIcon size={26} className="text-accent-theme" />,
      skills: [
        "React.js",
        "Next.js (App Router)",
        "Node.js & Express",
        "Tailwind CSS v4",
        "Three.js & WebGL",
        "Socket.io & WebSockets",
        "Redux Toolkit",
        "RESTful API Architecture",
        "JWT Authentication",
        "HTML5 & Modern CSS",
      ],
    },
    {
      category: "Databases, Cloud & Systems",
      icon: <SkillsDatabaseIcon size={26} className="text-accent-theme" />,
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "ChromaDB (Vector Store)",
        "TiDB Cloud",
        "InfinityFree Hosting",
        "Apache Parquet & Feather",
        "AWS Cloud (APAC Simulation)",
      ],
    },
    {
      category: "Programming & Embedded Tech",
      icon: <SkillsProgrammingIcon size={26} className="text-accent-theme" />,
      skills: [
        "Python (Proficient)",
        "SQL (Proficient)",
        "JavaScript (ES6+)",
        "C Programming",
        "Dart (Flutter)",
        "Arduino UNO & ESP32",
        "RFID & Ultrasonic Sensors",
      ],
    },
    {
      category: "Tools, Creative Media & Workflows",
      icon: <SkillsToolsIcon size={26} className="text-accent-theme" />,
      skills: [
        "Git & GitHub",
        "VS Code",
        "Streamlit",
        "Ollama Local LLMs",
        "Google Antigravity IDE",
        "Google Colab & Jupyter",
        "Power BI",
        "Photoshop & Canva",
        "DaVinci Resolve & CapCut",
      ],
    },
    {
      category: "Leadership, Research & Governance",
      icon: <SkillsLeadershipIcon size={26} className="text-accent-theme" />,
      skills: [
        "Incubation Governance (MSEC-IIF)",
        "IIT Bombay NEC Track Lead",
        "Event Coordination (NextGenAI)",
        "12 Published Tech & Startup Blogs",
        "Career & Hostel Welfare Committees",
        "State Slam Poetry & Public Oratory",
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-5 sm:px-8 lg:px-12 transition-colors duration-400">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-theme bg-surface-theme text-accent-theme inline-block mb-3">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Skills & Engineering Toolkit
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-secondary leading-relaxed">
            Grounded in rigorous academic coursework, NPTEL discipline milestones, hands-on enterprise debugging, and full-stack software development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-3xl border border-theme bg-card-theme/90 backdrop-blur-sm shadow-sm hover:border-accent-theme transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-theme">
                  <div className="w-11 h-11 rounded-2xl border border-theme bg-surface-theme/80 flex items-center justify-center group-hover:scale-105 group-hover:border-accent-theme transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold font-serif-title text-base sm:text-lg text-primary leading-tight">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium border border-theme bg-surface-theme/70 text-secondary hover:text-primary hover:border-accent-theme transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
