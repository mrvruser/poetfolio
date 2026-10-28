# POETFOLIO IMPLEMENTATION ROADMAP

---

## Phase 1: Baseline Stabilization & Build Repair (Immediate Action)
- [x] Comprehensive multi-drive audit across `F:\`, `C:\`, `E:\`.
- [x] Extraction and analysis of legacy `portfolio-master` and asset packs.
- [x] Global design research and 10-reference benchmarking matrix.
- [x] Creation of evidence library in `docs/poetfolio/`.
- [ ] **First Implementation Step:** Fix offline build error in `app/layout.tsx` (remove external `next/font/google` dependency, use robust cross-platform system/web-safe font tokens) and verify `npm run build` succeeds cleanly.

---

## Phase 2: Design Tokens & Theme Toggle Alignment
- [ ] Update `app/globals.css` with unified CSS variable tokens (`--bg-primary`, `--text-primary`, `--accent-primary`, etc.).
- [ ] Align `components/BookToggle.tsx` orientation (Light = 📖 Book; Dark = 🧠 Brain) and add `localStorage` persistence with zero theme flash.
- [ ] Test theme switching consistency across background, cards, typography, and buttons.

---

## Phase 3: Particle System, Cursor & Hero Composition
- [ ] Fix memory leak and canvas unbounded loop in `components/Particles.tsx` (`cancelAnimationFrame`, bounding to hero section).
- [ ] Optimize `components/CustomCursor.tsx` to eliminate per-frame React state re-renders; disable on touch screens.
- [ ] Upgrade `components/ThreeScene.tsx` into a responsive ambient neural lattice (dark) and golden geometry (light).
- [ ] Compose hero with Vijay's verified portrait (`Passport size photo VR.png`) featuring interactive 3D flip card.
- [ ] Link "Resume" button to verified downloadable PDF in `/public/resume.pdf`.

---

## Phase 4: Project Showcase & Modal Workflow
- [ ] Populate `data/projects.ts` with all 12 verified projects (ATTS, Persistent 3-Companion AI, Sports Assess, Credit Scoring, etc.).
- [ ] Enhance `components/Projects.tsx` with filter categories: `All`, `AI & ML`, `Data Science`, `Full Stack Web`, `IoT & Embedded`.
- [ ] Enrich `components/ProjectModal.tsx` with project challenges, architecture details, and multi-channel "Request Access" flow (Email & WhatsApp options).

---

## Phase 5: The Signature Learning Odyssey
- [ ] Create `components/LearningOdyssey.tsx` integrating the four interactive chapters:
  1. **Explores:** Travel, curiosity, and photography.
  2. **Projects:** Deep technical experiments and GitHub milestones.
  3. **Certifides:** NPTEL, Cisco, AWS credentials accompanied by poetic reflections.
  4. **College Life:** NextGenAI leadership, campus committees, and student community.
- [ ] Implement seamless in-page tab switching with accessible keyboard navigation.

---

## Phase 6: Literary & Personal Sections
- [ ] Implement **Gift Me a Book** rotating phrase banner (5s transition).
- [ ] Add **About / Origin Story** narrative connecting Tamil literature, AI, and lifelong learning.
- [ ] Add **Skills & Toolkit** visual showcase (Python, React, Ollama, Scikit-learn, MySQL, etc.).
- [ ] Add **Contact Section** with verified social links (GitHub, LinkedIn, Instagram, X/Twitter, Email).

---

## Phase 7: Production Optimization & Deployment
- [ ] Run full Next.js production build (`npm run build`).
- [ ] Audit mobile responsiveness, touch interactions, and WCAG contrast.
- [ ] Verify SEO meta tags, OpenGraph previews, and clean error-free console logs.
- [ ] Prepare Vercel deployment documentation.

