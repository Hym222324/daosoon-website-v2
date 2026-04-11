"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { forumStrings } from "@/i18n/forumPage";

export default function ForumClient() {
  const { locale } = useSiteLocale();
  const s = forumStrings(locale);

  return (
    <ArticleLayout
      title={s.title}
      subtitle={s.subtitle}
      breadcrumb={s.breadcrumb}
      darkHero={false}
    >
      <p>
        {s.bodyBefore}
        <Link href="/community" className="text-[#1E88E5]">
          {s.communityLink}
        </Link>
        {s.bodyAfter}
      </p>
      <Link
        href="/connect"
        className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium"
      >
        {s.cta}
      </Link>
    </ArticleLayout>
  );
}
