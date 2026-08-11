export interface ContactInfo {
  office: string;
  address: string;
  mapUrl: string;
  phones: string[];
  whatsapp: string;
  email: string;
  officeHours: string[];
}

export const contact: ContactInfo = {
  office: "VIKALP Advocates & Legal Consultants",

  address: "N-204, N Block Greater Kailash 1, New Delhi – 110048",

  mapUrl:
    "https://maps.app.goo.gl/zcXQ6sVnDBjQpwu39",

  phones: [
    "+91 98993 05640",
    "+91 99680 06418",
  ],

  whatsapp: "+91 99680 06418",

  email: "contact@vikalplegal.com",

  officeHours: [
    "Monday – Saturday",
    "9:30 AM – 6:30 PM",
  ],
};

export const contactSubjects = [
  {
    title: "Civil Litigation",
    services: [
      "Property Dispute",
      "Money Recovery",
      "Contract Dispute",
      "Consumer Matter",
    ],
  },

  {
    title: "Corporate & Commercial Law",
    services: [
      "Company Incorporation",
      "Compliance",
      "Mergers & Acquisitions",
      "Shareholder Agreements",
    ],
  },

  {
    title: "Property & Real Estate",
    services: [
      "Property Verification",
      "Sale Deed",
      "Lease Agreement",
      "Builder Dispute",
    ],
  },

  {
    title: "Family Law",
    services: [
      "Divorce",
      "Child Custody",
      "Maintenance",
      "Domestic Violence",
    ],
  },

  {
    title: "Criminal Law",
    services: [
      "Bail Applications",
      "Criminal Trials",
      "FIR Related Matters",
      "Cheque Bounce Cases",
    ],
  },

  {
    title: "Consumer Disputes",
    services: [
      "Consumer Complaints",
      "Deficiency of Services",
      "Insurance Disputes",
      "E-commerce Complaints",
    ],
  },
];