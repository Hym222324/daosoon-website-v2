import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "蔚来汽车：寻源与库存优化实践",
  description:
    "新能源汽车复杂供应链下的寻源效率与库存周转优化实践摘要。",
};

export default function NioCasePage() {
  return (
    <ArticleLayout
      title="蔚来汽车：寻源效率提升约 50%，库存周转率提高约 30%"
      subtitle="新能源车企 · 零部件品类多、变更快 · 供应链韧性要求高"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "案例", href: "/cases" },
        { label: "蔚来汽车", href: "/case/nio" },
      ]}
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">背景与挑战</h2>
        <p>
          车型迭代与配置组合带来部品变更频繁，寻源与认证周期长；同时需平衡库存占用与交付风险，对数据一致的预测与供应可视化提出更高要求。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">解决方案要点</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>规范寻源与认证流程在线化，缩短跨部门协同周期。</li>
          <li>结合需求预测与供应风险视图，驱动补货与备选策略。</li>
          <li>与质量、研发衔接部品变更，减少断点与呆滞。</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-[#1A1A1A]">成果（业务沟通口径）</h2>
        <p className="text-[#FF9800] font-semibold">
          寻源效率提升约 50%，库存周转率提高约 30%（以项目合同约定与验收口径为准）。
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
