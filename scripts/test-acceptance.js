const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE_URL = "http://localhost:3001";
const SCREENSHOT_DIR = path.resolve(__dirname, "../reports/visual_acceptance/hero_stabilisation");

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runAcceptanceTests() {
  console.log("=== STARTING POETFOLIO VISUAL ACCEPTANCE & QUALITY GATE AUDIT ===");
  const browser = await chromium.launch({ channel: "chrome" });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  const failedRequests = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("requestfailed", (req) => {
    failedRequests.push(`${req.method()} ${req.url()} - ${req.failure().errorText}`);
  });

  // ==========================================
  // 1. DESKTOP TESTS (1440 x 900) - DARK THEME
  // ==========================================
  console.log("1. Testing Desktop Dark Hero (1440x900)...");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  // Ensure dark mode is active
  const isDarkInitial = await page.evaluate(() => document.documentElement.classList.contains("dark"));
  if (!isDarkInitial) {
    await page.evaluate(() => {
      document.documentElement.classList.add("dark");
      localStorage.setItem("poetfolio_theme", "dark");
    });
    await page.waitForTimeout(400);
  }

  // Hero dark screenshot
  const heroElement = await page.$("#hero");
  if (heroElement) {
    await heroElement.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop-dark-hero.png") });
  } else {
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop-dark-hero.png") });
  }
  console.log("Saved desktop-dark-hero.png");

  // Full homepage dark
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop-dark-full.png"), fullPage: true });
  console.log("Saved desktop-dark-full.png");

  // Theme toggle button closeup
  const toggleBtn = await page.$('button[aria-label*="Switch to"]');
  if (toggleBtn) {
    await toggleBtn.screenshot({ path: path.join(SCREENSHOT_DIR, "theme-toggle-dark.png") });
    console.log("Saved theme-toggle-dark.png");
  }

  // ==========================================
  // 2. THEME TOGGLE: SWITCH TO LITERARY LIGHT
  // ==========================================
  console.log("2. Testing Book ↔ Brain Theme Toggle to Light Mode...");
  if (toggleBtn) {
    await toggleBtn.click();
    await page.waitForTimeout(600);
  }

  const isLightActive = await page.evaluate(() => !document.documentElement.classList.contains("dark"));
  console.log("Is light mode active after toggle:", isLightActive);

  if (toggleBtn) {
    await toggleBtn.screenshot({ path: path.join(SCREENSHOT_DIR, "theme-toggle-light.png") });
    console.log("Saved theme-toggle-light.png");
  }

  // Hero light screenshot
  if (heroElement) {
    await heroElement.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop-light-hero.png") });
  }
  console.log("Saved desktop-light-hero.png");

  // Full homepage light
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop-light-full.png"), fullPage: true });
  console.log("Saved desktop-light-full.png");

  // ==========================================
  // 3. TABLET TEST (768 x 1024)
  // ==========================================
  console.log("3. Testing Tablet Hero (768x1024)...");
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "tablet-hero.png") });
  console.log("Saved tablet-hero.png");

  // ==========================================
  // 4. MOBILE TESTS (390 x 844) - BOTH THEMES
  // ==========================================
  console.log("4. Testing Mobile (390x844)...");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(500);

  // Mobile light hero
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "mobile-light-hero.png") });
  console.log("Saved mobile-light-hero.png");

  // Switch to dark mode for mobile
  const mobileToggle = await page.$('button[aria-label*="Switch to"]');
  if (mobileToggle) {
    await mobileToggle.click();
    await page.waitForTimeout(600);
  }
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "mobile-dark-hero.png") });
  console.log("Saved mobile-dark-hero.png");

  // Test mobile menu open
  const menuBtn = await page.$('button[aria-label="Toggle navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "mobile-menu.png") });
    console.log("Saved mobile-menu.png");
    await menuBtn.click(); // close it
    await page.waitForTimeout(300);
  }

  // ==========================================
  // 5. RESPONSIVE BREAKPOINT AUDIT
  // ==========================================
  console.log("5. Auditing all responsive breakpoints...");
  const breakpoints = [320, 360, 390, 430, 768, 1024, 1280, 1440, 1920];
  const overflowIssues = [];

  for (const w of breakpoints) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.waitForTimeout(300);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    if (scrollWidth > clientWidth + 2) {
      overflowIssues.push({ width: w, scrollWidth, clientWidth });
      console.warn(`Horizontal overflow at ${w}px! scrollWidth=${scrollWidth}, clientWidth=${clientWidth}`);
    } else {
      console.log(`✓ Breakpoint ${w}px is perfectly stable (scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth})`);
    }
  }

  // ==========================================
  // 6. SECTION SCREENSHOTS & MODAL TEST
  // ==========================================
  console.log("6. Testing sections and Project modal...");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(BASE_URL + "/#projects", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const projectsSec = await page.$("#projects");
  if (projectsSec) {
    await projectsSec.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop-projects.png") });
    console.log("Saved desktop-projects.png");
  }

  // Open first project modal
  const firstProjectCard = await page.$("#projects .cursor-pointer");
  if (firstProjectCard) {
    await firstProjectCard.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, "project-modal.png") });
    console.log("Saved project-modal.png");
    // Close modal via Escape
    await page.keyboard.press("Escape");
    await page.waitForTimeout(400);
  }

  // Skills section
  const skillsSec = await page.$("#skills");
  if (skillsSec) {
    await skillsSec.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop-skills.png") });
    console.log("Saved desktop-skills.png");
  }

  // Odyssey section
  const odysseySec = await page.$("#odyssey");
  if (odysseySec) {
    await odysseySec.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop-odyssey.png") });
    console.log("Saved desktop-odyssey.png");
  }

  // Contact section
  const contactSec = await page.$("#contact");
  if (contactSec) {
    await contactSec.screenshot({ path: path.join(SCREENSHOT_DIR, "desktop-contact.png") });
    console.log("Saved desktop-contact.png");
  }

  // Verify subpages
  const routes = ["/about", "/projects", "/odyssey", "/writing", "/contact"];
  for (const route of routes) {
    const res = await page.goto(BASE_URL + route, { waitUntil: "networkidle" });
    console.log(`Route ${route} status: ${res.status()}`);
  }

  await browser.close();

  console.log("\n=== AUDIT SUMMARY ===");
  console.log("Console Errors:", consoleErrors.length ? consoleErrors : "None! (0 errors)");
  console.log("Failed Network Requests:", failedRequests.length ? failedRequests : "None! (0 failed)");
  console.log("Horizontal Overflow Issues:", overflowIssues.length ? overflowIssues : "None! (All breakpoints clean)");
}

runAcceptanceTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
