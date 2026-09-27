// tests/e2e/links.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Navigation and Page Loading', () => {
  test('main navigation pages should load without 404', async ({ page }) => {
    const pages = [
      '/',
      '/about',
      '/blog',
      '/contact',
      '/zag-matrix',
      '/speaking'
    ];

    for (const pagePath of pages) {
      await page.goto(pagePath);

      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('h1').first()).not.toHaveText(/404/i);
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('nav')).toBeVisible();
    }
  });

  test('navigation menu should work correctly', async ({ page }) => {
    await page.goto('/');

    const navLinks = page.locator('nav a[href]');
    await expect(navLinks.first()).toBeVisible();

    const expectedHrefs = ['/', '/blog', '/about', '/contact'];
    for (const href of expectedHrefs) {
      const link = page.locator(`nav a[href="${href}"]`);
      await expect(link.first()).toBeVisible();
    }

    const newsletterLink = page.locator('nav a[href="/newsletter"], nav a:has-text("Newsletter")');
    await expect(newsletterLink).toHaveCount(0);
  });

  test('mobile navigation should work', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const mobileMenuButton = page.locator('button[aria-label="Open main menu"]');
    await expect(mobileMenuButton).toBeVisible();
    await mobileMenuButton.click();

    const mobileMenu = page.getByTestId('mobile-menu-overlay');
    await expect(mobileMenu).toBeVisible();

    const expectedHrefs = ['/', '/blog', '/about', '/contact'];
    for (const href of expectedHrefs) {
      await expect(mobileMenu.locator(`a[href="${href}"]`).first()).toBeVisible();
    }

    const closeButton = page.locator('button[aria-label="Close menu"]');
    await closeButton.click();

    await expect(mobileMenu).not.toBeVisible();
  });

  test('cut URLs should redirect to blog-first destinations', async ({ page }) => {
    const redirects = [
      { from: '/newsletter', to: /\/blog/ },
      { from: '/resources', to: /\/blog/ },
      { from: '/community', to: /\/blog/ },
      { from: '/contributors', to: /\/about/ },
      { from: '/downloads/prompt-architects-toolkit', to: /\/blog/ },
      { from: '/zag-matrix/zen', to: /\/zag-matrix$/ },
      { from: '/zag-matrix/act', to: /\/zag-matrix$/ },
      { from: '/zag-matrix/gem', to: /\/zag-matrix$/ },
    ];

    for (const { from, to } of redirects) {
      await page.goto(from);
      await expect(page).toHaveURL(to);
    }
  });
});
