"use client";

import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { aboutStrings } from "@/i18n/aboutPage";

const linkCls = "text-[#1E88E5] font-medium";

export default function AboutClient() {
  const { locale } = useSiteLocale();
  const s = aboutStrings(locale);

  return (
    <ArticleLayout
      title={s.title}
      subtitle={s.subtitle}
      breadcrumb={s.breadcrumb}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">{s.h1}</h2>
        <p>{s.p1}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">{s.h2}</h2>
        <p>{s.p2}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">{s.h3}</h2>
        <p>
          {locale === "zh" ? (
            <>
              从{" "}
              <Link href="/solutions/consulting" className={linkCls}>
                {s.linkConsult}
              </Link>
              、
              <Link href="/solutions/implementation" className={linkCls}>
                {s.linkImpl}
              </Link>
              、
              <Link href="/solutions/software" className={linkCls}>
                {s.linkSoft}
              </Link>
              ，到
              <Link href="/solutions/tech-services" className={linkCls}>
                {s.linkTech}
              </Link>
              、
              <Link href="/solutions/ai-services" className={linkCls}>
                {s.linkAi}
              </Link>
              、
              <Link href="/solutions/procurement-services" className={linkCls}>
                {s.linkProc}
              </Link>
              、
              <Link href="/solutions/talent" className={linkCls}>
                {s.linkTalent}
              </Link>{" "}
              与{" "}
              <Link href="/solutions/platform" className={linkCls}>
                {s.linkPlat}
              </Link>
              ，覆盖企业从顶层设计到系统落地、持续运营的全周期需求（详见
              <Link href="/solutions" className="text-[#1E88E5]">
                {s.linkSol}
              </Link>
              ）。
            </>
          ) : (
            <>
              From{" "}
              <Link href="/solutions/consulting" className={linkCls}>
                {s.linkConsult}
              </Link>
              ,{" "}
              <Link href="/solutions/implementation" className={linkCls}>
                {s.linkImpl}
              </Link>
              , and{" "}
              <Link href="/solutions/software" className={linkCls}>
                {s.linkSoft}
              </Link>
              , to{" "}
              <Link href="/solutions/tech-services" className={linkCls}>
                {s.linkTech}
              </Link>
              ,{" "}
              <Link href="/solutions/ai-services" className={linkCls}>
                {s.linkAi}
              </Link>
              ,{" "}
              <Link href="/solutions/procurement-services" className={linkCls}>
                {s.linkProc}
              </Link>
              ,{" "}
              <Link href="/solutions/talent" className={linkCls}>
                {s.linkTalent}
              </Link>
              , and the{" "}
              <Link href="/solutions/platform" className={linkCls}>
                {s.linkPlat}
              </Link>
              , covering the full lifecycle from strategy to operations (see the{" "}
              <Link href="/solutions" className="text-[#1E88E5]">
                {s.linkSol}
              </Link>
              ).
            </>
          )}
        </p>
      </section>

      <div className="pt-4">
        <Link
          href="/connect"
          className="inline-flex items-center justify-center bg-[#FF9800] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#F57C00] transition-colors"
        >
          {s.cta}
        </Link>
      </div>
    </ArticleLayout>
  );
}
