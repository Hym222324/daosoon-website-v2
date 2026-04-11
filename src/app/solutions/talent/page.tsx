"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { talentStrings } from "@/i18n/solution-talent";
import { solutionsHub } from "@/i18n/solutionsHub";
import {
  Briefcase,
  GraduationCap,
  UserSearch,
  Users,
  type LucideIcon,
} from "lucide-react";

const serviceIcons: LucideIcon[] = [GraduationCap, UserSearch, Users, Briefcase];

export default function TalentPage() {
  const { locale } = useSiteLocale();
  const s = talentStrings(locale);
  const services = s.services.map((sv, i) => ({ ...sv, icon: serviceIcons[i]! }));

  return (
    <SolutionTemplate
      pageTitle={s.pageTitle}
      pageDescription={s.pageDescription}
      mainIcon={<Users className="size-14" strokeWidth={1.65} aria-hidden />}
      badge={T(locale, solutionsHub.badgeProService)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
          {s.intro}
        </p>
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.matrixTitle}</h2>

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

                <h4 className="font-semibold text-gray-700 mb-2">{s.offeringsH}</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.offerings.map((offering, idx) => (
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
                      {offering}
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">{s.benefitsH}</h4>
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

        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.pathsTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {s.trainingPaths.map((path, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl p-6 text-white"
            >
              <div className="text-sm opacity-80 mb-2">{path.duration}</div>
              <h3 className="text-xl font-bold mb-4">{path.level}</h3>
              <div className="text-lg font-semibold mb-4">{path.role}</div>
              <div className="text-sm opacity-90">{path.topicsLine}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {s.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-[#1E88E5] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.feedbackTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {s.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="text-sm text-gray-500">
                <div className="font-medium text-[#1A1A1A]">{testimonial.name}</div>
                <div>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-4xl font-bold mb-4">{s.ctaBig}</div>
          <div className="text-xl mb-8">{s.ctaSub}</div>
          <Link
            href="/connect"
            className="inline-flex items-center bg-white text-[#1E88E5] px-8 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            {s.ctaBtn}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </SolutionTemplate>
  );
}
