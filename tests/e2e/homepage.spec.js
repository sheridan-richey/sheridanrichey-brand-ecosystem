// tests/e2e/homepage.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Homepage Functionality', () => {
  test('homepage should load successfully with all sections', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('h1')).not.toHaveText(/404/i);
  });

  test('homepage should have blog-led hero section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: /Read the blog/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /About me/i })).toBeVisible();
  });

  test('homepage should have latest insights section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /Latest from the blog/i })).toBeVisible();
    const latestCards = page.locator('main article');
    await expect(latestCards.first()).toBeVisible();
    expect(await latestCards.count()).toBeGreaterThanOrEqual(1);
  });

  test('homepage should not promote newsletter signup', async ({ page }) => {
    await page.goto('/');

    const newsletterLinks = page.locator('a[href="/newsletter"], a:has-text("Newsletter")');
    await expect(newsletterLinks).toHaveCount(0);
  });

  test('homepage CTAs should link to blog and about', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /Read the blog/i }).first().click();
    await expect(page).toHaveURL(/\/blog/);
  });

  test('homepage should be responsive', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();

    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();

    const mobileMenuButton = page.locator('button[aria-label="Open main menu"]');
    await expect(mobileMenuButton).toBeVisible();
  });

  test('homepage should have proper SEO elements', async ({ page }) => {
    await page.goto('/');

    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);

    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
  });
});
