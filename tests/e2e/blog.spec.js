// tests/e2e/blog.spec.js
const { test, expect } = require('@playwright/test');

const EXPECTED_MIN_POSTS = 1;

test.describe('Blog Functionality', () => {
  test('blog index page should load with content', async ({ page }) => {
    await page.goto('/blog');

    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);

    const blogPosts = page.locator('main article');
    await expect(blogPosts.first()).toBeVisible();
    const count = await blogPosts.count();
    expect(count).toBeGreaterThanOrEqual(EXPECTED_MIN_POSTS);
  });

  test('blog posts should be accessible and readable', async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('main')).toBeVisible();
    await page.waitForSelector('main a[href^="/blog/"]', { timeout: 15000 });

    const postLinks = page.locator('main a[href^="/blog/"]');
    const linkCount = await postLinks.count();
    expect(linkCount).toBeGreaterThanOrEqual(EXPECTED_MIN_POSTS);

    const firstPostLink = postLinks.first();
    const href = await firstPostLink.getAttribute('href');
    expect(href).toBeTruthy();

    await page.goto(href);

    await expect(page.locator('main h1').first()).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('main h1').first()).not.toHaveText(/404/i);

    const article = page.locator('main article');
    await expect(article).toBeVisible();

    const backToBlog = page.locator('a[href="/blog"], a:has-text("Back to Blog")');
    await expect(backToBlog.first()).toBeVisible();
  });

  test('blog should have proper metadata and structure', async ({ page }) => {
    await page.goto('/blog');

    const blogContent = page.locator('main');
    await expect(blogContent).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);

    const postTitles = page.locator('main article h3');
    await expect(postTitles.first()).toBeVisible();
    expect(await postTitles.count()).toBeGreaterThanOrEqual(EXPECTED_MIN_POSTS);
  });

  test('blog page should display post cards in All Articles', async ({ page }) => {
    await page.goto('/blog');

    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1').first()).not.toHaveText(/404/i);
    await expect(page.getByRole('heading', { name: /All Articles/i })).toBeVisible();

    const postCards = page.locator('main article');
    await expect(postCards.first()).toBeVisible();
    expect(await postCards.count()).toBeGreaterThanOrEqual(EXPECTED_MIN_POSTS);
  });

  test('blog index should have at least one post from content pipeline', async ({ page }) => {
    await page.goto('/blog');
    const articles = page.locator('main article');
    await expect(articles.first()).toBeVisible();
    const count = await articles.count();
    expect(count).toBeGreaterThanOrEqual(EXPECTED_MIN_POSTS);
  });

  test('known post slug career-transition-optconnect should load with expected title', async ({ page }) => {
    await page.goto('/blog/career-transition-optconnect');
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('h1').first()).toContainText(/OptConnect|Transition/i);
    await expect(page.locator('main')).toBeVisible();
  });

  test('blog shows exactly one ZAG Matrix sidebar in main content', async ({ page }) => {
    await page.goto('/blog');
    const sidebarTitles = page
      .locator('main')
      .getByRole('heading', { name: 'The ZAG Matrix', exact: true });
    await expect(sidebarTitles).toHaveCount(1);
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
