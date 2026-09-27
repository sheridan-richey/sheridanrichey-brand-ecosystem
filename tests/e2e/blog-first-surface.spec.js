// tests/e2e/blog-first-surface.spec.js
// Cross-page assertions for the blog-first public surface (kept routes + redirects).
const { test, expect } = require('@playwright/test');

const CUT_HEADER_HREFS = ['/newsletter', '/resources', '/community', '/contributors'];

test.describe('Blog-first public surface', () => {
  test('kept pages have no in-main newsletter links', async ({ page }) => {
    const paths = ['/', '/blog', '/about', '/contact', '/zag-matrix'];
    for (const path of paths) {
      await page.goto(path);
      await expect(page.locator('main a[href="/newsletter"]')).toHaveCount(0);
      await expect(page.locator('main a[href*="/newsletter?"]')).toHaveCount(0);
    }
  });

  test('header exposes only Home, Blog, About, Contact (plus logo)', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav[aria-label="Global"]');
    for (const href of ['/', '/blog', '/about', '/contact']) {
      await expect(nav.locator(`a[href="${href}"]`).first()).toBeVisible();
    }
    for (const href of CUT_HEADER_HREFS) {
      await expect(nav.locator(`a[href="${href}"]`)).toHaveCount(0);
    }
  });

  test('speaking is discoverable from footer only', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer a[href="/speaking"]').first()).toBeVisible();
    await expect(page.locator('nav[aria-label="Global"] a[href="/speaking"]')).toHaveCount(0);
  });
});
