import KnowledgeCard from "@/components/cards/KnowledgeCard";
import { knowledge } from "@/data/knowledge";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Knowledge() {
    return (
        <section
    id="knowledge"
    className="section-light pt-1 pb-1"
>
            <div className="mx-auto max-w-7xl px-5 lg:px-7">
                <div
  className="
    mx-auto
    max-w-3xl
    text-center
    mb-1
    [&_.gold-line]:mx-auto
    [&_.section-title]:text-center
    [&_.section-subtitle]:mx-auto
    [&_.section-subtitle]:text-center
  "
>
                    <SectionTitle
    title="Legal Insights & Perspectives"
    subtitle="Stay informed with expert articles, legal updates and practical guidance from our experienced team."
/>

                </div>

                <>
    <div className="mt-1 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {knowledge.map((article) => (
            <KnowledgeCard
                key={article.id}
                article={article}
            />
        ))}
    </div>

    <div className="mt-10 flex justify-center">
        
    </div>
</>
            </div>
        </section>
    );
}