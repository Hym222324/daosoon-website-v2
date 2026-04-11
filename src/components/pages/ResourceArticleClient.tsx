"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import {
  resourceArticleStrings,
  type ResourceArticleSlug,
} from "@/i18n/resourceArticles";

const btnClass: Record<
  "orange" | "blue" | "purple" | "outline",
  string
> = {
  orange: "inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium",
  blue: "inline-flex bg-[#1E88E5] text-white px-6 py-3 rounded-lg font-medium",
  purple: "inline-flex bg-[#9C27B0] text-white px-6 py-3 rounded-lg font-medium",
  outline: "inline-flex border border-gray-300 px-6 py-3 rounded-lg font-medium",
};

export default function ResourceArticleClient({ slug }: { slug: ResourceArticleSlug }) {
  const { locale } = useSiteLocale();
  const s = resourceArticleStrings(slug, locale);

  return (
    <ArticleLayout title={s.title} subtitle={s.subtitle} breadcrumb={s.breadcrumb}>
      {s.introLink ? (
        <p>
          {s.introLink.before}
          <Link href={s.introLink.href} className="text-[#1E88E5]">
            {s.introLink.text}
          </Link>
          {s.introLink.after}
        </p>
      ) : s.intro ? (
        <p>{s.intro}</p>
      ) : null}

      {s.bullets?.length ? (
        <ul className="list-disc pl-5 space-y-2 mt-4">
          {s.bullets.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      ) : null}

      {s.toc ? (
        <section className="space-y-2 mt-6">
          <h2 className="text-lg font-bold text-[#1A1A1A]">{s.toc.heading}</h2>
          {s.toc.ordered ? (
            <ol className="list-decimal pl-5 space-y-1 text-gray-700">
              {s.toc.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          ) : (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {s.toc.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        {s.actions.map((a, i) => (
          <Link key={i} href={a.href} className={btnClass[a.style]}>
            {a.label}
          </Link>
        ))}
      </div>
    </ArticleLayout>
  );
}
