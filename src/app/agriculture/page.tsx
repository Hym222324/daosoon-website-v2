import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "农业供应链数字化洞察",
  description:
    "季节性、产地分散与质量标准多样下的冷链与产销协同挑战，及数字化产地仓与供需匹配平台思路。",
};

export default function AgriculturePage() {
  return (
    <ArticleLayout
      title="农业供应链洞察"
      subtitle="季节性、产地分散、质量标准多样——产销协同与冷链履约的典型难题"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "行业洞察", href: "/insights" },
        { label: "农业", href: "/agriculture" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">行业特点与主要挑战</h2>
        <p>
          农产品供给受季节与气候影响显著，产地分散、分级标准不统一会加剧下游履约难度。冷链断链与信息不对称往往
          导致损耗与价格波动，需要端到端的可视化与协同机制。
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>冷链物流复杂：温区、时效与时效证明需贯穿仓储与运输。</li>
          <li>产销对接难：小农户 / 合作社与渠道之间缺乏统一的质量与交付语言。</li>
          <li>政策与市场双重影响：需灵活的销量预测与供给调度策略。</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">道生应对思路（摘要）</h2>
        <p>
          以 <strong>数字化产地仓</strong> 统一入库质检、分级与库存可视化，以{" "}
          <strong>供需匹配平台</strong> 连接产地与渠道需求，缩短信息链路并降低损耗。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">相关案例</h2>
        <p>
          参见{" "}
          <Link href="/case/caas" className="text-[#1E88E5] font-medium">
            农业装备研发机构案例
          </Link>{" "}
          中多品种小批量采购与准入优化实践。
        </p>
      </section>

      <div className="pt-4 border-t border-gray-200">
        <Link
          href="/connect"
          className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F57C00]"
        >
          获取农业供应链解决方案
        </Link>
      </div>
    </ArticleLayout>
  );
}
