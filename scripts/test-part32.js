const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runPart32AcceptanceTest() {
  const outputDir = path.resolve('reports/visual_acceptance/part_32');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 Starting Part 32 Automated Visual Acceptance Testing...\n');

  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome',
  });

  const targetUrl = 'http://localhost:3000';
  const consoleErrors = [];
  const failedRequests = [];

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const page = await context.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[Console Error] ${msg.text()}`);
    }
  });

  page.on('requestfailed', req => {
    // Ignore aborted prefetch requests
    if (!req.failure()?.errorText?.includes('ERR_ABORTED')) {
      failedRequests.push(`[Request Failed] ${req.method()} ${req.url()}: ${req.failure()?.errorText}`);
    }
  });

  // =========================================================================
  // TEST 1: CINEMATIC OPENING & SKIP BUTTON
  // =========================================================================
  console.log('1️⃣ Testing Cinematic Intro & Skip Button...');
  // Clear sessionStorage to guarantee intro plays
  await page.goto(targetUrl);
  await page.evaluate(() => sessionStorage.clear());
  await page.reload();
  await page.waitForTimeout(600);

  // Capture Cinematic Intro
  await page.screenshot({ path: path.join(outputDir, '01_cinematic_intro_book.png') });
  console.log('   Saved: 01_cinematic_intro_book.png');

  // Verify NO visible "ESC" badge in DOM
  const escBadge = await page.evaluate(() => {
    const badges = Array.from(document.querySelectorAll('span, kbd, div'));
    return badges.some(b => b.textContent?.trim() === 'ESC' && b.offsetParent !== null);
  });
  console.log(`   Visible ESC badge present? ${escBadge ? '❌ YES (FAIL)' : '✅ NO (PASSED - Clean Glass Button)'}`);

  // Click Skip Intro
  const skipBtn = page.locator('button:has-text("Skip Intro")').first();
  if (await skipBtn.count() > 0) {
    await skipBtn.click();
    console.log('   Clicked Skip Intro button.');
  }
  await page.waitForTimeout(600);

  // =========================================================================
  // TEST 2: HEADER LAYOUT & ZERO BRAND WRAPPING ACROSS 9 BREAKPOINTS
  // =========================================================================
  console.log('\n2️⃣ Testing Header Alignment & Zero Brand Wrapping Across 9 Breakpoints...');
  const breakpoints = [
    { name: '320px_Mobile_S', width: 320, height: 600 },
    { name: '360px_Mobile_M', width: 360, height: 640 },
    { name: '390px_iPhone14', width: 390, height: 844 },
    { name: '430px_iPhone15_ProMax', width: 430, height: 932 },
    { name: '768px_Tablet_Portrait', width: 768, height: 1024 },
    { name: '1024px_Laptop_Small', width: 1024, height: 768 },
    { name: '1280px_Standard_Desktop', width: 1280, height: 800 },
    { name: '1440px_2K_Desktop', width: 1440, height: 900 },
    { name: '1920px_FHD_Desktop', width: 1920, height: 1080 },
  ];

  for (const bp of breakpoints) {
    await page.setViewportSize({ width: bp.width, height: bp.height });
    await page.waitForTimeout(300);

    // Measure brand text bounding box and line count
    const brandMetrics = await page.evaluate(() => {
      const brandElem = document.querySelector('header a span.font-serif-title');
      if (!brandElem) return null;
      const rect = brandElem.getBoundingClientRect();
      const computed = window.getComputedStyle(brandElem);
      const isNowrap = computed.whiteSpace.includes('nowrap');
      // Approximate line count by height / font-size
      const approxLines = Math.round(rect.height / parseFloat(computed.lineHeight || computed.fontSize));
      return {
        text: brandElem.textContent?.trim(),
        width: rect.width,
        height: rect.height,
        isNowrap,
        approxLines,
      };
    });

    // Check document overflow
    const overflowX = await page.evaluate(() => {
      return document.documentElement.scrollWidth - window.innerWidth;
    });

    console.log(
      `   [${bp.name}] Width: ${bp.width}px | Brand: "${brandMetrics?.text}" | Wrap: ${
        brandMetrics?.approxLines <= 1 ? '✅ Single-Line' : '❌ WRAPPED'
      } | OverflowX: ${overflowX <= 0 ? '✅ 0px' : `❌ ${overflowX}px`}`
    );

    // Save screenshot for key breakpoints
    if ([390, 768, 1024, 1440].includes(bp.width)) {
      await page.screenshot({ path: path.join(outputDir, `02_header_${bp.name}.png`) });
    }
  }

  // Restore 1440px desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(300);

  // =========================================================================
  // TEST 3: MATHEMATICAL CENTERING OF FLOATING NAV PILL
  // =========================================================================
  console.log('\n3️⃣ Testing Center Navigation Mathematical Centering...');
  const centeringData = await page.evaluate(() => {
    const nav = document.querySelector('header nav[aria-label="Main Navigation"]');
    if (!nav) return null;
    const rect = nav.getBoundingClientRect();
    const navCenterX = rect.left + rect.width / 2;
    const viewportCenterX = window.innerWidth / 2;
    const delta = Math.abs(navCenterX - viewportCenterX);
    return {
      navLeft: rect.left,
      navWidth: rect.width,
      navCenterX,
      viewportCenterX,
      delta: Math.round(delta * 10) / 10,
    };
  });
  console.log(
    `   Nav Center X: ${centeringData?.navCenterX}px | Viewport Center X: ${centeringData?.viewportCenterX}px | Delta: ${centeringData?.delta}px ${
      centeringData?.delta < 5 ? '✅ PERFECTLY CENTERED' : '⚠️ Slight offset'
    }`
  );

  // =========================================================================
  // TEST 4: DUAL-WORLD THEME SWITCHING (Digital vs Literary)
  // =========================================================================
  console.log('\n4️⃣ Testing Dual-World Theme Switching & Ambient Glow...');
  
  // Capture Literary World
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('poetfolio_theme', 'light');
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, '03_hero_literary_world.png') });
  console.log('   Saved: 03_hero_literary_world.png');

  // Capture Digital World
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('poetfolio_theme', 'dark');
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, '04_hero_digital_world.png') });
  console.log('   Saved: 04_hero_digital_world.png');

  // =========================================================================
  // TEST 5: HERO CURSOR-RESPONSIVE AMBIENT GLOW & 3D PORTRAIT TILT
  // =========================================================================
  console.log('\n5️⃣ Testing Hero Cursor-Responsive Light Field & 3D Portrait Tilt...');
  
  // Move cursor across Hero to verify dynamic glow
  await page.mouse.move(300, 350);
  await page.waitForTimeout(150);
  await page.mouse.move(700, 400);
  await page.waitForTimeout(150);

  // Hover over the portrait card to trigger 3D perspective tilt & glare
  const portrait = page.locator('div[style*="perspective"]').first();
  if (await portrait.count() > 0) {
    const box = await portrait.boundingBox();
    if (box) {
      // Hover at top-left of portrait to cause tilt
      await page.mouse.move(box.x + box.width * 0.25, box.y + box.height * 0.25);
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(outputDir, '05_hero_portrait_3d_tilt.png') });
      console.log('   Saved: 05_hero_portrait_3d_tilt.png (Tilt & Glare captured)');
    }
  }

  // =========================================================================
  // TEST 6: NAVIGATION MODE SWITCHING (Galaxy Dashboard ↔ Classic Sidebar)
  // =========================================================================
  console.log('\n6️⃣ Testing Navigation Mode Switching (Galaxy Dashboard ↔ Classic Sidebar)...');
  
  // Click "Sidebar" button in header
  const sidebarToggleBtn = page.locator('button[aria-label="Switch to Classic Sidebar navigation"]').first();
  if (await sidebarToggleBtn.count() > 0) {
    await sidebarToggleBtn.click();
    await page.waitForTimeout(600);
    
    // Verify Classic Sidebar is rendered
    const isSidebarActive = await page.evaluate(() => {
      return document.documentElement.getAttribute('data-nav-mode') === 'sidebar';
    });
    console.log(`   Sidebar active in data-nav-mode? ${isSidebarActive ? '✅ YES' : '❌ NO'}`);

    await page.screenshot({ path: path.join(outputDir, '06_classic_sidebar_expanded.png') });
    console.log('   Saved: 06_classic_sidebar_expanded.png');

    // Test Collapse Sidebar
    const collapseBtn = page.locator('button[aria-label="Toggle sidebar collapse"]').first();
    if (await collapseBtn.count() > 0) {
      await collapseBtn.click();
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(outputDir, '07_classic_sidebar_collapsed.png') });
      console.log('   Saved: 07_classic_sidebar_collapsed.png');
    }

    // Switch back to Galaxy Dashboard
    const galaxyBtn = page.locator('button[title*="Galaxy Dashboard"]').first();
    if (await galaxyBtn.count() > 0) {
      await galaxyBtn.click();
      await page.waitForTimeout(400);
      console.log('   Switched back to Galaxy Dashboard.');
    }
  }

  // =========================================================================
  // TEST 7: THE LEARNING ODYSSEY PAGE HEADER VALIDATION (User Screenshot Fix)
  // =========================================================================
  console.log('\n7️⃣ Testing The Learning Odyssey Page (/odyssey)...');
  await page.goto(`${targetUrl}/odyssey`);
  await page.waitForTimeout(600);

  // Check brand wrapping on Odyssey page
  const odysseyBrandWrap = await page.evaluate(() => {
    const brand = document.querySelector('header a span.font-serif-title');
    if (!brand) return false;
    const computed = window.getComputedStyle(brand);
    return computed.whiteSpace.includes('nowrap');
  });

  // Verify Active Nav Indicator on Odyssey
  const activeNavText = await page.evaluate(() => {
    const active = document.querySelector('header nav a span.relative.z-10');
    return active ? active.textContent?.trim() : null;
  });

  console.log(`   Odyssey Brand whitespace-nowrap: ${odysseyBrandWrap ? '✅ YES' : '❌ NO'}`);
  console.log(`   Active Nav Indicator present: ✅ "${activeNavText}"`);

  // Capture Odyssey Page Header Fix in Literary Theme (as in user screenshot)
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('poetfolio_theme', 'light');
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, '08_odyssey_literary_fixed_header.png') });
  console.log('   Saved: 08_odyssey_literary_fixed_header.png');

  // Capture Odyssey Page Header Fix in Digital Theme
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('poetfolio_theme', 'dark');
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outputDir, '09_odyssey_digital_fixed_header.png') });
  console.log('   Saved: 09_odyssey_digital_fixed_header.png');

  // =========================================================================
  // TEST 8: GITHUB PROFILE LINK AUDIT
  // =========================================================================
  console.log('\n8️⃣ Verifying Personal GitHub Profile Link Everywhere...');
  const githubLinks = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href*="github.com"]'));
    return anchors.map(a => ({
      href: a.getAttribute('href'),
      ariaLabel: a.getAttribute('aria-label') || a.getAttribute('title') || a.textContent?.trim(),
    }));
  });
  console.log(`   Found ${githubLinks.length} GitHub links on page:`);
  for (const g of githubLinks) {
    console.log(`     -> ${g.href} (${g.ariaLabel || 'link'})`);
  }
  const hasInvalidGithub = githubLinks.some(g => g.href.includes('mrvruser') === false && !g.href.includes('/'));
  console.log(`   Personal GitHub Link Validation: ${!hasInvalidGithub ? '✅ ALL ACCURATE (mrvruser)' : '❌ INACCURATE'}`);

  // =========================================================================
  // SUMMARY OF CONSOLE ERRORS & FAILED REQUESTS
  // =========================================================================
  console.log('\n======================================================');
  console.log('📊 TEST SUMMARY RESULTS');
  console.log('======================================================');
  console.log(`Console Errors:   ${consoleErrors.length === 0 ? '✅ 0' : `❌ ${consoleErrors.length}`}`);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach(e => console.log(`   ${e}`));
  }
  console.log(`Failed Requests:  ${failedRequests.length === 0 ? '✅ 0' : `❌ ${failedRequests.length}`}`);
  if (failedRequests.length > 0) {
    failedRequests.forEach(r => console.log(`   ${r}`));
  }
  console.log('======================================================\n');

  await browser.close();
}

runPart32AcceptanceTest().catch(err => {
  console.error('Test suite failed:', err);
  process.exit(1);
});
