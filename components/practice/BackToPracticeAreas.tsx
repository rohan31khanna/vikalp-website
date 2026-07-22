import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";

export default function BackToPracticeAreas() {
  return (
    <section className="section-light py-2 ">
      <Container>
        <Link
          href="/#practice-areas"
          className="
            inline-flex
            items-center
            gap-2
            text-sb
            font-bold
            text-[#C8A96A]
            transition-colors
            duration-300
            hover:text-[#081420]
          "
        >
          <ArrowLeft size={16} />
          Back to Practice Areas
        </Link>
      </Container>
    </section>
  );
}