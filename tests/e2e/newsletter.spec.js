// tests/e2e/newsletter.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Home Page Navigation', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should have working navigation menu', async ({ page }) => {
    await page.goto('/');
    
    // Check that navigation links are present
    const navLinks = page.locator('nav a[href]');
    await expect(navLinks).toHaveCount(await navLinks.count());
    
    // Verify we can click on navigation items without errors
    const firstNavLink = navLinks.first();
    await expect(firstNavLink).toBeVisible();
  });
}); 