"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { solutionTemplateChrome } from "@/i18n/solutionTemplateChrome";

export interface SolutionHeroLink {
  name: string;
  href: string;
  external?: boolean;
}

interface SolutionTemplateProps {
  pageTitle: string;
  pageDescription: string;
  mainIcon: ReactNode;
  badge?: string;
  /** 追加在 hero 区快捷入口（如外链打开 BN-MVP） */
  extraHeroLinks?: SolutionHeroLink[];
}

const heroLinkClassName =
  "flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow";

export default function SolutionTemplate({
  pageTitle,
  pageDescription,
  mainIcon,
  badge,
  extraHeroLinks = [],
  children,
}: SolutionTemplateProps & { children: React.ReactNode }) {
  const { locale } = useSiteLocale();
  const badgeText = badge ?? T(locale, solutionTemplateChrome.badgeHot);
  const commonLinks: SolutionHeroLink[] = [
    { name: T(locale, solutionTemplateChrome.linkDemo), href: "/connect" },
    { name: T(locale, solutionTemplateChrome.linkOverview), href: "/solutions" },
    { name: T(locale, solutionTemplateChrome.linkCases), href: "/cases" },
  ];
  const heroLinks = [...commonLinks, ...extraHeroLinks];

  return (
    <div className="min-h-screen">
      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#FF9800] text-white text-sm font-medium rounded-full">
                {badgeText}
              </span>
              <Link
                href="/solutions"
                className="text-[#1E88E5] text-sm font-medium hover:underline"
              >
                {T(locale, solutionTemplateChrome.backToList)}
              </Link>
            </div>

            <div className="flex items-center gap-5 mb-6">
              <div className="flex h-[5.25rem] w-[5.25rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E88E5]/12 to-[#9C27B0]/12 text-[#1E88E5] [&_svg]:size-14">
                {mainIcon}
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
                  {pageTitle}
                </h1>
                <p className="text-xl text-gray-600 mt-2 max-w-2xl">
                  {pageDescription}
                </p>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {heroLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={heroLinkClassName}
                  >
                    <div className="w-8 h-8 bg-[#1E88E5] rounded-full flex items-center justify-center text-white text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <span className="font-medium">{link.name}</span>
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className={heroLinkClassName}>
                    <div className="w-8 h-8 bg-[#1E88E5] rounded-full flex items-center justify-center text-white text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Content */}
        <section className="py-16 bg-white">
          {children}
        </section>

        {/* Common CTA Section */}
        <section className="py-16 bg-[#F0F4F8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              {T(locale, solutionTemplateChrome.ctaTitle)}
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              {T(locale, solutionTemplateChrome.ctaSub)}
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all duration-300 transform hover:scale-105"
            >
              {T(locale, solutionTemplateChrome.ctaBtn)}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
