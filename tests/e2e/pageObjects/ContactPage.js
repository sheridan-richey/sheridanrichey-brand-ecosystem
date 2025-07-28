// tests/e2e/pageObjects/ContactPage.js
class ContactPage {
  constructor(page) {
    this.page = page;
    
    // Page structure
    this.mainContent = page.locator('main');
    this.pageTitle = page.locator('h1');
    
    // Contact form elements
    this.contactForm = page.locator('form, [data-testid="contact-form"], .contact-form');
    this.nameInput = page.locator('input[name="name"], input[name="firstName"], [data-testid="name-input"]');
    this.emailInput = page.locator('input[name="email"], input[type="email"], [data-testid="email-input"]');
    this.messageInput = page.locator('textarea[name="message"], textarea, [data-testid="message-input"]');
    this.submitButton = page.locator('button[type="submit"], input[type="submit"], [data-testid="submit-button"]');
    
    // Contact information elements
    this.contactInfo = page.locator('a[href^="mailto:"], a[href^="tel:"], .contact-info, .contact-details');
    
    // Form validation elements
    this.requiredFields = page.locator('input[required], textarea[required], [aria-required="true"]');
    
    // Success/error messages
    this.successMessage = page.locator('[data-testid="contact-success"], .success-message, text=success');
    this.errorMessage = page.locator('[data-testid="contact-error"], .error-message, text=error');
  }

  async goto() {
    await this.page.goto('/contact');
  }

  async fillForm({ name, email, message }) {
    if (await this.nameInput.count() > 0) {
      await this.nameInput.first().fill(name);
    }
    if (await this.emailInput.count() > 0) {
      await this.emailInput.first().fill(email);
    }
    if (await this.messageInput.count() > 0) {
      await this.messageInput.first().fill(message);
    }
  }

  async submitForm() {
    if (await this.submitButton.count() > 0) {
      await this.submitButton.first().click();
    }
  }

  async getRequiredFieldCount() {
    return await this.requiredFields.count();
  }

  async isFormVisible() {
    return await this.contactForm.count() > 0;
  }

  async isContactInfoVisible() {
    return await this.contactInfo.count() > 0;
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
}

module.exports = { ContactPage }; 