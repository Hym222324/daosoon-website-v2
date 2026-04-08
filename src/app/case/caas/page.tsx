import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "农业装备研发机构采购数字化实践",
  description:
    "多品种小批量研发采购场景下成本与准入周期优化实践摘要。",
};

export default function CaasCasePage() {
  return (
    <ArticleLayout
      title="农业研究院中农机：研发采购降本与准入提效"
      subtitle="农业装备研发机构 · 多品种小批量 · 合规与敏捷需兼顾"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "案例", href: "/cases" },
        { label: "农业研究院中农机", href: "/case/caas" },
      ]}
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">背景与挑战</h2>
        <p>
          研发试制与量产准备并行，临时需求多、供应商替换频繁；传统准入与比价流程偏长，影响试制进度与成本控制。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">解决方案要点</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>分层供应商策略：试制类快速通道 + 量产类合规强化。</li>
          <li>线上准入与资质档案，减少重复提交与邮件往返。</li>
          <li>采购支出可视化支撑品类策略与降本专项。</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">成果（业务沟通口径）</h2>
        <p className="text-[#FF9800] font-semibold">
          采购成本降低约 18%，供应商准入周期缩短约 60%（以项目合同约定与验收口径为准）。
        </p>
      </section>

      <p>
        <Link href="/agriculture" className="text-[#1E88E5]">
          农业供应链洞察
        </Link>
      </p>

      <Link
        href="/connect"
        className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F57C00]"
      >
        预约专家咨询
      </Link>
    </ArticleLayout>
  );
}
