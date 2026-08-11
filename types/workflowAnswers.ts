export interface WorkflowAnswer {
  id: string;

  label: string;
}

export interface WorkflowAnswers {
  practiceArea?: string;

  matter?: string;

  stage?: string;

  urgency?: string;

  answers: Record<string, WorkflowAnswer>;
}