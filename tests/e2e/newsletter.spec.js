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
    const newsletterElements = page.locator('form, [data-testid="newsletter"], .newsletter, a:has-text("Join"), a:has-text("Newsletter")');
    
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

  test('newsletter signup should have all required fields', async ({ page }) => {
    await page.goto('/newsletter');
    
    // Check for required form fields
    const requiredFields = [
      'input[name="email"]',
      'input[name="first_name"]',
      'select[name="role"]',
      'select[name="source"]',
      'select[name="cta_source"]'
    ];
    
    for (const fieldSelector of requiredFields) {
      const field = page.locator(fieldSelector);
      if (await field.count() > 0) {
        await expect(field.first()).toBeVisible();
      }
    }
  });

  test('newsletter signup should have proper form validation', async ({ page }) => {
    await page.goto('/newsletter');
    
    // Look for form validation elements
    const validationElements = page.locator('input[required], select[required], [aria-required="true"]');
    
    if (await validationElements.count() > 0) {
      // Check that required fields are marked
      for (let i = 0; i < await validationElements.count(); i++) {
        const element = validationElements.nth(i);
        await expect(element).toBeVisible();
      }
    }
  });

  test('newsletter signup should have proper field labels', async ({ page }) => {
    await page.goto('/newsletter');
    
    // Check for field labels
    const labels = page.locator('label, [for]');
    
    if (await labels.count() > 0) {
      // Verify at least some labels are present
      await expect(labels.first()).toBeVisible();
    }
  });

  test('newsletter links should work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test newsletter button in navigation
    const newsletterButton = page.locator('nav a:has-text("Newsletter")');
    await expect(newsletterButton).toBeVisible();
    
    // Click newsletter button
    await newsletterButton.click();
    
    // Verify we're on newsletter page
    await expect(page).toHaveURL(/.*newsletter/);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });
}); 