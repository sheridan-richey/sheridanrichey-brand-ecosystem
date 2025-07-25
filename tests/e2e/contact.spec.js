// tests/e2e/contact.spec.js
const { test, expect } = require('@playwright/test');
const { ContactPage } = require('./pageObjects/ContactPage');

test.describe('Contact Form', () => {
  test('should submit with valid data', async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.goto();
    await contact.fillForm({
      firstName: 'Sheridan',
      lastName: 'Richey',
      email: 'sheridan@example.com',
      message: 'Hello, this is a test!'
    });
    await contact.submitForm();
    await expect(contact.success).toBeVisible();
  });

  test('should show error if email is empty', async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.goto();
    await contact.fillForm({
      firstName: 'Sheridan',
      lastName: 'Richey',
      email: '',
      message: 'Missing email!'
    });
    await contact.submitForm();
    await expect(contact.error).toHaveText(/email is required/i);
  });
}); 