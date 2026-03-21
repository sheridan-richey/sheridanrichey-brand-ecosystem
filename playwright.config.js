// playwright.config.js
// @ts-check
const { defineConfig } = require('@playwright/test');

// Default to local so "npm run dev" + "npm run test:e2e" validates the app under development.
// For production runs: BASE_URL=https://sheridanrichey.com
module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    headless: true,
    trace: 'on-first-retry',
  },
  testDir: './tests/e2e',
}); 