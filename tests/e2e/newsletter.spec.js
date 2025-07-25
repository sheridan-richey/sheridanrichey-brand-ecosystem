// tests/e2e/newsletter.spec.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pageObjects/HomePage');

test.describe('Newsletter Signup', () => {
  test('should allow valid email signup', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.subscribe('testuser@example.com');
    await expect(home.successMessage).toBeVisible();
  });

  test('should show error for invalid email', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.subscribe('not-an-email');
    await expect(home.errorMessage).toHaveText(/invalid email/i);
  });
}); 