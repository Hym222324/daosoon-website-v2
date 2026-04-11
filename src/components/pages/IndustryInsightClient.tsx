"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import {
  industryInsightStrings,
  type IndustrySlug,
} from "@/i18n/industryInsightPages";

export default function IndustryInsightClient({ slug }: { slug: IndustrySlug }) {
  const { locale } = useSiteLocale();
  const s = industryInsightStrings(slug, locale);

  return (
    <ArticleLayout title={s.title} subtitle={s.subtitle} breadcrumb={s.breadcrumb}>
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">{s.hChallenges}</h2>
        <p>{s.s1p}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {s.bullets.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">{s.hApproach}</h2>
        <p>{s.s2p}</p>
      </section>

      {s.relatedCase ? (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#1A1A1A]">{s.hRelated}</h2>
          <p>
            {s.relatedCase.before}
            <Link
              href={s.relatedCase.href}
              className="text-[#1E88E5] font-medium"
            >
              {s.relatedCase.linkText}
            </Link>
            {s.relatedCase.after}
          </p>
        </section>
      ) : null}

      <div className="pt-4 border-t border-gray-200">
        <Link
          href="/connect"
          className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F57C00]"
        >
          {s.cta}
        </Link>
      </div>
    </ArticleLayout>
  );
}
