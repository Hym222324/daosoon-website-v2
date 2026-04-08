"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Database, Handshake, Settings, Users, type LucideIcon } from "lucide-react";
import { metadata } from "./metadata";

export default function ChallengesPage() {
  const challenges: {
    category: string;
    icon: LucideIcon;
    title: string;
    description: string;
    painPoints: string[];
    solutions: string[];
  }[] = [
    {
      category: "业务协同挑战",
      icon: Handshake,
      title: "业务协同难",
      description: "跨部门、跨企业协同效率低",
      painPoints: [
        "部门墙严重，信息孤岛普遍",
        "供应商响应慢，协同周期长",
        "需求变化快，响应跟不上",
        "流程标准化程度低",
      ],
      solutions: [
        "AI 智能协同平台，打破信息壁垒",
        "供应商自助门户，实时协同",
        "需求预测模型，提前响应",
        "标准化流程引擎，快速部署",
      ],
    },
    {
      category: "技术难点",
      icon: Settings,
      title: "技术落地难",
      description: "系统集成复杂，AI 落地困难",
      painPoints: [
        "遗留系统多，接口复杂",
        "数据标准不统一",
        "AI 算法落地难",
        "系统性能瓶颈",
      ],
      solutions: [
        "低代码集成平台，快速对接",
        "数据标准中间件，统一格式",
        "预训练 AI 模型，开箱即用",
        "云原生架构，弹性扩展",
      ],
    },
    {
      category: "数据孤岛",
      icon: Database,
      title: "数据质量差",
      description: "数据分散，质量参差不齐",
      painPoints: [
        "数据分散在多个系统",
        "数据质量不一致",
        "缺少数据治理",
        "数据分析能力弱",
      ],
      solutions: [
        "统一数据湖，集中管理",
        "AI 数据清洗，自动修正",
        "数据治理平台，规范管理",
        "智能分析引擎，深度洞察",
      ],
    },
    {
      category: "组织变革",
      icon: Users,
      title: "组织变革难",
      description: "人员适应慢，变革阻力大",
      painPoints: [
        "员工抵触新技术",
        "缺少数字化人才",
        "变革管理不足",
        "效果难以量化",
      ],
      solutions: [
        "用户友好设计，降低门槛",
        "专业培训体系，快速培养",
        "变革管理方法论，稳步推进",
        "ROI 追踪工具，效果可视化",
      ],
    },
  ];

  const stats = [
    { value: "70%", label: "供应协同项目未达预期" },
    { value: "3 年", label: "平均数字化周期" },
    { value: "40%", label: "AI 实施成功率" },
    { value: "6 个月", label: "ROI 实现周期" },
  ];

  const faqs = [
    {
      question: "为什么这么多供应协同项目没有达到预期效果？",
      answer:
        "根据行业调研，约 70% 的供应协同 AI 项目未能达到预期目标。主要原因是业务协同、技术落地、数据质量和组织变革四大挑战的综合影响。道生数智的 AI 协同平台通过系统性解决方案，帮助企业在 6 个月内实现 ROI。",
    },
    {
      question: "小企业和大型企业适用同一个方案吗？",
      answer:
        "不是。我们针对不同规模企业提供定制化方案。小企业可以快速部署标准 SaaS 产品，3 个月见效；大企业则需要定制化和系统集成，6-12 个月完成实施。无论规模大小，我们都有相应的最佳实践。",
    },
    {
      question: "AI 协同平台与传统 ERP 有什么区别？",
      answer:
        "传统 ERP 侧重于流程管理和记录，而 AI 协同平台在流程基础上增加智能决策能力。它能主动预测需求、优化供应关系、识别风险并提供改进建议。两者可以互补，AI 平台作为 ERP 的智能层。",
    },
    {
      question: "实施周期需要多久？",
      answer:
        "这取决于企业规模和复杂度。标准 SaaS 产品 3-6 个月可上线；定制化实施 6-12 个月；大型跨国企业可能需要 12-18 个月。我们提供详细的实施路线图，每个阶段都有明确的目标和交付物。",
    },
    {
      question: "ROI 如何计算？",
      answer:
        "ROI 主要来源于采购成本降低、库存周转提升、管理成本下降和错误率降低。一般企业在 6-12 个月实现 ROI，其中采购成本降低 15-25%，库存周转提升 50-100%，管理成本下降 30% 左右。",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
                供应协同 AI<span className="text-[#1E88E5]">痛点指南</span>
              </h1>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                为什么<span className="text-[#FF9800] font-bold">70%</span>的供应协同项目没有达到预期？
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                从<span className="font-semibold">业务协同</span>、<span className="font-semibold">技术难点</span>、<span className="font-semibold">数据孤岛</span>到<span className="font-semibold">组织变革</span>
                <br />
                四大挑战深度解析 + AI 驱动的解决方案
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#1E88E5] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
              四大挑战深度解析
            </h2>

            <div className="space-y-6">
              {challenges.map((challenge) => {
                const ChIcon = challenge.icon;
                return (
                <div
                  key={challenge.category}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Challenge Icon and Title */}
                    <div className="lg:w-48 bg-gradient-to-br from-[#1E88E5] to-[#9C27B0] text-white p-8 flex flex-col items-center justify-center text-center">
                      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15">
                        <ChIcon className="h-12 w-12 text-white" strokeWidth={1.5} aria-hidden />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                      <p className="text-sm opacity-80">{challenge.description}</p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 mb-3">
                          核心痛点
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {challenge.painPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                              <span className="text-gray-700">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#1E88E5] mb-3">
                          AI 解决方案
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {challenge.solutions.map((solution, idx) => (
                            <div key={idx} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-gray-700">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
              常见问题 (FAQ)
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                    Q: {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                想了解您的企业面临哪些具体挑战？
              </p>
              <Link
                href="/connect"
                className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all duration-300 transform hover:scale-105"
              >
                获取痛点诊断清单
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
