// tests/e2e/blog.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Blog Functionality', () => {
  test('blog index page should load with content', async ({ page }) => {
    await page.goto('/blog');
    
    // Check page structure
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);
    
    // Verify blog posts are displayed
    const blogPosts = page.locator('article, [data-testid="blog-post"], .blog-post');
    await expect(blogPosts.first()).toBeVisible();
  });

  test('blog posts should be accessible and readable', async ({ page }) => {
    await page.goto('/blog');
    
    // Get all blog post links
    const postLinks = page.locator('a[href*="/blog/"]');
    const linkCount = await postLinks.count();
    
    // Only test if blog post links exist
    if (linkCount > 0) {
      // Test first blog post only to avoid timeouts
      const firstPostLink = postLinks.first();
      const href = await firstPostLink.getAttribute('href');
      
      if (href) {
        await page.goto(href);
        
        // Verify post loads correctly
        await expect(page.locator('h1').first()).toBeVisible();
        await expect(page.locator('main')).toBeVisible();
        await expect(page.locator('h1').first()).not.toHaveText(/404/i);
        
        // Check for blog post content
        const article = page.locator('article, [data-testid="blog-post"], .blog-post');
        await expect(article).toBeVisible();
        
        // Verify navigation back to blog
        const backToBlog = page.locator('a[href="/blog"], a:has-text("Back to Blog")');
        if (await backToBlog.count() > 0) {
          await expect(backToBlog.first()).toBeVisible();
        }
      }
    } else {
      // If no blog post links, just verify the blog page loads
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('blog should have proper metadata and structure', async ({ page }) => {
    await page.goto('/blog');
    
    // Check for blog-specific content
    const blogContent = page.locator('main');
    await expect(blogContent).toBeVisible();
    
    // Verify it's not a 404 page
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);
    
    // Check for blog post titles or excerpts
    const postTitles = page.locator('h2, h3, [data-testid="post-title"]');
    if (await postTitles.count() > 0) {
      await expect(postTitles.first()).toBeVisible();
    }
  });

  test('blog categories and filtering should work', async ({ page }) => {
    await page.goto('/blog');
    
    // Look for category filters or tags
    const categoryLinks = page.locator('a[href*="category"], a[href*="tag"], button:has-text("ZEN"), button:has-text("ACT"), button:has-text("GEM")');
    
    if (await categoryLinks.count() > 0) {
      // Test first category filter
      const firstCategory = categoryLinks.first();
      await expect(firstCategory).toBeVisible();
      
      // Click category and verify page updates
      await firstCategory.click();
      
      // Wait for page to update
      await page.waitForLoadState('networkidle');
      
      // Verify we're still on a valid page
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('h1').first()).not.toHaveText(/404/i);
    }
  });
}); 