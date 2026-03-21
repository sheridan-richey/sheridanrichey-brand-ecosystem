// tests/e2e/cta-functionality.spec.js
const { test, expect } = require('@playwright/test');

test.describe('CTA Functionality Across Website', () => {
  test('header newsletter CTA should work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test desktop newsletter button
    const newsletterButton = page.locator('nav a:has-text("Newsletter")');
    await expect(newsletterButton).toBeVisible();
    
    // Click and verify navigation
    await newsletterButton.click();
    await expect(page).toHaveURL(/.*newsletter/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('mobile menu newsletter CTA should work correctly', async ({ page }) => {
    // Use mobile viewport so the hamburger menu is visible
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Open mobile menu
    const mobileMenuButton = page.locator('button[aria-label="Open main menu"]');
    await mobileMenuButton.click();
    
    const mobileNewsletterButton = page.getByTestId('mobile-newsletter-link');
    await expect(mobileNewsletterButton).toBeVisible();
    
    // Click and verify navigation
    await mobileNewsletterButton.click();
    await expect(page).toHaveURL(/.*newsletter/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('footer newsletter CTA should work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Test footer newsletter link (footer uses "Newsletter" label per simplified footer)
    const footerNewsletterLink = page.locator('footer a[href="/newsletter"]');
    await expect(footerNewsletterLink).toBeVisible();
    await expect(footerNewsletterLink).toContainText('Newsletter');

    // Click and verify navigation
    await footerNewsletterLink.click();
    await expect(page).toHaveURL(/.*newsletter/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('hero section newsletter CTA should work correctly', async ({ page }) => {
    await page.goto('/');

    // Hero CTA is a link to /newsletter with text "Start Your Next Chapter + Get AI Guide"
    const heroNewsletterLink = page.locator('section a[href="/newsletter"]').filter({ hasText: /Start Your Next Chapter|Get AI Guide/ }).first();
    await expect(heroNewsletterLink).toBeVisible();

    // Click and verify navigation to newsletter page
    await heroNewsletterLink.click();
    await expect(page).toHaveURL(/.*newsletter/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('homepage CTA section should work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to CTA section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Test homepage CTA section newsletter button
    const ctaNewsletterButton = page.locator('section.bg-primary-500 a:has-text("Join the Newsletter")');
    await expect(ctaNewsletterButton).toBeVisible();
    
    // Click and verify navigation
    await ctaNewsletterButton.click();
    await expect(page).toHaveURL(/.*newsletter/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('about page newsletter CTA should work correctly', async ({ page }) => {
    await page.goto('/about');
    
    // Scroll to mission section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Test about page newsletter CTA
    const aboutNewsletterButton = page.locator('a:has-text("Join the Newsletter")');
    await expect(aboutNewsletterButton).toBeVisible();
    
    // Click and verify navigation
    await aboutNewsletterButton.click();
    await expect(page).toHaveURL(/.*newsletter/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('contact page newsletter CTA should work correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Scroll to CTA section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Test contact page newsletter CTA
    const contactNewsletterButton = page.locator('section.bg-primary-500 a:has-text("Join the Newsletter")');
    await expect(contactNewsletterButton).toBeVisible();
    
    // Click and verify navigation
    await contactNewsletterButton.click();
    await expect(page).toHaveURL(/.*newsletter/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('blog post newsletter CTA should work correctly', async ({ page }) => {
    await page.goto('/blog');
    
    // Get first blog post link
    const postLinks = page.locator('a[href*="/blog/"]');
    if (await postLinks.count() > 0) {
      const firstPostLink = postLinks.first();
      const href = await firstPostLink.getAttribute('href');
      
      if (href) {
        await page.goto(href);
        
        // Look for newsletter CTA in blog post
        const blogNewsletterCTA = page.locator('a:has-text("Join the Community")');
        if (await blogNewsletterCTA.count() > 0) {
          await expect(blogNewsletterCTA.first()).toBeVisible();
          
          // Click and verify navigation (should go to newsletter page)
          await blogNewsletterCTA.first().click();
          await expect(page).toHaveURL(/.*newsletter/);
          await expect(page.locator('h1')).toBeVisible();
        }
      }
    }
  });

  test('ZAG Matrix page newsletter CTA should work correctly', async ({ page }) => {
    await page.goto('/zag-matrix');
    
    // Look for newsletter CTA
    const zagNewsletterCTA = page.locator('a:has-text("Start Your Journey")');
    if (await zagNewsletterCTA.count() > 0) {
      await expect(zagNewsletterCTA.first()).toBeVisible();
      
      // Click and verify navigation
      await zagNewsletterCTA.first().click();
      await expect(page).toHaveURL(/.*newsletter/);
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('all newsletter CTAs should have consistent styling', async ({ page }) => {
    await page.goto('/');
    
    // Check that newsletter CTAs have consistent appearance
    const newsletterCTAs = page.locator('a:has-text("Newsletter"), button:has-text("Join Newsletter")');
    
    if (await newsletterCTAs.count() > 0) {
      for (let i = 0; i < await newsletterCTAs.count(); i++) {
        const cta = newsletterCTAs.nth(i);
        await expect(cta).toBeVisible();
        
        // Check for consistent styling classes
        const classes = await cta.getAttribute('class');
        expect(classes).toBeTruthy();
      }
    }
  });
});
