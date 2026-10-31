export interface DataScienceCourse {
  id: string;
  code: string;
  title: string;
  institution: string;
  duration: string;
  score: string;
  scoreCategory: "Elite + Silver" | "Elite";
  rollNumber?: string;
  type: "Core" | "Elective";
  keyTopics: string[];
  appliedProject: {
    title: string;
    description: string;
    repoUrl?: string;
  };
  pdfUrl: string;
  thumbnailUrl: string;
}

export interface DomainHonour {
  title: string;
  issuer: string;
  description: string;
  badge: string;
}

export const DATA_SCIENCE_DOMAIN = {
  title: "SWAYAM-NPTEL Domain Certification in Data Science",
  subtitle: "Computer Science & Engineering Discipline",
  totalScore: "415 Total Marks",
  summary:
    "A comprehensive multi-semester specialization completed through premier Indian Institutes of Technology (IIT Madras, IIT Roorkee, IIT Bombay, IIT Delhi) and the Indian Institute of Science (IISc Bangalore). Covers foundational statistical learning, predictive modeling, deep neural architectures, and generative large language models, tied directly to practical engineering systems.",
  milestoneImage: "/portfolio_assets/gallery/LI-POST-062_LI-POST-062_img_01.jpg",
  honours: [
    {
      title: "NPTEL Discipline Star",
      issuer: "NPTEL, Ministry of Education, Govt. of India",
      description: "Recognized for completing rigorous multi-course domain requirements in Computer Science & Data Science.",
      badge: "Discipline Star"
    },
    {
      title: "NPTEL Believer",
      issuer: "NPTEL, Ministry of Education, Govt. of India",
      description: "Honored for persistent, multi-semester dedication to national academic excellence.",
      badge: "Elite Believer"
    }
  ] as DomainHonour[],
  coreCourses: [
    {
      id: "ds-python",
      code: "CS-NPTEL-01",
      title: "Python for Data Science",
      institution: "Indian Institute of Technology, Madras (IITM)",
      duration: "4 Weeks",
      score: "82%",
      scoreCategory: "Elite + Silver",
      type: "Core",
      keyTopics: [
        "NumPy Numerical Computing",
        "Pandas Data Wrangling",
        "Vectorized Matrix Math",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization with Matplotlib/Seaborn"
      ],
      appliedProject: {
        title: "Flipkart E-Commerce Product Analysis",
        description: "Built scalable data pipeline analyzing thousands of e-commerce listings with statistical distributions and pricing anomalies.",
        repoUrl: "https://github.com/mrvruser/flipkart-product-analysis"
      },
      pdfUrl: "/portfolio_assets/certificates/LI-POST-066_LI-POST-066_NPTEL-Python_for_Data_Science.pdf",
      thumbnailUrl: "/portfolio_assets/thumbnails/LI-POST-066_LI-POST-066_doc_cover_0.jpg"
    },
    {
      id: "ds-analytics",
      code: "NOC26CS86S66440007704685732",
      title: "Data Analytics with Python",
      institution: "Indian Institute of Technology, Roorkee (IITR)",
      duration: "12 Weeks",
      score: "75%",
      scoreCategory: "Elite + Silver",
      rollNumber: "NOC26CS86S66440007704685732",
      type: "Core",
      keyTopics: [
        "Statistical Hypothesis Testing",
        "Multivariate Linear Regression",
        "Classification & Logistic Modeling",
        "ANOVA & Variance Decomposition",
        "Feature Transformation & Standardization"
      ],
      appliedProject: {
        title: "Credit Score & Risk Assessment Model",
        description: "Implemented enterprise risk scoring classifier with multi-tier risk segmentation and feature importance analysis.",
        repoUrl: "https://github.com/mrvruser/Credit-Score-model-Task1"
      },
      pdfUrl: "/portfolio_assets/certificates/LI-POST-041_LI-POST-041_Data_Analytics_with_Python_-_NPTEL.pdf",
      thumbnailUrl: "/portfolio_assets/thumbnails/LI-POST-041_LI-POST-041_doc_cover_0.jpg"
    },
    {
      id: "ds-ml",
      code: "CS-NPTEL-03",
      title: "Introduction to Machine Learning",
      institution: "Indian Institute of Technology, Madras (IITM)",
      duration: "12 Weeks",
      score: "66%",
      scoreCategory: "Elite",
      type: "Core",
      keyTopics: [
        "Supervised & Unsupervised Learning",
        "Decision Trees & Information Gain",
        "Ensemble Methods (Random Forests, Boosting)",
        "Dimensionality Reduction (PCA)",
        "Model Evaluation & Cross-Validation"
      ],
      appliedProject: {
        title: "Algorithmic Predictive Engine",
        description: "Designed multi-model comparison benchmarks evaluating classification accuracy, precision-recall curves, and ROC-AUC.",
        repoUrl: "https://github.com/mrvruser"
      },
      pdfUrl: "/portfolio_assets/certificates/LI-POST-074_LI-POST-074_Intro_to_ML_-_NPTEL.pdf",
      thumbnailUrl: "/portfolio_assets/thumbnails/LI-POST-074_LI-POST-074_doc_cover_0.jpg"
    }
  ] as DataScienceCourse[],
  electiveCourses: [
    {
      id: "ds-dl",
      code: "NOC26CS01S106440013804685732",
      title: "Foundations of Deep Learning: Concepts and Applications",
      institution: "Indian Institute of Science (IISc), Bangalore",
      duration: "12 Weeks",
      score: "61%",
      scoreCategory: "Elite",
      rollNumber: "NOC26CS01S106440013804685732",
      type: "Elective",
      keyTopics: [
        "Multilayer Perceptrons & Backpropagation",
        "Convolutional Neural Networks (CNNs)",
        "Regularization & Dropout Mechanisms",
        "Optimization Dynamics (Adam, RMSProp)",
        "Computer Vision Feature Extraction"
      ],
      appliedProject: {
        title: "Sports Assess Edge Kinematics",
        description: "Developed real-time pose estimation and computer vision analysis for scouting rural and undiscovered athletic talent.",
        repoUrl: "https://github.com/mrvruser"
      },
      pdfUrl: "/portfolio_assets/certificates/LI-POST-016_LI-POST-016_Foundations_Of_Deep_Learning_-_NPTEL.pdf",
      thumbnailUrl: "/portfolio_assets/thumbnails/LI-POST-016_LI-POST-016_doc_cover_0.jpg"
    },
    {
      id: "ds-llm",
      code: "CS-NPTEL-05",
      title: "Introduction to Large Language Models (LLMs)",
      institution: "Indian Institute of Technology, Delhi (IITD) & IIT Bombay",
      duration: "12 Weeks",
      score: "62%",
      scoreCategory: "Elite",
      type: "Elective",
      keyTopics: [
        "Transformer Multi-Head Attention",
        "Positional Embeddings & Tokenization",
        "Self-Supervised Pretraining & Fine-Tuning",
        "Retrieval-Augmented Generation (RAG)",
        "Context Window Optimization & Prompt Engineering"
      ],
      appliedProject: {
        title: "Three-Companion Intelligent Assistant",
        description: "Engineered responsive full-stack AI assistant with streaming completions, token budgeting, and multi-turn conversational memory.",
        repoUrl: "https://github.com/mrvruser"
      },
      pdfUrl: "/portfolio_assets/certificates/LI-POST-038_LI-POST-038_Intro_to_LLMs_-_NPTEL.pdf",
      thumbnailUrl: "/portfolio_assets/thumbnails/LI-POST-038_LI-POST-038_doc_cover_0.jpg"
    },
    {
      id: "ds-learning-analytics",
      code: "CS-NPTEL-06",
      title: "Learning Analytics Tools",
      institution: "Indian Institute of Technology, Bombay (IITB)",
      duration: "12 Weeks",
      score: "69%",
      scoreCategory: "Elite",
      type: "Elective",
      keyTopics: [
        "Educational Data Mining (EDM)",
        "Student Engagement Modeling",
        "Predictive Metric Dashboards",
        "Actionable Institutional Interventions",
        "Learning Workflow Pattern Recognition"
      ],
      appliedProject: {
        title: "ATTS IQAC Governance System",
        description: "Built enterprise academic compliance system governing 9 NAAC/NBA criteria and automating evaluation tracking for college faculty.",
        repoUrl: "https://github.com/mrvruser/ATTS-IQAC"
      },
      pdfUrl: "/portfolio_assets/certificates/LI-POST-099_LI-POST-099_Learning_Analytics_Tools_-_NPTEL.pdf",
      thumbnailUrl: "/portfolio_assets/thumbnails/LI-POST-099_LI-POST-099_doc_cover_0.jpg"
    }
  ] as DataScienceCourse[]
};
