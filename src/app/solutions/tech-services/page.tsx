"use client";

import SolutionTemplate from "@/components/solutions/SolutionTemplate";

export default function TechServicesPage() {
  const pillars = [
    {
      title: "定制开发",
      icon: "🛠️",
      description:
        "围绕 SRM、协同门户、集成中间件等场景，提供贴合业务的定制化开发与迭代。",
      items: [
        "需求分析与原型设计",
        "前后端开发与联调",
        "与 ERP/MES 等系统集成",
        "上线灰度与版本管理",
      ],
    },
    {
      title: "云迁移",
      icon: "☁️",
      description:
        "将本地或异构云上的关键应用迁移至目标云环境，保障业务连续性与安全合规。",
      items: [
        "架构评估与迁移路径",
        "数据迁移与双活验证",
        "性能与安全基线",
        "割接与回退预案",
      ],
    },
    {
      title: "运维与优化",
      icon: "📈",
      description:
        "7×24 运维值守、容量与监控、补丁与季度健康检查，持续优化系统可用性。",
      items: [
        "监控告警与值班响应",
        "备份容灾与演练",
        "性能调优与成本治理",
        "运维文档与知识转移",
      ],
    },
  ];

  return (
    <SolutionTemplate
      pageTitle="技术服务"
      pageDescription="定制开发 · 云迁移 · 运维保障，让供应链数字系统真正跑稳、跑久。"
      mainIcon="⚙️"
      badge="基础"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-xl p-6 shadow border border-gray-100"
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">
                {p.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{p.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {p.items.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-[#1E88E5]">•</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#F0F4F8] rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
            与咨询、实施、AI 应用如何协同？
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            技术团队与供应链顾问、实施顾问同一套方法论对齐：先澄清业务目标与数据边界，再确定接口与
            SLA，最后以可观测性与运维移交闭环，避免「上线即失联」。
          </p>
          <p className="text-sm text-gray-600">
            相关案例与交付细节可在预约演示时索取《技术服务说明书》模板（脱敏版）。
          </p>
        </div>
      </div>
    </SolutionTemplate>
  );
}
