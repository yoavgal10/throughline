// Agent Layer: runs playbooks against the customer graph, drafts work, takes action.
// Placeholder runtime for the demo scaffold.

export class AgentRuntime {
  constructor({ graph, playbooks = [] }) {
    this.graph = graph;
    this.playbooks = playbooks;
  }

  start() {
    // Subscribe to graph changes and trigger matching playbooks.
  }

  run(playbookName) {
    // Execute a single playbook end to end and surface the result.
    return { playbook: playbookName, actions: [] };
  }
}
