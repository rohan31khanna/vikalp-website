/**
 * IntelliFlow Workflow
 *
 * Represents the visitor journey.
 * Independent from the legal knowledge graph.
 */

export type WorkflowStep =
  | "question"
  | "preparation"
  | "request"
  | "success";