import type { WorkflowAnswers } from "@/types/workflowAnswers";
import type { ConsultationPreparation } from "@/types/consultationPreparation";

import { getTrademarkPreparation } from "./trademark";
import { getCopyrightPreparation } from "./copyright";
import { getPatentPreparation } from "./patent";
import { getDesignPreparation } from "./design";
import { getIPInfringementPreparation } from "./infringement";
import { getIPLicensingPreparation } from "./licensing";
import { getIPRegistrationPreparation } from "./registration";
import { getDefaultIPPreparation } from "./default";

export function getIPPreparation(
  workflowAnswers: WorkflowAnswers
): ConsultationPreparation {
  switch (workflowAnswers.matter) {
    case "Trademark Matters":
      return getTrademarkPreparation();

    case "Copyright Matters":
      return getCopyrightPreparation();

    case "Patent Matters":
      return getPatentPreparation();

    case "Design Protection":
      return getDesignPreparation();

    case "IP Infringement / Enforcement":
      return getIPInfringementPreparation();

    case "IP Licensing / Assignment":
      return getIPLicensingPreparation();

    case "IP Registration / Protection":
      return getIPRegistrationPreparation();

    case "Other Intellectual Property Matter":
    default:
      return getDefaultIPPreparation();
  }
}