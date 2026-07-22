export interface Leader {
  id: number;

  slug: string;

  featured: boolean;

  name: string;

  designation: string;

  image: string;

  expertise: string[];

  experience: string;

  shortDescription?: string;
}
export const leadership: Leader[] = [
  {
    id: 1,
    slug: "sanjay-khanna",
    featured: true,
    name: "Adv. Sanjay Khanna",
    designation: "Founder & Managing Partner",

    image: "/images/leadership/sanjay-khanna-v1.png",

    experience: "22+ Years Experience",

    expertise: [
  "Civil Litigation",
  "Criminal Litigation",
  "Arbitration",
  "NCLT",
],

    shortDescription:
      "Leading VIKALP with more than two decades of experience in corporate advisory, civil litigation and dispute resolution.",
  },

  {
    id: 2,
    slug: "pragya-bhushan",
    featured: true,
    name: "Adv. Pragya Bhushan",
    designation: "Founder & Managing Partner",

    image: "/images/leadership/pragya-bhushan-v3.png",

    experience: "22+ Years Experience",

    expertise: [
      "Family Law",
      "Property Law",
      "Legal Advisory",
      "Corporate",
    ],

    shortDescription:
      "Focused on delivering practical legal solutions with extensive experience in family law, property matters and legal advisory.",
  },
];