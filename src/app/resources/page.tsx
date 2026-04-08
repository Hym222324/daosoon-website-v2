import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "资讯与资源",
  description:
    "白皮书、趋势解读、公开课回放与论坛精选——道生数智供应链数智化内容中心（可后续对接 CMS）。",
};

const items = [
  {
    type: "白皮书",
    typeClass: "from-[#9C27B0] to-[#7B1FA2]",
    title: "2026 供应链 AI 应用白皮书",
    date: "2026-03-15",
    href: "/resources/whitepaper",
    action: "免费下载（需留资）",
  },
  {
    type: "趋势解读",
    typeClass: "from-[#1E88E5] to-[#1565C0]",
    title: "供应链数智化转型的四个关键阶段",
    date: "2026-03-20",
    href: "/resources/trend",
    action: "阅读全文",
  },
  {
    type: "公开课",
    typeClass: "from-[#FF9800] to-[#F57C00]",
    title: "AI 在供应商寻源中的应用实战",
    date: "2026-03-25",
    href: "/resources/webinar",
    action: "观看回放（需注册）",
  },
  {
    type: "论坛精选",
    typeClass: "from-[#666666] to-[#4A4A4A]",
    title: "采购成本分析模板分享",
    date: "2026-03-28",
    href: "/resources/forum",
    action: "查看帖子",
  },
];

export default function ResourcesPage() {
  return (
    <ArticleLayout
      title="最新洞察与资源"
      subtitle="按 PRD 设计保留类型标签与发布日期；后续可替换为 CMS 动态列表与筛选。"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "资源", href: "/resources" },
      ]}
      darkHero={false}
    >
      <div className="flex flex-wrap gap-2 mb-8 not-prose text-sm">
        <span className="px-3 py-1 rounded-full bg-white border border-gray-200">
          筛选：全部
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500">
          报告 · 趋势 · 公开课 · 论坛（静态示意）
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 not-prose">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="block rounded-xl border border-gray-200 p-5 bg-white hover:shadow-md transition-shadow"
          >
            <span
              className={`inline-block px-2 py-1 text-xs text-white rounded mb-3 bg-gradient-to-r ${it.typeClass}`}
            >
              {it.type}
            </span>
            <h2 className="text-lg font-bold text-[#1A1A1A]">{it.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{it.date}</p>
            <p className="text-[#1E88E5] text-sm font-medium mt-3">{it.action} →</p>
          </Link>
        ))}
      </div>

      <div className="pt-8 border-t border-gray-200 not-prose flex flex-wrap gap-4">
        <Link
          href="/connect"
          className="inline-flex bg-[#1E88E5] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1565C0]"
        >
          订阅资讯
        </Link>
      </div>
    </ArticleLayout>
  );
}
