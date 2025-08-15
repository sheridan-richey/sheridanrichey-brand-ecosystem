// tests/e2e/pageObjects/HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;
    
    // Navigation elements
    this.nav = page.locator('nav');
    this.navLinks = page.locator('nav a[href]');
    this.newsletterButton = page.locator('nav a:has-text("Newsletter")');
    this.mobileMenuButton = page.locator('button[aria-label="Open main menu"]');
    this.mobileMenu = page.locator('.lg\\:hidden.fixed');
    this.mobileCloseButton = page.locator('button[aria-label="Close menu"]');
    
    // Hero section
    this.heroSection = page.locator('text=Sheridan, text=ZAG Matrix, text=Awakened Technologist');
    
    // ZAG Matrix section
    this.zagMatrixSection = page.locator('text=ZEN, text=ACT, text=GEM');
    
    // Latest Insights section
    this.latestInsightsSection = page.locator('text=Latest, text=Insights, text=Blog');
    
    // CTA sections
    this.newsletterCTA = page.locator('a[href="/newsletter"], a:has-text("Join"), a:has-text("Newsletter")');
    this.contactCTA = page.locator('a[href="/contact"], a:has-text("Contact"), a:has-text("Let\'s Talk")');
    
    // Page structure
    this.mainContent = page.locator('main');
    this.pageTitle = page.locator('h1');
  }

  async goto() {
    await this.page.goto('/');
  }

  async openMobileMenu() {
    await this.mobileMenuButton.click();
  }

  async closeMobileMenu() {
    await this.mobileCloseButton.click();
  }

  async clickNewsletterButton() {
    await this.newsletterButton.click();
  }

  async clickNewsletterCTA() {
    if (await this.newsletterCTA.count() > 0) {
      await this.newsletterCTA.first().click();
    }
  }

  async clickContactCTA() {
    if (await this.contactCTA.count() > 0) {
      await this.contactCTA.first().click();
    }
  }

  async getNavLinkCount() {
    return await this.navLinks.count();
  }

  async isMobileMenuVisible() {
    return await this.mobileMenu.isVisible();
  }

  async getPageTitle() {
    return await this.pageTitle.textContent();
  }
}

module.exports = { HomePage }; 