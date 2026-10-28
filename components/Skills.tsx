"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Artificial Intelligence & Data Science",
      icon: "🧠",
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
      icon: "⚡",
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
      icon: "🗄️",
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
      icon: "💻",
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
      icon: "🛠️",
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
      icon: "🏛️",
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
    <section id="skills" className="relative py-24 px-6 sm:px-10 lg:px-20 transition-colors duration-400">
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
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-3xl border border-theme bg-card-theme shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-bold font-serif-title text-base sm:text-lg text-primary">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-xl text-xs font-medium border border-theme bg-surface-theme/80 text-secondary hover:text-primary transition-colors"
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

