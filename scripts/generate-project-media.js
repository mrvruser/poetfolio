const fs = require("fs");
const path = require("path");

const outDir = path.resolve(__dirname, "../public/portfolio_assets/projects");

const projectMedia = {
  // 1. ATTS - Institutional NAAC/NBA Accreditation Engine
  "atts-architecture.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#0c0f17; font-family:system-ui, sans-serif;">
  <defs>
    <linearGradient id="bgGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00F5D4" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#0066cc" stop-opacity="0.04"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="#090c13"/>
  <rect width="800" height="450" fill="url(#bgGlow)"/>
  <!-- Grid -->
  <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
    <path d="M0 50h800 M0 100h800 M0 150h800 M0 200h800 M0 250h800 M0 300h800 M0 350h800 M0 400h800"/>
    <path d="M50 0v450 M150 0v450 M250 0v450 M350 0v450 M450 0v450 M550 0v450 M650 0v450 M750 0v450"/>
  </g>
  <!-- Header Badge -->
  <rect x="30" y="24" width="180" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="120" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">SYSTEM ARCHITECTURE</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">ATTS — Institutional Accreditation Engine</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">MSEC IQAC • 5-Tier RBAC &amp; Dual-Database Cluster (MongoDB + MySQL)</text>

  <!-- Flow Nodes -->
  <!-- Node 1: Client Layers -->
  <g transform="translate(40, 140)">
    <rect width="180" height="230" rx="16" fill="#131722" stroke="#00F5D4" stroke-opacity="0.4" stroke-width="1.5"/>
    <text x="90" y="32" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">1. Client Layer</text>
    <rect x="20" y="55" width="140" height="36" rx="8" fill="#1c2233" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="90" y="78" fill="#F0F4F8" font-size="11" text-anchor="middle">Super Admin &amp; Principal</text>
    <rect x="20" y="100" width="140" height="36" rx="8" fill="#1c2233" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="90" y="123" fill="#F0F4F8" font-size="11" text-anchor="middle">HOD &amp; Coordinators</text>
    <rect x="20" y="145" width="140" height="36" rx="8" fill="#1c2233" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="90" y="168" fill="#F0F4F8" font-size="11" text-anchor="middle">100+ Faculty Portals</text>
    <text x="90" y="210" fill="#8B9BB0" font-size="10" text-anchor="middle">React.js • Tailwind • Chart.js</text>
  </g>

  <!-- Connectors -->
  <path d="M220 255h70" stroke="#00F5D4" stroke-width="2" stroke-dasharray="4 4"/>
  <polygon points="290 255 282 250 282 260" fill="#00F5D4"/>

  <!-- Node 2: Security & Routing Engine -->
  <g transform="translate(300, 140)">
    <rect width="200" height="230" rx="16" fill="#131722" stroke="#00F5D4" stroke-opacity="0.6" stroke-width="1.5"/>
    <text x="100" y="32" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">2. Security &amp; Workflow</text>
    <rect x="20" y="55" width="160" height="42" rx="8" fill="#1a2336" stroke="#00F5D4" stroke-opacity="0.3"/>
    <text x="100" y="80" fill="#F0F4F8" font-size="11" font-weight="600" text-anchor="middle">5-Tier JWT RBAC Engine</text>
    <rect x="20" y="108" width="160" height="42" rx="8" fill="#1c2233" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="100" y="133" fill="#F0F4F8" font-size="11" text-anchor="middle">9 NAAC/NBA Criteria Logic</text>
    <rect x="20" y="160" width="160" height="42" rx="8" fill="#1c2233" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="100" y="185" fill="#F0F4F8" font-size="11" text-anchor="middle">Academic Lifecycle State</text>
  </g>

  <!-- Connectors -->
  <path d="M500 255h70" stroke="#00F5D4" stroke-width="2" stroke-dasharray="4 4"/>
  <polygon points="570 255 562 250 562 260" fill="#00F5D4"/>

  <!-- Node 3: Persistence Cluster -->
  <g transform="translate(580, 140)">
    <rect width="180" height="230" rx="16" fill="#131722" stroke="#00F5D4" stroke-opacity="0.4" stroke-width="1.5"/>
    <text x="90" y="32" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">3. Data Cluster</text>
    <rect x="20" y="55" width="140" height="60" rx="8" fill="#1c2233" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="90" y="82" fill="#00F5D4" font-size="12" font-weight="700" text-anchor="middle">MySQL Relational</text>
    <text x="90" y="100" fill="#8B9BB0" font-size="10" text-anchor="middle">Evaluations &amp; Port 3306</text>
    <rect x="20" y="130" width="140" height="60" rx="8" fill="#1c2233" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="90" y="157" fill="#00F5D4" font-size="12" font-weight="700" text-anchor="middle">MongoDB Store</text>
    <text x="90" y="175" fill="#8B9BB0" font-size="10" text-anchor="middle">Criteria &amp; Dynamic Schemas</text>
  </g>
</svg>`,

  // 2. Persistent Three-Companion Cognitive Ecosystem
  "three-companion-architecture.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <circle cx="400" cy="225" r="260" fill="#00F5D4" fill-opacity="0.03"/>
  <rect x="30" y="24" width="230" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="145" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">COGNITIVE ARCHITECTURE (TRL 4)</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Persistent Triadic Multi-Agent Ecology</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">Ollama Local LLM Inference • ChromaDB Vector Memory • Continuous Persona</text>

  <!-- Center Memory Core -->
  <g transform="translate(310, 160)">
    <rect width="180" height="150" rx="20" fill="#151a26" stroke="#00F5D4" stroke-width="2"/>
    <circle cx="90" cy="60" r="30" fill="#00F5D4" fill-opacity="0.2"/>
    <text x="90" y="66" fill="#00F5D4" font-size="20" font-weight="800" text-anchor="middle">ChromaDB</text>
    <text x="90" y="105" fill="#F0F4F8" font-size="12" font-weight="600" text-anchor="middle">Episodic Vector Store</text>
    <text x="90" y="125" fill="#8B9BB0" font-size="10" text-anchor="middle">Cross-Session Persona Recall</text>
  </g>

  <!-- Agent 1 (Top Left) -->
  <g transform="translate(60, 130)">
    <rect width="170" height="90" rx="14" fill="#131620" stroke="#00F5D4" stroke-opacity="0.4"/>
    <text x="85" y="32" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Companion Alpha</text>
    <text x="85" y="52" fill="#F0F4F8" font-size="11" text-anchor="middle">Analytical Deliberation</text>
    <text x="85" y="72" fill="#8B9BB0" font-size="10" text-anchor="middle">Llama 3.2 3B Quantized</text>
  </g>
  <path d="M230 175 L310 200" stroke="#00F5D4" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Agent 2 (Bottom Left) -->
  <g transform="translate(60, 260)">
    <rect width="170" height="90" rx="14" fill="#131620" stroke="#00F5D4" stroke-opacity="0.4"/>
    <text x="85" y="32" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Companion Beta</text>
    <text x="85" y="52" fill="#F0F4F8" font-size="11" text-anchor="middle">Affective Dialogue</text>
    <text x="85" y="72" fill="#8B9BB0" font-size="10" text-anchor="middle">Mistral 7B Local Core</text>
  </g>
  <path d="M230 295 L310 260" stroke="#00F5D4" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Agent 3 (Right) -->
  <g transform="translate(570, 195)">
    <rect width="170" height="90" rx="14" fill="#131620" stroke="#00F5D4" stroke-opacity="0.4"/>
    <text x="85" y="32" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Companion Gamma</text>
    <text x="85" y="52" fill="#F0F4F8" font-size="11" text-anchor="middle">Synthesizer &amp; Provocateur</text>
    <text x="85" y="72" fill="#8B9BB0" font-size="10" text-anchor="middle">Emergent Initiative Loop</text>
  </g>
  <path d="M490 235 L570 235" stroke="#00F5D4" stroke-width="1.5" stroke-dasharray="3 3"/>
</svg>`,

  // 3. Sports Assess — Computer Vision Kinematic Pipeline
  "sports-assess-cv.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">COMPUTER VISION PIPELINE</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Sports Assess — Motion Kinematics</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">SIH 2025 College Finalist • MediaPipe 33-Keypoint Extraction • Agility Benchmarking</text>

  <!-- Flow Boxes -->
  <g transform="translate(40, 150)">
    <rect width="150" height="200" rx="16" fill="#131622" stroke="#ffffff" stroke-opacity="0.1"/>
    <circle cx="75" cy="50" r="24" fill="#00F5D4" fill-opacity="0.1"/>
    <text x="75" y="55" fill="#00F5D4" font-size="12" font-weight="700" text-anchor="middle">STEP 1</text>
    <text x="75" y="100" fill="#F0F4F8" font-size="13" font-weight="700" text-anchor="middle">Mobile Ingest</text>
    <text x="75" y="125" fill="#8B9BB0" font-size="10" text-anchor="middle">Self-recorded video</text>
    <text x="75" y="145" fill="#8B9BB0" font-size="10" text-anchor="middle">Sprint / Vertical Jump</text>
    <text x="75" y="165" fill="#8B9BB0" font-size="10" text-anchor="middle">Grassroots trials</text>
  </g>

  <path d="M190 250h40" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(230, 150)">
    <rect width="160" height="200" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.4"/>
    <circle cx="80" cy="50" r="24" fill="#00F5D4" fill-opacity="0.15"/>
    <text x="80" y="55" fill="#00F5D4" font-size="12" font-weight="700" text-anchor="middle">STEP 2</text>
    <text x="80" y="100" fill="#F0F4F8" font-size="13" font-weight="700" text-anchor="middle">MediaPipe Pose</text>
    <text x="80" y="125" fill="#8B9BB0" font-size="10" text-anchor="middle">33 3D Joint Keypoints</text>
    <text x="80" y="145" fill="#8B9BB0" font-size="10" text-anchor="middle">Angular velocity calculation</text>
    <text x="80" y="165" fill="#8B9BB0" font-size="10" text-anchor="middle">Drift suppression</text>
  </g>

  <path d="M390 250h40" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(430, 150)">
    <rect width="160" height="200" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.6"/>
    <circle cx="80" cy="50" r="24" fill="#00F5D4" fill-opacity="0.2"/>
    <text x="80" y="55" fill="#00F5D4" font-size="12" font-weight="700" text-anchor="middle">STEP 3</text>
    <text x="80" y="100" fill="#F0F4F8" font-size="13" font-weight="700" text-anchor="middle">Kinematic Model</text>
    <text x="80" y="125" fill="#8B9BB0" font-size="10" text-anchor="middle">Flight-time physics equation</text>
    <text x="80" y="145" fill="#8B9BB0" font-size="10" text-anchor="middle">Stride frequency analysis</text>
    <text x="80" y="165" fill="#8B9BB0" font-size="10" text-anchor="middle">Rep counter validation</text>
  </g>

  <path d="M590 250h40" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(630, 150)">
    <rect width="140" height="200" rx="16" fill="#131622" stroke="#ffffff" stroke-opacity="0.1"/>
    <circle cx="70" cy="50" r="24" fill="#00F5D4" fill-opacity="0.25"/>
    <text x="70" y="55" fill="#00F5D4" font-size="12" font-weight="700" text-anchor="middle">OUTPUT</text>
    <text x="70" y="100" fill="#F0F4F8" font-size="13" font-weight="700" text-anchor="middle">Scout Report</text>
    <text x="70" y="125" fill="#00F5D4" font-size="11" font-weight="600" text-anchor="middle">National Index Score</text>
    <text x="70" y="150" fill="#8B9BB0" font-size="10" text-anchor="middle">Certified verification</text>
  </g>
</svg>`,

  // 4. Credit Scoring Predictive ML Model
  "credit-scoring-ml.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">DATA SCIENCE MODELING</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Credit Risk Classifier &amp; ROC Curve</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">TechQuanta DigiSolns • Supervised ML • Random Forest, XGBoost &amp; Parquet Pipelines</text>

  <!-- Left: ROC-AUC Chart -->
  <g transform="translate(50, 140)">
    <rect width="320" height="250" rx="16" fill="#131622" stroke="#ffffff" stroke-opacity="0.08"/>
    <text x="25" y="32" fill="#00F5D4" font-size="13" font-weight="700">ROC-AUC Performance Curve</text>
    <!-- Chart axes -->
    <line x1="45" y1="210" x2="280" y2="210" stroke="#8B9BB0" stroke-width="1"/>
    <line x1="45" y1="60" x2="45" y2="210" stroke="#8B9BB0" stroke-width="1"/>
    <!-- Diagonal random chance -->
    <line x1="45" y1="210" x2="280" y2="60" stroke="#8B9BB0" stroke-width="1" stroke-dasharray="3 3"/>
    <!-- Model Curve -->
    <path d="M45 210 Q 55 90 280 60" fill="none" stroke="#00F5D4" stroke-width="3"/>
    <text x="180" y="130" fill="#00F5D4" font-size="12" font-weight="700">AUC = 0.884</text>
    <text x="160" y="235" fill="#8B9BB0" font-size="10" text-anchor="middle">False Positive Rate (1 - Specificity)</text>
  </g>

  <!-- Right: Feature Importance -->
  <g transform="translate(410, 140)">
    <rect width="340" height="250" rx="16" fill="#131622" stroke="#ffffff" stroke-opacity="0.08"/>
    <text x="25" y="32" fill="#00F5D4" font-size="13" font-weight="700">Top Feature Importance (Gini)</text>
    <!-- Bar 1 -->
    <text x="25" y="70" fill="#F0F4F8" font-size="11">Debt-to-Income Ratio</text>
    <rect x="25" y="78" width="260" height="14" rx="4" fill="#00F5D4" fill-opacity="0.9"/>
    <!-- Bar 2 -->
    <text x="25" y="115" fill="#F0F4F8" font-size="11">Historical Delinquencies</text>
    <rect x="25" y="123" width="210" height="14" rx="4" fill="#00F5D4" fill-opacity="0.75"/>
    <!-- Bar 3 -->
    <text x="25" y="160" fill="#F0F4F8" font-size="11">Revolving Credit Utilization</text>
    <rect x="25" y="168" width="170" height="14" rx="4" fill="#00F5D4" fill-opacity="0.6"/>
    <!-- Bar 4 -->
    <text x="25" y="205" fill="#F0F4F8" font-size="11">Annual Income Bracket</text>
    <rect x="25" y="213" width="130" height="14" rx="4" fill="#00F5D4" fill-opacity="0.45"/>
  </g>
</svg>`,

  // 5. Flipkart EDA & Sentiment Analysis
  "flipkart-eda-analytics.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#B8860B" fill-opacity="0.15" stroke="#B8860B" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#B8860B" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">EXPLORATORY DATA ANALYSIS</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Flipkart SKU Catalog &amp; Sentiment Insights</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">TechQuanta DigiSolns • 10,000+ SKU Crawl • NLP Sentiment Polarity vs. Discount Elasticity</text>

  <!-- Left Chart: Sentiment Polarity -->
  <g transform="translate(50, 140)">
    <rect width="330" height="250" rx="16" fill="#131622" stroke="#ffffff" stroke-opacity="0.08"/>
    <text x="25" y="32" fill="#B8860B" font-size="13" font-weight="700">Review Sentiment Polarity vs Ratings</text>
    <!-- Scatter plot mockup -->
    <line x1="45" y1="210" x2="290" y2="210" stroke="#8B9BB0" stroke-width="1"/>
    <line x1="45" y1="60" x2="45" y2="210" stroke="#8B9BB0" stroke-width="1"/>
    <circle cx="80" cy="180" r="4" fill="#B8860B" fill-opacity="0.4"/>
    <circle cx="110" cy="160" r="5" fill="#B8860B" fill-opacity="0.5"/>
    <circle cx="140" cy="130" r="4" fill="#B8860B" fill-opacity="0.6"/>
    <circle cx="180" cy="100" r="6" fill="#B8860B" fill-opacity="0.75"/>
    <circle cx="210" cy="85" r="5" fill="#00F5D4" fill-opacity="0.8"/>
    <circle cx="250" cy="75" r="7" fill="#00F5D4" fill-opacity="0.9"/>
    <text x="170" y="235" fill="#8B9BB0" font-size="10" text-anchor="middle">Customer Rating (1 to 5 Stars)</text>
  </g>

  <!-- Right Chart: Price Elasticity -->
  <g transform="translate(420, 140)">
    <rect width="330" height="250" rx="16" fill="#131622" stroke="#ffffff" stroke-opacity="0.08"/>
    <text x="25" y="32" fill="#B8860B" font-size="13" font-weight="700">Category Discount Distribution</text>
    <!-- Histogram -->
    <rect x="40" y="160" width="35" height="50" fill="#B8860B" fill-opacity="0.4"/>
    <rect x="90" y="110" width="35" height="100" fill="#B8860B" fill-opacity="0.6"/>
    <rect x="140" y="80" width="35" height="130" fill="#00F5D4" fill-opacity="0.8"/>
    <rect x="190" y="130" width="35" height="80" fill="#B8860B" fill-opacity="0.6"/>
    <rect x="240" y="180" width="35" height="30" fill="#B8860B" fill-opacity="0.3"/>
    <line x1="30" y1="210" x2="295" y2="210" stroke="#8B9BB0" stroke-width="1"/>
    <text x="165" y="235" fill="#8B9BB0" font-size="10" text-anchor="middle">Discount Percentage Range (0% - 80%)</text>
  </g>
</svg>`,

  // 6. Agent InAI — Autonomous Sales Follow-Up Agent
  "agent-inai-workflow.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">MULTI-AGENT WORKFLOW</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Agent InAI — Autonomous Lead Orchestrator</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">MSEC-IIF Incubated • Webhook Ingestion • CRM Real-Time Pipeline</text>

  <g transform="translate(50, 160)">
    <rect width="180" height="180" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.3"/>
    <text x="90" y="35" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Lead Analyzer Agent</text>
    <text x="90" y="70" fill="#F0F4F8" font-size="11" text-anchor="middle">Ingests Inbound Query</text>
    <text x="90" y="95" fill="#8B9BB0" font-size="10" text-anchor="middle">Intent classification</text>
    <text x="90" y="115" fill="#8B9BB0" font-size="10" text-anchor="middle">Budget &amp; urgency score</text>
    <text x="90" y="150" fill="#00F5D4" font-size="10" font-weight="600" text-anchor="middle">Score: Hot / Warm / Cold</text>
  </g>
  <path d="M230 250h70" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(300, 160)">
    <rect width="200" height="180" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.7"/>
    <text x="100" y="35" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Strategy &amp; Copy Agent</text>
    <text x="100" y="70" fill="#F0F4F8" font-size="11" text-anchor="middle">Context-Aware Drafting</text>
    <text x="100" y="95" fill="#8B9BB0" font-size="10" text-anchor="middle">WhatsApp personalized tone</text>
    <text x="100" y="115" fill="#8B9BB0" font-size="10" text-anchor="middle">Email proposal synthesis</text>
    <text x="100" y="150" fill="#00F5D4" font-size="10" font-weight="600" text-anchor="middle">Dynamic Objection Handling</text>
  </g>
  <path d="M500 250h70" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(570, 160)">
    <rect width="180" height="180" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.3"/>
    <text x="90" y="35" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Execution Webhook</text>
    <text x="90" y="70" fill="#F0F4F8" font-size="11" text-anchor="middle">API Dispatch</text>
    <text x="90" y="95" fill="#8B9BB0" font-size="10" text-anchor="middle">Automated calendar link</text>
    <text x="90" y="115" fill="#8B9BB0" font-size="10" text-anchor="middle">CRM state update</text>
    <text x="90" y="150" fill="#00F5D4" font-size="10" font-weight="600" text-anchor="middle">Continuous Follow-Up</text>
  </g>
</svg>`,

  // 7. Tharagu — Agritech Marketplace
  "tharagu-marketplace.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#B8860B" fill-opacity="0.15" stroke="#B8860B" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#B8860B" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">AGRITECH ECOSYSTEM (TOP 400)</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Tharagu — Direct Producer Marketplace</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">EDII-TN Hackathon Top 400 • Disintermediating Agrarian Supply Chains in Tamil Nadu</text>

  <g transform="translate(60, 160)">
    <rect width="200" height="190" rx="16" fill="#131622" stroke="#B8860B" stroke-opacity="0.4"/>
    <text x="100" y="35" fill="#B8860B" font-size="13" font-weight="700" text-anchor="middle">Rural Producers</text>
    <text x="100" y="70" fill="#F0F4F8" font-size="11" text-anchor="middle">Indigenous Farmers</text>
    <text x="100" y="95" fill="#8B9BB0" font-size="10" text-anchor="middle">Geo-tagged authenticity</text>
    <text x="100" y="115" fill="#8B9BB0" font-size="10" text-anchor="middle">Direct catalog publishing</text>
    <text x="100" y="150" fill="#B8860B" font-size="11" font-weight="600" text-anchor="middle">Zero Middleman Markup</text>
  </g>
  <path d="M260 255h80" stroke="#B8860B" stroke-width="2"/>

  <g transform="translate(340, 140)">
    <rect width="200" height="220" rx="16" fill="#151b29" stroke="#B8860B" stroke-width="2"/>
    <text x="100" y="35" fill="#B8860B" font-size="14" font-weight="800" text-anchor="middle">Tharagu Core</text>
    <text x="100" y="75" fill="#F0F4F8" font-size="11" text-anchor="middle">PostgreSQL Geo-Index</text>
    <text x="100" y="105" fill="#F0F4F8" font-size="11" text-anchor="middle">Dynamic Pricing Engine</text>
    <text x="100" y="135" fill="#F0F4F8" font-size="11" text-anchor="middle">Regional Logistics Hubs</text>
    <text x="100" y="175" fill="#00F5D4" font-size="11" font-weight="600" text-anchor="middle">Fair Price Guarantee</text>
  </g>
  <path d="M540 255h80" stroke="#B8860B" stroke-width="2"/>

  <g transform="translate(620, 160)">
    <rect width="140" height="190" rx="16" fill="#131622" stroke="#B8860B" stroke-opacity="0.4"/>
    <text x="70" y="35" fill="#B8860B" font-size="13" font-weight="700" text-anchor="middle">Consumers</text>
    <text x="70" y="70" fill="#F0F4F8" font-size="11" text-anchor="middle">Direct Orders</text>
    <text x="70" y="95" fill="#8B9BB0" font-size="10" text-anchor="middle">Transparent origin</text>
    <text x="70" y="115" fill="#8B9BB0" font-size="10" text-anchor="middle">Ethical sourcing</text>
  </g>
</svg>`,

  // 8. LabLink — Real-Time Collaborative Workspace
  "lablink-realtime.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">REAL-TIME WEBSOCKETS</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">LabLink — Ephemeral Classroom Collaboration</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">Zero-Auth Broadcast • Socket.io Rooms • Synchronous Fenced Code Sharing</text>

  <g transform="translate(50, 150)">
    <rect width="320" height="230" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.4"/>
    <text x="25" y="35" fill="#00F5D4" font-size="13" font-weight="700">Broadcast Terminal</text>
    <rect x="25" y="55" width="270" height="150" rx="8" fill="#090c13"/>
    <text x="40" y="80" fill="#00F5D4" font-family="monospace" font-size="11">&gt; room: lab-cs302</text>
    <text x="40" y="105" fill="#F0F4F8" font-family="monospace" font-size="11"># Broadcasting python snippet...</text>
    <text x="40" y="130" fill="#8B9BB0" font-family="monospace" font-size="11">def quicksort(arr): ...</text>
    <text x="40" y="160" fill="#00F5D4" font-family="monospace" font-size="11">&gt; 42 connected peers synced</text>
  </g>

  <path d="M370 265h60" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(430, 150)">
    <rect width="320" height="230" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.4"/>
    <text x="25" y="35" fill="#00F5D4" font-size="13" font-weight="700">Socket.io Ephemeral Relay</text>
    <rect x="25" y="55" width="270" height="150" rx="8" fill="#151b29"/>
    <text x="40" y="85" fill="#F0F4F8" font-size="11">✓ In-Memory Room Broker</text>
    <text x="40" y="115" fill="#F0F4F8" font-size="11">✓ Zero Database Persistence (Privacy)</text>
    <text x="40" y="145" fill="#F0F4F8" font-size="11">✓ Low Latency (&lt;25ms local LAN)</text>
    <text x="40" y="175" fill="#00F5D4" font-size="11">✓ Auto-Expiring Snippet Buffer</text>
  </g>
</svg>`,

  // 9. Smart Shopping Trolley (Embedded IoT)
  "smart-trolley-hardware.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="200" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="130" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">EMBEDDED HARDWARE IOT</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Autonomous Follower &amp; RFID Cart</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">Arduino UNO • ESP32 • Ultrasonic Follower Logic • Instant LCD Billing</text>

  <g transform="translate(60, 150)">
    <rect width="200" height="220" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.3"/>
    <text x="100" y="35" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Sensor Cluster</text>
    <text x="100" y="70" fill="#F0F4F8" font-size="11" text-anchor="middle">Ultrasonic Transceivers</text>
    <text x="100" y="95" fill="#8B9BB0" font-size="10" text-anchor="middle">Distance measurement (30cm)</text>
    <text x="100" y="125" fill="#F0F4F8" font-size="11" text-anchor="middle">IR Directional Tracking</text>
    <text x="100" y="150" fill="#8B9BB0" font-size="10" text-anchor="middle">Human-follower servo locks</text>
  </g>
  <path d="M260 260h70" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(330, 135)">
    <rect width="200" height="240" rx="16" fill="#151b29" stroke="#00F5D4" stroke-width="2"/>
    <text x="100" y="35" fill="#00F5D4" font-size="14" font-weight="800" text-anchor="middle">Processing Core</text>
    <text x="100" y="75" fill="#F0F4F8" font-size="11" text-anchor="middle">Arduino UNO + ESP32</text>
    <text x="100" y="105" fill="#F0F4F8" font-size="11" text-anchor="middle">Motor Driver (L298N)</text>
    <text x="100" y="135" fill="#F0F4F8" font-size="11" text-anchor="middle">PWM Speed Regulation</text>
    <text x="100" y="180" fill="#00F5D4" font-size="11" font-weight="600" text-anchor="middle">RFID RC522 Reader</text>
    <text x="100" y="200" fill="#8B9BB0" font-size="10" text-anchor="middle">Automated product scanner</text>
  </g>
  <path d="M530 260h70" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(600, 150)">
    <rect width="160" height="220" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.3"/>
    <text x="80" y="35" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Display Output</text>
    <rect x="20" y="60" width="120" height="60" rx="6" fill="#00F5D4" fill-opacity="0.1" stroke="#00F5D4" stroke-opacity="0.4"/>
    <text x="80" y="90" fill="#00F5D4" font-family="monospace" font-size="10" text-anchor="middle">TOTAL: ₹1,420</text>
    <text x="80" y="105" fill="#8B9BB0" font-family="monospace" font-size="9" text-anchor="middle">ITEMS: 4</text>
    <text x="80" y="155" fill="#F0F4F8" font-size="11" text-anchor="middle">16x2 I2C LCD</text>
  </g>
</svg>`,

  // 10. FlashMind Mobile Quiz App
  "flashmind-mobile.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="200" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="130" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">MOBILE APP INTERNSHIP</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">FlashMind — Spaced Repetition Learning</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">CodeAlpha Application Development Deliverable • Flutter, Dart &amp; Firebase</text>

  <g transform="translate(100, 140)">
    <rect width="180" height="260" rx="24" fill="#131622" stroke="#00F5D4" stroke-width="2"/>
    <rect x="20" y="20" width="140" height="20" rx="6" fill="#1c2233"/>
    <text x="90" y="34" fill="#00F5D4" font-size="10" font-weight="700" text-anchor="middle">Deck: Data Structures</text>
    <!-- Card inside screen -->
    <rect x="15" y="60" width="150" height="130" rx="12" fill="#1c2436" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="90" y="100" fill="#F0F4F8" font-size="11" font-weight="600" text-anchor="middle">What is an</text>
    <text x="90" y="120" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle">AVL Tree?</text>
    <text x="90" y="160" fill="#8B9BB0" font-size="9" text-anchor="middle">Tap to flip card ↻</text>
  </g>

  <g transform="translate(340, 160)">
    <rect width="360" height="210" rx="16" fill="#131622" stroke="#ffffff" stroke-opacity="0.1"/>
    <text x="30" y="35" fill="#00F5D4" font-size="13" font-weight="700">Algorithm Features</text>
    <text x="30" y="70" fill="#F0F4F8" font-size="11">• SuperMemo SM-2 Spaced Repetition Logic</text>
    <text x="30" y="100" fill="#F0F4F8" font-size="11">• Offline Deck Synchronization with Firebase Firestore</text>
    <text x="30" y="130" fill="#F0F4F8" font-size="11">• Adaptive Retention Curves &amp; Streak Multipliers</text>
    <text x="30" y="160" fill="#F0F4F8" font-size="11">• Cross-Platform Android &amp; iOS Packaging</text>
  </g>
</svg>`,

  // 11. Nexus Collaborative Management Suite
  "nexus-debugger-architecture.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">CODE AUDIT &amp; DEBUGGING</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Nexus Collaborative Suite — Architecture Audit</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">Enterprise MERN Stack • Redux Toolkit State Immutability • JWT Concurrency Hardening</text>

  <g transform="translate(60, 150)">
    <rect width="310" height="230" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.3"/>
    <text x="25" y="35" fill="#00F5D4" font-size="13" font-weight="700">Identified Vulnerabilities</text>
    <rect x="25" y="55" width="260" height="45" rx="8" fill="#1f1818" stroke="#ff4d4d" stroke-opacity="0.4"/>
    <text x="40" y="82" fill="#ff7070" font-size="11">Direct Redux State Mutation bug</text>
    <rect x="25" y="115" width="260" height="45" rx="8" fill="#1f1818" stroke="#ff4d4d" stroke-opacity="0.4"/>
    <text x="40" y="142" fill="#ff7070" font-size="11">Asynchronous Token Expiration Race</text>
  </g>

  <g transform="translate(430, 150)">
    <rect width="310" height="230" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.6"/>
    <text x="25" y="35" fill="#00F5D4" font-size="13" font-weight="700">Hardened Production Fixes</text>
    <rect x="25" y="55" width="260" height="45" rx="8" fill="#152621" stroke="#00F5D4" stroke-opacity="0.5"/>
    <text x="40" y="82" fill="#00F5D4" font-size="11">✓ createSlice Immer Immutable Pattern</text>
    <rect x="25" y="115" width="260" height="45" rx="8" fill="#152621" stroke="#00F5D4" stroke-opacity="0.5"/>
    <text x="40" y="142" fill="#00F5D4" font-size="11">✓ Axios Refresh Interceptor Mutex</text>
  </g>
</svg>`,

  // 12. 3D Architectural Portfolio for Mr. Eswin Antony
  "eswin-3d-architecture.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#B8860B" fill-opacity="0.15" stroke="#B8860B" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#B8860B" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">3D WEBGL CLIENT SHOWCASE</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Spatial Architecture Portfolio — Mr. Eswin Antony</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">Three.js • Anime.js • Interactive Dolly Camera • Commercial Client Deployment</text>

  <g transform="translate(60, 140)">
    <rect width="680" height="250" rx="16" fill="#131622" stroke="#B8860B" stroke-opacity="0.4"/>
    <!-- Wireframe Isometric Cube -->
    <polygon points="200 190 280 150 360 190 280 230" fill="#B8860B" fill-opacity="0.1" stroke="#B8860B" stroke-width="1.5"/>
    <polygon points="200 190 280 230 280 320 200 280" fill="#B8860B" fill-opacity="0.2" stroke="#B8860B" stroke-width="1.5"/>
    <polygon points="360 190 280 230 280 320 360 280" fill="#B8860B" fill-opacity="0.15" stroke="#B8860B" stroke-width="1.5"/>

    <text x="440" y="80" fill="#F0F4F8" font-size="14" font-weight="700">Interactive 3D Walkthrough</text>
    <text x="440" y="110" fill="#8B9BB0" font-size="11">• WebGL Hardware Accelerated Rendering</text>
    <text x="440" y="135" fill="#8B9BB0" font-size="11">• OrbitControls with bounded boundary clamps</text>
    <text x="440" y="160" fill="#8B9BB0" font-size="11">• Real-time PBR material lighting</text>
    <text x="440" y="185" fill="#8B9BB0" font-size="11">• Blueprint elevation switching via Anime.js</text>
  </g>
</svg>`,

  // 13. Anomaly-Aware Ensemble Framework for Packet Traffic
  "anomaly-ensemble-security.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#00F5D4" fill-opacity="0.15" stroke="#00F5D4" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">HYBRID ENSEMBLE RESEARCH</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Network Packet Anomaly Classifier</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">Supervised + Isolation Forest Ensemble • Collaborator: Muthumani P • Packet Traffic Detection</text>

  <g transform="translate(60, 160)">
    <rect width="200" height="180" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.4"/>
    <text x="100" y="35" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Supervised Branch</text>
    <text x="100" y="70" fill="#F0F4F8" font-size="11" text-anchor="middle">Random Forest (w=0.35)</text>
    <text x="100" y="100" fill="#F0F4F8" font-size="11" text-anchor="middle">XGBoost (w=0.35)</text>
    <text x="100" y="140" fill="#8B9BB0" font-size="10" text-anchor="middle">Known Signature Matching</text>
  </g>

  <path d="M260 250h80" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(340, 140)">
    <rect width="180" height="220" rx="16" fill="#151b29" stroke="#00F5D4" stroke-width="2"/>
    <text x="90" y="35" fill="#00F5D4" font-size="13" font-weight="800" text-anchor="middle">Voting Engine</text>
    <text x="90" y="75" fill="#F0F4F8" font-size="11" text-anchor="middle">Weighted Soft-Voting</text>
    <text x="90" y="105" fill="#F0F4F8" font-size="11" text-anchor="middle">Threshold Calibration</text>
    <text x="90" y="145" fill="#00F5D4" font-size="11" font-weight="700" text-anchor="middle">Zero-Day Isolation</text>
  </g>

  <path d="M520 250h80" stroke="#00F5D4" stroke-width="2"/>

  <g transform="translate(600, 160)">
    <rect width="150" height="180" rx="16" fill="#131622" stroke="#00F5D4" stroke-opacity="0.4"/>
    <text x="75" y="35" fill="#00F5D4" font-size="13" font-weight="700" text-anchor="middle">Unsupervised</text>
    <text x="75" y="70" fill="#F0F4F8" font-size="11" text-anchor="middle">Isolation Forest</text>
    <text x="75" y="100" fill="#8B9BB0" font-size="10" text-anchor="middle">Novel anomaly clustering</text>
  </g>
</svg>`,

  // 14. Vairam Vijay Press Company Commercial Web Portal
  "vairam-press-portal.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450" style="background:#090c13; font-family:system-ui, sans-serif;">
  <rect width="800" height="450" fill="#08090C"/>
  <rect x="30" y="24" width="220" height="26" rx="13" fill="#B8860B" fill-opacity="0.15" stroke="#B8860B" stroke-opacity="0.3"/>
  <text x="140" y="41" fill="#B8860B" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">COMMERCIAL CLIENT PORTAL</text>
  <text x="30" y="80" fill="#F0F4F8" font-size="22" font-weight="800">Vairam Vijay Press — Corporate Print Catalog</text>
  <text x="30" y="102" fill="#8B9BB0" font-size="13">Production Client Delivery • Automated Quote Engine • High-DPI Print Showcases</text>

  <g transform="translate(80, 150)">
    <rect width="640" height="230" rx="16" fill="#131622" stroke="#B8860B" stroke-opacity="0.4"/>
    <text x="40" y="40" fill="#B8860B" font-size="14" font-weight="700">Digital Print &amp; Packaging Architecture</text>
    <text x="40" y="75" fill="#F0F4F8" font-size="11">✓ Multi-Tier Packaging Showcase (Duplex, Corrugated, Foil Stamping)</text>
    <text x="40" y="105" fill="#F0F4F8" font-size="11">✓ Dynamic Client Quotation Calculator based on GSM &amp; Run Quantities</text>
    <text x="40" y="135" fill="#F0F4F8" font-size="11">✓ Mobile-First Responsive Layout optimized for SME procurement</text>
    <text x="40" y="165" fill="#B8860B" font-size="11">✓ Fast Static Delivery with near-zero latency</text>
  </g>
</svg>`
};

for (const [filename, svg] of Object.entries(projectMedia)) {
  fs.writeFileSync(path.join(outDir, filename), svg.trim(), "utf-8");
}

console.log("Successfully generated", Object.keys(projectMedia).length, "project media files in public/portfolio_assets/projects/");
