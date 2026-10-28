# POETFOLIO DESIGN SYSTEM & TWO VISUAL WORLDS

Poetfolio is built upon the architectural foundation of **Two Distinct Visual Worlds** sharing unified semantic tokens and layouts.

---

## 1. Dual World Token Specification

```css
/* ==========================================================================
   POETFOLIO DUAL-WORLD TOKENS (CSS Variables)
   ========================================================================== */

/* 1. LITERARY WORLD (Light Theme Default: :root)
   Atmosphere: Warm paper, antique ink, library study, golden intellectual curiosity */
:root {
  --bg-primary: #F4E8D2;        /* Rich antique parchment */
  --bg-surface: #EADBC0;        /* Elevated card surface */
  --bg-card-hover: #DFCFB2;     /* Card hover state */
  --text-primary: #30251B;      /* Deep walnut iron-gall ink */
  --text-secondary: #6B5542;    /* Muted warm umber */
  --accent-primary: #B8860B;    /* Warm antique gold */
  --accent-glow: rgba(255, 215, 0, 0.45); /* Golden radial halo */
  --border-subtle: rgba(107, 85, 66, 0.22);
  --border-accent: rgba(184, 134, 11, 0.4);
  --card-shadow: 0 10px 30px -10px rgba(78, 53, 36, 0.15);
  --cursor-color: rgba(184, 134, 11, 0.75);
  --font-serif: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}

/* 2. TECHNOLOGICAL WORLD (Dark Theme: .dark)
   Atmosphere: Cybernetic obsidian, neural lattices, neon intelligence, deep void */
.dark {
  --bg-primary: #08090C;        /* Deep obsidian void */
  --bg-surface: #101217;        /* Elevated carbon tile */
  --bg-card-hover: #161A22;     /* Elevated card hover */
  --text-primary: #F0F4F8;      /* Luminescent silver-white */
  --text-secondary: #8B9BB0;    /* Muted titanium blue */
  --accent-primary: #00F5D4;    /* Neon electric turquoise / cyan */
  --accent-glow: rgba(0, 245, 212, 0.45); /* Electric cyan neon aura */
  --border-subtle: rgba(255, 255, 255, 0.10);
  --border-accent: rgba(0, 245, 212, 0.35);
  --card-shadow: 0 10px 35px -10px rgba(0, 245, 212, 0.2);
  --cursor-color: rgba(0, 245, 212, 0.85);
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}
```

---

## 2. Typography Scale & Pairing

* **Headlines & Expressive Titles:**
  * Serif font: `Playfair Display` or Georgia with elegant letter-spacing (`tracking-tight`).
  * Used for: Section titles, "The Learning Odyssey", Hero Name, Quotations, and Poetic Reflections.
* **Interface, Body & Metadata:**
  * Sans-serif font: `Inter` or clean system-ui.
  * Used for: Navigation links, technical descriptors, code snippets, buttons, project metadata tags.
* **Scale:**
  * Hero Display: `text-5xl md:text-7xl lg:text-8xl font-black`
  * Section Headers: `text-3xl md:text-4xl font-bold`
  * Card Titles: `text-xl md:text-2xl font-semibold`
  * Body & Paragraphs: `text-base md:text-lg leading-relaxed`
  * Metadata / Badges: `text-xs md:text-sm font-medium tracking-wide`

---

## 3. Micro-Interactions & Motion Design

1. **Book-to-Brain 3D Toggle (`BookToggle.tsx`):**
   * Smooth 180° `rotateY` transition over `0.6s` with `spring` easing.
   * Light mode shows tactile embossed book icon 📖.
   * Dark mode shows illuminated neural brain icon 🧠 with neon cyan shadow.
2. **Ambient Particle System (`Particles.tsx`):**
   * Dark mode: 100 cyan spark nodes drifting slowly, gently attracted to pointer.
   * Light mode: 100 golden celestial dust motes breathing with sinusoidal radial halos.
   * Strictly bound to hero backdrop, paused when scrolled out of view.
3. **Project Card Hover:**
   * Gentle scale `1.025` with vertical lift `-4px` and soft shadow expansion.
   * Technology pill tags highlight with subtle border illumination on mouseover.
4. **Rotating "Gift Me a Book" Banner:**
   * 5-second interval crossfade alternating between:
     1. *"Gift me a book."*
     2. *"Fuel my curiosity."*
     3. *"Support my learning journey."*

