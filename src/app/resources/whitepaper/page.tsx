import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "2026 供应链 AI 应用白皮书",
  description: "供应链 AI 应用场景、方法论与实施路径白皮书摘要页（完整版可留资下载）。",
};

export default function WhitepaperPage() {
  return (
    <ArticleLayout
      title="2026 供应链 AI 应用白皮书"
      subtitle="发布日期：2026-03-15 · 白皮书"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "资源", href: "/resources" },
        { label: "白皮书", href: "/resources/whitepaper" },
      ]}
    >
      <p>
        本书面材料面向制造与供应链管理者，梳理 AI 在需求预测、寻源、合同与风险等场景的价值逻辑、数据前置条件与落地节奏（完整 PDF
        可按 PRD 通过留资邮箱发送）。
      </p>
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-[#1A1A1A]">目录（示例）</h2>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
          <li>供应链数智化与 AI 的定位</li>
          <li>高价值场景筛选与数据治理</li>
          <li>实施路径与组织协同</li>
          <li>常见误区与避坑清单（与 /challenges 联动）</li>
        </ol>
      </section>
      <Link href="/connect" className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium">
        留资下载白皮书
      </Link>
    </ArticleLayout>
  );
}
