const fs = require("fs");
const path = require("path");

const baseDir = path.resolve(__dirname, "../public/icons");

const icons = {
  // -------------------------------------------------------------
  // SOCIAL ICONS
  // -------------------------------------------------------------
  "social/github.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
</svg>`,

  "social/linkedin.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
  <rect x="2" y="9" width="4" height="12"/>
  <circle cx="4" cy="4" r="2"/>
</svg>`,

  "social/x-twitter.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4l6.5 7.5L4 20h2.5l5.2-6 4.8 6H20l-6.8-7.9L19.5 4H17l-4.7 5.4L7.8 4H4z"/>
</svg>`,

  "social/instagram.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2.5"/>
</svg>`,

  "social/email.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>`,

  "social/whatsapp.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  <path d="M9.5 8.5c.3-.3.6-.3.9 0l1.2 1.2c.3.3.3.6 0 .9l-.6.6c-.2.2-.2.5 0 .8 1 1.4 2.2 2.6 3.6 3.6.3.2.6.2.8 0l.6-.6c.3-.3.6-.3.9 0l1.2 1.2c.3.3.3.6 0 .9-.5.6-1.3 1-2.1.8-2.6-.5-5-2-6.8-3.8-1.8-1.8-3.3-4.2-3.8-6.8-.2-.8.2-1.6.8-2.1z"/>
</svg>`,

  // -------------------------------------------------------------
  // TECHNOLOGY ICONS
  // -------------------------------------------------------------
  "technology/python.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2C8.5 2 6 3.5 6 6v3h6v1H5c-2.5 0-4 2-4 5s1.5 5 4 5h2v-2.5c0-2 1.5-3.5 3.5-3.5h7c1.5 0 2.5-1 2.5-2.5V6c0-2.5-2.5-4-6-4z"/>
  <circle cx="9" cy="5" r="1" fill="currentColor"/>
  <path d="M12 22c3.5 0 6-1.5 6-4v-3h-6v-1h7c2.5 0 4-2 4-5s-1.5-5-4-5h-2v2.5c0 2-1.5 3.5-3.5 3.5h-7C5 13.5 4 14.5 4 16v5c0 2.5 2.5 4 6 4z"/>
  <circle cx="15" cy="19" r="1" fill="currentColor"/>
</svg>`,

  "technology/scikit-learn.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3" />
  <circle cx="18" cy="6" r="3" />
  <circle cx="12" cy="18" r="3" />
  <path d="M8.5 7.5l5 7"/>
  <path d="M15.5 7.5l-5 7"/>
  <path d="M9 6h6"/>
</svg>`,

  "technology/pandas.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="3"/>
  <line x1="3" y1="9" x2="21" y2="9"/>
  <line x1="3" y1="15" x2="21" y2="15"/>
  <line x1="9" y1="3" x2="9" y2="21"/>
  <line x1="15" y1="3" x2="15" y2="21"/>
</svg>`,

  "technology/react.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
  <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)"/>
  <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/>
  <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/>
</svg>`,

  "technology/nodejs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 21 7 21 17 12 22 3 17 3 7"/>
  <path d="M12 22V12"/>
  <path d="M21 7l-9 5-9-5"/>
</svg>`,

  "technology/mongodb.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2C12 2 5 7 5 13.5c0 4.14 3.13 7.5 7 7.5s7-3.36 7-7.5C19 7 12 2 12 2z"/>
  <line x1="12" y1="2" x2="12" y2="22"/>
</svg>`,

  "technology/postgresql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="12" cy="5" rx="8" ry="3"/>
  <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
  <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>
</svg>`,

  "technology/fastapi.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <polygon points="13 6 8 13 12 13 11 18 16 11 12 11" fill="currentColor"/>
</svg>`,

  "technology/threejs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 2 19 22 19"/>
  <polygon points="12 8 6 18 18 18" stroke-dasharray="2 2"/>
</svg>`,

  // -------------------------------------------------------------
  // CATEGORIES ICONS
  // -------------------------------------------------------------
  "categories/ai-ml.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="2.5"/>
  <circle cx="6" cy="18" r="2.5"/>
  <circle cx="18" cy="6" r="2.5"/>
  <circle cx="18" cy="18" r="2.5"/>
  <circle cx="12" cy="12" r="3"/>
  <path d="M8.2 7.5l2 2.5"/>
  <path d="M8.2 16.5l2-2.5"/>
  <path d="M15.8 7.5l-2 2.5"/>
  <path d="M15.8 16.5l-2-2.5"/>
