# Throughline

**Agentic customer intelligence for B2B revenue teams.**

Throughline connects every customer signal across your go-to-market stack into one
living source of truth, then puts an agent to work on it. Instead of dashboards that
tell you what already happened, Throughline tells you what is about to happen and acts
on it before the renewal call.

---

## The problem

Revenue teams are drowning in signals and starving for answers.

Customer context is scattered across the CRM, support tickets, product usage, call
recordings, emails, and a dozen Slack channels. By the time a CSM stitches it together,
the deal has already slipped or the account has already churned. Dashboards report the
past. Nobody has time to act on the present.

## What Throughline does

Throughline unifies those signals and runs an always-on agent layer on top of them:

- **Unified customer graph** — Every account, contact, and interaction in one connected
  model that updates in real time as new signals arrive.
- **Signal fusion** — Product usage, support sentiment, billing events, and conversation
  intelligence are fused into a single, explainable health score per account.
- **Agentic playbooks** — Define an outcome ("save at-risk enterprise accounts") and let
  the agent run the play: draft the outreach, flag the right owner, and prep the renewal
  brief.
- **Reasoning you can trust** — Every recommendation shows its work. See exactly which
  signals drove a risk flag before you act on it.
- **Acts where you work** — Pushes briefs to Slack, tasks to your CRM, and summaries to
  email. No new dashboard to babysit.

## Why it matters

- **Catch churn 6-8 weeks earlier** by acting on leading signals instead of lagging
  reports.
- **Give every CSM the context of your best CSM** without the manual research.
- **Cut renewal prep from hours to minutes** with auto-generated account briefs.

---

## How it works

```
   ┌──────────────┐     ┌──────────────────┐     ┌────────────────────┐
   │  Connectors  │────▶│  Customer Graph  │────▶│   Agent Layer      │
   │  CRM, usage, │     │  unified, real-  │     │  playbooks, briefs │
   │  support, ✉  │     │  time, explainable│     │  outreach, actions │
   └──────────────┘     └──────────────────┘     └────────────────────┘
```

1. **Connect** your sources in minutes with prebuilt connectors.
2. **Fuse** every signal into the customer graph with an explainable health score.
3. **Act** through agentic playbooks that draft, flag, and prep work for your team.

## Connectors

Prebuilt, two-way connectors for the tools revenue teams already run on:

- Salesforce, HubSpot
- Zendesk, Intercom
- Gong, Chorus
- Segment, Snowflake
- Slack, Gmail, Outlook

## Quickstart

```bash
# Install the CLI
npm install -g @throughline/cli

# Authenticate to your workspace
throughline login

# Connect your first source
throughline connect salesforce

# Run a playbook
throughline play run at-risk-enterprise
```

## Architecture

| Layer | What it does |
|-------|--------------|
| Connectors | Ingest and normalize signals from your stack |
| Customer Graph | Unified, real-time model of every account |
| Signal Fusion | Explainable health scoring across signal types |
| Agent Layer | Runs playbooks, drafts work, takes action |
| Surfaces | Slack, CRM, and email where your team works |

## Security & trust

- SOC 2 Type II and GDPR compliant.
- Customer data stays in your region; bring-your-own-key encryption supported.
- Every agent action is logged, explainable, and reversible.

## Pricing

Throughline is priced per connected account, not per seat, so your whole team gets
context without per-user math. [Talk to sales](#) for enterprise plans.

---

## License

MIT © Throughline
