"use client";

import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { getBnMvpProductUrlForLocale } from "@/lib/bn-mvp-url";
import { solutionsHubStrings, type SolutionsHubServiceId } from "@/i18n/solutionsHub";
import { BarChart3, Briefcase, Handshake, Target, type LucideIcon } from "lucide-react";

const serviceIcons: Record<SolutionsHubServiceId, React.ReactNode> = {
  consulting: (
    <svg className="w-7 h-7 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  implementation: (
    <svg className="w-7 h-7 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  ),
  software: (
    <svg className="w-7 h-7 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "tech-services": (
    <svg className="w-7 h-7 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
    </svg>
  ),
  "ai-services": (
    <svg className="w-7 h-7 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  "procurement-services": (
    <svg className="w-7 h-7 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  talent: (
    <svg className="w-7 h-7 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  platform: (
    <svg className="w-7 h-7 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  ),
};

export default function SolutionsHubClient() {
  const { locale } = useSiteLocale();
  const s = solutionsHubStrings(locale);
  const bnMvpUrl = getBnMvpProductUrlForLocale(locale);

  const whyIcons: LucideIcon[] = [Target, Briefcase, BarChart3, Handshake];

  return (
    <div className="min-h-screen">
      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                {s.heroLine1}
                <span className="text-[#1E88E5]">{s.heroLine1Accent}</span>
              </h1>
              <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
                {s.heroSub1}
                <br />
                {s.heroSub2}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {s.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center"
                >
                  <div className="text-4xl font-bold text-[#1E88E5] mb-2">{stat.value}</div>
                  <div className="text-[#666666]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.gridTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {s.services.map((service) => {
                const cardClass =
                  "group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2";
                const inner = (
                  <>
                    <div className="bg-[#F0F4F8] p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                          {serviceIcons[service.id]}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">{service.title}</h3>
                          <p className="text-[#666666] text-sm">{service.subtitle}</p>
                          {service.badge ? (
                            <span className="inline-block mt-2 px-3 py-1 bg-[#1E88E5] text-white text-xs font-medium rounded-full">
                              {service.badge}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-[#F5F5F5]">
                      <h4 className="font-semibold text-[#1A1A1A] mb-3">{s.coverageTitle}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.details.map((detail, index) => (
                          <div key={index} className="flex items-center text-sm text-[#666666]">
                            <svg
                              className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {detail}
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center text-[#1E88E5] font-medium">
                        {s.learnMore}
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                );

                if (service.id === "platform" && bnMvpUrl) {
                  return (
                    <div key={service.id} className={cardClass}>
                      <Link href={service.href} className="block">
                        {inner}
                      </Link>
                      <div className="px-6 pb-6 border-t border-gray-200 bg-[#F5F5F5]">
                        <a
                          href={bnMvpUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full justify-center items-center gap-2 rounded-lg bg-[#1E88E5] text-white py-3 text-sm font-semibold hover:bg-[#1565C0] transition-colors"
                        >
                          {s.openExchange}
                        </a>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link key={service.id} href={service.href} className={cardClass}>
                    {inner}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.whyTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {s.whyItems.map((item, index) => {
                const ItemIcon = whyIcons[index]!;
                return (
                  <div
                    key={item.title}
                    className="text-center bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                      <ItemIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#666666]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">{s.ctaTitle}</h2>
            <p className="text-[#666666] mb-8 max-w-xl mx-auto">{s.ctaSub}</p>
            <Link
              href="/connect"
              className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all duration-300 transform hover:scale-105"
            >
              {s.ctaBtn}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
