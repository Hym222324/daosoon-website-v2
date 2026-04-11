"use client";

import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { aiServicesStrings } from "@/i18n/solution-ai-services";
import { solutionsHub } from "@/i18n/solutionsHub";
import {
  BarChart3,
  Bot,
  Brain,
  Clock,
  FileText,
  Lightbulb,
  MessageSquare,
  Scan,
  Target,
  type LucideIcon,
} from "lucide-react";

const capIcons: LucideIcon[] = [Scan, BarChart3, Brain, MessageSquare];
const serviceIcons: LucideIcon[] = [Lightbulb, BarChart3, Target, Clock, FileText, Bot];

export default function AIServicesPage() {
  const { locale } = useSiteLocale();
  const s = aiServicesStrings(locale);
  const capabilities = s.capabilities.map((c, i) => ({ ...c, icon: capIcons[i]! }));
  const services = s.services.map((sv, i) => ({ ...sv, icon: serviceIcons[i]! }));

  return (
    <SolutionTemplate
      pageTitle={s.pageTitle}
      pageDescription={s.pageDescription}
      mainIcon={<Bot className="size-14" strokeWidth={1.65} aria-hidden />}
      badge={T(locale, solutionsHub.aiBadge)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.capTitle}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {capabilities.map((cap, index) => {
            const CapIcon = cap.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                  <CapIcon className="h-8 w-8" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-600">{cap.desc}</p>
              </div>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.servicesTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
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

                <h4 className="font-semibold text-gray-700 mb-2">{s.serviceContentH}</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.services.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">{s.effectsH}</h4>
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.processTitle}</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {s.process.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center bg-[#9C27B0] text-white w-12 h-12 rounded-full flex-shrink-0">
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

      <div className="bg-gradient-to-r from-[#9C27B0] to-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {s.stats.map((st, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{st.value}</div>
                <div className="text-purple-100">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
