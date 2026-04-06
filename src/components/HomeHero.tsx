"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeHero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Layering - Tonal Layering Principle */}
      <div className="absolute inset-0 bg-surface"></div>

      {/* Gradient Ambient Light - 135-degree angle */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>

      {/* Decorative Glass Elements - Glassmorphism */}
      <div className="absolute top-20 left-10 w-72 h-72 glass rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 glass rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content - Intentional Asymmetry */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <span className="glass-chip mb-4 inline-block">端到端供应链 AI 应用服务商</span>
            </div>

            <h1 className="display-lg text-on-surface mb-6 leading-tight">
              为制造企业构建<span className="text-primary block mt-2">智能协同网络</span>
            </h1>

            <p className="body-lg text-on-surface mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AI 驱动的供应协同平台与 SRM 实施服务，帮助您降低采购成本 30%+
              <span className="block text-surface-container-high mt-2">提升协同效率，实现供应链敏捷性与韧性</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
              <Link
                href="/connect"
                className="btn-primary"
              >
                预约演示
              </Link>
              <Link
                href="/solutions"
                className="btn-tertiary"
              >
                探索解决方案
              </Link>
            </div>

            {/* Trust Indicators - Tonal Layering */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-on-surface/60 text-sm font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>核心团队 20 年行业经验</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>服务头部制造客户</span>
              </div>
            </div>
          </div>

          {/* Visual Element - 3D Layering */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              {/* Main Glass Card */}
              <div className="glass rounded-3xl p-8 shadow-ambient relative z-10 border border-surface-container-high/10">
                <div className="grid grid-cols-2 gap-6">
                  {/* Feature Card 1 */}
                  <div className="glass rounded-2xl p-4 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-on-surface font-display">30%+</div>
                    <div className="text-xs text-on-surface/60 mt-1">成本降低</div>
                  </div>

                  {/* Feature Card 2 */}
                  <div className="glass rounded-2xl p-4 text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-on-surface font-display">50%+</div>
                    <div className="text-xs text-on-surface/60 mt-1">效率提升</div>
                  </div>

                  {/* Feature Card 3 */}
                  <div className="glass rounded-2xl p-4 text-center">
                    <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-on-surface font-display">100%</div>
                    <div className="text-xs text-on-surface/60 mt-1">数据安全</div>
                  </div>

                  {/* Feature Card 4 */}
                  <div className="glass rounded-2xl p-4 text-center">
                    <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-on-surface font-display">24/7</div>
                    <div className="text-xs text-on-surface/60 mt-1">实时监控</div>
                  </div>
                </div>
              </div>

              {/* Decorative element - Overlapping */}
              <div className="absolute -bottom-6 -right-6 w-full h-32 bg-gradient-to-t from-surface-container-low to-transparent rounded-b-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-on-surface/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
