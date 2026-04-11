"use client";

import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { Database, Handshake, Settings, Users, type LucideIcon } from "lucide-react";

export default function ChallengesPage() {
  const challenges: {
    category: string;
    icon: LucideIcon;
    title: string;
    description: string;
    painPoints: string[];
    responses: string[];
  }[] = [
    {
      category: "链路与协同",
      icon: Handshake,
      title: "端到端协同不足",
      description: "从需求、计划到采购、制造与履约链条脱节",
      painPoints: [
        "计划、采购、生产、物流信息不同步，波动传导失控",
        "跨部门、跨企业协同依赖人工，周期拉长",
        "需求变化与供应能力缺少统一的指挥视角",
        "流程标准与例外管理混用，执行不一致",
      ],
      responses: [
        "以端到端价值链为主线梳理主数据与关键流程接口",
        "建设跨职能的协同机制与例会节奏，明确决策关口",
        "用控制塔思路统一异常处理与升级路径",
        "分阶段固化标准流程，减少临时协调成本",
      ],
    },
    {
      category: "系统与落地",
      icon: Settings,
      title: "系统与现场割裂",
      description: "多系统并存，工程落地与现场运营脱节",
      painPoints: [
        "历史系统多、接口复杂，改造牵一发动全身",
        "工程交付与业务准备脱节，上线后波动大",
        "现场 OT 与 IT 数据口径不一致，难以闭环",
        "缺少可持续运维与版本治理机制",
      ],
      responses: [
        "先做架构分层与集成边界，控制变更半径",
        "并行推进业务侧的变革与培训，而不是单纯上线系统",
        "统一主数据與事件口径，沉淀可复用的集成规范",
        "建立运维与持续改进的 ownership",
      ],
    },
    {
      category: "数据与治理",
      icon: Database,
      title: "数据底座薄弱",
      description: "端到端可视需要可信、可追溯的数据",
      painPoints: [
        "数据分散在多系统与表格中，难以拼成一条链",
        "质量与权责不清，关键指标无法对齐业务语言",
        "缺少数据治理与生命周期管理",
        "分析停留在报表层，难以支撑决策闭环",
      ],
      responses: [
        "从关键业务对象开始（物料、订单、批次、库位等）治理主数据",
        "建立数据责任矩阵与质量检查机制",
        "把「指标—口径—来源」写清楚，服务管理层共识",
        "逐步把分析嵌入到流程节点，而不是事后报表",
      ],
    },
    {
      category: "组织与机制",
      icon: Users,
      title: "组织与制度滞后",
      description: "数智化需要与之匹配的组织能力与制度安排",
      painPoints: [
        "角色职责与 KPI 仍按职能切分，缺少端到端 owner",
        "制度与授权跟不上系统能力，形成新孤岛",
        "人才结构与技能栈不匹配，运营压力上移",
        "变革管理不足，可持续运营缺乏抓手",
      ],
      responses: [
        "为关键链路设置端到端牵头角色与联席机制",
        "同步修订授权、审批与考核，让流程跑得动",
        "分岗位制定能力培养与认证路径",
        "用小 wins 建立信心，再扩大范围",
      ],
    },
  ];

  const faqs = [
    {
      question: "为什么很多供应链数智化项目容易不达预期？",
      answer:
        "常见原因是对「端到端」理解不足：只做了单点工具或局部采购数字化，没有同步数据、流程、组织与制度。数智化是运营体系的整体升级，需要分阶段但方向一致地推进。",
    },
    {
      question: "中小企业和大型企业的路径一样吗？",
      answer:
        "不一样。我们会从业务紧迫度与投入边界出发，优先保证主干流程跑通与数据可信，再逐步扩展协同深度与自动化程度，而不是套用同一套重实施模板。",
    },
    {
      question: "和传统 ERP 项目相比，更应注意什么？",
      answer:
        "ERP 侧重记录与流程固化；端到端数智化更强调跨系统可视、异常协同和节奏一致的运营机制。二者可以并行：ERP 打基础，协同与控制塔能力补齐链条上的空白段。",
    },
    {
      question: "实施周期一般如何估计？",
      answer:
        "取决于现有系统现状、主数据基础与变革准备度。我们通过诊断与路线图把阶段目标讲清楚，每一阶段都有可验收的业务结果，而不是一次性大而全。",
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
      <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
                供应链数智化<span className="text-[#1E88E5]">转型挑战</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                大量企业在推进数智化时会遇到相似的结构性问题：协同、系统、数据与组织四条线相互缠绕，
                单一「采购」视角很难解释为什么总体效果不及预期。
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                以下从<strong className="font-semibold text-[#1A1A1A]">端到端供应链</strong>视角归纳共性挑战与建设重点，
                侧重定性描述，便于对照自评；具体处置需结合企业情境。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
              共性挑战与建设重点
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
                      <div className="lg:w-48 bg-gradient-to-br from-[#1E88E5] to-[#9C27B0] text-white p-8 flex flex-col items-center justify-center text-center">
                        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15">
                          <ChIcon className="h-12 w-12 text-white" strokeWidth={1.5} aria-hidden />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                        <p className="text-sm opacity-80">{challenge.description}</p>
                      </div>

                      <div className="flex-1 p-8">
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-500 mb-3">
                            典型痛点
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
                            建设重点（定性）
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {challenge.responses.map((line, idx) => (
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
                                <span className="text-gray-700">{line}</span>
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

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
              常见问题
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
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                希望结合贵司场景做一次轻量诊断？
              </p>
              <Link
                href="/connect"
                className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all duration-300 transform hover:scale-105"
              >
                联系道生数智
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
