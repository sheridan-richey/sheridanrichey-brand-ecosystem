// tests/e2e/pageObjects/NewsletterPage.js
class NewsletterPage {
  constructor(page) {
    this.page = page;
    
    // Page structure
    this.mainContent = page.locator('main');
    this.pageTitle = page.locator('h1');
    
    // Newsletter form elements
    this.newsletterForm = page.locator('form, [data-testid="newsletter-form"], .newsletter-form');
    this.emailInput = page.locator('input[type="email"], input[name="email"], [data-testid="email-input"]');
    this.submitButton = page.locator('button[type="submit"], input[type="submit"], [data-testid="submit-button"]');
    
    // Success/error messages
    this.successMessage = page.locator('[data-testid="newsletter-success"], .success-message, text=success');
    this.errorMessage = page.locator('[data-testid="newsletter-error"], .error-message, text=error');
    
    // Newsletter content
    this.newsletterContent = page.locator('text=newsletter, text=subscribe, text=community, text=insights');
  }

  async goto() {
    await this.page.goto('/newsletter');
  }

  async fillEmail(email) {
    if (await this.emailInput.count() > 0) {
      await this.emailInput.first().fill(email);
    }
  }

  async submitForm() {
    if (await this.submitButton.count() > 0) {
      await this.submitButton.first().click();
    }
  }

  async subscribe(email) {
    await this.fillEmail(email);
    await this.submitForm();
  }

  async isFormVisible() {
    return await this.newsletterForm.count() > 0;
  }

  async getPageTitle() {
    return await this.pageTitle.textContent();
  }

  async waitForSuccessMessage() {
    if (await this.successMessage.count() > 0) {
      await this.successMessage.first().waitFor({ state: 'visible' });
    }
  }

  async waitForErrorMessage() {
    if (await this.errorMessage.count() > 0) {
      await this.errorMessage.first().waitFor({ state: 'visible' });
    }
  }

  async hasNewsletterContent() {
    return await this.newsletterContent.count() > 0;
  }
}

module.exports = { NewsletterPage }; 