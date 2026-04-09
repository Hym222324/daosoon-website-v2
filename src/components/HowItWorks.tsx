"use client";

import Link from "next/link";
import {
  ClipboardCheck,
  Flag,
  ListChecks,
  Route,
  type LucideIcon,
} from "lucide-react";

const cards: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  href: string;
  color: string;
}[] = [
  {
    icon: Flag,
    title: "如何确认目标？",
    subtitle: "从战略到战术拆解，对齐数智化目标",
    href: "/value-map",
    color: "from-[#1E88E5] to-[#1565C0]",
  },
  {
    icon: Route,
    title: "如何达成目标？",
    subtitle: "数据、流程、组织、制度、决策的分阶段推进",
    href: "/roadmap",
    color: "from-[#9C27B0] to-[#7B1FA2]",
  },
  {
    icon: ClipboardCheck,
    title: "80% 企业遇到这些挑战",
    subtitle: "端到端供应链共性难题（定性描述，详情持续修订）",
    href: "/challenges",
    color: "from-[#FF9800] to-[#F57C00]",
  },
  {
    icon: ListChecks,
    title: "我们需要什么能力？",
    subtitle: "能力成熟度自测清单（持续迭代中）",
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
                <span className="text-[#1E88E5] font-medium text-sm">
                  查看详情 →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="text-center rounded-2xl bg-white px-6 py-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          <p className="text-[#666666] mb-3">采购与供应链人都在关注：</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {[
              "如何用 AI 快速筛选供应商资质？",
              "SRM 选型避坑指南",
              "采购成本分析模板",
            ].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 bg-[#F0F4F8] rounded-full text-sm text-[#1E88E5]"
              >
                {topic}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#666666] mb-3 max-w-2xl mx-auto leading-relaxed">
            供应链论坛（类 Reddit）：个人可通过 Gmail、GitHub、手机、邮箱、QQ 或微信注册；
            支持发帖、评论与转发；企业可发布通知与活动预告。论坛建设持续推进中。
          </p>
          <Link href="/forum" className="text-[#1E88E5] font-medium">
            前往论坛 →
          </Link>
        </div>
      </div>
    </section>
  );
}
