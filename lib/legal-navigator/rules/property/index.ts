import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getPropertySalePreparation } from "./sale";
import { getPropertyOwnershipPreparation } from "./ownership";
import { getBuilderPreparation } from "./builder";
import { getDefaultPropertyPreparation } from "./default";

export function getPropertyPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {

  switch (workflowAnswers.matter) {
    case "Property Purchase & Sale":
      return getPropertySalePreparation();

    case "Property Disputes":
      return getPropertyOwnershipPreparation();

    case "Title Verification & Due Diligence":
      return getPropertyOwnershipPreparation();

    case "Builder / RERA Disputes":
      return getBuilderPreparation();

    case "Landlord–Tenant Matters":
      return getDefaultPropertyPreparation(workflowAnswers);

    case "Partition & Family Property":
      return getPropertyOwnershipPreparation();

    case "Mutation & Revenue Records":
      return getDefaultPropertyPreparation(workflowAnswers);

    case "Lease & Property Agreements":
      return getPropertySalePreparation();

    case "Encroachment & Possession":
      return getPropertyOwnershipPreparation();

    case "Property Documentation":
      return getDefaultPropertyPreparation(workflowAnswers);

    case "Other Property Matter":
      return getDefaultPropertyPreparation(workflowAnswers);

    default:
      return getDefaultPropertyPreparation(workflowAnswers);
  }
}