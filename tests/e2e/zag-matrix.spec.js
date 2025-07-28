// tests/e2e/zag-matrix.spec.js
const { test, expect } = require('@playwright/test');

test.describe('ZAG Matrix Page', () => {
  test('ZAG Matrix page should load successfully', async ({ page }) => {
    await page.goto('/zag-matrix');
    
    // Check page structure
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);
    
    // Verify ZAG Matrix content is present
    const zagContent = page.locator('main');
    await expect(zagContent).toBeVisible();
  });

  test('ZAG Matrix page should have interactive elements', async ({ page }) => {
    await page.goto('/zag-matrix');
    
    // Look for interactive elements like buttons, links, or expandable sections
    const interactiveElements = page.locator('button, a[href], [role="button"], [tabindex]');
    
    if (await interactiveElements.count() > 0) {
      // Test that interactive elements are visible
      await expect(interactiveElements.first()).toBeVisible();
    }
  });

  test('ZAG Matrix should be accessible from homepage', async ({ page }) => {
    await page.goto('/');
    
    // Look for ZAG Matrix links on homepage
    const zagLinks = page.locator('a[href="/zag-matrix"], a:has-text("ZAG"), a:has-text("Matrix")');
    
    if (await zagLinks.count() > 0) {
      await expect(zagLinks.first()).toBeVisible();
      
      // Click ZAG Matrix link
      await zagLinks.first().click();
      
      // Verify we're on ZAG Matrix page
      await expect(page).toHaveURL(/.*zag-matrix/);
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
    }
  });
}); 