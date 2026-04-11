"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { profileStrings } from "@/i18n/profilePage";

export default function ProfileClient() {
  const { locale } = useSiteLocale();
  const s = profileStrings(locale);

  return (
    <ArticleLayout
      title={s.title}
      subtitle={s.subtitle}
      breadcrumb={s.breadcrumb}
      darkHero={false}
    >
      <p>
        {s.bodyBefore}
        <Link href="/connect" className="text-[#1E88E5]">
          {s.connectLink}
        </Link>
        {s.bodyAfter}
      </p>
    </ArticleLayout>
  );
}
