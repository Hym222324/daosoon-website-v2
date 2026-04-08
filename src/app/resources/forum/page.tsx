import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "论坛精选：采购成本分析模板分享",
  description: "社区论坛精选帖子摘要，完整讨论需登录社区查看。",
};

export default function ForumResourcePage() {
  return (
    <ArticleLayout
      title="采购成本分析模板分享"
      subtitle="论坛精选 · 2026-03-28"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "资源", href: "/resources" },
        { label: "论坛精选", href: "/resources/forum" },
      ]}
    >
      <p>
        本篇整理社区中关于采购成本分析模板的高票讨论：指标口径、分摊逻辑、以及与预算 /
        实际执行的对比方式。按 PRD，论坛详情可对低质量页面配置 noindex，此处为精选摘要页。
      </p>
      <Link href="/forum" className="inline-flex bg-[#1E88E5] text-white px-6 py-3 rounded-lg font-medium">
        登录后查看完整帖子
      </Link>
    </ArticleLayout>
  );
}
