"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import { useState } from "react";
import {
  BarChart3,
  ClipboardList,
  Target,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export default function ConsultingPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const services = [
    {
      title: "业务诊断与规划",
      description: "深入分析企业供应链现状，识别关键痛点，制定科学改进路线图",
      features: [
        "供应链流程诊断与审计",
        "行业对标分析",
        "数字化转型规划",
        "ROI 预测与价值评估",
      ],
    },
    {
      title: "体系建设与优化",
      description: "建立标准化、规范化的供应链管理体系，提升运营效率",
      features: [
        "供应商管理体系建设",
        "采购流程标准化",
        "绩效考核体系设计",
        "风险控制机制建立",
      ],
    },
    {
      title: "实施辅导与落地",
      description: "全程陪伴式辅导，确保方案有效落地执行",
      features: [
        "项目管理和指导",
        "关键用户培训",
        "变革管理支持",
        "持续优化建议",
      ],
    },
    {
      title: "AI 应用咨询",
      description: "结合 AI 技术，提供智能化转型咨询与实施指导",
      features: [
        "AI 应用场景规划",
        "技术选型建议",
        "数据治理方案",
        "AI 模型应用指导",
      ],
    },
  ];

  const capabilities: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[] = [
    {
      icon: Target,
      title: "精准诊断",
      description: "500+ 项指标评估，全面识别问题",
    },
    {
      icon: ClipboardList,
      title: "标准化框架",
      description: "成熟的咨询服务方法论",
    },
    {
      icon: UserRound,
      title: "资深团队",
      description: "平均 10 年 + 行业经验",
    },
    {
      icon: BarChart3,
      title: "数据驱动",
      description: "基于数据的科学决策",
    },
  ];

  const useCases = [
    {
      industry: "离散制造",
      challenge: "产品复杂、多 BOM 管理、供应商协同困难",
      solution: "建立标准化供应协同体系，引入 AI 智能排产和 SRM 协同平台，实现供应效率提升 40%",
    },
    {
      industry: "流程制造",
      challenge: "配方复杂、质量追溯要求高、供应波动大",
      solution: "优化供应流程，建立 MES+ 供应链预测体系，质量追溯时间缩短 70%",
    },
    {
      industry: "农业",
      challenge: "周期长、地域分散、质量标准难统一",
      solution: "物联网 + 供应链匹配平台，实现全链路可追溯，供应周期缩短 60%",
    },
  ];

  const testimonials = [
    {
      company: "某上市制造企业",
      content: "道生数智的咨询团队专业度高，帮助我们梳理了复杂的供应流程，建立了标准化的管理体系，实施 SRM 系统后采购成本降低 20%",
      role: "供应链总监",
    },
    {
      company: "某大型农业企业",
      content: "从业务诊断到 AI 应用规划，全程伴随式辅导，让我们成功实现了供应链数字化转型，效果超出预期",
      role: "CEO",
    },
  ];

  return (
    <SolutionTemplate
      pageTitle="供应协同咨询"
      pageDescription="业务梳理、体系建设、业务辅导，助力企业供应链数字化转型"
      mainIcon={
        <ClipboardList className="size-14" strokeWidth={1.65} aria-hidden />
      }
      badge="热门"
    >
      {/* Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            我们的咨询能力
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            基于 100+ 企业实践，提供端到端的供应链咨询解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => {
            const CapIcon = cap.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                  <CapIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-600">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
            核心咨询服务
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#1E88E5] text-white rounded-lg flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          行业应用场景
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow">
              <div className="text-sm text-[#1E88E5] font-medium mb-2">
                {useCase.industry}
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-4">{useCase.challenge}</h3>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">解决方案：</span>
                  {useCase.solution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
            客户反馈
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="text-sm text-gray-500">
                  <div className="font-medium text-[#1A1A1A]">{testimonial.company}</div>
                  <div>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
