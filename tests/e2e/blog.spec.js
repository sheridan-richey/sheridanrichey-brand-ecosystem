// tests/e2e/blog.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Blog Pages', () => {
  test('blog index page should load', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).not.toHaveText(/404/i);
  });

  test('blog should have content', async ({ page }) => {
    await page.goto('/blog');
    
    // Check that blog page has some content
    const blogContent = page.locator('main');
    await expect(blogContent).toBeVisible();
    
    // Verify it's not a 404 page
    await expect(page.locator('h1')).not.toHaveText(/404/i);
  });
}); 