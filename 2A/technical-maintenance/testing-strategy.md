# Automated E2E Testing Strategy for sheridanrichey.com (Next.js on Vercel)

## 1. Executive Summary

To ensure the reliability and quality of sheridanrichey.com—especially the critical newsletter and contact forms, as well as the MDX-powered blog—I recommend implementing a robust, scalable end-to-end (E2E) test suite using **Playwright**. Playwright offers superior speed, reliability, and debugging tools for modern Next.js applications, and integrates seamlessly with Vercel’s Preview Deployments and GitHub Actions for CI/CD. This strategy will enable rapid iteration with confidence, catch regressions before they reach production, and provide a foundation for future scalability.

---

## 2. Recommended Tooling: Playwright for Next.js

**Why Playwright?**
- **Modern, Fast, and Reliable:** Playwright is built for speed and reliability, with auto-waiting APIs that reduce flakiness.
- **Trace Viewer:** Powerful debugging with full step-by-step traces and video replays.
- **Multi-Browser Support:** Test across Chromium, Firefox, and WebKit.
- **First-Class CI/CD Integration:** Works out-of-the-box with GitHub Actions and Vercel Preview URLs.
- **Page Object Model (POM):** Encourages maintainable, scalable test code.
- **Superior to Cypress for Next.js/Vercel:** Playwright’s handling of async navigation, network conditions, and its headless mode are more robust for modern SSR/ISR/SSG sites.

**JavaScript as the Test Language:**
- Playwright supports both JavaScript and TypeScript. JavaScript is an excellent choice for rapid iteration and broad compatibility.
- All code examples below use JavaScript.

---

## 3. Project Setup and Structure

**Install Playwright in your Next.js repo:**
```sh
# From your project root
npm install --save-dev @playwright/test
npx playwright install
```

**Initialize Playwright (creates config and example tests):**
```sh
npx playwright test init
```

**Recommended Directory Structure:**
```
/tests
  /e2e
    /pageObjects
      HomePage.js
      NewsletterPage.js
      ContactPage.js
      BlogPage.js
    newsletter.spec.js
    contact.spec.js
    blog.spec.js
    links.spec.js
  /utils
    linkChecker.js
/playwright.config.js
```
- **/tests/e2e/pageObjects/**: Encapsulate selectors and actions for each page (POM).
- **/tests/e2e/**: E2E test specs.
- **/tests/utils/**: Shared helpers (e.g., link checker).

---

## 4. Core Testing Strategy & Code Examples

### a. Page Object Model Setup

**Example: `HomePage.js`**
```js
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
```

---

### b. Critical Workflow: "Join my community" Form

**Test: `newsletter.spec.js`**
```js
// tests/e2e/newsletter.spec.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pageObjects/HomePage');

test.describe('Newsletter Signup', () => {
  test('should allow valid email signup', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.subscribe('testuser@example.com');
    await expect(home.successMessage).toBeVisible();
  });

  test('should show error for invalid email', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.subscribe('not-an-email');
    await expect(home.errorMessage).toHaveText(/invalid email/i);
  });
});
```

---

### c. Critical Workflow: "Contact Me" Form

**Page Object: `ContactPage.js`**
```js
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
```

**Test: `contact.spec.js`**
```js
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
```

---

### d. General Link & Blog Validation

**Link Checker Utility: `linkChecker.js`**
```js
// tests/utils/linkChecker.js
async function getAllLinks(page) {
  return await page.$$eval('a[href]', links =>
    links.map(link => link.href).filter(href => !href.startsWith('mailto:'))
  );
}

module.exports = { getAllLinks };
```

**Test: `links.spec.js`**
```js
// tests/e2e/links.spec.js
const { test, expect } = require('@playwright/test');
const { getAllLinks } = require('../utils/linkChecker');

test('all main page links should not return 404', async ({ page }) => {
  await page.goto('/');
  const links = await getAllLinks(page);

  for (const link of links) {
    const response = await page.goto(link);
    expect(response.status()).toBeLessThan(400);
  }
});
```

**Blog Rendering Test: `blog.spec.js`**
```js
// tests/e2e/blog.spec.js
const { test, expect } = require('@playwright/test');

test('blog index and posts render', async ({ page }) => {
  await page.goto('/blog');
  await expect(page.locator('h1')).toHaveText(/blog/i);

  // Click first blog post
  const firstPost = page.locator('a[data-testid="blog-post-link"]').first();
  await firstPost.click();
  await expect(page.locator('article')).toBeVisible();
  await expect(page.locator('h1')).not.toHaveText(/404/i);
});
```

---

## 5. Vercel CI/CD Integration

**Recommended: Use Vercel’s GitHub Integration for Preview Deployments.**

- Each PR triggers a Vercel Preview Deployment.
- The deployment URL is available as a GitHub deployment environment variable.

**GitHub Actions Workflow: `.github/workflows/playwright.yml`**
```yaml
name: Playwright E2E Tests

on:
  pull_request:
    branches: [main]

jobs:
  e2e:
    runs-on: ubuntu-latest
    timeout-minutes: 15

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Get Vercel Preview URL
        id: vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          scope: production
          vercel-args: '--prod' # Remove if you want preview only

      - name: Run Playwright tests
        env:
          BASE_URL: ${{ steps.vercel.outputs.preview-url }}
        run: npx playwright test --project=chromium
```
- **Note:** You’ll need to set `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` as GitHub secrets.
- If you use Vercel’s native GitHub integration, you can also fetch the preview URL from the deployment status API.

---

## 6. Best Practices for Next.js Testing

- **Stable Selectors:**  
  Use `data-testid` attributes in your JSX for all interactive elements and form fields.
  ```jsx
  // Example: Newsletter form input
  <input data-testid="newsletter-email" ... />
  <button data-testid="newsletter-submit">Join</button>
  <div data-testid="newsletter-success">Thank you!</div>
  <div data-testid="newsletter-error">Invalid email</div>
  ```

- **Environment Variables:**  
  Use `process.env.BASE_URL` or similar in your Playwright config to point tests at the correct deployment (local, preview, or prod).
  ```js
  // playwright.config.js
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  }
  ```

- **Test Data Hygiene:**  
  For preview environments, it’s generally safe to submit real data. For production, consider stubbing/mocking or using test accounts.

- **Blog/Contentlayer Testing:**  
  Add `data-testid="blog-post-link"` to blog post links for stable navigation in tests.

- **Trace Viewer:**  
  On test failure, Playwright can generate a trace for debugging:
  ```sh
  npx playwright show-trace trace.zip
  ```

---

## 7. PARA Category & Suggested Filename

- **PARA Category:** Project (Active, foundational to site quality and reliability)
- **Suggested Filename:** `TESTING_STRATEGY.md` 