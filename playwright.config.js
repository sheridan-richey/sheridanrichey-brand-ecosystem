// playwright.config.js
// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'https://sheridanrichey.com',
    headless: true,
    trace: 'on-first-retry',
  },
  testDir: './tests/e2e',
}); 