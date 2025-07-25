# Project Rules & Standards

## E2E Testing
- **Playwright** is the standard tool for all end-to-end (E2E) testing.
- All critical user workflows (newsletter signup, contact form, blog navigation, etc.) must have E2E test coverage.
- Use the **Page Object Model (POM)** for maintainable test code.
- All interactive elements and form fields must include `data-testid` attributes for stable selectors.
- Refer to `TESTING_STRATEGY.md` for the full E2E testing strategy, setup, and best practices.

## Development
- All new features and pages must include or update E2E tests as part of the PR process.
- E2E tests must pass in CI before merging to main.

## Documentation
- Keep `README.md` and `TESTING_STRATEGY.md` up to date with any changes to the testing approach or critical workflows. 