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
    
    // Check desktop navigation links
    const navLinks = page.locator('nav a[href]');
    await expect(navLinks).toHaveCount(7); // Home, About, Blog, Resources, Contact, Community, plus logo link
    
    // Verify all navigation links are visible and clickable
    const expectedLinks = ['Home', 'About', 'Blog', 'Resources', 'Contact'];
    for (const linkText of expectedLinks) {
      const link = page.locator(`nav a:has-text("${linkText}")`);
      await expect(link).toBeVisible();
    }
    
    // Test Community button specifically
    const communityButton = page.locator('nav a:has-text("Community")');
    await expect(communityButton).toBeVisible();
  });

  test('mobile navigation should work', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Open mobile menu
    const mobileMenuButton = page.locator('button[aria-label="Open main menu"]');
    await expect(mobileMenuButton).toBeVisible();
    await mobileMenuButton.click();
    
    // Check mobile menu is visible
    const mobileMenu = page.locator('.lg\\:hidden.fixed');
    await expect(mobileMenu).toBeVisible();
    
    // Verify mobile menu links
    const mobileNavLinks = page.locator('.lg\\:hidden a[href]');
    await expect(mobileNavLinks).toHaveCount(7);
    
    // Close mobile menu
    const closeButton = page.locator('button[aria-label="Close menu"]');
    await closeButton.click();
    
    // Verify menu is closed
    await expect(mobileMenu).not.toBeVisible();
  });
}); 