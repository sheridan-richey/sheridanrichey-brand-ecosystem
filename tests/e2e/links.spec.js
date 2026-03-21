// tests/e2e/links.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Navigation and Page Loading', () => {
  test('main navigation pages should load without 404', async ({ page }) => {
    // Test all main pages
    const pages = [
      '/',
      '/about',
      '/blog',
      '/contact',
      '/resources',
      '/community',
      '/zag-matrix',
      '/newsletter',
      '/speaking'
    ];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      // Check that page loads (not a 404)
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('h1').first()).not.toHaveText(/404/i);
      
      // Verify page has content
      await expect(page.locator('main')).toBeVisible();
      
      // Verify navigation is present
      await expect(page.locator('nav')).toBeVisible();
    }
  });

  test('navigation menu should work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check desktop navigation: at least 5 main nav links + logo/newsletter (exact count may change)
    const navLinks = page.locator('nav a[href]');
    await expect(navLinks.first()).toBeVisible();
    const count = await navLinks.count();
    expect(count).toBeGreaterThanOrEqual(5);
    
    // Verify expected navigation links exist by href or text
    const expectedHrefs = ['/', '/about', '/blog', '/resources', '/contact'];
    for (const href of expectedHrefs) {
      const link = page.locator(`nav a[href="${href}"]`);
      await expect(link.first()).toBeVisible();
    }
    
    // Newsletter CTA or link to newsletter page should be present
    const newsletterLink = page.locator('nav a[href="/newsletter"], nav a:has-text("Newsletter")');
    await expect(newsletterLink.first()).toBeVisible();
  });

  test('mobile navigation should work', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Open mobile menu
    const mobileMenuButton = page.locator('button[aria-label="Open main menu"]');
    await expect(mobileMenuButton).toBeVisible();
    await mobileMenuButton.click();
    
    const mobileMenu = page.getByTestId('mobile-menu-overlay');
    await expect(mobileMenu).toBeVisible();
    
    const mobileNavLinks = page.getByTestId('mobile-menu-overlay').locator('a[href]');
    await expect(mobileNavLinks.first()).toBeVisible();
    const mobileCount = await mobileNavLinks.count();
    expect(mobileCount).toBeGreaterThanOrEqual(5);
    
    // Close mobile menu
    const closeButton = page.locator('button[aria-label="Close menu"]');
    await closeButton.click();
    
    // Verify menu is closed
    await expect(mobileMenu).not.toBeVisible();
  });
}); 