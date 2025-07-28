// tests/e2e/pageObjects/BlogPage.js
class BlogPage {
  constructor(page) {
    this.page = page;
    
    // Page structure
    this.mainContent = page.locator('main');
    this.pageTitle = page.locator('h1');
    
    // Blog posts
    this.blogPosts = page.locator('article, [data-testid="blog-post"], .blog-post');
    this.postLinks = page.locator('a[href*="/blog/"]');
    this.postTitles = page.locator('h2, h3, [data-testid="post-title"]');
    
    // Category filters
    this.categoryLinks = page.locator('a[href*="category"], a[href*="tag"], button:has-text("ZEN"), button:has-text("ACT"), button:has-text("GEM")');
    
    // Navigation
    this.backToBlogLink = page.locator('a[href="/blog"], a:has-text("Back to Blog")');
  }

  async goto() {
    await this.page.goto('/blog');
  }

  async gotoPost(postUrl) {
    await this.page.goto(postUrl);
  }

  async getPostCount() {
    return await this.blogPosts.count();
  }

  async getPostLinkCount() {
    return await this.postLinks.count();
  }

  async clickFirstPost() {
    if (await this.postLinks.count() > 0) {
      await this.postLinks.first().click();
    }
  }

  async clickCategoryFilter(categoryName) {
    const categoryLink = this.page.locator(`button:has-text("${categoryName}"), a:has-text("${categoryName}")`);
    if (await categoryLink.count() > 0) {
      await categoryLink.first().click();
    }
  }

  async getCategoryCount() {
    return await this.categoryLinks.count();
  }

  async clickBackToBlog() {
    if (await this.backToBlogLink.count() > 0) {
      await this.backToBlogLink.first().click();
    }
  }

  async getPageTitle() {
    return await this.pageTitle.textContent();
  }

  async waitForPostsToLoad() {
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = { BlogPage }; 