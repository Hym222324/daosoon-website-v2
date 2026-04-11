"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { implementationStrings } from "@/i18n/solution-implementation";
import { solutionsHub } from "@/i18n/solutionsHub";
import {
  Briefcase,
  CalendarDays,
  Factory,
  Handshake,
  Package,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const implIcons: LucideIcon[] = [CalendarDays, Handshake, Package, Truck, Factory, Briefcase];

export default function ImplementationPage() {
  const { locale } = useSiteLocale();
  const s = implementationStrings(locale);
  const implementations = s.implementations.map((impl, i) => ({ ...impl, icon: implIcons[i]! }));

  return (
    <SolutionTemplate
      pageTitle={s.pageTitle}
      pageDescription={s.pageDescription}
      mainIcon={<Wrench className="size-14" strokeWidth={1.65} aria-hidden />}
      badge={T(locale, solutionsHub.badgeProfessional)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.processTitle}</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {s.process.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center bg-[#1E88E5] text-white w-16 h-16 rounded-xl flex-shrink-0">
                <span className="text-2xl font-bold">{item.step}</span>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-[#1A1A1A]">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
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
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.coreTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementations.map((impl, index) => {
              const ImplIcon = impl.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                      <ImplIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{impl.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-4">{impl.description}</p>

                  <h4 className="font-semibold text-gray-700 mb-2">{s.benefitsHeading}</h4>
                  <ul className="space-y-2 mb-4">
                    {impl.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/connect" className="inline-flex items-center text-[#1E88E5] font-medium">
                    {s.learnMore}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {s.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
