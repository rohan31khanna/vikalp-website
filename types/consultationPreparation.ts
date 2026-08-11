export interface ConsultationPreparation {
  /**
   * High-level summary generated from
   * Guided Discovery responses.
   */
  summary: string[];

  /**
 * What the client can expect to gain
 * from the consultation.
 */
consultationBenefits: string[];

  /**
   * Documents that may be useful
   * before consultation.
   */
  documents: string[];

  /**
   * Topics likely to be discussed
   * during consultation.
   */
  discussionPoints: string[];

  /**
   * Primary objectives for
   * the consultation.
   */
  consultationFocus: string[];

  /**
   * Optional information
   */
  disclaimer?: string;

  estimatedDuration?: string;

  urgencyLevel?:
    | "low"
    | "medium"
    | "high";

  /**
   * Reserved for future AI
   */
  aiContext?: {
    prompt?: string;

    keywords?: string[];

    riskFactors?: string[];

    followUpQuestions?: string[];
  };
}