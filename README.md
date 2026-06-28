# Throughline

**Agentic customer intelligence for B2B revenue teams.**

> Stop reading dashboards about the past. Start acting on what your customers are about to do.

Throughline connects every customer signal across your go-to-market stack into one
living source of truth, then puts an agent to work on it. Instead of dashboards that
report what already happened, Throughline tells you what is about to happen and acts on
it before the renewal call.

---

## Table of contents

- [The problem](#the-problem)
- [What Throughline does](#what-throughline-does)
- [Who it is for](#who-it-is-for)
- [Outcomes](#outcomes)
- [How it works](#how-it-works)
- [Use cases](#use-cases)
- [Customer story](#customer-story)
- [Why Throughline is different](#why-throughline-is-different)
- [Connectors](#connectors)
- [Quickstart](#quickstart)
- [Architecture](#architecture)
- [Security and trust](#security-and-trust)
- [Pricing](#pricing)
- [FAQ](#faq)

---

## The problem

Revenue teams are drowning in signals and starving for answers.

A single enterprise account leaves a trail across the CRM, support tickets, product
usage logs, billing events, call recordings, emails, and a dozen Slack threads. The
context exists. It is just scattered across ten tools and no single person can hold it
all in their head.

So three things keep happening:

- **Churn shows up too late.** By the time an account turns red on a dashboard, the
  decision to leave was made weeks ago.
- **CSMs spend their week as analysts.** Hours go into stitching together context for a
  single renewal call instead of actually talking to customers.
- **Expansion gets missed.** The account that just hit a usage milestone and is ready to
  buy more never gets flagged, because nobody was watching that signal.

Dashboards describe the past. Reports arrive after the moment to act has passed. The gap
is not data. The gap is acting on it in time.

## What Throughline does

Throughline unifies your customer signals and runs an always-on agent layer on top of
them:

- **Unified customer graph.** Every account, contact, and interaction lives in one
  connected model that updates in real time as new signals arrive.
- **Signal fusion.** Product usage, support sentiment, billing events, and conversation
  intelligence fuse into a single, explainable health score per account.
- **Agentic playbooks.** Define an outcome such as "save at-risk enterprise accounts" and
  the agent runs the play: it drafts the outreach, flags the right owner, and preps the
  renewal brief.
- **Reasoning you can trust.** Every recommendation shows its work. You see exactly which
  signals drove a risk flag before you act on it.
- **Acts where you work.** Briefs land in Slack, tasks land in your CRM, summaries land in
  email. There is no new dashboard to babysit.

## Who it is for

| Role | What they get |
|------|---------------|
| **VP of Customer Success** | A live view of net revenue retention risk and the playbooks that protect it. |
| **Customer Success Manager** | The context of your best CSM, auto-prepped, so every call starts informed. |
| **Revenue Operations** | One source of truth across the GTM stack, with no manual data wrangling. |
| **Account Management** | Expansion signals surfaced the day an account is ready to buy more. |
| **Chief Revenue Officer** | Earlier, explainable forecasts grounded in real customer behavior. |

Best fit: B2B SaaS companies with 50 or more accounts, a defined customer success motion,
and revenue that depends on retention and expansion.

## Outcomes

What teams report after rolling out Throughline:

- **Catch churn 6 to 8 weeks earlier** by acting on leading signals instead of lagging
  reports.
- **Cut renewal prep from hours to minutes** with auto-generated account briefs.
- **Recover 1 in 4 at-risk accounts** that would otherwise have gone quiet.
- **Give every CSM the context of your best CSM**, without the manual research.
- **Lift net revenue retention** by catching expansion moments while they are still open.

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

The agent runs continuously. As signals change, it re-evaluates every account and
triggers the playbooks that match. Your team wakes up to prepped work, not a backlog of
data to read.

## Use cases

- **Churn prevention.** Detect declining accounts early and run a structured save play
  before the renewal is at risk.
- **Expansion detection.** Surface accounts hitting usage milestones and draft the upsell
  while the moment is open.
- **Onboarding rescue.** Flag new accounts that stalled during activation and re-engage
  them before they churn in month one.
- **Renewal automation.** Auto-generate a full account brief 30 days before every renewal,
  with the signals and talking points already pulled together.
- **QBR prep.** Build a quarterly business review deck from live account data in minutes
  instead of days.

## Customer story

> "We were managing 400 accounts with a team of six. We knew churn was happening before
> the data showed it, but we could never get ahead of it. With Throughline, our CSMs walk
> into every renewal already knowing the story. We caught three enterprise saves in the
> first quarter that would have walked. It paid for itself before the first QBR."
>
> — VP of Customer Success, mid-market SaaS (illustrative)

## Why Throughline is different

| | Legacy CS tools | BI dashboards | **Throughline** |
|---|---|---|---|
| View of the customer | Siloed by source | Siloed by report | Unified graph |
| Timing | Lagging | Lagging | **Leading** |
| Output | Alerts | Charts | **Prepped work and actions** |
| Reasoning | Black box | Manual | **Explainable** |
| Effort to act | High | High | **The agent does the first draft** |

Most tools tell you something is wrong. Throughline tells you why, then does the first
draft of the fix.

## Connectors

Prebuilt, two-way connectors for the tools revenue teams already run on:

- **CRM:** Salesforce, HubSpot
- **Support:** Zendesk, Intercom
- **Conversation intelligence:** Gong, Chorus
- **Product and data:** Segment, Snowflake
- **Surfaces:** Slack, Gmail, Outlook

New connectors ship every month. Need one that is not listed? The connector SDK lets you
build your own.

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

## Security and trust

- SOC 2 Type II and GDPR compliant.
- Customer data stays in your region. Bring-your-own-key encryption supported.
- Every agent action is logged, explainable, and reversible.
- Role-based access control and full audit trail out of the box.

## Pricing

Throughline is priced per connected account, not per seat, so your whole team gets context
without per-user math.

| Plan | For | Includes |
|------|-----|----------|
| **Growth** | Teams getting started | Core connectors, customer graph, built-in playbooks |
| **Scale** | Established CS orgs | Custom playbooks, conversation intelligence, advanced scoring |
| **Enterprise** | Large GTM teams | SSO, regional data residency, custom connectors, dedicated support |

[Talk to sales](#) for a tailored plan.

## FAQ

**How long does setup take?**
Most teams connect their first sources and see a populated customer graph the same day.

**Does the agent act without approval?**
You choose. Playbooks can run in suggest mode, where the agent drafts and waits for a
human, or in auto mode for trusted plays.

**Where does our data live?**
In your region, with bring-your-own-key encryption available on Enterprise.

**Will it replace our CSMs?**
No. It removes the analyst work so your CSMs spend their time with customers.

---

## License

MIT © Throughline
