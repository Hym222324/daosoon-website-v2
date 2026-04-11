"use client";

import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { techServicesStrings } from "@/i18n/solution-tech-services";
import { solutionsHub } from "@/i18n/solutionsHub";
import { Cloud, Settings, TrendingUp, Wrench, type LucideIcon } from "lucide-react";

const pillarIcons: LucideIcon[] = [Wrench, Cloud, TrendingUp];

export default function TechServicesPage() {
  const { locale } = useSiteLocale();
  const s = techServicesStrings(locale);
  const pillars = s.pillars.map((p, i) => ({ ...p, icon: pillarIcons[i]! }));

  return (
    <SolutionTemplate
      pageTitle={s.pageTitle}
      pageDescription={s.pageDescription}
      mainIcon={<Settings className="size-14" strokeWidth={1.65} aria-hidden />}
      badge={T(locale, solutionsHub.badgeFoundation)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => {
            const PillarIcon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 shadow border border-gray-100"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                  <PillarIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">{p.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {p.items.map((t, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#1E88E5]">•</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-[#F0F4F8] rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{s.boxTitle}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{s.boxP1}</p>
          <p className="text-sm text-gray-600">{s.boxP2}</p>
        </div>
      </div>
    </SolutionTemplate>
  );
}
