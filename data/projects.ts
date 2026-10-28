export interface Project {
  id: string;
  title: string;
  category: "AI & ML" | "Data Science" | "Full Stack" | "Mobile & IoT";
  tagline: string;
  description: string;
  fullDetails: string;
  tech: string[];
  metrics: string;
  repoUrl?: string;
  demoUrl?: string;
  accessRequired?: boolean;
  authorship: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "atts",
    title: "Academic Target Tracking System (ATTS)",
    category: "Full Stack",
    tagline: "Institutional NAAC/NBA Accreditation Lifecycle Engine",
    description: "Enterprise full-stack tracking suite deployed for MSEC Internal Quality Assurance Cell (IQAC).",
    fullDetails:
      "Automates academic performance evaluation across 9 NAAC/NBA criteria. Features 5-tier Role-Based Access Control (Super Admin, Principal, HOD, Faculty, IQAC Auditor) and transactional data management across MongoDB and hosted MySQL.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "MySQL", "JWT", "Chart.js"],
    metrics: "Production deployed on campus; manages 100+ faculty records",
    repoUrl: "https://github.com/mrvruser/ATTS-IQAC",
    accessRequired: true,
    authorship: "Full Stack Architect & Database Engineer",
    featured: true,
  },
  {
    id: "three-companion",
    title: "Persistent Three-Companion Cognitive Ecosystem",
    category: "AI & ML",
    tagline: "Embodied AI Multi-Agent Social Continuity Architecture",
    description: "Research prototype exploring conscious-like multi-agent dynamics with persistent episodic memory.",
    fullDetails:
      "Engineered a persistent triadic computing ecosystem where three autonomous agents exhibit continuity of personality, dynamic relationship evolution, and emergent conversational initiative. Uses ChromaDB vector memory for cross-session recall.",
    tech: ["Python", "Ollama", "LangChain", "Streamlit", "ChromaDB", "Local LLMs"],
    metrics: "Zero-loss conversational context retention across restarts",
    accessRequired: true,
    authorship: "Principal AI Researcher & Systems Engineer",
    featured: true,
  },
  {
    id: "sports-assess",
    title: "Sports Assess — AI Talent Discovery Platform",
    category: "AI & ML",
    tagline: "Computer Vision Kinematic Motion Analysis for Grassroots Athletes",
    description: "Mobile computer vision platform democratizing talent identification for rural athletes across India.",
    fullDetails:
      "Developed for Smart India Hackathon (SIH 2025) college-level finalist Team SPARKZ. Athletes self-record fitness trials via smartphone camera while edge computer vision models measure jump height, sprint velocity, and endurance to benchmark them for official sports coaches.",
    tech: ["Python", "OpenCV", "MediaPipe", "FastAPI", "Flutter", "Scikit-Learn"],
    metrics: "SIH 2025 College-Shortlisted Finalist (Team SPARKZ)",
    accessRequired: true,
    authorship: "AI/CV Lead & Architecture Designer",
    featured: true,
  },
  {
    id: "credit-score",
    title: "Credit Scoring Predictive Machine Learning Model",
    category: "Data Science",
    tagline: "Supervised Financial Risk Classification Engine",
    description: "Predictive machine learning pipeline assessing creditworthiness across structured financial datasets.",
    fullDetails:
      "Built during Data Science Internship at TechQuanta DigiSolns. Evaluated customer creditworthiness using Random Forest, XGBoost, and Scikit-learn with extensive feature engineering and high-throughput Parquet/Feather data pipelines.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "Pandas", "Apache Parquet"],
    metrics: "High ROC-AUC score across multi-factor financial records",
    repoUrl: "https://github.com/vijayaregunath-t/Credit-Score-model-Task1",
    authorship: "Data Science Intern (TechQuanta DigiSolns)",
    featured: true,
  },
  {
    id: "flipkart-eda",
    title: "Flipkart Product Catalog & Sentiment Analysis",
    category: "Data Science",
    tagline: "E-Commerce Market Trends & Customer Satisfaction Analytics",
    description: "Exploratory data analysis and NLP sentiment analysis on extensive Flipkart consumer product catalogs.",
    fullDetails:
      "Extracted actionable business intelligence on pricing strategies, discount elasticities, and customer review sentiment polarity across major product categories. Included automated visualization dashboards.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "NLP", "TextBlob"],
    metrics: "Analyzed thousands of SKU listings and sentiment ratings",
    repoUrl: "https://github.com/vijayaregunath-t/flipkart-product-analysis",
    authorship: "Data Science Intern (TechQuanta DigiSolns)",
    featured: true,
  },
  {
    id: "agent-inai",
    title: "Agent InAI — Autonomous Sales Follow-Up Agent",
    category: "AI & ML",
    tagline: "Multi-Agent Conversation & Automated Lead Pipeline",
    description: "Autonomous agentic sales follow-up assistant streamlining WhatsApp and Email communications.",
    fullDetails:
      "Incubated proof-of-concept under MSEC Innovation and Incubation Foundation (MSEC-IIF). Features Lead Analyzer, Reply Generator, Follow-Up Strategy Agent, and real-time CRM monitoring dashboard.",
    tech: ["Agentic AI", "Python", "CRM Webhooks", "WhatsApp API", "Email Automation"],
    metrics: "Incubated Startup Proof-of-Concept (MSEC-IIF)",
    accessRequired: true,
    authorship: "Product Prototyper & AI Workflow Developer",
    featured: true,
  },
  {
    id: "tharagu",
    title: "Tharagu — Coastal & Hilly Rural Marketplace",
    category: "Full Stack",
    tagline: "Statewide Producer Platform Empowering Rural Micro-Entrepreneurs",
    description: "E-commerce platform bridging market access for indigenous producers in rural Tamil Nadu.",
    fullDetails:
      "Shortlisted among the top 400 nationwide out of 9,000+ submissions in the EDII-TN Hackathon. Designed to eliminate predatory middlemen through direct seller-to-consumer listings, geo-tagged authenticity verification, and regional logistics partnerships.",
    tech: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    metrics: "EDII-TN Hackathon Top 400 Finalist from 9,000+ entries",
    accessRequired: true,
    authorship: "Initiative Lead & Full Stack Prototyper",
    featured: true,
  },
  {
    id: "lablink",
    title: "LabLink — Real-Time Collaborative Academic Workspace",
    category: "Full Stack",
    tagline: "Frictionless Code Sharing & Anonymous Collaboration",
    description: "Real-time laboratory collaboration tool enabling peer-to-peer code and note exchange.",
    fullDetails:
      "Engineered with Socket.io and React to enable instant classroom code broadcasts without registration barriers. Resolved critical UI rendering, fenced code block parsing, and real-time link preview mechanisms.",
    tech: ["React.js", "Socket.io", "Node.js", "WebSockets", "CSS3"],
    metrics: "Tested and audited for frictionless lab deployment",
    accessRequired: true,
    authorship: "Full Stack Developer & Code Debugger",
    featured: false,
  },
  {
    id: "smart-trolley",
    title: "Smart Shopping Trolley for Hands-Free Retail",
    category: "Mobile & IoT",
    tagline: "Autonomous Human-Following Cart with RFID Automated Billing",
    description: "IoT embedded hardware platform streamlining in-store checkout and shopper ergonomics.",
    fullDetails:
      "Engineered an autonomous human-following trolley using ultrasonic and infrared range finders. Embedded RFID checkout scans items as they are added, rendering instantaneous itemized billing on an LCD screen.",
    tech: ["Arduino UNO", "ESP32", "RFID", "Ultrasonic Sensors", "C++", "IoT"],
    metrics: "Functional embedded hardware prototype",
    accessRequired: true,
    authorship: "Hardware Designer & Embedded Firmware Developer",
    featured: false,
  },
  {
    id: "flashmind",
    title: "FlashMind — Spaced Repetition Mobile Flashcard App",
    category: "Mobile & IoT",
    tagline: "Cross-Platform Mobile Quiz & Learning Suite",
    description: "Interactive mobile study tool utilizing spaced repetition algorithms for knowledge retention.",
    fullDetails:
      "Built during Application Development Internship at CodeAlpha. Employs Flutter and Firebase Firestore for seamless multi-device synchronization, custom study deck creation, and offline progress tracking.",
    tech: ["Flutter", "Dart", "Firebase Firestore", "Provider State Management"],
    metrics: "CodeAlpha Application Development Internship Deliverable",
    authorship: "Mobile Application Developer",
    featured: false,
  },
  {
    id: "nexus-debugger",
    title: "Nexus Collaborative Management Suite (Audit & Debug)",
    category: "Full Stack",
    tagline: "Enterprise MERN State Management & Security Hardening",
    description: "Audited senior-developed collaborative workflow application to resolve critical state bugs.",
    fullDetails:
      "Conducted deep full-stack code audit on Redux Toolkit state mutations, resolved asynchronous token expiration in JWT sessions, and fortified RESTful endpoints against concurrency edge cases.",
    tech: ["MERN Stack", "Redux Toolkit", "JWT", "REST APIs"],
    metrics: "100% bug clearance across state management and authentication",
    accessRequired: true,
    authorship: "Full Stack Debugger & Code Auditor",
    featured: false,
  },
  {
    id: "client-eswin",
    title: "3D Architectural Portfolio for Mr. Eswin Antony",
    category: "Full Stack",
    tagline: "Immersive 3D Spatial Architectural Showcase",
    description: "Bespoke commercial web portfolio developed for prominent architectural professional.",
    fullDetails:
      "Created an interactive 3D spatial walkthrough leveraging Three.js and Anime.js. Highlights structural drafts, materials, and architectural blueprints with smooth camera dolly transitions.",
    tech: ["Three.js", "Anime.js", "JavaScript", "HTML5/CSS3", "WebGL"],
    metrics: "Delivered production client website",
    accessRequired: true,
    authorship: "Creative Technologist & Frontend Engineer",
    featured: false,
  },
  {
    id: "anomaly-ensemble",
    title: "Anomaly-Aware Ensemble Framework for Packet Traffic",
    category: "AI & ML",
    tagline: "Hybrid Supervised & Unsupervised Network Security Classifier",
    description: "Research framework identifying anomalous and malicious network packet traffic.",
    fullDetails:
      "Collaborative research initiative with peer Muthumani P. Combines supervised classifiers (Random Forest, Gradient Boosting, XGBoost) with unsupervised Isolation Forest into a weighted Voting Classifier.",
    tech: ["Python", "Isolation Forest", "Voting Classifier", "XGBoost", "Scikit-Learn"],
    metrics: "High detection rate on high-dimensional traffic anomalies",
    authorship: "Machine Learning Researcher & Prototyper",
    featured: false,
  },
  {
    id: "vairam-press",
    title: "Vairam Vijay Press Company Commercial Web Portal",
    category: "Full Stack",
    tagline: "Commercial Web Presence & Digital Print Catalog",
    description: "Commercial corporate portal for printing and packaging enterprise.",
    fullDetails:
      "Developed a responsive corporate web portal showcasing printing services, custom packaging solutions, paper quality standards, and automated client quote submission.",
    tech: ["HTML5", "Modern CSS", "JavaScript", "Responsive Design"],
    metrics: "Delivered commercial business portal",
    authorship: "Client Web Developer",
    featured: false,
  },
];
