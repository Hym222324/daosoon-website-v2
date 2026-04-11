"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { communityStrings } from "@/i18n/communityPage";

export default function CommunityClient() {
  const { locale } = useSiteLocale();
  const s = communityStrings(locale);

  return (
    <ArticleLayout
      title={s.title}
      subtitle={s.subtitle}
      breadcrumb={s.breadcrumb}
      darkHero={false}
    >
      <p>{s.intro}</p>

      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {s.boards.map((b) => (
          <div
            key={b.name}
            className="rounded-xl border border-gray-200 p-5 bg-white"
          >
            <h2 className="font-bold text-[#1A1A1A]">{b.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
          </div>
        ))}
      </div>

      <section className="space-y-2 not-prose">
        <h2 className="text-lg font-bold text-[#1A1A1A]">{s.latestHeading}</h2>
        <ul className="text-sm text-gray-700 divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
          {s.samplePosts.map((t, i) => (
            <li key={i} className="px-4 py-3 bg-white flex justify-between gap-2">
              <span>{t}</span>
              <Link href="/forum" className="text-[#1E88E5] whitespace-nowrap shrink-0">
                {s.enterForum}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 not-prose pt-4">
        <Link
          href="/forum"
          className="inline-flex bg-[#1E88E5] text-white px-6 py-3 rounded-lg font-medium"
        >
          {s.btnForum}
        </Link>
        <Link
          href="/profile"
          className="inline-flex border border-gray-300 px-6 py-3 rounded-lg font-medium"
        >
          {s.btnProfile}
        </Link>
      </div>
    </ArticleLayout>
  );
}
