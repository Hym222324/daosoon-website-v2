import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "社区",
  description:
    "供应链人的交流社区：问题求助、经验分享、资源下载与行业动态（论坛能力将逐步开通）。",
};

const boards = [
  { name: "问题求助", desc: "实施与选型中的实操问题" },
  { name: "经验分享", desc: "方法与模板沉淀" },
  { name: "资源下载", desc: "白皮书与工具模板入口" },
  { name: "行业动态", desc: "政策与市场快讯" },
];

export default function CommunityPage() {
  return (
    <ArticleLayout
      title="参与社区"
      subtitle="供应链人的聚集地——发帖与收藏等功能将对接账号体系（PRD：手机号注册）。"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "社区", href: "/community" },
      ]}
      darkHero={false}
    >
      <p>
        当前为静态信息架构页，用于对齐 PRD 中的板块划分与入口；正式论坛可在此基础上接入后端或第三方社区产品。
      </p>

      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {boards.map((b) => (
          <div
            key={b.name}
            className="rounded-xl border border-gray-200 p-5 bg-white"
          >
            <h2 className="font-bold text-[#1A1A1A]">{b.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
          </div>
        ))}
      </div>

      <section className="space-y-2 not-prose">
        <h2 className="text-lg font-bold text-[#1A1A1A]">最新帖子（示例）</h2>
        <ul className="text-sm text-gray-700 divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
          {[
            "如何用 AI 快速筛选供应商资质？",
            "SRM 选型避坑指南",
            "采购成本分析模板分享",
          ].map((t) => (
            <li key={t} className="px-4 py-3 bg-white flex justify-between">
              <span>{t}</span>
              <Link href="/forum" className="text-[#1E88E5] whitespace-nowrap">
                进入论坛 →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 not-prose pt-4">
        <Link
          href="/forum"
          className="inline-flex bg-[#1E88E5] text-white px-6 py-3 rounded-lg font-medium"
        >
          前往论坛
        </Link>
        <Link
          href="/profile"
          className="inline-flex border border-gray-300 px-6 py-3 rounded-lg font-medium"
        >
          个人中心
        </Link>
      </div>
    </ArticleLayout>
  );
}
