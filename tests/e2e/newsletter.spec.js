// tests/e2e/newsletter.spec.js
// Newsletter UX removed from public site; API remains for dormant integrations.
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

  test('newsletter API route is still mounted', async ({ request }) => {
    const response = await request.post('/api/newsletter', {
      data: { email: 'not-an-email' },
    });
    // Route exists; without Beehiiv env in dev, server may return 400 (validation) or 500 (config).
    expect([400, 500]).toContain(response.status());
  });
});
