"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { platformStrings } from "@/i18n/solution-platform";
import { solutionsHub } from "@/i18n/solutionsHub";
import { getBnMvpProductUrlForLocale } from "@/lib/bn-mvp-url";
import {
  Building2,
  Database,
  Globe,
  Handshake,
  Link2,
  Zap,
  type LucideIcon,
} from "lucide-react";

const platformIcons: LucideIcon[] = [Zap, Link2, Globe, Database];
const networkIcons: LucideIcon[] = [Building2, Handshake, Link2, Building2];

export default function PlatformPage() {
  const { locale } = useSiteLocale();
  const s = platformStrings(locale);
  const bnMvpUrl = getBnMvpProductUrlForLocale(locale);
  const platformServices = s.platformServices.map((ps, i) => ({ ...ps, icon: platformIcons[i]! }));
  const networkTypes = s.networkTypes.map((n, i) => ({ ...n, icon: networkIcons[i]! }));

  return (
    <SolutionTemplate
      pageTitle={s.pageTitle}
      pageDescription={s.pageDescription}
      mainIcon={<Link2 className="size-14" strokeWidth={1.65} aria-hidden />}
      badge={T(locale, solutionsHub.badgeVipService)}
      extraHeroLinks={
        bnMvpUrl ? [{ name: s.openTradingDemo, href: bnMvpUrl, external: true }] : []
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.coreServicesTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {platformServices.map((service, index) => {
            const SvcIcon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}
                  >
                    <SvcIcon className="h-6 w-6" strokeWidth={2} aria-hidden />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">{s.capabilitiesHeading}</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">{s.effectsHeading}</h4>
                <div className="space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-sm text-gray-600">
                      • {benefit}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.integrationTitle}</h2>

        <div className="bg-gray-50 rounded-xl p-8">
          <p className="text-gray-600 text-center mb-6">{s.integrationIntro}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {s.integrationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow">
                <div className="text-lg font-medium text-[#1A1A1A]">{type}</div>
                <div className="text-sm text-green-600 mt-1">{s.supported}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.networkTitle}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {networkTypes.map((network, index) => {
              const NetIcon = network.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                    <NetIcon className="h-8 w-8" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="text-lg font-bold text-[#1E88E5] mb-2">{network.headline}</div>
                  <div className="font-medium text-[#1A1A1A] mb-1">{network.type}</div>
                  <div className="text-sm text-gray-600">{network.desc}</div>
                </div>
              );
            })}
          </div>

          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.processTitle}</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {s.process.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center bg-[#1E88E5] text-white w-12 h-12 rounded-full flex-shrink-0">
                  <span className="font-bold">{item.step}</span>
                </div>
                <div className="ml-3 text-center">
                  <div className="font-bold text-[#1A1A1A]">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
                {index < s.process.length - 1 && (
                  <svg className="w-6 h-6 text-gray-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {s.successMetrics.map((metric, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-blue-100">{metric.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#9C27B0] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{s.ctaTitle}</h2>
          <p className="text-purple-100 mb-8 max-w-xl mx-auto">{s.ctaSub}</p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            {bnMvpUrl ? (
              <a
                href={bnMvpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                {s.openTradingDemo}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : null}
            <Link
              href="/connect"
              className="inline-flex items-center bg-white text-[#9C27B0] px-8 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              {s.bookDemo}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
