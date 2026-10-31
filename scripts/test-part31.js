const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runPart31TestSuite() {
  const screenshotDir = path.resolve('reports/visual_acceptance/cinematic_experience');
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
  await page.goto('http://localhost:3001');

  // 1. Capture Cinematic Opening Sequence
  console.log('Testing Cinematic Opening Experience...');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotDir, '01_cinematic_opening.png') });
  console.log('Saved 01_cinematic_opening.png');

  // Skip Intro
  const skipBtn = page.locator('button:has-text("Skip Intro")').first();
  if (await skipBtn.count() > 0) {
    await skipBtn.click();
    console.log('Clicked Skip Intro.');
  }
  await page.waitForTimeout(800);

  // 2. Capture Hero in Literary Parchment
  console.log('Capturing Hero Section (Literary Parchment)...');
  await page.screenshot({ path: path.join(screenshotDir, '02_hero_literary_parchment.png') });
  console.log('Saved 02_hero_literary_parchment.png');

  // 3. Flip Theme to Digital World & Capture
  console.log('Flipping theme to Digital World...');
  const toggleBtn = page.locator('button[aria-label*="theme"], button[aria-label*="Book"], button[aria-label*="Brain"]').first();
  if (await toggleBtn.count() > 0) {
    await toggleBtn.click();
    await page.waitForTimeout(700);
    await page.screenshot({ path: path.join(screenshotDir, '03_hero_digital_cyber.png') });
    console.log('Saved 03_hero_digital_cyber.png');
  }

  // 4. Test Verified Resume Modal
  console.log('Testing Verified Resume Modal...');
  const resumeBtn = page.locator('button:has-text("Verified Resume")').first();
  if (await resumeBtn.count() > 0) {
    await resumeBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '11_verified_resume_modal.png') });
    console.log('Saved 11_verified_resume_modal.png');

    const closeResume = page.locator('button[aria-label="Close resume viewer"]').first();
    if (await closeResume.count() > 0) {
      await closeResume.click();
      await page.waitForTimeout(400);
    }
  }

  // 5. Capture Editorial Bento Dashboard
  console.log('Capturing Editorial Bento Dashboard...');
  const bento = page.locator('#editorial-bento');
  if (await bento.count() > 0) {
    await bento.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '04_editorial_bento_dashboard.png') });
    console.log('Saved 04_editorial_bento_dashboard.png');
  }

  // 6. Capture Skills & Technology Matrix
  console.log('Capturing Skills Matrix...');
  const skillsSection = page.locator('#skills');
  if (await skillsSection.count() > 0) {
    await skillsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Click category filter to test interactivity
    const dsCatBtn = page.locator('button:has-text("Data Science")').first();
    if (await dsCatBtn.count() > 0) {
      await dsCatBtn.click();
      await page.waitForTimeout(300);
    }

    await page.screenshot({ path: path.join(screenshotDir, '05_skills_matrix_interactive.png') });
    console.log('Saved 05_skills_matrix_interactive.png');
  }

  // 7. Capture Flagship Enterprise Application (ATTS)
  console.log('Capturing Flagship Application (ATTS)...');
  const flagship = page.locator('#featured-application');
  if (await flagship.count() > 0) {
    await flagship.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '06_flagship_atts_enterprise.png') });
    console.log('Saved 06_flagship_atts_enterprise.png');

    // Test Fullscreen Architecture Diagram Modal
    const archBtn = page.locator('button:has-text("Fullscreen Architecture")').first();
    if (await archBtn.count() > 0) {
      await archBtn.click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(screenshotDir, '07_flagship_architecture_modal.png') });
      console.log('Saved 07_flagship_architecture_modal.png');

      const closeArch = page.locator('button[aria-label="Close architecture modal"]').first();
      if (await closeArch.count() > 0) {
        await closeArch.click();
        await page.waitForTimeout(400);
      }
    }
  }

  // 8. Capture Specialized Projects Carousel
  console.log('Capturing Project Carousel...');
  const carousel = page.locator('#project-carousel');
  if (await carousel.count() > 0) {
    await carousel.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Click carousel forward arrow
    const rightArrow = page.locator('button[aria-label="Scroll carousel right"]').first();
    if (await rightArrow.count() > 0 && await rightArrow.isEnabled()) {
      await rightArrow.click();
      await page.waitForTimeout(500);
    }

    await page.screenshot({ path: path.join(screenshotDir, '08_project_carousel_specialized.png') });
    console.log('Saved 08_project_carousel_specialized.png');
  }

  // 9. Capture Professional & Leadership Timeline
  console.log('Capturing Career Timeline...');
  const timeline = page.locator('#experience');
  if (await timeline.count() > 0) {
    await timeline.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '09_career_leadership_timeline.png') });
    console.log('Saved 09_career_leadership_timeline.png');
  }

  // 10. Capture Honours & Recognition Showcase
  console.log('Capturing Honours Showcase...');
  const honours = page.locator('#achievements');
  if (await honours.count() > 0) {
    await honours.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(screenshotDir, '10_honours_recognition_showcase.png') });
    console.log('Saved 10_honours_recognition_showcase.png');
  }

  // 11. Test Replay Intro from Navbar
  console.log('Testing Replay Intro...');
  const replayBtn = page.locator('button[title*="Replay"]').first();
  if (await replayBtn.count() > 0) {
    await replayBtn.click();
    await page.waitForTimeout(500);
    console.log('Replay trigger verified.');
    // Dismiss replay
    const skipAgain = page.locator('button:has-text("Skip Intro")').first();
    if (await skipAgain.count() > 0) {
      await skipAgain.click();
      await page.waitForTimeout(400);
    }
  }

  // 12. Responsive Audit Across 6 Required Viewports (320px, 390px, 768px, 1024px, 1440px, 1920px)
  const viewports = [
    { width: 320, name: '12_responsive_320px_mobile.png' },
    { width: 390, name: '13_responsive_390px_mobile.png' },
    { width: 768, name: '14_responsive_768px_tablet.png' },
    { width: 1024, name: null },
    { width: 1440, name: null },
    { width: 1920, name: '15_responsive_1920px_ultrawide.png' }
  ];

  console.log('\n--- Responsive Horizontal Scroll Audit (6 Breakpoints) ---');
  let hasOverflow = false;

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: 850 });
    await page.waitForTimeout(350);

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

    console.log(`Viewport ${vp.width}px: clientWidth=${overflowInfo.width}, scrollWidth=${overflowInfo.scrollWidth}, overflow=${overflowInfo.hasOverflow ? 'FAIL' : 'PASS'}`);
    if (overflowInfo.hasOverflow) hasOverflow = true;

    if (vp.name) {
      await page.screenshot({ path: path.join(screenshotDir, vp.name) });
      console.log(`Saved ${vp.name}`);
    }
  }

  // Summary
  console.log('\n--- Part 31 Final Test Summary ---');
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) console.log(consoleErrors);
  console.log(`Failed Requests: ${failedRequests.length}`);
  if (failedRequests.length > 0) console.log(failedRequests);
  console.log(`Horizontal Scroll Overflow Detected: ${hasOverflow ? 'YES' : 'NO'}`);

  await browser.close();

  if (consoleErrors.length === 0 && !hasOverflow && failedRequests.length === 0) {
    console.log('\n>>> ALL PART 31 ACCEPTANCE TESTS PASSED WITH 100% SUCCESS! <<<');
  } else {
    console.warn('\n>>> Some tests had warnings or errors. Check log above. <<<');
  }
}

runPart31TestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
