import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import {
  Scale,
  Shield,
  Building2,
  Users,
  Landmark,
  Home,
} from "lucide-react";

interface PracticeAreaCard {
  title: string;
  href: string;
  icon: React.ReactNode;
  description: string;
}
const practiceAreas: PracticeAreaCard[] = [
  {
    title: "Civil Litigation",
    href: "/practice-areas/civil-litigation",
    icon: <Scale size={28} />,
    description:
      "Representation before courts and tribunals across a wide range of civil disputes.",
  },
  {
    title: "Criminal Law",
    href: "/practice-areas/criminal-law",
    icon: <Shield size={28} />,
    description:
      "Legal representation in criminal matters including bail, trial and appeals.",
  },
  {
    title: "Corporate & Commercial",
    href: "/practice-areas/corporate-commercial",
    icon: <Building2 size={28} />,
    description:
      "Business advisory, contracts, compliance and corporate legal solutions.",
  },
  {
    title: "Family Law",
    href: "/practice-areas/family-law",
    icon: <Users size={28} />,
    description:
      "Divorce, custody, maintenance and other sensitive family-related matters.",
  },
  {
    title: "Consumer Disputes",
    href: "/practice-areas/consumer-disputes",
    icon: <Landmark size={28} />,
    description:
      "Protecting consumer rights before consumer commissions across India.",
  },
  {
    title: "Property & Real Estate",
    href: "/practice-areas/property-real-estate",
    icon: <Home size={28} />,
    description:
      "Title verification, property disputes, documentation and advisory services.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="section-light section-spacing"
    >

      <Container>

        <SectionTitle
          title="Practice Areas"
          subtitle="Comprehensive legal services tailored to individuals, businesses and institutions."
        />

        <div className="mt-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {practiceAreas.map((practice, index) => (
            <ServiceCard
  key={practice.title}
  title={practice.title}
  description={practice.description}
  icon={practice.icon}
  href={practice.href}
  delay={index * 0.12}
/>
          ))}

        </div>

      </Container>
    </section>
  );
}