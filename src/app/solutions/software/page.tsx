"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import {
  softwareStrings,
  type SoftwareTagKind,
} from "@/i18n/solution-software";
import { solutionsHub } from "@/i18n/solutionsHub";
import {
  Bot,
  Database,
  LineChart,
  Lightbulb,
  Link2,
  Monitor,
  Rocket,
  Target,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const productIcons: LucideIcon[] = [Link2, Target, LineChart, TrendingUp, Wallet, Database];

const principleWrap = [
  "from-[#1E88E5] to-[#1565C0]",
  "from-[#9C27B0] to-[#7B1FA2]",
  "from-[#FF9800] to-[#F57C00]",
] as const;
const principleIcons = [Rocket, Bot, Lightbulb] as const;

const tagClass: Record<SoftwareTagKind, string> = {
  core: "bg-[#1E88E5] text-white",
  ai: "bg-[#9C27B0] text-white",
  mgmt: "bg-green-500 text-white",
  tool: "bg-[#FF9800] text-white",
  data: "bg-blue-500 text-white",
};

export default function SoftwarePage() {
  const { locale } = useSiteLocale();
  const s = softwareStrings(locale);
  const products = s.products.map((p, i) => ({ ...p, icon: productIcons[i]! }));

  return (
    <SolutionTemplate
      pageTitle={s.pageTitle}
      pageDescription={s.pageDescription}
      mainIcon={<Monitor className="size-14" strokeWidth={1.65} aria-hidden />}
      badge={T(locale, solutionsHub.new)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.principlesTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {s.principles.map((pr, i) => {
            const PrIcon = principleIcons[i]!;
            const grad = principleWrap[i]!;
            return (
              <div key={pr.title} className={`bg-gradient-to-br ${grad} rounded-xl p-6 text-white`}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <PrIcon className="h-7 w-7 text-white" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-xl font-bold mb-2">{pr.title}</h3>
                <p className="text-sm opacity-90">{pr.body}</p>
              </div>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">{s.matrixTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const ProductIcon = product.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                      <ProductIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A]">{product.title}</h3>
                      <span className="text-xs text-gray-500">{product.description}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${tagClass[product.tagKind]}`}>
                    {product.tag}
                  </span>
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">{s.featuresH}</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-700 mb-2">{s.effectsH}</h4>
                <div className="space-y-1">
                  {product.benefits.map((benefit, idx) => (
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

      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-lg text-blue-50 mb-6">{s.footerNote}</p>
          <Link
            href="/connect"
            className="inline-flex items-center bg-white text-[#1E88E5] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {s.footerBtn}
          </Link>
        </div>
      </div>
    </SolutionTemplate>
  );
}
