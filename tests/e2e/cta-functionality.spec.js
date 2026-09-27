// tests/e2e/cta-functionality.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Primary navigation CTAs', () => {
  test('header should not include newsletter CTA', async ({ page }) => {
    await page.goto('/');
    const newsletterButton = page.locator('nav a:has-text("Newsletter")');
    await expect(newsletterButton).toHaveCount(0);
  });

  test('header should not link to speaking or cut surfaces', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav[aria-label="Global"]');
    await expect(nav.locator('a[href="/speaking"]')).toHaveCount(0);
    await expect(nav.locator('a[href="/resources"]')).toHaveCount(0);
    await expect(nav.locator('a[href="/newsletter"]')).toHaveCount(0);
    await expect(nav.locator('a[href="/community"]')).toHaveCount(0);
  });

  test('mobile menu should match desktop nav items', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await page.locator('button[aria-label="Open main menu"]').click();
    const menu = page.getByTestId('mobile-menu-overlay');

    for (const href of ['/', '/blog', '/about', '/contact']) {
      await expect(menu.locator(`a[href="${href}"]`).first()).toBeVisible();
    }
    await expect(menu.locator('a[href="/newsletter"]')).toHaveCount(0);
  });

  test('footer should link to blog, about, contact, speaking, and framework', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('footer a[href="/blog"]').first()).toBeVisible();
    await expect(page.locator('footer a[href="/about"]').first()).toBeVisible();
    await expect(page.locator('footer a[href="/contact"]').first()).toBeVisible();
    await expect(page.locator('footer a[href="/speaking"]').first()).toBeVisible();
    await expect(page.locator('footer a[href="/zag-matrix"]').first()).toBeVisible();
    await expect(page.locator('footer a[href="/newsletter"]')).toHaveCount(0);
    await expect(page.locator('footer a[href="/resources"]')).toHaveCount(0);
  });

  test('homepage hero should link to blog', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Read the blog/i }).first().click();
    await expect(page).toHaveURL(/\/blog/);
  });

  test('about page should link to blog and contact', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('main').getByRole('link', { name: /Read the blog/i })).toBeVisible();
    await expect(page.locator('main').getByRole('link', { name: 'Contact', exact: true })).toBeVisible();
    await expect(page.locator('a[href="/newsletter"]')).toHaveCount(0);
  });

  test('contact page should not include newsletter CTA block', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('a[href="/newsletter"]')).toHaveCount(0);
    await expect(page.locator('#newsletterSignup')).toHaveCount(0);
  });

  test('ZAG Matrix page should link to blog not newsletter', async ({ page }) => {
    await page.goto('/zag-matrix');
    await expect(page.locator('a[href="/newsletter"]')).toHaveCount(0);
    await expect(page.getByRole('link', { name: /Browse the blog|Read related posts/i }).first()).toBeVisible();
  });
});
