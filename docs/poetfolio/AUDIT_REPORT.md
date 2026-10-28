# POETFOLIO AUDIT REPORT
**Author & Subject:** Vijayaregunath T  
**Date:** October 28, 2026  
**Auditor:** Gemini Agent (Senior Creative Technologist & Principal Frontend Engineer)  
**Project Path:** `F:\organised\project-ppts,word\portfolio project\poetfolio\poetfolio`

---

## 1. Executive Summary

A comprehensive multi-drive and source code audit was conducted across the active development environment (`F:\`, `C:\`, and `E:\` drives), reviewing previous prompts, legacy repositories, archives, and asset libraries.

The active codebase is a modern **Next.js 16.2.0 (App Router)** and **TypeScript** project configured with **Tailwind CSS v4**, **Framer Motion 12.38.0**, **Three.js 0.183.2**, and **React Three Fiber 9.5.0**.

Alongside the active Next.js repository, we discovered the **earlier signature HTML/CSS/JS/AOS portfolio** in `F:\organised\project-ppts,word\portfolio project\portfolio project.rar` (`portfolio-master/`), containing the original 4-chapter **Learning Odyssey** architecture (`Explores`, `Projects`, `Certifides`, `College Life`), social channels, and poetic reflections.

---

## 2. Project Architecture & File Inventory

### Active Next.js Stack
* **Framework:** Next.js `16.2.0` (Turbopack, App Router)
* **Runtime / Language:** React `19.2.3`, TypeScript `5.x`, Node.js `v20+`
* **Styling:** Tailwind CSS `^4.0` with `@tailwindcss/postcss`
* **3D & Animation:** `three` (`^0.183.2`), `@react-three/fiber` (`^9.5.0`), `@react-three/drei` (`^10.7.7`), `framer-motion` (`^12.38.0`)
* **Core Components:**
  * `app/layout.tsx`: Root layout with font configuration.
  * `app/page.tsx`: Main page assembling Hero, 3D Canvas, Particles, and Projects.
  * `app/globals.css`: Theme variables (`--bg`, `--text`, `.dark`, `.glow`).
  * `components/BookToggle.tsx`: 3D flipping theme switcher (Book 📖 ⟷ Brain 🧠).
  * `components/Particles.tsx`: Dual-mode canvas particle engine (Cyan glow ⟷ Gold halos).
  * `components/ThreeScene.tsx`: 3D WebGL Canvas with OrbitControls.
  * `components/CustomCursor.tsx`: Floating pointer glow follower.
  * `components/Projects.tsx`: Categorized project filter grid with Framer Motion cards.
  * `components/ProjectModal.tsx`: Project detail modal with "Request Access" action.
  * `data/projects.ts`: Mock project data list.

---

## 3. Current Working Features vs Confirmed Bugs

| Component / Feature | Current State | Confirmed Issue / Bug | Remediation Plan |
| :--- | :--- | :--- | :--- |
| **Next.js Build (`next build`)** | ❌ Failing | `Turbopack build failed: Failed to fetch Geist from Google Fonts`. External font fetch breaks offline builds. | Replace with robust local / system serif & sans typography tokens in `layout.tsx` & `globals.css`. |
| **BookToggle.tsx** | ⚠️ Logic Inverted | When `dark` is true, 📖 Book is shown; when `dark` is false, 🧠 Brain is shown. The literary parchment world should show the Book, while the dark technological world should show the Brain. | Invert rotation logic: Light mode (parchment) = 📖 Book; Dark mode (cybernetic) = 🧠 Brain. Add local storage persistence. |
| **Particles.tsx** | ⚠️ Memory Leak & Overflow | Missing `cancelAnimationFrame` in cleanup effect causes concurrent animation loops on re-render. Marked `fixed` full-screen, bleeding through other sections. | Store `animationFrameId`, call `cancelAnimationFrame`, constrain canvas to Hero container (`absolute inset-0`). |
| **CustomCursor.tsx** | ⚠️ Performance Drain | Triggers React `useState` re-render on every mouse movement (up to 144Hz+). Broken on mobile/touch screens. Hardcoded cyan color clashes with light mode. | Convert to direct DOM `transform` ref (zero React re-renders), disable on touch (`(pointer: coarse)`), add gold/ink theme awareness. |
| **ThreeScene.tsx** | ⚠️ Primitive Wireframe | Single static green wireframe sphere. Does not react to theme changes or literary world. | Dark mode: Interactive neural node network / AI brain lattice. Light mode: Floating golden parchment leaves / mathematical geometry. |
| **Projects Showcase** | ⚠️ Placeholders Only | Only 3 dummy projects in `data/projects.ts` ("ProtecTrek", "Irrigation", "ML Intrusion"). None of Vijay's 14 verified projects exist. | Populate `data/projects.ts` with all 14 verified projects (ATTS, LabLink, Sports Assess, 3-Companion AI, TechQuanta, etc.). |
| **The Learning Odyssey** | ❌ Missing in Next.js | Present only in legacy HTML repo (`portfolio-master/`), not yet integrated into Next.js. | Port 4-tab interactive narrative engine (`Explores`, `Projects`, `Certifides`, `College Life`) into Next.js. |
| **Personal Photo Flip** | ❌ Not Implemented | Hero has no personal photo or 3D flip card. | Integrate Vijay's verified photo (`Passport size photo VR.png` / `VR Photo Linkedin Profile.jpg`) with 3D flip interaction. |
| **Resume Download** | ⚠️ Incomplete | Points to `#` dummy button. | Generate compiled PDF from verified `T_VIJAYAREGUNATH_RESUME.docx` and link directly in `/public/resume.pdf`. |

---

## 4. Design & Technical Decisions to Preserve

1. **Dual Visual Worlds:**
   * **Dark Mode:** Deep charcoal `#0a0a0a` with neon cyan `#00F5D4` accents, neural network lattice, cybernetic particles.
   * **Light Mode:** Warm literary parchment `#F4E8D2`, deep walnut text `#30251B`, bright gold/amber radial particles (`rgba(255, 215, 0, 1)`).
2. **Book-to-Brain 3D Flip Toggle:** The physical metaphor of a book flipping into a neural brain is distinctive and central to Poetfolio.
3. **The 4-Part Learning Odyssey:** Preserve the exact title and spelling of **`Certifides`** as specified in user guidelines, celebrating personal reflection poems alongside credentials.
4. **Tagline & Philosophy:** *"The Art of Data Insights and Web Solutions"* and *"Where code meets creativity, data becomes insight, and curiosity becomes creation."*

---

## 5. Most Critical Immediate Next Step

**Fix Font Configuration & Baseline Build:**
Resolve the Turbopack Google Fonts failure in `app/layout.tsx` and `app/globals.css` so that `npm run build` succeeds cleanly without network dependencies.

