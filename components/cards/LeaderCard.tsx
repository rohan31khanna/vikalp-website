import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import { Leader } from "@/data/leadership";

interface LeaderCardProps {
  leader: Leader;
}

export default function LeaderCard({
  leader,
}: LeaderCardProps) {
  return (
    <article>

      <div
        className="
    group
    h-full
    overflow-hidden
    rounded-3xl
    border
    border-gray-200
    bg-white
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#C8A96A]
    hover:shadow-2xl
  "
      >
        <div className="grid md:grid-cols-[280px_1fr]">

          {/* Photo */}

          <div className="relative aspect-[4/5] h-80 md:h-auto">

            <Image
              src={leader.image}
              alt={`Portrait of ${leader.name}, ${leader.designation}`}
              fill
              loading="lazy"
              decoding="async"
              quality={75}
              sizes="
(max-width: 768px) 100vw,
(max-width: 1280px) 50vw,
280px
"
              className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
            />

          </div>

          {/* Content */}

          <div className="flex flex-col p-8 lg:h-full lg:px-10 lg:py-12">

            <h3
              className="
              text-3xl lg:text-4xl
              font-semibold
              text-[#081420]
            "
            >
              {leader.name}
            </h3>

            <p
              className="
              mt-3
              text-sm
              uppercase
              tracking-[0.18em]
              font-semibold
              text-[var(--gold-dark)]
            "
            >
              {leader.designation}
            </p>

            <div
              className="
              mt-1
              flex
              items-center
              gap-2
              text-gray-600
            "
            >
              <BriefcaseBusiness
                className="h-5 w-5 text-[var(--gold-dark)]"
              />

              <span>
                {leader.experience}
              </span>

            </div>
            <p
  className="
    mt-4
    lg:mt-auto
    pt-4
    mb-2
    text-xs
    font-semibold
    uppercase
    tracking-[0.25em]
    text-gray-500
  "
>
    Practice Areas
</p>

            <div className="flex flex-wrap gap-1 lg:mt-auto">
              {leader.expertise.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="
inline-flex
rounded-full
bg-[#081420]/95
px-4
py-2
text-sm
font-medium
text-[#C8A96A]
whitespace-nowrap
"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}