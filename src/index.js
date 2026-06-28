// Throughline core entrypoint.
// Boots the connector layer, hydrates the customer graph, and starts the agent loop.

import { CustomerGraph } from "./graph.js";
import { AgentRuntime } from "./agents/runtime.js";

export function start(config = {}) {
  const graph = new CustomerGraph(config.graph);
  const runtime = new AgentRuntime({ graph, playbooks: config.playbooks });

  graph.hydrate();
  runtime.start();

  return { graph, runtime };
}
