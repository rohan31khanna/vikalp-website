import Container from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

interface Props {
  services: string[];
}

export default function PracticeServices({
  services,
}: Props) {
  return (
    <section className="section-light py-20">
      <Container>
        <div className="max-w-5xl">
          <h2 className="font-serif text-3xl text-[#081420] md:text-4xl">
            Our Services
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-1 text-[#C8A96A]"
                />

                <span className="leading-7 text-gray-700">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}