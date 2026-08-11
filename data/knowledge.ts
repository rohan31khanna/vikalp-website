export interface KnowledgeItem {
    id: number;
    title: string;
    category: string;
    description: string;
    date: string;
    readTime: string;
    image: string;
}

export const knowledge = [
    {
        id: 1,
        title: "Understanding the New Data Protection Framework",
        category: "Technology Law",
        description:
            "An overview of India's evolving data protection regulations and their impact on businesses.",
        date: "15 June 2026",
        readTime: "5 min read",
        image: "/images/knowledge/data-protection.png",
    },
    {
        id: 2,
        title: "Corporate Governance: Best Practices for Growing Companies",
        category: "Corporate & Commercial Law",
        description:
            "Key governance principles every modern organization should adopt to reduce legal risks.",
        date: "28 May 2026",
        readTime: "7 min read",
        image: "/images/knowledge/corporate-governance.png",
    },
    {
        id: 3,
        title: "Commercial Contracts: Avoiding Common Pitfalls",
        category: "Commercial Law",
        description:
            "Essential clauses and practical considerations to strengthen commercial agreements.",
        date: "10 May 2026",
        readTime: "6 min read",
        image: "/images/knowledge/commercial-contracts.png",
    },
];