
import Container from "@/components/ui/Container";
import Stat from "@/components/ui/Stat";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FirmStatistics() {
    const stats = [
  {
    number: "30+",
    label: "Years Combined Experience",
     animate: true,
  },
  {
    number: "1000+",
    label: "Matters Handled",
    animate: true,
  },
  {
    number: "PAN INDIA",
    label: "Legal Services",
     animate: false,
  },
  {
    number: "Supreme Court ",
    label: "",
    animate: false,
  },
  {
  number: "50+",
  label: "Corporate Clients",
  animate: true,
},
{
  number: "15+",
  label: "Practice Areas",
  animate: true,
},
{
    number: "High Courts",
    label: "",
    animate: false,
  },
{
    number: "District Courts & Tribunals",
    label: "",
    animate: false,
  },
];
  return (
    <section
    id="firm-statistics"
    className="section-dark py-10 lg:py-14"
>
      <Container>
        <div className="mb-12">
  <SectionTitle
    title="Our Impact"
    subtitle="Delivering practical legal solutions with professionalism, integrity, and decades of combined experience."
    light
  />
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6">
          {stats.map((stat, index) => (
  <Stat
  key={index}
  number={stat.number}
  label={stat.label}
  animate={stat.animate}
  delay={index * 0.15}
/>
))}
        </div>
      </Container>
    </section>
  );
}