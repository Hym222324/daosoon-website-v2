"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { casesStrings } from "@/i18n/casesPage";

export default function CasesClient() {
  const { locale } = useSiteLocale();
  const s = casesStrings(locale);

  return (
    <ArticleLayout title={s.title} subtitle={s.subtitle} breadcrumb={s.breadcrumb}>
      <p>{s.intro}</p>

      <div className="grid md:grid-cols-1 gap-6 not-prose">
        {s.cases.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block border border-gray-200 rounded-xl p-6 bg-white hover:border-[#1E88E5] hover:shadow-md transition-all"
          >
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h2 className="text-xl font-bold text-[#1A1A1A]">{c.name}</h2>
              <span className="text-xs px-2 py-0.5 bg-[#F0F4F8] rounded text-gray-700">
                {c.tag}
              </span>
            </div>
            <p className="text-[#FF9800] font-semibold">{c.result}</p>
            <span className="inline-block mt-3 text-[#1E88E5] text-sm font-medium">
              {s.viewCase}
            </span>
          </Link>
        ))}
      </div>

      <div className="pt-4">
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
