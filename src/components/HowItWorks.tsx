"use client";

import Link from "next/link";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 2H6.75C5.83 2 5 2.83 5 3.75V20.25C5 21.17 5.83 22 6.75 22H17.25C18.17 22 19 21.17 19 20.25V7.5L13.5 2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12V17" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12V17" />
      </svg>
    ),
    title: "1. 确认目标",
    subtitle: "价值地图梳理",
    description: "通过价值地图框架，识别供应链的关键价值节点与数字化机会点，明确数字化转型的业务目标与优先级。",
    href: "/value-map",
    color: "text-primary",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5a2.25 2.25 0 012.25-2.25H9m12 0h.008v.008H12V18.75zm-9 0H5.25a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 002.25 2.25h1.5m9-9h.008v.008H12V9zm-9 0H5.25a2.25 2.25 0 01-2.25-2.25V9h1.5m9 0h.008v.008H12V9z" />
      </svg>
    ),
    title: "2. 制定路线",
    subtitle: "实施路线图",
    description: "基于现状评估，制定分阶段实施路线图，从平台选型、系统集成到组织变革，明确每个里程碑的关键任务与交付物。",
    href: "/roadmap",
    color: "text-primary",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.09v1.044a2.25 2.25 0 01-.659 1.591l-5.482 5.482m0 0L11.5 11.5m-3.182.682L12 13.75m-2.25 2.25L8.25 13.75m9.75-9.75V2.25a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v11.25c0 .414.336.75.75.75h12a.75.75 0 00.75-.75z" />
      </svg>
    ),
    title: "3. 规避挑战",
    subtitle: "痛点指南",
    description: "识别供应链数字化过程中的四大核心挑战：组织阻力、数据孤岛、技术选型与持续运营，提供针对性解决方案。",
    href: "/challenges",
    color: "text-primary",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "4. 评估能力",
    subtitle: "健康度测评",
    description: "通过五个维度（战略、数据、技术、组织、流程）对企业供应链数字化能力进行全面评估，识别改进空间。",
    href: "/assessment",
    color: "text-primary",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-spacing bg-surface-container-low">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="display-sm text-on-surface mb-6">如何构建供应链数智化能力？</h2>
          <p className="body-lg text-on-surface/70">
            回答四个关键问题，找到您的数智化路径
          </p>
        </div>

        {/* Intentional Asymmetry - Offset Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Two-Column Layout */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {steps.slice(0, 2).map((step, index) => (
              <Link
                key={step.href}
                href={step.href}
                className="card glass elevate-low hover:elevate-high block group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-primary mb-2 block">{step.title}</span>
                    <h3 className="display-sm text-on-surface mb-3">{step.subtitle}</h3>
                    <p className="body-md text-on-surface/60 mb-4">{step.description}</p>
                    <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                      查看详情
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Side Column - Offset */}
          <div className="lg:mt-12">
            <div className="grid gap-6">
              {steps.slice(2).map((step, index) => (
                <Link
                  key={step.href}
                  href={step.href}
                  className="card glass elevate-low hover:elevate-high block group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-bold text-primary mb-2 block">{step.title}</span>
                      <h3 className="display-sm text-on-surface mb-2">{step.subtitle}</h3>
                      <p className="body-md text-on-surface/60 line-clamp-2">{step.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Insights Section - Tonal Layering */}
        <div className="mt-20 glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="display-sm text-on-surface mb-4">采购与供应链人都在关注</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "如何用 AI 快速筛选供应商资质？",
                "SRM 选型避坑指南",
                "采购成本分析模板",
                "供应链风险评估框架",
                "数字化转型路线图"
              ].map((topic, index) => (
                <span
                  key={index}
                  className="glass-chip px-6 py-3 rounded-2xl"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link href="/community" className="btn-tertiary">
              前往社区交流
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
