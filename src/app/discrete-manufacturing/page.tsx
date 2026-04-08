import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "离散制造供应链洞察",
  description:
    "多品种小批量、BOM 复杂与变更频繁下的齐套、排程与供应商协同挑战，及 AI 辅助预测与 SRM 协同应对思路。",
};

export default function DiscreteManufacturingPage() {
  return (
    <ArticleLayout
      title="离散制造供应链洞察"
      subtitle="多品种小批量、BOM 复杂、变更频繁——协同与计划的典型挑战与数智化应对"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "行业洞察", href: "/insights" },
        { label: "离散制造", href: "/discrete-manufacturing" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">行业特点与主要挑战</h2>
        <p>
          离散制造普遍面临产品谱系多、工程变更频繁、物料齐套与产能平衡难度大的问题。计划层需要同时兼顾订单履约、库存占用与供应链柔性；执行层则要求供应商快速响应图纸与工艺变更，并保持质量与交付稳定。
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>物料齐套难：多层级 BOM 与替代料策略若缺少统一数据底座，易导致停线与插单。</li>
          <li>排程复杂：瓶颈资源、换型损失与急单冲突需要可解释的计划规则与可视化协同。</li>
          <li>供应商协同要求高：图纸、质检与交付状态若仍依赖离线表格，协同成本与错误率显著上升。</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">道生应对思路（摘要）</h2>
        <p>
          以 <strong>AI 辅助需求预测</strong> 提升短期可执行计划的可信度，以{" "}
          <strong>SRM 供应商协同平台</strong>{" "}
          统一订单、交期、变更与质量闭环，减少信息割裂；并与 ERP/MES
          集成形成「需求—计划—采购—履约」可追溯链路。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">相关案例</h2>
        <p>
          可结合{" "}
          <Link href="/case/zoomlion" className="text-[#1E88E5] font-medium">
            中联重科案例
          </Link>{" "}
          了解大规模供应网络下的协同与周期优化实践（详情含背景与挑战结构，可随项目阶段扩展）。
        </p>
      </section>

      <div className="pt-4 border-t border-gray-200">
        <Link
          href="/connect"
          className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F57C00]"
        >
          获取离散制造供应链解决方案
        </Link>
      </div>
    </ArticleLayout>
  );
}
