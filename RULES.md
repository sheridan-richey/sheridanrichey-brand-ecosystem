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

## Deployment
- **Model:** GitOps via Vercel. Pushing to `main` auto-deploys to production. Opening a PR creates a Vercel Preview deployment.
- **Branching:** Feature branches → PR → CI checks (build, lint, E2E) must pass → merge to `main`.
- **Environments:**
  - Preview: every PR (share links with reviewers).
  - Production: `main` only.
- **Secrets:** Managed in Vercel Project Settings → Environment Variables. No secrets in repo.
- **Rollback:** Revert the offending commit in Git (preferred) or redeploy a previous build from the Vercel dashboard.
- **CLI:** Optional. Do not use `vercel --prod` for routine deploys unless the pipeline is blocked.