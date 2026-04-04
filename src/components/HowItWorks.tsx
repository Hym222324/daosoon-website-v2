"use client";

import Link from "next/link";

const cards = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "如何确认目标？",
    subtitle: "确保新技术有效服务于业务目标",
    href: "/value-map",
    color: "from-[#1E88E5] to-[#1565C0]",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    ),
    title: "如何达成目标？",
    subtitle: "从规划到落地的完整路线图",
    href: "/roadmap",
    color: "from-[#9C27B0] to-[#7B1FA2]",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "会遇到哪些挑战？",
    subtitle: "三大核心挑战与应对策略",
    href: "/challenges",
    color: "from-[#FF9800] to-[#F57C00]",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "我们需要什么能力？",
    subtitle: "5 分钟自测成熟度",
    href: "/assessment",
    color: "from-[#1E88E5] to-[#1565C0]",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-spacing bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            如何构建供应链数智化能力？
          </h2>
          <p className="text-[#666666] text-lg">
            回答四个关键问题，找到您的数智化路径
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] card-hover cursor-pointer block"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                {card.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-[#666666] text-sm mb-4">{card.subtitle}</p>
              <span className={`text-gradient-to-r ${card.color} font-medium text-sm`}>
                查看详情 →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#666666] mb-3">采购与供应链人都在关注：</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {["如何用 AI 快速筛选供应商资质？", "SRM 选型避坑指南", "采购成本分析模板"].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 bg-[#F0F4F8] rounded-full text-sm text-[#1E88E5]"
              >
                {topic}
              </span>
            ))}
          </div>
          <Link href="/community" className="text-[#1E88E5] font-medium">
            前往社区 →
          </Link>
        </div>
      </div>
    </section>
  );
}
