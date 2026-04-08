"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import {
  Building2,
  Database,
  Globe,
  Handshake,
  Link2,
  Zap,
  type LucideIcon,
} from "lucide-react";

export default function PlatformPage() {
  const platformServices: {
    title: string;
    icon: LucideIcon;
    color: string;
    description: string;
    features: string[];
    benefits: string[];
  }[] = [
    {
      title: "专属定制服务",
      icon: Zap,
      color: "from-[#9C27B0] to-[#7B1FA2]",
      description: "基于企业需求的定制化平台开发",
      features: [
        "业务需求深度分析",
        "定制化功能开发",
        "界面个性化定制",
        "专属流程配置",
        "版本迭代规划",
      ],
      benefits: [
        "完全贴合业务需求",
        "用户体验最优",
        "快速响应变化",
        "持续价值提升",
      ],
    },
    {
      title: "系统对接服务",
      icon: Link2,
      color: "from-[#1E88E5] to-[#1565C0]",
      description: "与企业现有系统无缝集成",
      features: [
        "ERP 系统集成",
        "MES 系统对接",
        "WMS 系统连接",
        "财务系统对接",
        "外部系统 API 集成",
      ],
      benefits: [
        "数据实时同步",
        "流程自动化",
        "信息孤岛打通",
        "整体效率提升 40%",
      ],
    },
    {
      title: "协同网络搭建",
      icon: Globe,
      color: "from-[#FF9800] to-[#F57C00]",
      description: "构建端到端供应协同生态",
      features: [
        "供应商网络接入",
        "客户协同门户",
        "物流伙伴集成",
        "金融伙伴服务",
        "全链路协同可视化",
      ],
      benefits: [
        "协同效率提升 60%",
        "网络覆盖全面",
        "数据透明度 100%",
        "响应速度 +50%",
      ],
    },
    {
      title: "数据中台建设",
      icon: Database,
      color: "from-[#FF6B6B] to-[#EE5A24]",
      description: "统一供应数据，赋能智能决策",
      features: [
        "数据标准制定",
        "数据集成平台",
        "数据质量管理",
        "统一数据湖",
        "BI 分析报表",
      ],
      benefits: [
        "数据准确性 99%+",
        "数据决策效率 +80%",
        "系统集成周期 -60%",
        "数据治理周期 -50%",
      ],
    },
  ];

  const networkTypes: {
    type: string;
    count: string;
    desc: string;
    icon: LucideIcon;
  }[] = [
    {
      type: "供应商网络",
      count: "1000+",
      desc: "接入供应商数量",
      icon: Building2,
    },
    {
      type: "客户网络",
      count: "500+",
      desc: "协同客户数量",
      icon: Handshake,
    },
    {
      type: "伙伴网络",
      count: "200+",
      desc: "物流/金融伙伴",
      icon: Link2,
    },
    {
      type: "覆盖行业",
      count: "8+",
      desc: "制造业细分领域",
      icon: Building2,
    },
  ];

  const integrationTypes = [
    "ERP 系统",
    "MES 系统",
    "WMS 系统",
    "TMS 系统",
    "SRM 系统",
    "OA 系统",
    "财务系统",
    "CRM 系统",
  ];

  const process = [
    { step: "1", title: "需求分析", desc: "业务场景梳理" },
    { step: "2", title: "方案设计", desc: "平台架构设计" },
    { step: "3", title: "定制开发", desc: "功能实现" },
    { step: "4", title: "系统对接", desc: "集成与测试" },
    { step: "5", title: "部署上线", desc: "灰度发布" },
    { step: "6", title: "持续优化", desc: "迭代升级" },
  ];

  const successMetrics = [
    { value: "40%", title: "整体效率提升" },
    { value: "100%", title: "数据透明度" },
    { value: "60%", title: "协同效率提升" },
    { value: "99%+", title: "数据准确性" },
  ];

  return (
    <SolutionTemplate
      pageTitle="供应协同平台服务"
      pageDescription="专属定制、系统对接、协同网络，构建端到端供应协同生态"
      mainIcon={<Link2 className="size-14" strokeWidth={1.65} aria-hidden />}
      badge="VIP 服务"
    >
      {/* Platform Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          核心平台服务
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {platformServices.map((service, index) => {
            const SvcIcon = service.icon;
            return (
            <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}>
                  <SvcIcon className="h-6 w-6" strokeWidth={2} aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-700 mb-2">服务能力</h4>
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
                  <div key={idx} className="text-sm text-gray-600">• {benefit}</div>
                ))}
              </div>
            </div>
            );
          })}
        </div>

        {/* Integration Partners */}
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          系统集成能力
        </h2>

        <div className="bg-gray-50 rounded-xl p-8">
          <p className="text-gray-600 text-center mb-6">
            支持主流企业系统无缝对接，打通数据孤岛
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow">
                <div className="text-lg font-medium text-[#1A1A1A]">{type}</div>
                <div className="text-sm text-green-600 mt-1">✔ 支持</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
            协同网络覆盖
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {networkTypes.map((network, index) => {
              const NetIcon = network.icon;
              return (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                  <NetIcon className="h-8 w-8" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="text-3xl font-bold text-[#1E88E5] mb-2">{network.count}</div>
                <div className="font-medium text-[#1A1A1A] mb-1">{network.type}</div>
                <div className="text-sm text-gray-600">{network.desc}</div>
              </div>
            );
            })}
          </div>

          {/* Process */}
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
            项目实施流程
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
      </div>

      {/* Metrics */}
      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {successMetrics.map((metric, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-blue-100">{metric.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#9C27B0] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">需要专属定制解决方案？</h2>
          <p className="text-purple-100 mb-8 max-w-xl mx-auto">
            预约专家咨询，获取定制化平台服务方案
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center bg-white text-[#9C27B0] px-8 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            预约演示
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </SolutionTemplate>
  );
}
