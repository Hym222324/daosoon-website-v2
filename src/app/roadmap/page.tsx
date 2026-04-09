"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RoadmapPage() {
  const stages = [
    {
      key: "data",
      title: "数据",
      subtitle: "先把链路上的事实说清楚",
      tasks: [
        { title: "主数据与编码治理", desc: "物料、客户、供应商、BOM、工艺路线等一致性" },
        { title: "关键事件与指标口径", desc: "订单、需求、库存、在途等事件定义对齐" },
        { title: "数据责任与质量机制", desc: "谁产生、谁校对、如何稽核" },
      ],
      outcomes: ["端到端可视的「可信底账」", "为分析与决策提供统一语言"],
    },
    {
      key: "process",
      title: "流程",
      subtitle: "让价值流跑得顺",
      tasks: [
        { title: "主干流程建模", desc: "从需求到交付、从采购到结算的主路径" },
        { title: "跨部门接口与节拍", desc: "S&OP、MRP、采购执行、入库出库的衔接" },
        { title: "例外管理与升级", desc: "断点、短缺、质量异常的处置链路" },
      ],
      outcomes: ["减少临时协调与「人盯人」", "流程可复制、可审计"],
    },
    {
      key: "org",
      title: "组织",
      subtitle: "谁对端到端结果负责",
      tasks: [
        { title: "角色与职责重塑", desc: "职能分工 + 链路牵头机制" },
        { title: "能力矩阵与培训", desc: "计划、采购、物流、制造的复合能力" },
        { title: "变革节奏与沟通", desc: "试点—推广—固化" },
      ],
      outcomes: ["责任清晰、交接面少", "变革可持续，而不是一次项目"],
    },
    {
      key: "policy",
      title: "制度",
      subtitle: "规则与授权跟得上系统",
      tasks: [
        { title: "授权与审批", desc: "与风险等级匹配的授权表" },
        { title: "供应商与合同政策", desc: "准入、绩效、奖惩的制度化" },
        { title: "考核与激励", desc: "避免局部最优损害总体交付" },
      ],
      outcomes: ["系统能力与管理制度一致", "减少「制度空白」导致的反弹"],
    },
    {
      key: "decision",
      title: "决策",
      subtitle: "从经验驱动到机制驱动",
      tasks: [
        { title: "决策清单与信息包", desc: "每个关键决策需要什么输入" },
        { title: "场景化分析", desc: "scenario 而不是单点报表" },
        { title: "回顾与复盘", desc: "把偏差变成下一轮改进" },
      ],
      outcomes: ["管理层对关键节点「看得见、议得清、盯得住」", "持续迭代而不是一次性上线"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                如何达成<span className="text-[#1E88E5]">数智化目标</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                参考领先企业在大型变革中的表述习惯，把落地拆解为
                <strong className="text-[#1A1A1A]"> 数据、流程、组织、制度、决策 </strong>
                五个递进维度：前序维度不牢，后序维度很难真正产生价值。
              </p>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
                具体周期与范围因企业而异，下图给出常见的工作包与验收取向（定性）。
              </p>
            </div>

            <div className="space-y-8">
              {stages.map((stage, index) => (
                <div
                  key={stage.key}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-44 bg-[#1E88E5] text-white p-8 flex flex-col items-center justify-center text-center">
                      <div className="text-sm opacity-90">阶段 {index + 1}</div>
                      <div className="text-3xl font-bold mt-2">{stage.title}</div>
                      <div className="text-xs opacity-90 mt-2">{stage.subtitle}</div>
                    </div>
                    <div className="flex-1 p-8">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 mb-3">关键工作包</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {stage.tasks.map((task) => (
                            <div key={task.title} className="bg-gray-50 rounded-lg p-4">
                              <div className="font-semibold text-[#1A1A1A] mb-1 text-sm">
                                {task.title}
                              </div>
                              <div className="text-xs text-gray-600 leading-relaxed">
                                {task.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">阶段取向</h4>
                        <div className="flex flex-wrap gap-2">
                          {stage.outcomes.map((o) => (
                            <span
                              key={o}
                              className="px-3 py-1.5 bg-[#E3F2FD] text-[#1565C0] rounded-lg text-xs font-medium"
                            >
                              {o}
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

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 mb-6">
              想把这些阶段映射到贵司的优先级与里程碑？
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all"
            >
              与顾问沟通
            </Link>
            <Link href="/value-map" className="block mt-4 text-[#1E88E5] text-sm font-medium">
              回看目标确认方法论 →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
