"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { metadata } from "./metadata";

export default function ValueMapPage() {
  const dimensions = [
    {
      title: "效率提升",
      description: "自动化流程，减少人工操作",
      metrics: [
        { label: "采购周期", before: "21 天", after: "7 天", improvement: "-67%" },
        { label: "订单处理", before: "4 小时/单", after: "15 分钟/单", improvement: "-94%" },
        { label: "协同响应", before: "2-3 天", after: "实时", improvement: "1000%+" },
      ],
    },
    {
      title: "成本优化",
      description: "智能寻源，降低采购成本",
      metrics: [
        { label: "采购成本", before: "基准", after: "-15~25%", improvement: "显著降低" },
        { label: "库存周转", before: "4 次/年", after: "8 次/年", improvement: "+100%" },
        { label: "管理成本", before: "基准", after: "-30%", improvement: "大幅下降" },
      ],
    },
    {
      title: "供应链敏捷",
      description: "快速响应市场变化",
      metrics: [
        { label: "供应响应", before: "30 天", after: "7 天", improvement: "-77%" },
        { label: "需求预测", before: "±25%", after: "±10%", improvement: "精度 +15%" },
        { label: "紧急订单", before: "5 天", after: "12 小时", improvement: "-80%" },
      ],
    },
    {
      title: "合规保障",
      description: "全程可追溯，降低风险",
      metrics: [
        { label: "供应商审核", before: "人工", after: "AI 辅助", improvement: "效率 +200%" },
        { label: "合同风险", before: "发现难", after: "AI 预警", improvement: "提前识别" },
        { label: "审计准备", before: "2 周", after: "实时", improvement: "效率 +90%" },
      ],
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
                供应协同 AI<span className="text-[#1E88E5]">价值地图</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                从<strong>效率、成本、敏捷、合规</strong>四个维度，全面提升供应链能力
                <br />
                基于 100+ 企业实践，提供可量化的改进路径与最佳指标
              </p>
            </div>

            {/* Dimensions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-8">
              {dimensions.map((dimension) => (
                <div
                  key={dimension.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#1E88E5] rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    {dimension.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {dimension.description}
                  </p>
                  <div className="space-y-2">
                    {dimension.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-500">{metric.label}</span>
                        <span className="text-[#1E88E5] font-semibold">{metric.improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Metrics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
              关键指标对比
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {dimensions.map((dimension, index) => (
                <div key={dimension.title} className="border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center">
                    <span className="w-8 h-8 bg-[#1E88E5] text-white rounded-full flex items-center justify-center text-sm mr-3">
                      {index + 1}
                    </span>
                    {dimension.title}
                  </h3>

                  <div className="space-y-4">
                    {dimension.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <span className="text-gray-600">{metric.label}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-xs text-gray-500">优化前</div>
                            <div className="font-semibold text-gray-700">{metric.before}</div>
                          </div>
                          <div className="text-gray-400">→</div>
                          <div className="text-center">
                            <div className="text-xs text-gray-500">优化后</div>
                            <div className="font-bold text-[#1E88E5]">{metric.after}</div>
                          </div>
                          <div className="text-center min-w-[70px]">
                            <div className="text-xs text-gray-500">提升</div>
                            <div className="font-bold text-green-600">{metric.improvement}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                想获取详细的价值地图 PDF 与最佳实践？
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
