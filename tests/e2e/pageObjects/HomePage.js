// tests/e2e/pageObjects/HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;
    this.newsletterInput = page.locator('[data-testid="newsletter-email"]');
    this.newsletterSubmit = page.locator('[data-testid="newsletter-submit"]');
    this.successMessage = page.locator('[data-testid="newsletter-success"]');
    this.errorMessage = page.locator('[data-testid="newsletter-error"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async subscribe(email) {
    await this.newsletterInput.fill(email);
    await this.newsletterSubmit.click();
  }
}

module.exports = { HomePage }; 