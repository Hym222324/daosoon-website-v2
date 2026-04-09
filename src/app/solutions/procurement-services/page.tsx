"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import {
  BarChart3,
  Handshake,
  Package,
  Search,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export default function ProcurementServicesPage() {
  const services: {
    title: string;
    icon: LucideIcon;
    description: string;
    features: string[];
    benefits: string[];
  }[] = [
    {
      title: "供应寻源对接",
      icon: Search,
      description: "智能匹配供需双方，快速找到合适的供应资源",
      features: [
        "供应资源智能匹配",
        "在线招投标",
        "供应商资质审核",
        "历史价格对比",
        "供应能力评估",
      ],
      benefits: [
        "寻源效率提升 70%",
        "供应周期缩短 50%",
        "供应成本降低 10-20%",
        "供应商选择准确率 95%+",
      ],
    },
    {
      title: "供应采购服务",
      icon: ShoppingCart,
      description: "专业的供应采购执行，优化采购成本与流程",
      features: [
        "批量采购执行",
        "价格谈判支持",
        "采购合同管理",
        "订单执行跟踪",
        "采购数据分析",
      ],
      benefits: [
        "采购成本降低 15-25%",
        "采购效率提升 40%",
        "合同合规率 100%",
        "采购周期缩短 30%",
      ],
    },
    {
      title: "供应商协同执行",
      icon: Handshake,
      description: "在线协同平台，实现与供应商的高效沟通",
      features: [
        "供应商自助门户",
        "订单协同执行",
        "在线对账结算",
        "质量协同管理",
        "交付进度跟踪",
      ],
      benefits: [
        "协同效率提升 60%",
        "对账时间缩短 70%",
        "供应商响应速度 +50%",
        "数据准确性 99%+",
      ],
    },
    {
      title: "供应绩效管理",
      icon: BarChart3,
      description: "供应商全生命周期管理与绩效评估",
      features: [
        "多维度绩效评估",
        "自动数据采集",
        "绩效可视化看板",
        "改进计划追踪",
        "供应商分级管理",
      ],
      benefits: [
        "管理效率 +50%",
        "评估时间 -70%",
        "供应商活跃度 +30%",
        "风险供应商提前识别",
      ],
    },
  ];

  const comparison: Array<{
    aspect?: string;
    description?: string;
    issues?: string[];
    benefits?: string[];
  }> = [
    {
      aspect: "传统采购",
      description: "人工询价、电话沟通、Excel 管理",
      issues: ["效率低", "数据分散", "透明度低"],
    },
    {
      aspect: "道生数智服务",
      description: "智能匹配、在线协同、数据驱动",
      benefits: ["效率提升 70%", "数据实时透明", "成本降低 15-25%"],
    },
  ] as never;

  const process = [
    { step: "1", title: "需求对接", desc: "了解供应需求" },
    { step: "2", title: "资源匹配", desc: "智能匹配供应商" },
    { step: "3", title: "资质审核", desc: "供应商评估" },
    { step: "4", title: "价格谈判", desc: "商务条款协商" },
    { step: "5", title: "签约执行", desc: "合同签署与执行" },
    { step: "6", title: "持续优化", desc: "绩效管理与改进" },
  ];

  const benefits = [
    { value: "15-25%", title: "采购成本降低" },
    { value: "70%", title: "寻源效率提升" },
    { value: "50%", title: "供应周期缩短" },
    { value: "95%+", title: "供应商匹配准确率" },
  ];

  return (
    <SolutionTemplate
      pageTitle="采购外包服务"
      pageDescription="寻源、执行与协同外包；预约演示或商务联系定制方案"
      mainIcon={<Package className="size-14" strokeWidth={1.65} aria-hidden />}
      badge="专业"
    >
      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          核心服务内容
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const SvcIcon = service.icon;
            return (
            <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#1E88E5] rounded-lg flex items-center justify-center text-white">
                  <SvcIcon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-700 mb-2">服务功能</h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-gray-700 mb-2">应用效果</h4>
              <div className="space-y-1">
                {service.benefits.slice(0, 2).map((benefit, idx) => (
                  <div key={idx} className="text-sm text-gray-600">
                    • {benefit}
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>

        {/* Process */}
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          服务流程
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {process.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center bg-[#1E88E5] text-white w-12 h-12 rounded-full flex-shrink-0">
                <span className="font-bold">{item.step}</span>
              </div>
              <div className="ml-3 text-center">
                <div className="font-bold text-[#1A1A1A]">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
              {index < process.length - 1 && (
                <svg className="w-6 h-6 text-gray-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
            传统采购 vs 道生数智服务
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comparison.length >= 2 && comparison[0] && comparison[1] ? (
              <>
                <div className="bg-white rounded-xl p-6 shadow">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">传统采购</h3>
                  <p className="text-gray-600 mb-4">{comparison[0].description}</p>
                  <div className="space-y-2">
                    {comparison[0].issues?.map((issue, idx) => (
                      <div key={idx} className="flex items-center text-red-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {issue}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow border-2 border-[#1E88E5]">
                  <h3 className="text-xl font-bold text-[#1E88E5] mb-4">{comparison[1].aspect}</h3>
                  <p className="text-gray-600 mb-4">{comparison[1].description}</p>
                  <div className="space-y-2">
                    {comparison[1].benefits?.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-green-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {benefits.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
