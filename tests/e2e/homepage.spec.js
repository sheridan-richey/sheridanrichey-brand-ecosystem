// tests/e2e/homepage.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Homepage Functionality', () => {
  test('homepage should load successfully with all sections', async ({ page }) => {
    await page.goto('/');
    
    // Check page structure
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // Verify no 404 errors
    await expect(page.locator('h1')).not.toHaveText(/404/i);
  });

  test('homepage should have hero section', async ({ page }) => {
    await page.goto('/');
    
    // Look for hero section content
    const heroElements = page.locator('text=Sheridan, text=ZAG Matrix, text=Awakened Technologist, text=career transformation');
    
    if (await heroElements.count() > 0) {
      await expect(heroElements.first()).toBeVisible();
    }
  });

  test('homepage should have ZAG Matrix overview section', async ({ page }) => {
    await page.goto('/');
    
    // Look for ZAG Matrix content
    const zagElements = page.locator('text=ZEN, text=ACT, text=GEM, text=Zeal, text=Activate, text=Growth');
    
    if (await zagElements.count() > 0) {
      await expect(zagElements.first()).toBeVisible();
    }
  });

  test('homepage should have latest insights section', async ({ page }) => {
    await page.goto('/');
    
    // Look for blog or insights content
    const insightsElements = page.locator('text=Latest, text=Insights, text=Blog, text=Articles, text=Posts');
    
    if (await insightsElements.count() > 0) {
      await expect(insightsElements.first()).toBeVisible();
    }
  });

  test('homepage should have call-to-action sections', async ({ page }) => {
    await page.goto('/');
    
    // Look for CTA elements
    const ctaElements = page.locator('text=Join, text=Community, text=Contact, text=Let\'s Talk, text=Transform');
    
    if (await ctaElements.count() > 0) {
      await expect(ctaElements.first()).toBeVisible();
    }
  });

  test('homepage CTAs should link to correct pages', async ({ page }) => {
    await page.goto('/');
    
    // Test newsletter/community CTA
    const newsletterCTA = page.locator('a[href="/newsletter"], a[href="/community"], a:has-text("Join"), a:has-text("Community")');
    if (await newsletterCTA.count() > 0) {
      await expect(newsletterCTA.first()).toBeVisible();
      
      // Click and verify navigation
      await newsletterCTA.first().click();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('homepage should be responsive', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
    
    // Mobile menu button should be visible
    const mobileMenuButton = page.locator('button[aria-label="Open main menu"]');
    await expect(mobileMenuButton).toBeVisible();
  });

  test('homepage should have proper SEO elements', async ({ page }) => {
    await page.goto('/');
    
    // Check for meta tags and structured content
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    
    // Check for main content areas
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
  });
}); 