// tests/e2e/pageObjects/HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;
    this.blogLink = page.locator('nav a[href="/blog"]');
    this.aboutLink = page.locator('nav a[href="/about"]');
    this.contactLink = page.locator('nav a[href="/contact"]');
    this.heroBlogCta = page.getByRole('link', { name: /Read the blog/i });
  }

  async goto() {
    await this.page.goto('/');
  }

  async goToBlog() {
    await this.blogLink.first().click();
  }

  async goToAbout() {
    await this.aboutLink.first().click();
  }

  async goToContact() {
    await this.contactLink.first().click();
  }

  async clickHeroBlogCta() {
    await this.heroBlogCta.first().click();
  }
}

module.exports = { HomePage };
