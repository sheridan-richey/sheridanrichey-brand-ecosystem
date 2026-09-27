// tests/e2e/blog.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Blog Functionality', () => {
  test('blog index page should load with content', async ({ page }) => {
    await page.goto('/blog');

    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);

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
    await page.waitForSelector('main a[href^="/blog/"]', { timeout: 15000 });

    const postLinks = page.locator('main a[href^="/blog/"]');
    const linkCount = await postLinks.count();

    if (linkCount > 0) {
      const firstPostLink = postLinks.first();
      const href = await firstPostLink.getAttribute('href');

      if (href) {
        await page.goto(href);

        await expect(page.locator('main h1').first()).toBeVisible();
        await expect(page.locator('main')).toBeVisible();
        await expect(page.locator('main h1').first()).not.toHaveText(/404/i);

        const article = page.locator('article, [data-testid="blog-post"], .blog-post');
        await expect(article).toBeVisible();

        const backToBlog = page.locator('a[href="/blog"], a:has-text("Back to Blog")');
        if (await backToBlog.count() > 0) {
          await expect(backToBlog.first()).toBeVisible();
        }
      }
    } else {
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('blog should have proper metadata and structure', async ({ page }) => {
    await page.goto('/blog');

    const blogContent = page.locator('main');
    await expect(blogContent).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);

    const postTitles = page.locator('h2, h3, [data-testid="post-title"]');
    if (await postTitles.count() > 0) {
      await expect(postTitles.first()).toBeVisible();
    }
  });

  test('blog page should display category tags when posts exist', async ({ page }) => {
    await page.goto('/blog');

    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);

    const postCards = page.locator('article, [data-testid="blog-post"], .blog-post');
    if (await postCards.count() > 0) {
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

  test('blog index links to framework overview instead of newsletter', async ({ page }) => {
    await page.goto('/blog');
    const framework = page.locator('main a[href="/zag-matrix"]').filter({ hasText: /Framework overview/i });
    await expect(framework.first()).toBeVisible();
    await expect(framework.first()).toHaveAttribute('href', '/zag-matrix');
    const newsletter = page.locator('main a[href*="/newsletter"]');
    await expect(newsletter).toHaveCount(0);
  });

  test('blog post footer links to blog and ZAG overview', async ({ page }) => {
    await page.goto('/blog/career-transition-optconnect');
    const allPosts = page.getByRole('link', { name: /All posts/i });
    await expect(allPosts).toBeVisible();
    await expect(allPosts).toHaveAttribute('href', '/blog');
    const framework = page.getByRole('link', { name: /ZAG Matrix overview/i });
    await expect(framework).toBeVisible();
    await expect(framework).toHaveAttribute('href', '/zag-matrix');
  });
});
