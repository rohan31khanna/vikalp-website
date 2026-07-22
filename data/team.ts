export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  image: string;
  expertise: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    designation: "Senior Associate",
    department: "Civil Litigation Department",
    image: "/images/team/member-11.png",
    expertise: ["Civil Law", "High Court", "Arbitration"],
  },
  {
    id: 2,
    name: "Ananya Singh",
    designation: "Associate",
    department: "Corporate & Commercial Department",
    image: "/images/team/member-22.png",
    expertise: ["Contracts", "Compliance", "M&A"],
  },
  {
    id: 3,
    name: "Amit Verma",
    designation: "Associate",
    department: "Criminal Litigation Department",
    image: "/images/team/member-3.png",
    expertise: ["Bail", "Trial", "Appeals"],
  },
  {
    id: 4,
    name: "Neha Kapoor",
    designation: "Associate",
    department: "Property & Real Estate",
    image: "/images/team/member-44.png",
    expertise: ["Title Search", "Documentation", "Property Disputes"],
  },
  {
    id: 5,
    name: "Rohit Gupta",
    designation: "Legal Research Associate",
    department: "Research & Drafting Department",
    image: "/images/team/member-55.png",
    expertise: ["Research", "Drafting", "Case Law"],
  },
  {
    id: 6,
    name: "Priya Mehta",
    designation: "Client Relations",
    department: "Client Support Department",
    image: "/images/team/member-66.png",
    expertise: ["Client Support", "Scheduling", "Coordination"],
  },
];