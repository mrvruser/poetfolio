export interface SkillItem {
  id: string;
  name: string;
  category: "languages" | "data_science" | "ai_ml" | "frontend" | "backend" | "databases" | "tools";
  categoryLabel: string;
  iconPath?: string;
  description: string;
  usageContext: string;
  relatedProject?: {
    name: string;
    projectId: string;
  };
  verifiedBy?: string;
}

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Arsenal" },
  { id: "languages", label: "Programming Languages" },
  { id: "data_science", label: "Data Science & Analytics" },
  { id: "ai_ml", label: "AI & Machine Learning" },
  { id: "frontend", label: "Frontend Engineering" },
  { id: "backend", label: "Backend & Systems" },
  { id: "databases", label: "Databases & Cloud" },
  { id: "tools", label: "Developer & Embedded Tools" },
] as const;

export const SKILLS_MATRIX: SkillItem[] = [
  // Programming Languages
  {
    id: "py",
    name: "Python",
    category: "languages",
    categoryLabel: "Programming Languages",
    iconPath: "/icons/technology/python.svg",
    description: "Primary language for data science, algorithmic machine learning, and automation scripting.",
    usageContext: "Core driver across Flipkart EDA, Credit Scoring pipelines, and Sports Assess computer vision.",
    relatedProject: { name: "Flipkart Analytics", projectId: "flipkart-product-analysis" },
    verifiedBy: "IIT Madras NPTEL (82% Elite+Silver)"
  },
  {
    id: "sql",
    name: "SQL & Relational Modeling",
    category: "languages",
    categoryLabel: "Programming Languages",
    iconPath: "/icons/technology/postgresql.svg",
    description: "Complex queries, window functions, schema design, and relational integrity constraints.",
    usageContext: "Architected 9-criteria academic compliance schema and audit tracking for ATTS IQAC.",
    relatedProject: { name: "ATTS IQAC", projectId: "atts-iqac" },
    verifiedBy: "PostgreSQL Simplilearn & Anna University"
  },
  {
    id: "c-cpp",
    name: "C / C++",
    category: "languages",
    categoryLabel: "Programming Languages",
    iconPath: "/icons/technology/fastapi.svg",
    description: "Low-level memory management, pointers, data structures, and embedded microcontroller programming.",
    usageContext: "ESP32 firmware and motor sensor telemetry in AArACaN autonomous rover.",
    relatedProject: { name: "AArACaN Rover", projectId: "aaracan-rover" },
    verifiedBy: "Anna University Core Curriculum"
  },
  {
    id: "java",
    name: "Java",
    category: "languages",
    categoryLabel: "Programming Languages",
    iconPath: "/icons/technology/fastapi.svg",
    description: "Object-oriented software principles, multi-threading, and enterprise application architecture.",
    usageContext: "Academic coursework and foundational enterprise algorithmic implementations.",
    verifiedBy: "Anna University Core Curriculum"
  },
  {
    id: "ts-js",
    name: "TypeScript & JavaScript (ES6+)",
    category: "languages",
    categoryLabel: "Programming Languages",
    iconPath: "/icons/technology/react.svg",
    description: "Strictly typed modern web application engineering, async event loops, and DOM manipulation.",
    usageContext: "Full-stack client architecture in Poetfolio, ATTS, and Three-Companion UI.",
    relatedProject: { name: "Poetfolio", projectId: "poetfolio-platform" },
    verifiedBy: "Production Full-Stack Web Development"
  },

  // Data Science & Analytics
  {
    id: "pandas",
    name: "Pandas & Data Wrangling",
    category: "data_science",
    categoryLabel: "Data Science & Analytics",
    iconPath: "/icons/technology/pandas.svg",
    description: "High-performance tabular manipulation, multi-indexing, aggregation, and missing value imputation.",
    usageContext: "Cleaned and processed thousands of e-commerce records and credit risk histories.",
    relatedProject: { name: "Flipkart Analytics", projectId: "flipkart-product-analysis" },
    verifiedBy: "IIT Roorkee NPTEL (75% Elite+Silver)"
  },
  {
    id: "numpy",
    name: "NumPy & Vectorized Math",
    category: "data_science",
    categoryLabel: "Data Science & Analytics",
    iconPath: "/icons/technology/python.svg",
    description: "Multi-dimensional array mathematics, linear algebra, matrix operations, and broadcasting.",
    usageContext: "Kinematic vector angle calculations for athlete pose tracking in Sports Assess.",
    relatedProject: { name: "Sports Assess", projectId: "sports-assess" },
    verifiedBy: "IIT Madras NPTEL (82% Elite+Silver)"
  },
  {
    id: "eda",
    name: "Exploratory Data Analysis (EDA)",
    category: "data_science",
    categoryLabel: "Data Science & Analytics",
    iconPath: "/icons/technology/pandas.svg",
    description: "Statistical distributions, correlation heatmaps, anomaly detection, and hypothesis validation.",
    usageContext: "Identified anomalous retail price clustering and debt-to-income default indicators.",
    relatedProject: { name: "Credit Score Model", projectId: "credit-score-model" },
    verifiedBy: "IIT Roorkee & OfficeMaster PowerBI"
  },
  {
    id: "matplotlib-seaborn",
    name: "Seaborn & Matplotlib",
    category: "data_science",
    categoryLabel: "Data Science & Analytics",
    iconPath: "/icons/technology/python.svg",
    description: "Multi-panel analytical charting, distribution KDE plots, and presentation-grade visual insight.",
    usageContext: "Rendered credit default probabilities and e-commerce discount frequency plots.",
    relatedProject: { name: "Flipkart Analytics", projectId: "flipkart-product-analysis" }
  },

  // AI & Machine Learning
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    iconPath: "/icons/technology/scikit-learn.svg",
    description: "Supervised & unsupervised learning: Random Forest, Decision Trees, Logistic Regression, SVM, PCA.",
    usageContext: "Trained multi-class creditworthiness classifier with cross-validated ROC-AUC benchmarks.",
    relatedProject: { name: "Credit Score Model", projectId: "credit-score-model" },
    verifiedBy: "IIT Madras NPTEL (66% Elite)"
  },
  {
    id: "deep-learning",
    name: "Deep Learning & Neural Architectures",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    iconPath: "/icons/technology/python.svg",
    description: "Multilayer perceptrons, backpropagation, CNN convolutions, pooling, and dropout regularization.",
    usageContext: "Applied neural layers to spatial athlete coordinate extraction and pose classification.",
    relatedProject: { name: "Sports Assess", projectId: "sports-assess" },
    verifiedBy: "IISc Bangalore NPTEL (61% Elite)"
  },
  {
    id: "llm",
    name: "Large Language Models & RAG",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    iconPath: "/icons/technology/python.svg",
    description: "Transformer attention mechanisms, prompt engineering, token management, and contextual RAG.",
    usageContext: "Developed conversational memory and multi-turn persona context in Three-Companion AI.",
    relatedProject: { name: "Three-Companion", projectId: "three-companion" },
    verifiedBy: "IIT Delhi & IIT Bombay NPTEL (62% Elite)"
  },
  {
    id: "opencv",
    name: "OpenCV & Computer Vision",
    category: "ai_ml",
    categoryLabel: "AI & Machine Learning",
    iconPath: "/icons/technology/python.svg",
    description: "Frame-by-frame video parsing, contour detection, morphological transformations, and pose joints.",
    usageContext: "Real-time athlete agility assessment for talent scouting in Team SPARKZ (SIH 2025).",
    relatedProject: { name: "Sports Assess", projectId: "sports-assess" },
    verifiedBy: "Smart India Hackathon Finalist"
  },

  // Frontend Engineering
  {
    id: "nextjs",
    name: "Next.js (App Router)",
    category: "frontend",
    categoryLabel: "Frontend Engineering",
    iconPath: "/icons/technology/react.svg",
    description: "Server-side rendering (SSR), static site generation (SSG), route handlers, and performance optimization.",
    usageContext: "Core architecture of Poetfolio and administrative frontend of ATTS IQAC portal.",
    relatedProject: { name: "Poetfolio", projectId: "poetfolio-platform" }
  },
  {
    id: "react",
    name: "React.js & Hooks",
    category: "frontend",
    categoryLabel: "Frontend Engineering",
    iconPath: "/icons/technology/react.svg",
    description: "Component lifecycles, memoization, state machines, context providers, and declarative UI.",
    usageContext: "Interactive dashboards across MSEC-IIF portal, ATTS, and Poetfolio modals.",
    relatedProject: { name: "MSEC-IIF Portal", projectId: "msec-iif-portal" }
  },
  {
    id: "tailwind",
    name: "Tailwind CSS v4",
    category: "frontend",
    categoryLabel: "Frontend Engineering",
    iconPath: "/icons/technology/react.svg",
    description: "Utility-first responsive design, CSS variables design token systems, and glassmorphism styling.",
    usageContext: "Precision dual-world visual theming (Literary Parchment vs Cyber Digital).",
    relatedProject: { name: "Poetfolio", projectId: "poetfolio-platform" }
  },
  {
    id: "threejs",
    name: "Three.js & WebGL",
    category: "frontend",
    categoryLabel: "Frontend Engineering",
    iconPath: "/icons/technology/threejs.svg",
    description: "Interactive 3D geometry rendering, vertex shaders, point clouds, and dual-world scene transitions.",
    usageContext: "Dual-world rotating lattice and particle constellations in Poetfolio Hero.",
    relatedProject: { name: "Poetfolio", projectId: "poetfolio-platform" }
  },

  // Backend & Systems
  {
    id: "fastapi",
    name: "FastAPI & Python Microservices",
    category: "backend",
    categoryLabel: "Backend & Systems",
    iconPath: "/icons/technology/fastapi.svg",
    description: "Asynchronous REST APIs, Pydantic type validation, OpenAPI documentation, and high-throughput routing.",
    usageContext: "Machine learning inference endpoint serving predictions for Credit Scoring & ATTS APIs.",
    relatedProject: { name: "Credit Score Model", projectId: "credit-score-model" }
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "backend",
    categoryLabel: "Backend & Systems",
    iconPath: "/icons/technology/nodejs.svg",
    description: "Event-driven server runtime, middleware chains, token validation, and file streaming.",
    usageContext: "API gateway and session management in institutional portal services.",
    relatedProject: { name: "ATTS IQAC", projectId: "atts-iqac" }
  },
  {
    id: "rest-auth",
    name: "REST API & JWT Authentication",
    category: "backend",
    categoryLabel: "Backend & Systems",
    iconPath: "/icons/technology/fastapi.svg",
    description: "Role-based access control (RBAC), stateless JWT token validation, and secure cryptographic hashing.",
    usageContext: "Multi-tiered faculty vs IQAC admin authentication in ATTS governance system.",
    relatedProject: { name: "ATTS IQAC", projectId: "atts-iqac" }
  },

  // Databases & Cloud
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "databases",
    categoryLabel: "Databases & Cloud",
    iconPath: "/icons/technology/postgresql.svg",
    description: "Relational database management, foreign key integrity, index optimization, and JSONB fields.",
    usageContext: "Primary operational database governing 9 NAAC/NBA criteria metrics in ATTS.",
    relatedProject: { name: "ATTS IQAC", projectId: "atts-iqac" },
    verifiedBy: "PostgreSQL Simplilearn"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "databases",
    categoryLabel: "Databases & Cloud",
    iconPath: "/icons/technology/mongodb.svg",
    description: "Document-oriented NoSQL storage, schema flexibility, BSON document modeling, and aggregation pipelines.",
    usageContext: "Unstructured conversational log storage and rapid prototyping in Three-Companion.",
    relatedProject: { name: "Three-Companion", projectId: "three-companion" }
  },
  {
    id: "aws",
    name: "AWS Cloud (Solutions Architecture)",
    category: "databases",
    categoryLabel: "Databases & Cloud",
    iconPath: "/icons/technology/postgresql.svg",
    description: "S3 object storage, EC2 compute sizing, IAM role permissions, and CloudFront CDN routing.",
    usageContext: "Cloud architecture simulations and secure document distribution pipelines.",
    verifiedBy: "Forage AWS APAC Solutions Architecture"
  },

  // Developer & Embedded Tools
  {
    id: "git",
    name: "Git & GitHub Version Control",
    category: "tools",
    categoryLabel: "Developer Tools",
    iconPath: "/icons/social/github.svg",
    description: "Branching workflows, semantic commits, code reviews, merge conflict resolution, and CI/CD pipelines.",
    usageContext: "Managed collaborative repositories across ATTS-IQAC, Flipkart EDA, and Poetfolio.",
    relatedProject: { name: "GitHub mrvruser", projectId: "atts-iqac" }
  },
  {
    id: "linux",
    name: "Linux Shell & Scripting",
    category: "tools",
    categoryLabel: "Developer Tools",
    iconPath: "/icons/technology/fastapi.svg",
    description: "Bash automation, POSIX permissions, daemon process supervision, SSH remote deployment, and system cron.",
    usageContext: "Server deployment, environment containerization, and data scraping schedulers."
  },
  {
    id: "iot",
    name: "ESP32 & IoT Embedded Systems",
    category: "tools",
    categoryLabel: "Developer Tools",
    iconPath: "/icons/categories/mobile-iot.svg",
    description: "Sensor bus communication (I2C, SPI), serial telemetry, PWM motor control, and WiFi telemetry.",
    usageContext: "Engineered sensor telemetry and autonomous pathing for AArACaN agricultural rover.",
    relatedProject: { name: "AArACaN Rover", projectId: "aaracan-rover" },
    verifiedBy: "IIT Bombay Spoken Tutorial (92.5%)"
  }
];
