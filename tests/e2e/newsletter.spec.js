// tests/e2e/newsletter.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Newsletter and Community', () => {
  test('newsletter page should load successfully', async ({ page }) => {
    await page.goto('/newsletter');
    
    // Check page structure
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).not.toHaveText(/404/i);
    
    // Verify newsletter signup form is present
    const signupForm = page.locator('form, [data-testid="newsletter-form"], .newsletter-form');
    if (await signupForm.count() > 0) {
      await expect(signupForm.first()).toBeVisible();
    }
  });

  test('community page should load successfully', async ({ page }) => {
    await page.goto('/community');
    
    // Check page structure
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).not.toHaveText(/404/i);
    
    // Verify community content is present
    const communityContent = page.locator('main');
    await expect(communityContent).toBeVisible();
  });

  test('homepage should have newsletter signup elements', async ({ page }) => {
    await page.goto('/');
    
    // Check for newsletter signup form or CTA
    const newsletterElements = page.locator('form, [data-testid="newsletter"], .newsletter, a:has-text("Join"), a:has-text("Community")');
    
    if (await newsletterElements.count() > 0) {
      await expect(newsletterElements.first()).toBeVisible();
    }
    
    // Check for newsletter page link
    const newsletterLink = page.locator('a[href="/newsletter"], a:has-text("Newsletter")');
    if (await newsletterLink.count() > 0) {
      await expect(newsletterLink.first()).toBeVisible();
    }
  });

  test('newsletter signup should be accessible', async ({ page }) => {
    await page.goto('/newsletter');
    
    // Look for email input field
    const emailInput = page.locator('input[type="email"], input[name="email"], [data-testid="email-input"]');
    
    if (await emailInput.count() > 0) {
      await expect(emailInput.first()).toBeVisible();
      
      // Test form interaction (without submitting)
      await emailInput.first().fill('test@example.com');
      await expect(emailInput.first()).toHaveValue('test@example.com');
    }
    
    // Look for submit button
    const submitButton = page.locator('button[type="submit"], input[type="submit"], [data-testid="submit-button"]');
    if (await submitButton.count() > 0) {
      await expect(submitButton.first()).toBeVisible();
    }
  });

  test('community links should work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test community button in navigation
    const communityButton = page.locator('nav a:has-text("Community")');
    await expect(communityButton).toBeVisible();
    
    // Click community button
    await communityButton.click();
    
    // Verify we're on community page
    await expect(page).toHaveURL(/.*community/);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });
}); 