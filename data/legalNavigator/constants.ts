export const BUSINESS_CORPORATE = "Business & Corporate";

export const NAVIGATOR = {
  START_NODE: "start",

  /**
   * Guided Discovery flow:
   *
   * Step 1 — Context
   * Step 2 — Practice Area
   * Step 3 — Specific Matter
   * Step 4 — Current Stage
   * Step 5 — Urgency
   */
  TOTAL_STEPS: 5,

  VERSION: "1.1",
} as const;

export const NAVIGATOR_DISCLAIMER =
  "This guided discovery is intended to help you navigate the website and prepare for an initial consultation. It does not constitute legal advice or create an advocate-client relationship.";