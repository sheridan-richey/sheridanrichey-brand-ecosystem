// tests/e2e/links.spec.js
const { test, expect } = require('@playwright/test');

test('main navigation pages should load without 404', async ({ page }) => {
  // Test key pages
  const pages = ['/', '/about', '/blog', '/contact', '/resources'];
  
  for (const pagePath of pages) {
    await page.goto(pagePath);
    
    // Check that page loads (not a 404)
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).not.toHaveText(/404/i);
    
    // Verify page has content
    await expect(page.locator('main')).toBeVisible();
  }
}); 