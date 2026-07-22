import Image from "next/image";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({
  member,
}: TeamCardProps) {
  return (
    <article
  className="
    group
    flex
    h-full
    flex-col
    overflow-hidden
    rounded-2xl
    border
    border-gray-200
    bg-white
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-[#C8A96A]
    hover:shadow-2xl
  "
>
      {/* Photo */}

      <div className="relative aspect-[2.5/1.5] overflow-hidden">

        <Image
          src={member.image}
          alt={member.name}
          fill
          loading="lazy"
          decoding="async"
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-500
            will-change-transform
            group-hover:scale-105
          "
        />

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">

        <div className="flex-1">

          <h3
            className="
              text-2xl
              font-semibold
              text-[#081420]
            "
          >
            {member.name}
          </h3>

          <p
            className="
              mt-1.5
              text-sm
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[var(--gold-dark)]
            "
          >
            {member.designation}
          </p>

          <p
            className="
              mt-2
              text-sm
              leading-7
              text-gray-600
            "
          >
            {member.department}
          </p>

        </div>
<p
  className="
    mt-4
    mb-3
    text-xs
    font-semibold
    uppercase
    tracking-[0.25em]
    text-gray-500
  "
>
  Practice Areas
</p>
        <div className="flex flex-wrap gap-x-3 gap-y-2">

          {member.expertise.map((item) => (

            <span
              key={item}
              className="
                rounded-full
                bg-[#081420]
                px-4
                py-3
                text-xs
                font-medium
                text-[var(--gold-dark)]
              "
            >
              {item}
            </span>

          ))}

        </div>
        

      </div>

    </article>
    
  );
}