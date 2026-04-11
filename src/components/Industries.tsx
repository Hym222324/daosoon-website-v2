"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Factory, Cog, Sprout, Building2, type LucideIcon } from "lucide-react";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { industriesSection as ind } from "@/i18n/home";

export default function Industries() {
  const { locale } = useSiteLocale();
  const t = (b: (typeof ind)[keyof typeof ind]) => T(locale, b);

  const industries = useMemo(
    () =>
      [
        {
          Icon: Factory,
          title: t(ind.discreteTitle),
          pain: t(ind.discretePain),
          solution: t(ind.discreteSol),
          href: "/cases",
          caseLabel: t(ind.caseLabel),
        },
        {
          Icon: Cog,
          title: t(ind.processTitle),
          pain: t(ind.processPain),
          solution: t(ind.processSol),
          href: "/process-manufacturing",
        },
        {
          Icon: Sprout,
          title: t(ind.agTitle),
          pain: t(ind.agPain),
          solution: t(ind.agSol),
          href: "/agriculture",
        },
        {
          Icon: Building2,
          title: t(ind.otherTitle),
          pain: t(ind.otherPain),
          solution: t(ind.otherSol),
          href: "/connect",
          caseLabel: t(ind.contactLabel),
        },
      ] as {
        Icon: LucideIcon;
        title: string;
        pain: string;
        solution: string;
        href: string;
        caseLabel?: string;
      }[],
    [locale],
  );

  return (
    <section id="insights" className="section-spacing bg-[#F0F4F8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            {t(ind.title)}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map(({ Icon, href, title, pain, solution, caseLabel }) => (
            <Link
              key={href + title}
              href={href}
              className="bg-white p-6 rounded-xl card-hover cursor-pointer flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5] mb-3">
                <Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p className="text-[#666666] text-sm mb-3 flex-1">{pain}</p>
              <p className="text-sm text-[#1E88E5] mb-2">{solution}</p>
              {caseLabel ? (
                <span className="text-xs font-medium text-[#FF9800]">{caseLabel} →</span>
              ) : null}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/connect"
            className="bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all inline-block"
          >
            {t(ind.ctaExpert)}
          </Link>
        </div>
      </div>
    </section>
  );
}
