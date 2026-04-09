"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import {
  Bot,
  Database,
  LineChart,
  Lightbulb,
  Link2,
  Monitor,
  Rocket,
  Target,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export default function SoftwarePage() {
  const products: {
    title: string;
    icon: LucideIcon;
    tag: string;
    description: string;
    features: string[];
    benefits: string[];
  }[] = [
    {
      title: "供应协同平台",
      icon: Link2,
      tag: "核心产品",
      description: "一站式供应协同解决方案，打通供需双方数据与流程",
      features: [
        "供应商自助门户",
        "在线协同采购",
        "需求自动匹配",
        "订单在线执行",
        "协同对账结算",
      ],
      benefits: [
        "采购周期缩短 40-60%",
        "供应商响应速度提升 50%",
        "采购成本降低 15-25%",
        "管理效率提升 30%",
      ],
    },
    {
      title: "智能寻源引擎",
      icon: Target,
      tag: "AI 功能",
      description: "AI 驱动的供应商智能匹配与推荐",
      features: [
        "智能供应商匹配",
        "价格趋势预测",
        "风险智能预警",
        "自动招投标",
        "供应商评估",
      ],
      benefits: [
        "寻源效率提升 70%",
        "供应商匹配准确率 95%+",
        "供应周期缩短 50%",
        "寻源成本降低 40%",
      ],
    },
    {
      title: "供应计划 AI",
      icon: LineChart,
      tag: "AI 功能",
      description: "AI 算法优化供应计划，降低库存成本",
      features: [
        "需求智能预测",
        "自动补货建议",
        "多仓库存优化",
        "供应风险预警",
        "智能调拨建议",
      ],
      benefits: [
        "库存周转提升 40%",
        "缺货率降低 60%",
        "需求预测精度 +15%",
        "库存成本降低 20-30%",
      ],
    },
    {
      title: "供应商绩效平台",
      icon: TrendingUp,
      tag: "管理工具",
      description: "供应商全生命周期管理与绩效评估",
      features: [
        "绩效指标体系",
        "自动数据收集",
        "实时绩效看板",
        "改进追踪",
        "分级管理",
      ],
      benefits: [
        "供应商管理效率 +50%",
        "绩效评估时间 -70%",
        "供应商活跃度提升 30%",
        "风险供应商提前识别",
      ],
    },
    {
      title: "供应成本优化",
      icon: Wallet,
      tag: "优化工具",
      description: "智能分析采购成本构成，识别降本机会",
      features: [
        "成本结构分析",
        "价格对标分析",
        "降本机会推荐",
        "采购支出可视化",
        "支出优化建议",
      ],
      benefits: [
        "成本结构更清晰",
        "支出可视、可对账",
        "支撑专题复盘与决策",
      ],
    },
    {
      title: "供应数据中台",
      icon: Database,
      tag: "数据能力",
      description: "统一供应数据，打通信息孤岛",
      features: [
        "多系统集成",
        "数据标准统一",
        "实时数据同步",
        "数据质量管理",
        "BI 分析报表",
      ],
      benefits: [
        "数据准确性 99%+",
        "系统集成时间 -60%",
        "数据决策效率 +80%",
        "数据治理周期 -50%",
      ],
    },
  ];

  return (
    <SolutionTemplate
      pageTitle="自研软件产品"
      pageDescription="供应链协同与数字化工具，方法论沉淀为可配置能力"
      mainIcon={<Monitor className="size-14" strokeWidth={1.65} aria-hidden />}
      badge="新品"
    >
      {/* Product principles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          产品原则
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl p-6 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Rocket className="h-7 w-7 text-white" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="text-xl font-bold mb-2">贴近业务现场</h3>
            <p className="text-blue-100">从计划到履约的流程语言设计，而不是脱离场景的功能堆砌。</p>
          </div>
          <div className="bg-gradient-to-br from-[#9C27B0] to-[#7B1FA2] rounded-xl p-6 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Bot className="h-7 w-7 text-white" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="text-xl font-bold mb-2">可组合、可演进</h3>
            <p className="text-purple-100">能力模块化，随企业成熟度分阶段启用与扩展。</p>
          </div>
          <div className="bg-gradient-to-br from-[#FF9800] to-[#F57C00] rounded-xl p-6 text-white">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Lightbulb className="h-7 w-7 text-white" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="text-xl font-bold mb-2">与实施服务互补</h3>
            <p className="text-orange-100">工具与咨询、实施联动，保证「能用、好用、有人用」。</p>
          </div>
        </div>

        {/* Products */}
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          核心产品矩阵
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const ProductIcon = product.icon;
            return (
            <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                    <ProductIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                      {product.title}
                    </h3>
                    <span className="text-xs text-gray-500">{product.description}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  product.tag === "核心产品" ? "bg-[#1E88E5] text-white" :
                  product.tag === "AI 功能" ? "bg-[#9C27B0] text-white" :
                  product.tag === "优化工具" ? "bg-[#FF9800] text-white" :
                  product.tag === "管理工具" ? "bg-green-500 text-white" :
                  "bg-blue-500 text-white"
                }`}>
                  {product.tag}
                </span>
              </div>

              <h4 className="font-semibold text-gray-700 mb-2">核心功能</h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-gray-700 mb-2">应用效果</h4>
              <div className="space-y-1">
                {product.benefits.slice(0, 2).map((benefit, idx) => (
                  <div key={idx} className="text-sm text-gray-600">
                    • {benefit}
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-lg text-blue-50 mb-6">
            合作模式与报价随企业场景而定，不做「一刀切」的数字承诺；欢迎预约沟通，明确范围与里程碑。
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center bg-white text-[#1E88E5] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            预约沟通
          </Link>
        </div>
      </div>
    </SolutionTemplate>
  );
}
