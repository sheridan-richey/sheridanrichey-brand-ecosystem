// tests/e2e/pageObjects/ContactPage.js
class ContactPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('[data-testid="contact-first-name"]');
    this.lastName = page.locator('[data-testid="contact-last-name"]');
    this.email = page.locator('[data-testid="contact-email"]');
    this.message = page.locator('[data-testid="contact-message"]');
    this.submit = page.locator('[data-testid="contact-submit"]');
    this.success = page.locator('[data-testid="contact-success"]');
    this.error = page.locator('[data-testid="contact-error"]');
  }

  async goto() {
    await this.page.goto('/contact');
  }

  async fillForm({ firstName, lastName, email, message }) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.message.fill(message);
  }

  async submitForm() {
    await this.submit.click();
  }
}

module.exports = { ContactPage }; 