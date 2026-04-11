"use client";

import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { valueMapStrings } from "@/i18n/valueMapPage";

export default function ValueMapClient() {
  const { locale } = useSiteLocale();
  const s = valueMapStrings(locale);

  return (
    <div className="min-h-screen">
      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                {s.h1Main}
                <span className="text-[#1E88E5]">{s.h1Accent}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {s.heroP1}
              </p>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">{s.heroP2}</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border-2 border-[#1E88E5]/30 bg-white p-8 shadow-lg">
                <div className="rounded-xl bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white p-6 text-center mb-6">
                  <p className="text-sm uppercase tracking-widest opacity-90">{s.labelTop}</p>
                  <h2 className="text-2xl font-bold mt-2">{s.roofTitle}</h2>
                  <p className="mt-3 text-white/90 text-sm leading-relaxed">{s.roofDesc}</p>
                </div>

                <p className="text-center text-sm font-semibold text-gray-500 mb-4">
                  {s.labelPillars}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {s.pillars.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-lg border border-gray-100 bg-[#F8FAFC] p-4"
                    >
                      <h3 className="font-bold text-[#1A1A1A] mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-sm font-semibold text-gray-500 mb-4">
                  {s.labelFoundation}
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {s.foundation.map((f) => (
                    <div
                      key={f.title}
                      className="rounded-lg border border-dashed border-gray-200 p-4"
                    >
                      <h3 className="font-bold text-[#1A1A1A] text-sm mb-2">{f.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-[#FFF8E1] border border-[#FFCC80] p-6">
                  <h3 className="font-bold text-[#E65100] mb-3">{s.tacticsTitle}</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {s.tactics.map((t, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#FF9800]">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 mb-6">{s.ctaLine}</p>
            <Link
              href="/connect"
              className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all"
            >
              {s.ctaBtn}
            </Link>
            <Link href="/roadmap" className="block mt-4 text-[#1E88E5] text-sm font-medium">
              {s.ctaRoadmap}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
