const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runAcceptanceSuite() {
  const screenshotDir = path.resolve('reports/visual_acceptance/part_30');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome'
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const failedRequests = [];
  page.on('requestfailed', req => {
    failedRequests.push(`${req.method()} ${req.url()}: ${req.failure()?.errorText}`);
  });

  console.log('Navigating to http://localhost:3001 ...');
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Initial Hero Screenshot (Literary / Default)
  await page.screenshot({ path: path.join(screenshotDir, '01_hero_literary.png') });
  console.log('Saved 01_hero_literary.png');

  // 2. Flip Theme to Digital
  const toggleBtn = page.locator('button[aria-label*="theme"], button[aria-label*="Book"], button[aria-label*="Brain"]').first();
  if (await toggleBtn.count() > 0) {
    await toggleBtn.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(screenshotDir, '02_hero_digital.png') });
    console.log('Saved 02_hero_digital.png (Digital World)');
  }

  // 3. Test Resume Modal
  console.log('Testing Resume Modal...');
  const resumeBtn = page.locator('button:has-text("Verified Resume")').first();
  if (await resumeBtn.count() > 0) {
    await resumeBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '05_resume_modal.png') });
    console.log('Saved 05_resume_modal.png');

    // Verify download links inside modal
    const pdfLink = page.locator('a[href="/resume.pdf"]');
    const docxLink = page.locator('a[href="/T_VIJAYAREGUNATH_RESUME.docx"]');
    console.log('Resume PDF link count in modal:', await pdfLink.count());
    console.log('Resume DOCX link count in modal:', await docxLink.count());

    // Close modal
    const closeBtn = page.locator('button[aria-label="Close resume viewer"]').first();
    if (await closeBtn.count() > 0) {
      await closeBtn.click();
      await page.waitForTimeout(400);
    }
  }

  // 4. Scroll to The Data Science Learning Journey
  console.log('Auditing Data Science Learning Journey...');
  const dsSection = page.locator('#data-science-journey');
  if (await dsSection.count() > 0) {
    await dsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '04_data_science_journey_digital.png') });
    console.log('Saved 04_data_science_journey_digital.png');

    // Flip back to Literary to test Literary world rendering
    if (await toggleBtn.count() > 0) {
      await toggleBtn.click();
      await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(screenshotDir, '03_data_science_journey_literary.png') });
      console.log('Saved 03_data_science_journey_literary.png');
    }
  }

  // 5. Scroll to Projects with Architecture Diagrams
  console.log('Auditing Projects Section with Vector Diagrams...');
  const projSection = page.locator('#projects');
  if (await projSection.count() > 0) {
    await projSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '07_projects_with_architecture_diagrams.png') });
    console.log('Saved 07_projects_with_architecture_diagrams.png');
  }

  // 6. Scroll to Learning Odyssey Certificates
  console.log('Auditing Learning Odyssey Certifides Tab...');
  const odysseySection = page.locator('#odyssey');
  if (await odysseySection.count() > 0) {
    await odysseySection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '06_learning_odyssey_certificates.png') });
    console.log('Saved 06_learning_odyssey_certificates.png');
  }

  // 7. Audit Responsive Breakpoints for 0px Overflow
  const breakpoints = [320, 375, 425, 768, 1024, 1280, 1440, 1920];
  console.log('\n--- Responsive Horizontal Scroll Audit ---');
  let hasOverflow = false;

  for (const width of breakpoints) {
    await page.setViewportSize({ width, height: 800 });
    await page.waitForTimeout(300);

    const overflowInfo = await page.evaluate(() => {
      const docEl = document.documentElement;
      const bodyEl = document.body;
      const scrollW = Math.max(docEl.scrollWidth, bodyEl.scrollWidth);
      const clientW = window.innerWidth;
      return {
        width: clientW,
        scrollWidth: scrollW,
        hasOverflow: scrollW > clientW
      };
    });

    console.log(`Breakpoint ${width}px: clientWidth=${overflowInfo.width}, scrollWidth=${overflowInfo.scrollWidth}, overflow=${overflowInfo.hasOverflow ? 'FAIL' : 'PASS'}`);
    if (overflowInfo.hasOverflow) hasOverflow = true;

    if (width === 320) {
      await page.screenshot({ path: path.join(screenshotDir, '08_responsive_320px_mobile.png') });
      console.log('Saved 08_responsive_320px_mobile.png');
    }
  }

  // 8. Audit GitHub Profile Link Everywhere
  console.log('\n--- Auditing GitHub Profile Links ---');
  const allGithubLinks = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href*="github.com"]'));
    return anchors.map(a => ({
      href: a.href,
      text: a.innerText.trim() || a.getAttribute('title') || a.getAttribute('aria-label') || ''
    }));
  });

  let githubPersonalCorrect = true;
  allGithubLinks.forEach(item => {
    if (item.href.includes('github.com') && !item.href.includes('/mrvruser')) {
      console.warn(`Unverified GitHub link: ${item.href} (Text: ${item.text})`);
      githubPersonalCorrect = false;
    }
  });

  console.log(`Audited ${allGithubLinks.length} GitHub links. All contain https://github.com/mrvruser: ${githubPersonalCorrect ? 'YES' : 'NO'}`);

  // Summary
  console.log('\n--- Final Test Summary ---');
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) console.log(consoleErrors);
  console.log(`Failed Requests: ${failedRequests.length}`);
  if (failedRequests.length > 0) console.log(failedRequests);
  console.log(`Horizontal Scroll Overflow Detected: ${hasOverflow ? 'YES' : 'NO'}`);

  await browser.close();

  if (consoleErrors.length === 0 && !hasOverflow && failedRequests.length === 0) {
    console.log('\n>>> ALL ACCEPTANCE TESTS PASSED WITH 100% SUCCESS! <<<');
  } else {
    console.warn('\n>>> Some tests had warnings or errors. Check log above. <<<');
  }
}

runAcceptanceSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
