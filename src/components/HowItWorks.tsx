"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  ClipboardCheck,
  Flag,
  ListChecks,
  Route,
  type LucideIcon,
} from "lucide-react";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { howItWorks as h } from "@/i18n/home";

export default function HowItWorks() {
  const { locale } = useSiteLocale();
  const t = (b: (typeof h)[keyof typeof h]) => T(locale, b);

  const cards = useMemo(
    () =>
      [
        {
          icon: Flag,
          title: t(h.card1Title),
          subtitle: t(h.card1Sub),
          href: "/value-map",
          color: "from-[#1E88E5] to-[#1565C0]",
        },
        {
          icon: Route,
          title: t(h.card2Title),
          subtitle: t(h.card2Sub),
          href: "/roadmap",
          color: "from-[#9C27B0] to-[#7B1FA2]",
        },
        {
          icon: ClipboardCheck,
          title: t(h.card3Title),
          subtitle: t(h.card3Sub),
          href: "/challenges",
          color: "from-[#FF9800] to-[#F57C00]",
        },
        {
          icon: ListChecks,
          title: t(h.card4Title),
          subtitle: t(h.card4Sub),
          href: "/assessment",
          color: "from-[#1E88E5] to-[#1565C0]",
        },
      ] as {
        icon: LucideIcon;
        title: string;
        subtitle: string;
        href: string;
        color: string;
      }[],
    [locale],
  );

  const topics = useMemo(
    () => [t(h.topic1), t(h.topic2), t(h.topic3)],
    [locale],
  );

  return (
    <section className="section-spacing bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            {t(h.sectionTitle)}
          </h2>
          <p className="text-[#666666] text-lg">{t(h.sectionSub)}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] card-hover cursor-pointer block"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mb-4 text-white`}
                >
                  <Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-[#666666] text-sm mb-4">{card.subtitle}</p>
                <span className="text-[#1E88E5] font-medium text-sm">{t(h.viewDetails)}</span>
              </Link>
            );
          })}
        </div>

        <div className="text-center rounded-2xl bg-white px-6 py-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          <p className="text-[#666666] mb-3">{t(h.topicsLead)}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 bg-[#F0F4F8] rounded-full text-sm text-[#1E88E5]"
              >
                {topic}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#666666] mb-3 max-w-2xl mx-auto leading-relaxed">
            {t(h.forumBlurb)}
          </p>
          <Link href="/forum" className="text-[#1E88E5] font-medium">
            {t(h.forumLink)}
          </Link>
        </div>
      </div>
    </section>
  );
}
