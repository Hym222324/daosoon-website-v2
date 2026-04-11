"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useMemo } from "react";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { servicesSection as S } from "@/i18n/home";
import { getBnMvpProductUrlForLocale } from "@/lib/bn-mvp-url";

function tl(locale: "zh" | "en", key: keyof typeof S) {
  return T(locale, S[key]);
}

export default function Services() {
  const { locale } = useSiteLocale();
  const bnMvpUrl = useMemo(() => getBnMvpProductUrlForLocale(locale), [locale]);
  const t = (key: keyof typeof S) => tl(locale, key);

  const coreServices = useMemo(
    () =>
      [
        {
          icon: (
            <svg className="w-7 h-7 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ),
          title: t("core1Title"),
          subtitle: t("core1Sub"),
          body: t("core1Body"),
          tags: [t("tagProduct"), t("tagCustomer"), t("tagLogistics"), t("tagMfg"), t("tagProcurement"), t("tagFulfillment")],
          gradient: "from-[#1E88E5] to-[#1565C0]",
          href: "/solutions/consulting",
          actions: [
            { label: t("actionExpert"), href: "/connect" },
            { label: t("actionIntro"), href: "/solutions/consulting" },
            { label: t("actionCases"), href: "/cases" },
          ],
        },
        {
          icon: (
            <svg className="w-7 h-7 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          ),
          title: t("core2Title"),
          subtitle: t("core2Sub"),
          body: t("core2Body"),
          tags: [t("tagAps"), t("tagErp"), t("tagSrm"), t("tagMom"), t("tagTms")],
          gradient: "from-[#FF9800] to-[#F57C00]",
          href: "/solutions/implementation",
          actions: [] as { label: string; href: string }[],
        },
        {
          icon: (
            <svg className="w-7 h-7 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          ),
          title: t("core3Title"),
          subtitle: t("core3Sub"),
          body: t("core3Body"),
          tags: [t("tagRd"), t("tagBiz"), t("tagTools")],
          gradient: "from-[#9C27B0] to-[#7B1FA2]",
          href: "/solutions/software",
          actions: [] as { label: string; href: string }[],
        },
      ],
    [locale],
  );

  const extendedServices = useMemo(
    () =>
      [
        {
          icon: (
            <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
            </svg>
          ),
          title: t("extTechTitle"),
          description: t("extTechDesc"),
          href: "/solutions/tech-services",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ),
          title: t("extAiTitle"),
          description: t("extAiDesc"),
          href: "/solutions/ai-services",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          ),
          title: t("extProcTitle"),
          description: t("extProcDesc"),
          href: "/solutions/procurement-services",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          ),
          title: t("extTalentTitle"),
          description: t("extTalentDesc"),
          href: "/solutions/talent",
        },
        {
          icon: (
            <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          ),
          title: t("extPlatformTitle"),
          description: t("extPlatformDesc"),
          href: "/solutions/platform",
        },
      ] as { icon: ReactNode; title: string; description: string; href: string }[],
    [locale],
  );

  return (
    <section id="services" className="section-spacing bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">{t("title")}</h2>
          <p className="text-[#666666] text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {coreServices.map((service) => (
            <div
              key={service.href}
              className="bg-[#F0F4F8] p-6 rounded-xl border-2 border-transparent hover:border-[#1E88E5] transition-colors"
            >
              <Link href={service.href} className="block card-hover cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1E88E5]/10 to-[#9C27B0]/10 rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-[#666666] text-sm mb-2">{service.subtitle}</p>
                <p className="text-[#666666] text-sm mb-3 leading-relaxed">{service.body}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 rounded text-xs text-[#666666]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[#1E88E5] font-medium">{t("learnMore")}</span>
              </Link>
              {service.actions.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-200 pt-4">
                  {service.actions.map((a) => (
                    <Link
                      key={a.href + a.label}
                      href={a.href}
                      className="text-xs font-medium text-[#1E88E5] hover:underline"
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {extendedServices.map((service) => {
            const isPlatform = service.href === "/solutions/platform";
            if (isPlatform && bnMvpUrl) {
              return (
                <div
                  key={service.href}
                  className="bg-[#F5F5F5] p-4 rounded-lg flex flex-col gap-3 text-left border-2 border-transparent hover:border-[#1E88E5] transition-colors"
                >
                  <Link href={service.href} className="flex flex-col gap-2 card-hover cursor-pointer flex-1 min-h-0">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <h4 className="font-medium text-sm text-[#1A1A1A]">{service.title}</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">{service.description}</p>
                  </Link>
                  <a
                    href={bnMvpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-center text-xs font-semibold text-white bg-[#1E88E5] hover:bg-[#1565C0] py-2.5 rounded-lg transition-colors"
                  >
                    {t("openExchange")}
                  </a>
                </div>
              );
            }
            return (
              <Link
                key={service.href}
                href={service.href}
                className="bg-[#F5F5F5] p-4 rounded-lg card-hover cursor-pointer flex flex-col gap-2 text-left"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <h4 className="font-medium text-sm text-[#1A1A1A]">{service.title}</h4>
                <p className="text-xs text-[#666666] leading-relaxed">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
