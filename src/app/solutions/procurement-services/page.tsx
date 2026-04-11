"use client";

import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { procurementStrings } from "@/i18n/solution-procurement";
import { solutionsHub } from "@/i18n/solutionsHub";
import {
  BarChart3,
  Handshake,
  Package,
  Search,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

const icons: LucideIcon[] = [Search, ShoppingCart, Handshake, BarChart3];

export default function ProcurementServicesPage() {
  const { locale } = useSiteLocale();
  const s = procurementStrings(locale);
  const services = s.services.map((sv, i) => ({ ...sv, icon: icons[i]! }));

  return (
    <SolutionTemplate
      pageTitle={s.pageTitle}
      pageDescription={s.pageDescription}
      mainIcon={<Package className="size-14" strokeWidth={1.65} aria-hidden />}
      badge={T(locale, solutionsHub.badgeProfessional)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.sectionServices}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const SvcIcon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#1E88E5] rounded-lg flex items-center justify-center text-white">
                    <SvcIcon className="h-7 w-7" strokeWidth={2} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">{s.serviceFunctionsH}</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
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
                      {feature}
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">{s.appEffectsH}</h4>
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

        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.sectionProcess}</h2>

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
                <svg
                  className="w-6 h-6 text-gray-400 hidden md:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.vsTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{s.traditionalTitle}</h3>
              <p className="text-gray-600 mb-4">{s.traditionalDesc}</p>
              <div className="space-y-2">
                {s.traditionalIssues.map((issue, idx) => (
                  <div key={idx} className="flex items-center text-red-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {issue}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow border-2 border-[#1E88E5]">
              <h3 className="text-xl font-bold text-[#1E88E5] mb-4">{s.daosoonColumn}</h3>
              <p className="text-gray-600 mb-4">{s.modernDesc}</p>
              <div className="space-y-2">
                {s.modernBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {s.bottomStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
