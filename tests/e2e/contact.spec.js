// tests/e2e/contact.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Contact Page', () => {
  test('should load contact page successfully', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('should have contact page content', async ({ page }) => {
    await page.goto('/contact');
    
    // Check that the page has some content
    const pageContent = page.locator('main');
    await expect(pageContent).toBeVisible();
    
    // Verify no 404 errors
    await expect(page.locator('h1')).not.toHaveText(/404/i);
  });
}); 