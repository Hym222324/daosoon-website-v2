"use client";

import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { consultingStrings } from "@/i18n/solution-consulting";
import { solutionsHub } from "@/i18n/solutionsHub";
import { T } from "@/i18n/core";
import {
  BarChart3,
  ClipboardList,
  Target,
  UserRound,
  type LucideIcon,
} from "lucide-react";

const capabilityIcons: LucideIcon[] = [Target, ClipboardList, UserRound, BarChart3];

export default function ConsultingPage() {
  const { locale } = useSiteLocale();
  const s = consultingStrings(locale);
  const services = s.services;
  const capabilities = s.capabilities.map((c, i) => ({
    ...c,
    icon: capabilityIcons[i]!,
  }));
  const useCases = s.useCases;
  const testimonials = s.testimonials;

  return (
    <SolutionTemplate
      pageTitle={s.pageTitle}
      pageDescription={s.pageDescription}
      mainIcon={
        <ClipboardList className="size-14" strokeWidth={1.65} aria-hidden />
      }
      badge={T(locale, solutionsHub.hot)}
    >
      {/* Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">{s.capTitle}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{s.capSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => {
            const CapIcon = cap.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                  <CapIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-600">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.coreTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#1E88E5] text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.useCaseTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow">
              <div className="text-sm text-[#1E88E5] font-medium mb-2">
                {useCase.industry}
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-4">{useCase.challenge}</h3>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{s.solutionLabel}</span>
                  {useCase.solution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.testimonialTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="text-sm text-gray-500">
                  <div className="font-medium text-[#1A1A1A]">{testimonial.company}</div>
                  <div>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
