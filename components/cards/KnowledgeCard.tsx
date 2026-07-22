import Image from "next/image";
import type { KnowledgeItem } from "@/data/knowledge";
import { Clock3 } from "lucide-react";

interface KnowledgeCardProps {
    article: KnowledgeItem;
}

export default function KnowledgeCard({
    article,
}: KnowledgeCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/60 bg-white shadow-sm transition-all duration-500 hover:shadow-lg">
            <div className="relative h-50 overflow-hidden bg-stone-900">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    loading="lazy"
                    decoding="async"
                    quality={75}
                    sizes="
      (max-width:768px) 100vw,
      (max-width:1024px) 50vw,
      33vw
    "
                    className="
      object-cover
      transition-transform
      duration-700
      will-change-transform
      group-hover:scale-105
    "
                />
            </div>

            <div className="flex flex-1 flex-col space-y-2.5 p-2">
                <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-full bg-[#081420] px-3 py-1 font-medium text-[var(--gold-dark)]">
                        {article.category}
                    </span>

                    <span className="text-stone-500">
                        {article.date}
                    </span>
                </div>

                <h3 className="text-2xl font-semibold text-stone-900 transition-colors group-hover:text-amber-700">
                    {article.title}
                </h3>

                <p className="text-stone-600">
                    {article.description}
                </p>

                <div className="mt-auto flex items-center gap-1.5 pt-1 pb-1 text-sm font-medium text-stone-600">
                    <Clock3 size={14} />
                    <span>{article.readTime}</span>
                </div>
            </div>
        </article>

    );
}