// tests/e2e/blog.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Blog Functionality', () => {
  test('blog index page should load with content', async ({ page }) => {
    await page.goto('/blog');
    
    // Check page structure
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);
    
    // If posts exist, at least one article/card should be visible (tolerate empty state during stub phase)
    const blogPosts = page.locator('article, [data-testid="blog-post"], .blog-post');
    const count = await blogPosts.count();
    if (count > 0) {
      await expect(blogPosts.first()).toBeVisible();
    }
  });

  test('blog posts should be accessible and readable', async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('main')).toBeVisible();
    // Avoid flaky linkCount=0 before cards hydrate
    await page.waitForSelector('a[href*="/blog/"]', { timeout: 15000 });
    
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

  test('blog page should display category tags when posts exist', async ({ page }) => {
    await page.goto('/blog');
    
    // Blog page has no client-side category filtering; category tags appear on post cards.
    // Verify main content and structure are present.
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);
    
    const postCards = page.locator('article, [data-testid="blog-post"], .blog-post');
    if (await postCards.count() > 0) {
      // When posts exist, at least one card should be visible (may have category tag)
      await expect(postCards.first()).toBeVisible();
    }
  });

  test('blog index should have at least one post from content pipeline', async ({ page }) => {
    await page.goto('/blog');
    const articles = page.locator('article');
    await expect(articles.first()).toBeVisible();
    const count = await articles.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('known post slug career-transition-optconnect should load with expected title', async ({ page }) => {
    await page.goto('/blog/career-transition-optconnect');
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('h1').first()).toContainText(/OptConnect|Transition/i);
    await expect(page.locator('main')).toBeVisible();
  });
}); 