const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const routes = ['/', '/about', '/projects', '/odyssey', '/writing', '/contact'];
  const results = {};

  const auditDir = path.resolve('reports/visual_acceptance/dev_audit');
  if (!fs.existsSync(auditDir)) fs.mkdirSync(auditDir, { recursive: true });

  for (const route of routes) {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => {
      errors.push('PAGE_ERROR: ' + err.message);
    });

    console.log(`Auditing http://localhost:3000${route} ...`);
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // If on home, skip intro if open
    if (route === '/') {
      const skipBtn = page.locator('button:has-text("Skip Intro")').first();
      if (await skipBtn.count() > 0) {
        await skipBtn.click();
        await page.waitForTimeout(600);
      }
    }

    const overlay = await page.locator('nextjs-portal, [data-nextjs-dialog-overlay]').allTextContents();
    const cleanOverlay = overlay.filter(t => t.trim().length > 0);

    const safeName = route === '/' ? 'home' : route.replace('/', '');
    await page.screenshot({ path: path.join(auditDir, `${safeName}.png`) });

    results[route] = {
      errorsCount: errors.length,
      errors,
      hasOverlay: cleanOverlay.length > 0,
      overlayText: cleanOverlay
    };

    console.log(`Route ${route}: errors=${errors.length}, hasOverlay=${cleanOverlay.length > 0}`);
  }

  console.log('\n--- Full Dev Audit Results ---');
  console.log(JSON.stringify(results, null, 2));

  let allPassed = true;
  for (const r of routes) {
    if (results[r].errorsCount > 0 || results[r].hasOverlay) allPassed = false;
  }

  if (allPassed) {
    console.log('\n>>> ALL 6 ROUTES ARE 100% PERFECT WITH 0 ERRORS AND 0 OVERLAYS! <<<');
  } else {
    console.error('\n>>> SOME ROUTES HAVE ERRORS! <<<');
  }

  await browser.close();
})();
