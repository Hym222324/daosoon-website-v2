"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { metadata } from "./metadata";

export default function RoadmapPage() {
  const phases = [
    {
      phase: "阶段 1",
      title: "诊断规划",
      duration: "2-3 周",
      tasks: [
        { title: "现状调研", desc: "供应流程审计" },
        { title: "痛点分析", desc: "识别关键问题" },
        { title: "目标设定", desc: "明确改进指标" },
      ],
      features: [
        "供应流程诊断报告",
        "改进优先级矩阵",
        "ROI 预测模型",
      ],
    },
    {
      phase: "阶段 2",
      title: "方案设计",
      duration: "3-4 周",
      tasks: [
        { title: "方案选型", desc: "AI 能力匹配" },
        { title: "技术架构", desc: "系统规划设计" },
        { title: "实施计划", desc: "时间表与资源" },
      ],
      features: [
        "定制化解决方案",
        "技术架构蓝图",
        "详细实施计划",
      ],
    },
    {
      phase: "阶段 3",
      title: "试点部署",
      duration: "6-8 周",
      tasks: [
        { title: "环境搭建", desc: "系统部署配置" },
        { title: "数据迁移", desc: "历史数据导入" },
        { title: "试点运行", desc: "小范围验证" },
      ],
      features: [
        "AI 引擎配置",
        "系统集成对接",
        "用户培训完成",
      ],
    },
    {
      phase: "阶段 4",
      title: "全面推广",
      duration: "持续优化",
      tasks: [
        { title: "全量上线", desc: "全组织推广" },
        { title: "监控优化", desc: "持续改进" },
        { title: "效果评估", desc: "ROI 实现验证" },
      ],
      features: [
        "全量用户部署",
        "智能优化建议",
        "月度效果报告",
      ],
    },
  ];

  const timeline = [
    {
      week: "0-2 周",
      title: "供应协同基础",
      desc: "供应 AI 应用基础搭建",
      color: "bg-blue-500",
    },
    {
      week: "3-6 周",
      title: "供应商协同",
      desc: "供应关系数字化管理",
      color: "bg-blue-500",
    },
    {
      week: "7-9 周",
      title: "智能寻源",
      desc: "AI 驱动的供应商选择",
      color: "bg-blue-600",
    },
    {
      week: "10-12 周",
      title: "自动化采购",
      desc: "采购流程自动化",
      color: "bg-blue-600",
    },
    {
      week: "13-16 周",
      title: "协同生态",
      desc: "供应网络智能化",
      color: "bg-blue-700",
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
                供应协同 AI<span className="text-[#1E88E5]">实施路线图</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                <strong>4 个阶段 12 个步骤</strong>，从规划到上线，提供完整的实施路径
                <br />
                基于 100+ 企业实践验证的成功方法论
              </p>
            </div>
          </div>
        </section>

        {/* Phases Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
              实施四阶段
            </h2>

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div
                  key={phase.phase}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Phase Number */}
                    <div className="lg:w-48 bg-[#1E88E5] text-white p-8 flex flex-col items-center justify-center">
                      <div className="text-6xl font-bold mb-2">{index + 1}</div>
                      <div className="text-sm opacity-80">{phase.duration}</div>
                    </div>

                    {/* Phase Content */}
                    <div className="flex-1 p-8">
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        供应协同 AI 实施的核心阶段
                      </p>

                      {/* Tasks */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 mb-3">
                          关键任务
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {phase.tasks.map((task, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 rounded-lg p-4"
                            >
                              <div className="font-semibold text-[#1A1A1A] mb-1">
                                {task.title}
                              </div>
                              <div className="text-sm text-gray-600">
                                {task.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-3">
                          交付成果
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {phase.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-[#F0F4F8] text-[#1E88E5] rounded-lg text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Visualization */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
              首年实施里程碑
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1E88E5] to-[#9C27B0] hidden md:block" />

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="md:hidden w-16 font-semibold text-gray-600">
                      {item.week}
                    </div>
                    <div className={`flex-shrink-0 w-4 h-4 rounded-full ${item.color} mt-2 mx-3 md:mx-0`} />
                    <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                      <div className="md:flex md:items-center md:justify-between">
                        <div className="md:w-24 mb-2 md:mb-0">
                          <span className="text-sm text-gray-500">{item.week}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                        <div className="md:w-24 text-right hidden md:block">
                          <span className="text-sm text-gray-500">{item.week}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                想获取详细的实施路线图和最佳实践文档？
              </p>
              <Link
                href="/connect"
                className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all duration-300 transform hover:scale-105"
              >
                预约专家咨询
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
