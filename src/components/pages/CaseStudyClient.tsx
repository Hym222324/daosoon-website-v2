"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { caseStudyStrings, type CaseStudySlug } from "@/i18n/caseStudiesPage";

export default function CaseStudyClient({ slug }: { slug: CaseStudySlug }) {
  const { locale } = useSiteLocale();
  const s = caseStudyStrings(slug, locale);

  return (
    <ArticleLayout title={s.title} subtitle={s.subtitle} breadcrumb={s.breadcrumb}>
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">{s.hBg}</h2>
        <p>{s.pBg}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">{s.hApproach}</h2>
        <ul className="list-disc pl-5 space-y-2">
          {s.bullets.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">{s.hOutcomes}</h2>
        <p className="text-[#FF9800] font-semibold">{s.outcome}</p>
      </section>

      {s.relatedBlock?.kind === "section" ? (
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#1A1A1A]">{s.hRelated}</h2>
          <p>
            <Link href={s.relatedBlock.linkHref} className="text-[#1E88E5]">
              {s.relatedBlock.linkText}
            </Link>
          </p>
        </section>
      ) : null}

      {s.relatedBlock?.kind === "inline" ? (
        <p className="mb-4">
          <Link href={s.relatedBlock.linkHref} className="text-[#1E88E5]">
            {s.relatedBlock.linkText}
          </Link>
        </p>
      ) : null}

      <Link
        href="/connect"
        className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F57C00]"
      >
        {s.cta}
      </Link>
    </ArticleLayout>
  );
}
