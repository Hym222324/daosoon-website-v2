"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { insightsStrings } from "@/i18n/insightsPage";

export default function InsightsClient() {
  const { locale } = useSiteLocale();
  const s = insightsStrings(locale);

  return (
    <ArticleLayout title={s.title} subtitle={s.subtitle} breadcrumb={s.breadcrumb}>
      <p>{s.intro}</p>

      <ul className="space-y-6 not-prose">
        {s.industries.map((x) => (
          <li
            key={x.href}
            className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition-shadow"
          >
            <Link
              href={x.href}
              className="text-lg font-bold text-[#1A1A1A] hover:text-[#1E88E5]"
            >
              {x.title}
            </Link>
            <p className="text-gray-600 mt-2 text-sm">{x.desc}</p>
            <Link
              href={x.href}
              className="inline-block mt-3 text-[#1E88E5] text-sm font-medium"
            >
              {s.readMore}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">{s.foot}</p>
    </ArticleLayout>
  );
}
