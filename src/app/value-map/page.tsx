"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ValueMapPage() {
  const house = {
    roof: {
      title: "愿景与战略意图",
      desc: "企业为何要做数智化：客户价值、产业位置与增长假设。",
    },
    pillars: [
      { title: "客户与产品", desc: "产品组合、交付承诺与客户体验如何被供应链兑现。" },
      { title: "计划与履约", desc: "从需求刻画、S&OP 到排产、采购与物流的节奏一致。" },
      { title: "供应网络", desc: "供应商、外协、仓储与运力如何组成可依赖的网络。" },
      { title: "数据与合规", desc: "可信数据、追溯与风险边界，支撑决策而不是报表堆砌。" },
    ],
    foundation: [
      { title: "组织能力", desc: "跨职能协同、岗位技能与变革节奏。" },
      { title: "流程与制度", desc: "标准流程、例外升级与授权匹配。" },
      { title: "技术架构", desc: "系统分层、集成边界与可持续演进。" },
    ],
    tactics: [
      "把战略语言翻译成可执行的跨部门课题清单",
      "明确每条课题的责任主体、节奏与验收口径",
      "先对齐主流程与主数据，再扩展自动化与智能分析",
      "用试点闭环验证机制，再横向推广",
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                企业数智化目标确认
                <span className="text-[#1E88E5]">方法论</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                借鉴「战略屋」思路：先锁定愿景与战略意图，再落到若干支柱能力，
                分解为可执行的战术课题与组织、流程、技术底座，避免脱离业务的工具堆砌。
              </p>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
                本页以定性描述为主，便于管理层对齐语言；不承诺固定比例的提升数字。
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border-2 border-[#1E88E5]/30 bg-white p-8 shadow-lg">
                <div className="rounded-xl bg-gradient-to-br from-[#1E88E5] to-[#1565C0] text-white p-6 text-center mb-6">
                  <p className="text-sm uppercase tracking-widest opacity-90">顶层</p>
                  <h2 className="text-2xl font-bold mt-2">{house.roof.title}</h2>
                  <p className="mt-3 text-white/90 text-sm leading-relaxed">{house.roof.desc}</p>
                </div>

                <p className="text-center text-sm font-semibold text-gray-500 mb-4">战略支柱</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {house.pillars.map((p) => (
                    <div key={p.title} className="rounded-lg border border-gray-100 bg-[#F8FAFC] p-4">
                      <h3 className="font-bold text-[#1A1A1A] mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-sm font-semibold text-gray-500 mb-4">底座（组织 · 流程 · 技术）</p>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {house.foundation.map((f) => (
                    <div key={f.title} className="rounded-lg border border-dashed border-gray-200 p-4">
                      <h3 className="font-bold text-[#1A1A1A] text-sm mb-2">{f.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-[#FFF8E1] border border-[#FFCC80] p-6">
                  <h3 className="font-bold text-[#E65100] mb-3">从战略到战术的分解</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {house.tactics.map((t) => (
                      <li key={t} className="flex gap-2">
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
            <p className="text-gray-600 mb-6">
              需要结合贵司现场，把「战略屋」落成一份可沟通的路线图？
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all"
            >
              预约沟通
            </Link>
            <Link href="/roadmap" className="block mt-4 text-[#1E88E5] text-sm font-medium">
              查看阶段推进框架 →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
