// Prebuilt, two-way connectors that ingest and normalize signals from the GTM stack.
// Placeholder registry for the demo scaffold.

export const connectors = {
  salesforce: { kind: "crm", direction: "two-way" },
  hubspot: { kind: "crm", direction: "two-way" },
  zendesk: { kind: "support", direction: "two-way" },
  intercom: { kind: "support", direction: "two-way" },
  gong: { kind: "conversation", direction: "read" },
  segment: { kind: "product-usage", direction: "read" },
  snowflake: { kind: "warehouse", direction: "read" },
  slack: { kind: "surface", direction: "two-way" },
};
