import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getEmploymentContractPreparation } from "./employment";
import { getTerminationPreparation } from "./termination";
import { getSalaryWagesPreparation } from "./wages";
import { getWorkplacePreparation } from "./workplace";
import { getPOSHPreparation } from "./posh";
import { getEmployeeBenefitsPreparation } from "./socialSecurity";
import { getDisciplinaryPreparation } from "./disciplinary";
import { getIndustrialDisputePreparation } from "./industrialDispute";
import { getEmployeeEmployerDisputePreparation } from "./employeeEmployer";
import { getLabourCompliancePreparation } from "./compliance";
import { getUnionPreparation } from "./union";
import { getDefaultEmploymentLabourPreparation } from "./default";

export function getEmploymentLabourPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  switch (workflowAnswers.matter) {
    case "Employment Contract & Terms":
      return getEmploymentContractPreparation();

    case "Termination / Wrongful Dismissal":
      return getTerminationPreparation();

    case "Salary, Wages & Dues":
      return getSalaryWagesPreparation();

    case "Workplace Harassment":
      return getWorkplacePreparation();

    case "POSH / Workplace Sexual Harassment":
      return getPOSHPreparation();

    case "Employee Benefits & Social Security":
      return getEmployeeBenefitsPreparation();

    case "Disciplinary Proceedings":
      return getDisciplinaryPreparation();

    case "Industrial / Labour Dispute":
      return getIndustrialDisputePreparation();

    case "Employee–Employer Dispute":
      return getEmployeeEmployerDisputePreparation();

    case "Labour Law Compliance":
      return getLabourCompliancePreparation();

    case "Trade Union / Collective Matter":
      return getUnionPreparation();

    case "Other Employment / Labour Matter":
    default:
      return getDefaultEmploymentLabourPreparation();
  }
}
