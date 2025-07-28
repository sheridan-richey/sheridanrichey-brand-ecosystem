// tests/e2e/contact.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Contact Page and Form', () => {
  test('contact page should load successfully', async ({ page }) => {
    await page.goto('/contact');
    
    // Check page structure
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).not.toHaveText(/404/i);
    
    // Verify contact content is present
    const contactContent = page.locator('main');
    await expect(contactContent).toBeVisible();
  });

  test('contact form should be accessible and interactive', async ({ page }) => {
    await page.goto('/contact');
    
    // Look for contact form
    const contactForm = page.locator('form, [data-testid="contact-form"], .contact-form');
    
    if (await contactForm.count() > 0) {
      await expect(contactForm.first()).toBeVisible();
      
      // Test form fields if they exist
      const formFields = [
        { selector: 'input[name="name"], input[name="firstName"], [data-testid="name-input"]', value: 'Test User' },
        { selector: 'input[name="email"], input[type="email"], [data-testid="email-input"]', value: 'test@example.com' },
        { selector: 'textarea[name="message"], textarea, [data-testid="message-input"]', value: 'This is a test message' }
      ];
      
      for (const field of formFields) {
        const input = page.locator(field.selector);
        if (await input.count() > 0) {
          await expect(input.first()).toBeVisible();
          
          // Test form interaction (without submitting)
          await input.first().fill(field.value);
          await expect(input.first()).toHaveValue(field.value);
        }
      }
      
      // Look for submit button
      const submitButton = page.locator('button[type="submit"], input[type="submit"], [data-testid="submit-button"]');
      if (await submitButton.count() > 0) {
        await expect(submitButton.first()).toBeVisible();
      }
    }
  });

  test('contact page should have proper contact information', async ({ page }) => {
    await page.goto('/contact');
    
    // Check for contact information sections
    const contactInfo = page.locator('main');
    await expect(contactInfo).toBeVisible();
    
    // Look for common contact elements
    const contactElements = page.locator('a[href^="mailto:"], a[href^="tel:"], .contact-info, .contact-details');
    
    if (await contactElements.count() > 0) {
      await expect(contactElements.first()).toBeVisible();
    }
  });

  test('contact page should be accessible from navigation', async ({ page }) => {
    await page.goto('/');
    
    // Find contact link in navigation
    const contactLink = page.locator('nav a:has-text("Contact")');
    await expect(contactLink).toBeVisible();
    
    // Click contact link
    await contactLink.click();
    
    // Verify we're on contact page
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('contact page should have proper form validation indicators', async ({ page }) => {
    await page.goto('/contact');
    
    // Look for form validation elements
    const validationElements = page.locator('input[required], textarea[required], [aria-required="true"]');
    
    if (await validationElements.count() > 0) {
      // Check that required fields are marked
      for (let i = 0; i < await validationElements.count(); i++) {
        const element = validationElements.nth(i);
        await expect(element).toBeVisible();
      }
    }
  });
}); 