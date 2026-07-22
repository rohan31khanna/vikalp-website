import { PracticeIcon } from "@/lib/practiceIcons";
export interface PracticeArea {
  title: string;
  icon: PracticeIcon;
  shortDescription: string;
  overview: string;
  services: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const practiceAreas: Record<string, PracticeArea> = {
  "civil-litigation": {
    title: "Civil Litigation",
    icon: "scale",

    shortDescription:
      "Strategic legal representation in civil disputes before courts and tribunals across India.",

    overview:
      "Our Civil Litigation practice focuses on protecting the rights and interests of individuals, businesses and institutions through effective legal representation before various judicial forums.",

    services: [
      "Civil suits",
      "Recovery matters",
      "Property disputes",
      "Contract disputes",
      "Injunctions",
      "Specific performance suits",
      "Consumer litigation",
      "Appeals and revisions",
    ],

    faqs: [
      {
        question: "What types of civil disputes do you handle?",
        answer:
          "We represent clients in property disputes, recovery matters, contract disputes, injunctions and other civil litigation before competent courts.",
      },
      {
        question: "Do you handle appeals?",
        answer:
          "Yes. We represent clients before appellate courts in civil appeals and revisions.",
      },
    ],
  },

  "criminal-law": {
    title: "Criminal Law",
    icon: "shield",

    shortDescription:
      "Comprehensive criminal defence and legal representation from investigation to appeal.",

    overview:
      "Our Criminal Law practice provides strategic legal assistance in criminal proceedings while protecting the legal rights of our clients at every stage.",

    services: [
      "Bail applications",
      "Criminal trials",
      "Appeals",
      "Quashing petitions",
      "Cheque bounce cases",
      "White collar crime",
      "FIR related matters",
      "Legal defence",
    ],

    faqs: [
      {
        question: "Do you assist in bail matters?",
        answer:
          "Yes. We provide legal assistance for anticipatory bail, regular bail and related criminal proceedings.",
      },
      {
        question: "Can you represent clients during trial?",
        answer:
          "Yes. We represent clients throughout criminal investigations, trial proceedings and appeals.",
      },
    ],
  },

  "corporate-commercial": {
    title: "Corporate & Commercial Law",
    icon: "building",
    shortDescription:
      "Practical legal solutions for businesses, startups and corporate entities.",

    overview:
      "We advise businesses on commercial transactions, regulatory compliance, contracts and corporate governance with a focus on long-term legal protection.",

    services: [
      "Business agreements",
      "Commercial contracts",
      "Corporate advisory",
      "Regulatory compliance",
      "Due diligence",
      "Employment documentation",
      "Legal notices",
      "Contract review",
    ],

    faqs: [
      {
        question: "Do you assist startups?",
        answer:
          "Yes. We provide legal advisory services for startups, MSMEs and established businesses.",
      },
      {
        question: "Can you draft commercial agreements?",
        answer:
          "Yes. We prepare and review various commercial agreements tailored to business requirements.",
      },
    ],
  },

  "family-law": {
    title: "Family Law",
    icon: "users",

    shortDescription:
      "Compassionate legal assistance in sensitive family and matrimonial matters.",

    overview:
      "Our Family Law practice helps clients resolve personal disputes through practical legal guidance while protecting their legal rights and interests.",

    services: [
      "Divorce petitions",
      "Child custody",
      "Maintenance matters",
      "Domestic violence matters",
      "Mutual consent divorce",
      "Guardianship",
      "Matrimonial disputes",
      "Family settlements",
    ],

    faqs: [
      {
        question: "Do you handle mutual consent divorce?",
        answer:
          "Yes. We assist clients throughout the mutual consent divorce process and related legal formalities.",
      },
      {
        question: "Can you assist in child custody matters?",
        answer:
          "Yes. We provide legal representation in custody and guardianship proceedings.",
      },
    ],
  },

  "consumer-disputes": {
    title: "Consumer Disputes",
    icon: "landmark",
    shortDescription:
      "Protecting consumer rights through effective legal remedies and representation.",

    overview:
      "We represent consumers before Consumer Commissions in matters involving unfair trade practices, deficiency of services and product liability.",

    services: [
      "Consumer complaints",
      "Deficiency of services",
      "Medical negligence",
      "Insurance disputes",
      "Banking disputes",
      "E-commerce complaints",
      "Product liability",
      "Appeals",
    ],

    faqs: [
      {
        question: "Can I file a complaint against a company?",
        answer:
          "Yes. We assist consumers in filing complaints before the appropriate Consumer Commission.",
      },
      {
        question: "Do you handle insurance disputes?",
        answer:
          "Yes. We represent clients in consumer matters involving insurance and financial services.",
      },
    ],
  },

  "property-real-estate": {
    title: "Property & Real Estate",
    icon: "home",
    shortDescription:   
      "Legal assistance for property transactions, documentation and dispute resolution.",

    overview:
      "Our Property Law practice assists clients in protecting their ownership rights while ensuring legally secure real estate transactions.",

    services: [
      "Title verification",
      "Property documentation",
      "Sale agreements",
      "Property disputes",
      "Partition suits",
      "Builder disputes",
      "Lease agreements",
      "Real estate advisory",
    ],

    faqs: [
      {
        question: "Do you verify property documents?",
        answer:
          "Yes. We conduct legal verification of title documents and advise clients before property transactions.",
      },
      {
        question: "Can you assist in property disputes?",
        answer:
          "Yes. We represent clients in litigation and advisory matters relating to residential and commercial properties.",
      },
    ],
  },
};