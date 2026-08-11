import { nodes } from "@/data/legalNavigator/nodes";
import type {
  NavigatorNode,
  NavigatorOption,
  QuestionNode,
  RecommendationNode,
} from "@/types/legalNavigator";

/**
 * ==========================================================
 * IntelliFlow Workflow Engine
 * ----------------------------------------------------------
 * Pure business logic.
 *
 * No React.
 * No UI.
 * No Tailwind.
 *
 * This module is responsible only for navigating
 * through a Guided Discovery workflow.
 * ==========================================================
 */

export const START_NODE_ID = "start";

/**
 * Returns a node by id.
 */
export function getNode(nodeId: string): NavigatorNode {
  const node = nodes[nodeId];

  if (!node) {
    throw new Error(`Navigator node "${nodeId}" not found.`);
  }

  return node;
}

/**
 * Type Guard
 */
export function isQuestionNode(
  node: NavigatorNode
): node is QuestionNode {
  return node.type === "question";
}

/**
 * Type Guard
 */
export function isRecommendationNode(
  node: NavigatorNode
): node is RecommendationNode {
  return node.type === "recommendation";
}

/**
 * Finds the selected option.
 */
export function getSelectedOption(
  node: QuestionNode,
  optionId: string
): NavigatorOption | undefined {
  return node.options.find(
    (option) => option.id === optionId
  );
}

/**
 * Returns next node id.
 */
export function getNextNodeId(
  node: QuestionNode,
  optionId: string
): string {
  const option = getSelectedOption(node, optionId);

  if (!option) {
    throw new Error(
      `Option "${optionId}" not found for node "${node.id}".`
    );
  }

  return option.next;
}

/**
 * Returns next node.
 */
export function getNextNode(
  node: QuestionNode,
  optionId: string
): NavigatorNode {
  const nextNodeId = getNextNodeId(
    node,
    optionId
  );

  return getNode(nextNodeId);
}

/**
 * Determines whether a node is terminal.
 *
 * Today:
 * recommendation
 *
 * Tomorrow:
 * request
 * success
 */
export function isTerminalNode(
  node: NavigatorNode
): boolean {
  return isRecommendationNode(node);
}

/**
 * Returns true if navigation back is allowed.
 */
export function canGoBack(
  history: string[]
): boolean {
  return history.length > 0;
}

/**
 * Returns previous node id.
 */
export function getPreviousNodeId(
  history: string[]
): string | null {
  if (!history.length) {
    return null;
  }

  return history[history.length - 1];
}

/**
 * Returns current question number.
 */
export function getCurrentQuestionNumber(
  history: string[]
): number {
  return history.length + 1;
}

/**
 * Future placeholder.
 *
 * Later this will automatically calculate
 * total questions for the selected workflow.
 */
export function getTotalQuestions(): number {
  return 0;
}

/**
 * Future placeholder.
 *
 * Later this will become:
 *
 * Question 2 of 5
 *
 * Question 4 of 8
 */
export function getProgress(
  history: string[]
) {
  return {
    current: getCurrentQuestionNumber(history),
    total: getTotalQuestions(),
  };
}

/**
 * Creates a fresh workflow state.
 */
export function createWorkflowState() {
  return {
    currentNodeId: START_NODE_ID,
    history: [] as string[],
  };
}