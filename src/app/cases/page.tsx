import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "客户案例",
  description:
    "中联重科、蔚来汽车、农业装备研发机构等供应链数智化实践案例，附关键成果数据与方法论摘要。",
};

const cases = [
  {
    name: "中联重科",
    tag: "高端装备 / 工程机械",
    result: "采购周期缩短约 25%，供应商响应速度提升约 40%",
    href: "/case/zoomlion",
  },
  {
    name: "蔚来汽车",
    tag: "新能源汽车",
    result: "寻源效率提升约 50%，库存周转率提高约 30%",
    href: "/case/nio",
  },
  {
    name: "农业研究院中农机",
    tag: "农业装备研发",
    result: "采购成本降低约 18%，供应商准入周期缩短约 60%",
    href: "/case/caas",
  },
];

export default function CasesPage() {
  return (
    <ArticleLayout
      title="成功实践"
      subtitle="精讲少量标杆案例，用可验证的业务结果呈现落地能力（数据为业务沟通口径，实施以合同约定为准）。"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "案例", href: "/cases" },
      ]}
    >
      <p>
        PRD 强调以「深度案例」替代简单 Logo
        墙。以下案例均可在详情页查看背景、挑战、方案要点与分阶段里程碑结构。
      </p>

      <div className="grid md:grid-cols-1 gap-6 not-prose">
        {cases.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block border border-gray-200 rounded-xl p-6 bg-white hover:border-[#1E88E5] hover:shadow-md transition-all"
          >
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h2 className="text-xl font-bold text-[#1A1A1A]">{c.name}</h2>
              <span className="text-xs px-2 py-0.5 bg-[#F0F4F8] rounded text-gray-700">
                {c.tag}
              </span>
            </div>
            <p className="text-[#FF9800] font-semibold">{c.result}</p>
            <span className="inline-block mt-3 text-[#1E88E5] text-sm font-medium">
              查看案例详情 →
            </span>
          </Link>
        ))}
      </div>

      <div className="pt-4">
        <Link
          href="/connect"
          className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F57C00]"
        >
          预约专家咨询
        </Link>
      </div>
    </ArticleLayout>
  );
}
