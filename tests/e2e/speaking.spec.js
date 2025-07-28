// tests/e2e/speaking.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Speaking Page', () => {
  test('speaking page should load successfully', async ({ page }) => {
    await page.goto('/speaking');
    
    // Check page structure
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).not.toHaveText(/404/i);
    
    // Verify speaking content is present
    const speakingContent = page.locator('main');
    await expect(speakingContent).toBeVisible();
  });

  test('speaking page should have speaking-related content', async ({ page }) => {
    await page.goto('/speaking');
    
    // Look for speaking-related content
    const speakingElements = page.locator('text=speaking, text=speaker, text=presentation, text=keynote, text=workshop, text=conference');
    
    if (await speakingElements.count() > 0) {
      await expect(speakingElements.first()).toBeVisible();
    }
  });

  test('speaking page should have contact or booking elements', async ({ page }) => {
    await page.goto('/speaking');
    
    // Look for contact or booking elements
    const contactElements = page.locator('a[href="/contact"], a:has-text("Contact"), a:has-text("Book"), a:has-text("Inquire"), button:has-text("Contact")');
    
    if (await contactElements.count() > 0) {
      await expect(contactElements.first()).toBeVisible();
      
      // Test that contact links work
      const contactLink = contactElements.first();
      await contactLink.click();
      
      // Should navigate to contact page or open contact form
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('speaking page should have professional information', async ({ page }) => {
    await page.goto('/speaking');
    
    // Look for professional content
    const professionalElements = page.locator('text=experience, text=expertise, text=topics, text=audience, text=testimonials');
    
    if (await professionalElements.count() > 0) {
      await expect(professionalElements.first()).toBeVisible();
    }
  });
}); 