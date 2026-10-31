const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage();

  const errors = [];
  const logs = [];

  page.on('console', msg => {
    logs.push({ type: msg.type(), text: msg.text() });
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    errors.push('PAGE_ERROR: ' + err.message);
  });

  console.log('Navigating to http://localhost:3000/about ...');
  await page.goto('http://localhost:3000/about', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Check for nextjs error overlay
  const overlay = await page.locator('nextjs-portal, [data-nextjs-dialog-overlay], [role="dialog"]').allTextContents();
  console.log('Overlay contents:', overlay);

  console.log('Console Errors count:', errors.length);
  errors.forEach((e, i) => console.log(`Error ${i + 1}:`, e));

  console.log('\nAll Console Logs:');
  logs.forEach(l => console.log(`[${l.type}] ${l.text}`));

  await browser.close();
})();
