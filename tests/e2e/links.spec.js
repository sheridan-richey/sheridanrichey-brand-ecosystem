// tests/e2e/links.spec.js
const { test, expect } = require('@playwright/test');
const { getAllLinks } = require('../utils/linkChecker');

test('all main page links should not return 404', async ({ page }) => {
  await page.goto('/');
  const links = await getAllLinks(page);

  for (const link of links) {
    const response = await page.goto(link);
    expect(response.status()).toBeLessThan(400);
  }
}); 