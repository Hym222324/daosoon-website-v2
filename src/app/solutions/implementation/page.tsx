"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";

export default function ImplementationPage() {
  const implementations = [
    {
      title: "APS 高级计划排产",
      icon: "📅",
      description: "基于约束理论的智能排产系统，优化生产计划和物料供应",
      benefits: [
        "缩短生产周期 20-40%",
        "提高设备利用率 15-30%",
        "降低在制品库存 30-50%",
        "快速响应紧急订单",
      ],
      features: [
        "有限产能排产",
        "多约束优化",
        "智能调度算法",
        "可视化排产界面",
      ],
    },
    {
      title: "SRM 供应商关系管理",
      icon: "🤝",
      description: "全流程供应商协同平台，提升供应链响应速度",
      benefits: [
        "采购成本降低 15-25%",
        "供应商响应速度提升 50%",
        "采购周期缩短 40-60%",
        "供应商数量优化 20-30%",
      ],
      features: [
        "供应商自助门户",
        "在线寻源招标",
        "绩效考核管理",
        "协同采购执行",
      ],
    },
    {
      title: "WMS 仓储管理系统",
      icon: "📦",
      description: "智能仓储解决方案，优化库存管理和物流效率",
      benefits: [
        "库存准确率 99%+",
        "拣货效率提升 50%",
        "仓储空间利用提升 30%",
        "库存周转提升 40%",
      ],
      features: [
        "入库管理",
        "库存管理",
        "出库管理",
        "智能拣选",
      ],
    },
    {
      title: "TMS 运输管理系统",
      icon: "🚚",
      description: "智能运输调度与跟踪，优化物流配送",
      benefits: [
        "运输成本降低 10-20%",
        "车辆利用率提升 25%",
        "配送准时率 95%+",
        "运输可视化 100%",
      ],
      features: [
        "智能路径规划",
        "运输调度优化",
        "车辆实时跟踪",
        "运费结算管理",
      ],
    },
    {
      title: "MOM 制造运营管理系统",
      icon: "🏭",
      description: "生产全流程数字化管理，提升制造执行力",
      benefits: [
        "生产效率提升 15-25%",
        "质量追溯时间缩短 70%",
        "设备 OEE 提升 20%",
        "数据实时采集 100%",
      ],
      features: [
        "生产计划管理",
        "质量管理",
        "设备管理",
        "数据采集",
      ],
    },
    {
      title: "ERP 系统实施",
      icon: "💼",
      description: "企业资源计划系统集成和优化",
      benefits: [
        "业务流程一体化",
        "数据准确性提升",
        "决策效率提高",
        "运营透明度增强",
      ],
      features: [
        "财务集成",
        "供应链集成",
        "生产制造集成",
        "报表分析",
      ],
    },
  ];

  const process = [
    { step: "1", title: "需求分析", desc: "深入调研业务需求" },
    { step: "2", title: "方案设计", desc: "定制化解决方案" },
    { step: "3", title: "系统配置", desc: "系统搭建与集成" },
    { step: "4", title: "数据迁移", desc: "历史数据导入" },
    { step: "5", title: "测试验证", desc: "UAT 测试与优化" },
    { step: "6", title: "培训上线", desc: "用户培训与交付" },
    { step: "7", title: "持续支持", desc: "运维优化服务" },
  ];

  const partners = [
    { name: "SAP", logo: "SAP" },
    { name: "Oracle", logo: "Oracle" },
    { name: "用友", logo: "用友" },
    { name: "金蝶", logo: "金蝶" },
    { name: "西门子", logo: "西门子" },
    { name: "华为云", logo: "华为云" },
  ];

  return (
    <SolutionTemplate
      pageTitle="供应协同实施服务"
      pageDescription="专业 APS/ERP/MOM、WMS/TMS 实施及项目管理服务"
      mainIcon="🔧"
      badge="专业"
    >
      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          标准实施流程
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {process.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center bg-[#1E88E5] text-white w-16 h-16 rounded-xl flex-shrink-0">
                <span className="text-2xl font-bold">{item.step}</span>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold text-[#1A1A1A]">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
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

      {/* Implementations */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
            核心实施服务
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementations.map((impl, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{impl.icon}</div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {impl.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">{impl.description}</p>

                <h4 className="font-semibold text-gray-700 mb-2">核心优势</h4>
                <ul className="space-y-2 mb-4">
                  {impl.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/connect"
                  className="inline-flex items-center text-[#1E88E5] font-medium"
                >
                  了解更多
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1A1A] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">合作伙伴</h3>
          <p className="text-gray-400 mb-6">
            我们的实施经验涵盖国内外主流供应商
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-lg font-medium">{partner.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              <span className="text-gray-500">我们的实施经验：</span>
              {partners.map((p) => p.name).join(" . ")}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">成功实施项目</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">项目按时交付率</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10 年+</div>
              <div className="text-blue-100">实施经验</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">客户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