</svg>`,

  "categories/data-science.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="20" x2="18" y2="10"/>
  <line x1="12" y1="20" x2="12" y2="4"/>
  <line x1="6" y1="20" x2="6" y2="14"/>
  <path d="M3 13l6-5 6 4 6-8"/>
</svg>`,

  "categories/full-stack.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 2 7 12 12 22 7"/>
  <polyline points="2 12 12 17 22 12"/>
  <polyline points="2 17 12 22 22 17"/>
</svg>`,

  "categories/mobile-iot.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="2" width="14" height="20" rx="3"/>
  <line x1="12" y1="18" x2="12" y2="18.01" stroke-width="2.5"/>
  <path d="M10 6h4"/>
</svg>`,

  // -------------------------------------------------------------
  // NAVIGATION ICONS
  // -------------------------------------------------------------
  "navigation/home.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 10.5 12 3l9 7.5"/>
  <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/>
  <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6"/>
</svg>`,

  "navigation/about.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
</svg>`,

  "navigation/creations.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="7" height="7" rx="2"/>
  <rect x="14" y="3" width="7" height="7" rx="2"/>
  <rect x="3" y="14" width="7" height="7" rx="2"/>
  <rect x="14" y="14" width="7" height="7" rx="2"/>
</svg>`,

  "navigation/odyssey.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <polygon points="12,7 14.5,11.5 19,12 14.5,12.5 12,17 9.5,12.5 5,12 9.5,11.5"/>
</svg>`,

  "navigation/writing.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
  <path d="M15 5l4 4"/>
</svg>`,

  "navigation/contact.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2.25" y="4.5" width="19.5" height="15" rx="2"/>
  <path d="M2.25 6.75l9.75 6.75 9.75-6.75"/>
</svg>`,

  "navigation/resume.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <polyline points="14 2 14 8 20 8"/>
  <line x1="16" y1="13" x2="8" y2="13"/>
  <line x1="16" y1="17" x2="8" y2="17"/>
</svg>`,

  // -------------------------------------------------------------
  // ILLUSTRATIONS
  // -------------------------------------------------------------
  "illustrations/book-open.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 19.5v-13A2.5 2.5 0 0 1 6.5 4H12v15.5H6.5A2.5 2.5 0 0 0 4 22"/>
  <path d="M20 19.5v-13A2.5 2.5 0 0 0 17.5 4H12v15.5h5.5A2.5 2.5 0 0 1 20 22"/>
  <path d="M12 4v7l1.5-1 1.5 1V4"/>
</svg>`,

  "illustrations/neural-brain.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9.5 5A4 4 0 0 0 5 9a3.5 3.5 0 0 0 .5 4 4 4 0 0 0 0 4 3.5 3.5 0 0 0 4 2"/>
  <path d="M14.5 5A4 4 0 0 1 19 9a3.5 3.5 0 0 1-.5 4 4 4 0 0 1 0 4 3.5 3.5 0 0 1-4 2"/>
  <path d="M12 4.5v15" stroke-dasharray="1.5 1.5"/>
  <circle cx="9" cy="9" r="1.25" fill="currentColor"/>
  <circle cx="15" cy="9" r="1.25" fill="currentColor"/>
  <circle cx="8" cy="14" r="1.25" fill="currentColor"/>
  <circle cx="16" cy="14" r="1.25" fill="currentColor"/>
</svg>`,

  "illustrations/nptel-star.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  <circle cx="12" cy="11" r="2.5" fill="currentColor"/>
</svg>`,

  "illustrations/honours-seal.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <circle cx="12" cy="12" r="6" stroke-dasharray="2 2"/>
  <path d="M12 8v8"/>
  <path d="M8 12h8"/>
</svg>`
};

for (const [relPath, content] of Object.entries(icons)) {
  const fullPath = path.join(baseDir, relPath);
  fs.writeFileSync(fullPath, content.trim(), "utf-8");
}

console.log("Successfully generated", Object.keys(icons).length, "icons in public/icons/");
