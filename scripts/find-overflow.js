const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 320, height: 800 } });
  await page.goto('http://localhost:3001');
  await page.waitForTimeout(800);

  const skipBtn = page.locator('button:has-text("Skip Intro")').first();
  if (await skipBtn.count() > 0) await skipBtn.click();
  await page.waitForTimeout(500);

  const culprits = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const over = [];
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.right > 321 && el.tagName !== 'HTML' && el.tagName !== 'BODY') {
        over.push({
          tag: el.tagName,
          id: el.id,
          class: (el.className || '').toString().slice(0, 60),
          right: Math.round(rect.right),
          width: Math.round(rect.width)
        });
      }
    }
    return over;
  });

  console.log('Culprits count:', culprits.length);
  console.log('Top culprits:', culprits.slice(0, 15));
  await browser.close();
})();
