import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "流程制造供应链洞察",
  description:
    "连续生产、配方与批次追溯、副产物与设备效率——流程制造供应链数智化挑战与 MES 集成、风险预警思路。",
};

export default function ProcessManufacturingPage() {
  return (
    <ArticleLayout
      title="流程制造供应链洞察"
      subtitle="连续生产、配方管理、副产物多——批次追溯与稳定运营的双重压力"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "行业洞察", href: "/insights" },
        { label: "流程制造", href: "/process-manufacturing" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">行业特点与主要挑战</h2>
        <p>
          流程制造强调配方一致性、批次可追溯与装置产能利用。原材料价格波动、副产品综合利用与质量合规往往交织在一起，使得「从采购到生产到出厂」的数据链条必须高度一致。
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>批次追溯难：从原辅料到成品与副产物的正向 / 逆向追溯需跨系统集成。</li>
          <li>设备效率与计划耦合：计划扰动对能耗与收率影响显著，需要运营可视化。</li>
          <li>原料价格与供应风险：需更早识别价格与供应异常，支持采购与配方策略调整。</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">道生应对思路（摘要）</h2>
        <p>
          通过 <strong>MES 集成</strong> 打通生产实绩与物料消耗，构建批次与质量的数字化底座；辅以{" "}
          <strong>供应链风险预警</strong>{" "}
         （交期、价格、单一来源等维度）支持采购与计划的前置决策。
        </p>
      </section>

      <div className="pt-4 border-t border-gray-200">
        <Link
          href="/connect"
          className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F57C00]"
        >
          获取流程制造解决方案
        </Link>
      </div>
    </ArticleLayout>
  );
}
