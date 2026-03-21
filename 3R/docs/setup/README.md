# Setup guides (`3R/docs/setup/`)

Operational how-tos for integrations and one-off onboarding. **Enforceable policy** lives in [`.cursor/rules/testing-deployment.mdc`](../../../.cursor/rules/testing-deployment.mdc), [`.cursor/rules/content-strategy.mdc`](../../../.cursor/rules/content-strategy.mdc), and [AGENTS.md](../../../AGENTS.md).

| File | Role | Audit note (2026-03-20) |
|------|------|-------------------------|
| [deployment-guide.md](deployment-guide.md) | Vercel / local deploy checklist | Keep as walkthrough; **authority** blockquote at top defers to `testing-deployment.mdc` + AGENTS. |
| [beehiiv-setup.md](beehiiv-setup.md) | Beehiiv + env steps | Keep; **authority** blockquote defers to `website/.env.example`, rules, AGENTS. |
| [environment-setup.md](environment-setup.md) | Slack automation env vars | **Legacy/supplementary**; may not match current automation. Header explains scope. |
| [email-customization-checklist.md](email-customization-checklist.md) | Sean welcome email checklist | **Historical (2025)**; header points to collaboration + agentic workflow rules and Issues. |

When a guide drifts from CI, Vercel, or env reality, update the guide **and** the canonical `.mdc` rule in the same PR when feasible.
