// playwright.config.js
// @ts-check
const path = require('path');
const { defineConfig } = require('@playwright/test');

// Dedicated port for Playwright webServer so it does not collide with a normal `next dev` on 3000.
const e2ePort = process.env.E2E_PORT || '3100';
const localBase = `http://localhost:${e2ePort}`;

// Default to local so "npm run dev" + "npm run test:e2e" validates the app under development.
// For production runs: BASE_URL=https://sheridanrichey.com
module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || localBase,
    headless: true,
    trace: 'on-first-retry',
  },
  testDir: './tests/e2e',
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: `npx next dev -p ${e2ePort}`,
        cwd: path.join(__dirname, 'website'),
        url: localBase,
        reuseExistingServer: true,
        timeout: 120000,
      },
});
