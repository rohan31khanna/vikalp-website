"use client";

import { useMemo, useState } from "react";

import type { WorkflowAnswers } from "@/types/workflowAnswers";
import { nodes } from "@/data/legalNavigator/nodes";
import type { NavigatorOption } from "@/types/legalNavigator";
import { NAVIGATOR } from "@/data/legalNavigator/constants";
import type { LeadDetails } from "@/types/lead";
import type { ConsultationRequestFormData } from "@/types/consultation";

import {
  QuestionNode,
  RecommendationNode,
} from "@/types/legalNavigator";

interface HistoryItem {
  nodeId: string;

  selectedOptionId?: string;
}

const START_NODE_ID = NAVIGATOR.START_NODE;

const getWorkflowField = (
  nodeId: string
):
  | "context"
  | "practiceArea"
  | "matter"
  | "stage"
  | "urgency"
  | null => {
  if (nodeId === START_NODE_ID) {
    return "context";
  }

  if (nodeId.startsWith("context-")) {
    return "practiceArea";
  }

  if (nodeId.endsWith("-category")) {
    return "matter";
  }

  if (nodeId.endsWith("-stage")) {
    return "stage";
  }

  if (nodeId.endsWith("-urgency")) {
    return "urgency";
  }

  return null;
};

export function useNavigator() {
  const [isOpen, setIsOpen] = useState(false);

  const [currentNodeId, setCurrentNodeId] =
  useState<string>(START_NODE_ID);

  const [history, setHistory] = useState<
    HistoryItem[]
  >([]);

  const [workflowAnswers, setWorkflowAnswers] =
    useState<WorkflowAnswers>({
      answers: {},
    });

  const [leadDetails, setLeadDetails] =
    useState<LeadDetails>({
      fullName: "",
      mobileNumber: "",
      city: "",
      email: "",
    });

    const [consultationDetails, setConsultationDetails] =
  useState<ConsultationRequestFormData>({
    preferredContactMethod: "phone",
    preferredContactTime: "anytime",
    additionalInformation: "",
  });

  const [view, setView] = useState<
    "question" |
    "preparation" |
    "lead" |
    "request" |
    "success"
  >("question");

  const currentNode = useMemo(() => {
    const node = nodes[currentNodeId];

    if (!node) {
      throw new Error(
        `Navigator node "${currentNodeId}" was not found.`
      );
    }

    return node;
  }, [currentNodeId]);

  const open = () => {
    restart();

    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const goNext = (option: NavigatorOption) => {
    const nextNodeId = option.next;

    const nextNode = nodes[nextNodeId];

    if (!nextNode) {
      console.error(
        `Navigator node "${nextNodeId}" does not exist.`
      );

      return;
    }

    const answerKey = getWorkflowField(
      currentNodeId
    );

    if (answerKey) {
      setWorkflowAnswers((previous) => ({
        ...previous,

        [answerKey]: option.label,

        answers: {
          ...previous.answers,

          [currentNodeId]: {
            id: option.id,
            label: option.label,
          },
        },
      }));
    }

    setHistory((previous) => [
      ...previous,
      {
        nodeId: currentNodeId,
        selectedOptionId: option.id,
      },
    ]);

    setCurrentNodeId(nextNodeId);

    if (nextNode.type === "recommendation") {
      setView("preparation");
    } else {
      setView("question");
    }
  };

  const goBack = () => {
    if (view === "request") {
      setView("lead");

      return;
    }

    if (view === "lead") {
      setView("preparation");

      return;
    }

    if (view === "success") {
      setView("request");

      return;
    }

    const previous = history.at(-1);

    if (!previous) {
      return;
    }

    setHistory((prev) =>
      prev.slice(0, prev.length - 1)
    );

    setCurrentNodeId(previous.nodeId);

    const previousNode = nodes[previous.nodeId];

    setView(
      previousNode.type === "recommendation"
        ? "preparation"
        : "question"
    );
  };

  const restart = () => {
    setHistory([]);

    setWorkflowAnswers({
      answers: {},
    });

    setLeadDetails({
      fullName: "",
      mobileNumber: "",
      city: "",
      email: "",
    });

    setConsultationDetails({
  preferredContactMethod: "phone",
  preferredContactTime: "anytime",
  additionalInformation: "",
});

    setCurrentNodeId(START_NODE_ID);

    setView("question");
  };

  const reset = () => {
    restart();

    setIsOpen(false);
  };

  const goToRequest = () => {
    setView("request");
  };

  const goToLead = () => {
    setView("lead");
  };

  const goToSuccess = () => {
    setView("success");
  };

  const goToPreparation = () => {
    setView("preparation");
  };

  const progress = useMemo(() => {
    return history.length;
  }, [history]);

  const isQuestion =
    currentNode.type === "question";

  const isRecommendation =
    currentNode.type === "recommendation";

  return {
    isOpen,

    open,

    close,

    reset,

    restart,

    goBack,

    goNext,

    history,

    workflowAnswers,

    leadDetails,

    setLeadDetails,

    consultationDetails,

    setConsultationDetails,

    progress,

    currentNode,

    view,

    goToRequest,

    goToSuccess,

    goToLead,

    goToPreparation,

    isQuestion,

    isRecommendation,

    question: isQuestion
      ? (currentNode as QuestionNode)
      : null,

    recommendation: isRecommendation
      ? (currentNode as RecommendationNode)
      : null,
  };
}