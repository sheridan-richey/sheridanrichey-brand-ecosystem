// tests/e2e/newsletter.spec.js
// Legacy /newsletter URLs redirect to /blog; no newsletter signup surface on the site.
const { test, expect } = require('@playwright/test');

test.describe('Newsletter surface removal', () => {
  test('/newsletter redirects to blog', async ({ page }) => {
    await page.goto('/newsletter');
    await expect(page).toHaveURL(/\/blog/);
  });

  test('homepage has no newsletter signup elements', async ({ page }) => {
    await page.goto('/');
    const newsletterElements = page.locator('a[href="/newsletter"], a:has-text("Newsletter"), form[data-testid="newsletter-form"]');
    await expect(newsletterElements).toHaveCount(0);
  });

  test('newsletter API route is removed', async ({ request }) => {
    const response = await request.post('/api/newsletter', {
      data: { email: 'not-an-email' },
    });
    expect(response.status()).toBe(404);
  });
});
