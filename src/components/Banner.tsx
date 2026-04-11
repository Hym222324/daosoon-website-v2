"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { bannerSection as b } from "@/i18n/home";

export default function Banner() {
  const { locale } = useSiteLocale();
  const t = (key: keyof typeof b) => T(locale, b[key]);

  const connectCards = useMemo(
    () => [
      {
        title: t("card1Title"),
        subtitle: t("card1Sub"),
        primary: t("card1Primary"),
        secondary: t("card1Secondary"),
      },
      {
        title: t("card2Title"),
        subtitle: t("card2Sub"),
        primary: t("card2Primary"),
        secondary: t("card2Secondary"),
      },
      {
        title: t("card3Title"),
        subtitle: t("card3Sub"),
        primary: t("card3Primary"),
        secondary: t("card3Secondary"),
      },
      {
        title: t("card4Title"),
        subtitle: t("card4Sub"),
        primary: t("card4Primary"),
        secondary: t("card4Secondary"),
      },
    ],
    [locale],
  );

  return (
    <section
      id="connect"
      className="section-spacing relative overflow-hidden text-[#1A1A1A] bg-[#EAF4FF]"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {connectCards.map((card) => (
            <div
              key={card.title}
              className="bg-white/90 p-6 rounded-xl card-hover cursor-pointer border border-[#D5E7FB] shadow-sm"
            >
              <h3 className="font-bold text-xl mb-2">{card.title}</h3>
              <p className="text-[#5B6473] text-sm mb-4">{card.subtitle}</p>
              <Link
                href="/connect"
                className="block bg-[#FF9800] text-white text-center px-6 py-2 rounded-lg font-medium hover:bg-[#F57C00] transition-all mb-2"
              >
                {card.primary}
              </Link>
              <Link
                href="/connect"
                className="block text-[#5B6473] text-sm text-center hover:text-[#1A1A1A] transition-colors"
              >
                {card.secondary}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
