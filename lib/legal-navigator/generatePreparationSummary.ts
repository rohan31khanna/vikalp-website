import type { WorkflowAnswers } from "@/types/workflowAnswers";

export interface PreparationSummaryItem {
  title: string;
  value: string;
}

export function generatePreparationSummary(
  workflowAnswers: WorkflowAnswers
): PreparationSummaryItem[] {
  const summary: PreparationSummaryItem[] = [];

  if (workflowAnswers.practiceArea) {
    summary.push({
      title: "Practice Area",
      value: workflowAnswers.practiceArea,
    });
  }

  if (workflowAnswers.matter) {
    summary.push({
      title: "Matter",
      value: workflowAnswers.matter,
    });
  }

  if (workflowAnswers.stage) {
    summary.push({
      title: "Current Stage",
      value: workflowAnswers.stage,
    });
  }

  if (workflowAnswers.urgency) {
    summary.push({
      title: "Urgency",
      value: workflowAnswers.urgency,
    });
  }

  return summary;
}