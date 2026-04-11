"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import {
  resourceListOverlay,
  resourcesIndexStrings,
} from "@/i18n/resourcesIndex";
import { getAllResourceItems } from "@/lib/resources-data";
import { withBasePath } from "@/lib/public-path";

export default function ResourcesIndexClient() {
  const { locale } = useSiteLocale();
  const s = resourcesIndexStrings(locale);
  const items = getAllResourceItems();

  return (
    <ArticleLayout
      title={s.title}
      subtitle={s.subtitle}
      breadcrumb={s.breadcrumb}
      darkHero={false}
    >
      <div className="flex flex-wrap gap-2 mb-8 not-prose text-sm">
        <span className="px-3 py-1 rounded-full bg-white border border-gray-200">
          {s.filterAll}
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500">
          {s.filterHint}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 not-prose">
        {items.map((it) => {
          const ov = resourceListOverlay(locale, it.href);
          const type = ov?.type ?? it.type;
          const title = ov?.title ?? it.title;
          const action = ov?.action ?? it.action;
          return (
            <div
              key={it.href}
              className="rounded-xl border border-gray-200 p-5 bg-white hover:shadow-md transition-shadow"
            >
              <Link href={it.href} className="block">
                <span
                  className={`inline-block px-2 py-1 text-xs text-white rounded mb-3 bg-gradient-to-r ${it.typeClass}`}
                >
                  {type}
                </span>
                <h2 className="text-lg font-bold text-[#1A1A1A]">{title}</h2>
                <p className="text-sm text-gray-500 mt-1">{it.date}</p>
                <p className="text-[#1E88E5] text-sm font-medium mt-3">{action} →</p>
              </Link>
              {it.downloadUrl ? (
                <a
                  href={withBasePath(it.downloadUrl)}
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#FF9800] hover:underline"
                  download
                >
                  {s.download}
                </a>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="pt-8 border-t border-gray-200 not-prose flex flex-wrap gap-4">
        <Link
          href="/connect"
          className="inline-flex bg-[#1E88E5] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1565C0]"
        >
          {s.subscribe}
        </Link>
      </div>
    </ArticleLayout>
  );
}
