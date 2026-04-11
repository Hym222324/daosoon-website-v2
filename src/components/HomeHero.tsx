"use client";

import HeroCarousel from "@/components/home/HeroCarousel";
import { useSiteTopChrome } from "@/components/layout/TopChromeProvider";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { homeHero } from "@/i18n/home";

/** 首页首屏：参考 GEP 类 B2B — 全屏轮播 + 左侧主叙事 + 主 CTA */
export default function HomeHero() {
  const { heroTopPaddingClass } = useSiteTopChrome();
  const { locale } = useSiteLocale();

  return (
    <section
      className={`relative flex min-h-screen items-center overflow-hidden ${heroTopPaddingClass}`}
    >
      <HeroCarousel />
      {/* 左侧略压暗保证主文案对比度，右侧更多露出照片亮度 */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#050810]/58 via-[#050810]/18 to-[#050810]/06"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#050810]/42 via-transparent to-[#050810]/12"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-44 pt-8 md:px-10 lg:flex-row lg:items-center lg:pb-40 lg:pt-4">
        <div className="max-w-2xl text-center lg:pb-36 lg:text-left">
          <p className="hero-font-highlight-accent mb-4 text-xs font-semibold uppercase tracking-[0.35em] md:text-sm">
            {T(locale, homeHero.kicker)}
          </p>
          <h1 className="hero-font-highlight text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            {T(locale, homeHero.titleBefore)}
            <span className="hero-font-highlight-accent"> AI </span>
            {T(locale, homeHero.titleAfter)}
          </h1>
        </div>
      </div>
    </section>
  );
}
