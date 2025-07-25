// tests/e2e/blog.spec.js
const { test, expect } = require('@playwright/test');

test('blog index and posts render', async ({ page }) => {
  await page.goto('/blog');
  await expect(page.locator('h1')).toHaveText(/blog/i);

  // Click first blog post
  const firstPost = page.locator('a[data-testid="blog-post-link"]').first();
  await firstPost.click();
  await expect(page.locator('article')).toBeVisible();
  await expect(page.locator('h1')).not.toHaveText(/404/i);
}); 