export type NodeType =
  | "question"
  | "recommendation";

export interface NavigatorOption {
  id: string;

  label: string;

  description: string;

  icon: string;

  next: string;
}

interface BaseNode {
  id: string;
  type: NodeType;
}

export interface QuestionNode extends BaseNode {
  type: "question";

  /**
   * Optional category shown above the question.
   * Example:
   * Family & Marriage
   */
  category?: string;

  /**
   * Main question.
   */
  title: string;

  /**
   * Supporting guidance.
   */
  subtitle?: string;

  /**
   * Current workflow step.
   */
  step?: number;

  /**
   * Total workflow steps.
   */
  totalSteps?: number;

  /**
   * Available options.
   */
  options: NavigatorOption[];
}

export interface RecommendationNode extends BaseNode {
  type: "recommendation";

  category: string;

  referenceCode: string;

  consultationPriority:
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "URGENT";

  title: string;

  slug: string;

  contactValue: string;

  preparationKey: string;

  description: string;

  highlights: string[];

  related?: string[];

  disclaimer?: string;

  estimatedDuration?: string;

  urgencyNote?: string;
}

export type NavigatorNode =
  | QuestionNode
  | RecommendationNode;

export type NavigatorNodes = Record<
  string,
  NavigatorNode
>;