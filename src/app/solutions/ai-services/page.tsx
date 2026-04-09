"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import {
  BarChart3,
  Bot,
  Brain,
  Clock,
  FileText,
  Lightbulb,
  MessageSquare,
  Scan,
  Target,
  type LucideIcon,
} from "lucide-react";

export default function AIServicesPage() {
  const aiServices: {
    title: string;
    icon: LucideIcon;
    color: string;
    description: string;
    services: string[];
    benefits: string[];
  }[] = [
    {
      title: "AI 供应咨询",
      icon: Lightbulb,
      color: "from-[#9C27B0] to-[#7B1FA2]",
      description: "AI 驱动的供应链战略与场景规划",
      services: [
        "供应 AI 应用场景评估",
        "AI 技术选型建议",
        "数字化转型规划",
        "ROI 分析与投资回报预测",
        "AI 项目路线图设计",
      ],
      benefits: [
        "AI 场景识别准确率 95%+",
        "技术方案适配度提升 60%",
        "投资回报周期缩短 30%",
        "AI 项目实施成功率提升 50%",
      ],
    },
    {
      title: "智能分析引擎",
      icon: BarChart3,
      color: "from-[#1E88E5] to-[#1565C0]",
      description: "基于 AI 的供应数据智能分析",
      services: [
        "需求智能预测",
        "价格趋势分析",
        "供应商风险预警",
        "成本优化建议",
        "异常自动检测",
      ],
      benefits: [
        "预测精度提升 20-30%",
        "风险识别提前 2-4 周",
        "分析效率提升 10 倍",
        "决策响应速度提升 5 倍",
      ],
    },
    {
      title: "智能寻源匹配",
      icon: Target,
      color: "from-[#FF9800] to-[#F57C00]",
      description: "AI 驱动的供应商智能匹配与推荐",
      services: [
        "需求 - 供应商智能匹配",
        "历史数据学习",
        "多维度供应商评估",
        "自动招投标推荐",
        "价格合理性判断",
      ],
      benefits: [
        "寻源效率提升 70%",
        "供应商匹配准确率 95%+",
        "供应周期缩短 50%",
        "采购成本降低 10-20%",
      ],
    },
    {
      title: "智能计划排产",
      icon: Clock,
      color: "from-[#FF6B6B] to-[#EE5A24]",
      description: "AI 优化生产计划与物料供应",
      services: [
        "智能排产优化",
        "物料需求预测",
        "产能智能调度",
        "紧急订单响应",
        "多目标协同优化",
      ],
      benefits: [
        "计划编制时间 -80%",
        "生产周期缩短 20-40%",
        "设备利用率提升 15-30%",
        "在制品库存 -30-50%",
      ],
    },
    {
      title: "智能合同分析",
      icon: FileText,
      color: "from-[#4CAF50] to-[#43A047]",
      description: "NLP 技术自动分析供应合同",
      services: [
        "合同条款智能识别",
        "风险点自动标注",
        "合规性检查",
        "关键日期提醒",
        "条款对比分析",
      ],
      benefits: [
        "合同审核时间 -70%",
        "风险识别率 98%+",
        "合规性检查覆盖率 100%",
        "合同管理效率提升 3 倍",
      ],
    },
    {
      title: "智能客服助手",
      icon: Bot,
      color: "from-[#2196F3] to-[#1976D2]",
      description: "AI 驱动的供应协同智能客服",
      services: [
        "7x24 小时在线服务",
        "供应商咨询自动应答",
        "订单状态查询",
        "问题智能分派",
        "自然语言理解",
      ],
      benefits: [
        "咨询响应速度 +50 倍",
        "客服人力节省 60%",
        "客户满意度提升 25%",
        "服务覆盖率 100%",
      ],
    },
  ];

  const aiCapabilities: { title: string; desc: string; icon: LucideIcon }[] = [
    {
      title: "计算机视觉",
      desc: "来料与在制品外观检测、仓储与装载识别等场景",
      icon: Scan,
    },
    {
      title: "供应链优化算法",
      desc: "需求预测、库存与网络优化、排程与资源配置",
      icon: BarChart3,
    },
    {
      title: "机器学习",
      desc: "表观规律挖掘、异常检测与质量预警",
      icon: Brain,
    },
    {
      title: "知识与语言技术",
      desc: "合同与条款解析、知识检索与对话式助手",
      icon: MessageSquare,
    },
  ];

  return (
    <SolutionTemplate
      pageTitle="AI 应用服务"
      pageDescription="AI 咨询、智能分析、场景落地，赋能供应链数字化转型"
      mainIcon={<Bot className="size-14" strokeWidth={1.65} aria-hidden />}
      badge="AI"
    >
      {/* AI Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          AI 技术能力（计算机视觉 · 供应链优化算法等）
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {aiCapabilities.map((cap, index) => {
            const CapIcon = cap.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                  <CapIcon className="h-8 w-8" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-600">{cap.desc}</p>
              </div>
            );
          })}
        </div>

        {/* AI Services */}
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          核心 AI 服务
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiServices.map((service, index) => {
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

              <h4 className="font-semibold text-gray-700 mb-2">服务内容</h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {service.services.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
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
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          AI 项目实施流程
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { step: "1", title: "场景评估", desc: "识别 AI 应用场景" },
            { step: "2", title: "数据准备", desc: "数据质量评估" },
            { step: "3", title: "模型开发", desc: "AI 模型训练" },
            { step: "4", title: "系统集成", desc: "与现有系统对接" },
            { step: "5", title: "上线运行", desc: "部署与验证" },
            { step: "6", title: "持续优化", desc: "迭代与改进" },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center bg-[#9C27B0] text-white w-12 h-12 rounded-full flex-shrink-0">
                <span className="font-bold">{item.step}</span>
              </div>
              <div className="ml-3 text-center">
                <div className="font-bold text-[#1A1A1A]">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
              {index < 5 && (
                <svg className="w-6 h-6 text-gray-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-[#9C27B0] to-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100">AI 模型已部署</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3 年+</div>
              <div className="text-purple-100">AI 实战经验</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-100">场景匹配准确率</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10 倍+</div>
              <div className="text-purple-100">分析效率提升</div>
            </div>
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
