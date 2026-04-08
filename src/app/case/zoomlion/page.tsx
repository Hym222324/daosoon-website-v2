import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "中联重科：SRM 与协同实践",
  description:
    "工程机械龙头数千家供应商网络下的采购周期与响应速度优化实践摘要。",
};

export default function ZoomlionCasePage() {
  return (
    <ArticleLayout
      title="中联重科：SRM 系统助力采购周期缩短约 25%"
      subtitle="工程机械龙头 · 供应商网络庞大 · 协同与合规并重"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "案例", href: "/cases" },
        { label: "中联重科", href: "/case/zoomlion" },
      ]}
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">背景与挑战</h2>
        <p>
          企业处于工程机械细分领域领先地位，供应商数量多、品类广，采购与交付协同链路长。传统线下协同与分散的表格管理难以及时反映交期与质量状态，影响整机排产与订单履约。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">解决方案要点</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>建立统一的供应商协同门户，规范订单、图纸变更与质量闭环流程。</li>
          <li>与内部计划、物料系统衔接，提升可承诺交期的透明度。</li>
          <li>分阶段推广：先核心品类与高价值供应商，再扩展到全量网络。</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">成果（业务沟通口径）</h2>
        <p className="text-[#FF9800] font-semibold">
          采购周期缩短约 25%，供应商响应速度提升约 40%（以项目合同约定与验收口径为准）。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">相关阅读</h2>
        <p>
          <Link href="/discrete-manufacturing" className="text-[#1E88E5]">
            离散制造行业洞察
          </Link>
        </p>
      </section>

      <Link
        href="/connect"
        className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F57C00]"
      >
        预约专家咨询
      </Link>
    </ArticleLayout>
  );
}
