import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import LeaderCard from "@/components/cards/LeaderCard";
import { leadership } from "@/data/leadership";
import TeamCard from "@/components/cards/TeamCard";
import { teamMembers } from "@/data/team";


export default function Leadership() {
  return (
    <section
  id="leadership"
  className="section-light section-spacing"
>
      <Container>
        {/* Section Heading */}
        <div
  className="
    [&_.gold-line]:mb-4

    [&_.section-title]:text-5xl
    md:[&_.section-title]:text-6xl
    [&_.section-subtitle]:leading-8
  "
>
  <SectionTitle
    title="Leadership"
    subtitle="Meet the legal professionals leading VIKALP with integrity, expertise and a client-first approach."
  />
</div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {leadership.map((leader) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
            />
          ))}
        </div>
        <div className="my-6 border-t border-gray-200" />
        <div className="mt-4">

    <h3 className="font-heading text-4xl md:text-[2.8rem] text-[#081420]">
  Meet Our Legal Team
</h3>

    <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-600">

Our dedicated advocates, associates and legal professionals
deliver practical, client-focused legal solutions across
multiple practice areas.
    </p>

<div className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

  {teamMembers.map((member) => (

    <TeamCard
      key={member.id}
      member={member}
    />

  ))}

</div>


</div>
      </Container>
    </section>
  );
}