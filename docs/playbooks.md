# Playbooks

Playbooks are how you put Throughline's agent to work. You define the outcome; the agent
runs the play against the customer graph.

## Anatomy of a playbook

```yaml
name: at-risk-enterprise
when:
  segment: enterprise
  health_score: below 60
  trend: declining
do:
  - draft_outreach: renewal_save
  - assign_owner: account_csm
  - prep_brief: renewal
  - notify: slack#cs-enterprise
```

## Built-in playbooks

- **at-risk-enterprise** — Detect declining enterprise accounts and prep a save play.
- **expansion-ready** — Surface accounts hitting usage milestones and draft an upsell.
- **onboarding-stalled** — Flag new accounts that stopped activating and re-engage.
- **renewal-brief** — Auto-generate a full account brief 30 days before renewal.

Every playbook run is logged with the signals that triggered it, so your team can see the
reasoning before acting.
