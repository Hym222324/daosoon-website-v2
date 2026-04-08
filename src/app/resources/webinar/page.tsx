import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "公开课：AI 在供应商寻源中的应用实战",
  description: "供应商寻源场景下的 AI 应用实战公开课摘要与回放指引。",
};

export default function WebinarPage() {
  return (
    <ArticleLayout
      title="AI 在供应商寻源中的应用实战"
      subtitle="公开课回放 · 2026-03-25"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "资源", href: "/resources" },
        { label: "公开课", href: "/resources/webinar" },
      ]}
    >
      <p>
        实录内容将覆盖：寻源业务流程拆解、可用数据清单、模型与规则混合方案、以及如何与 SRM
        工作流衔接。完整视频可按 PRD 设计接入注册 / 登录后观看。
      </p>
      <Link href="/community" className="inline-flex bg-[#9C27B0] text-white px-6 py-3 rounded-lg font-medium">
        前往社区登记回放权限
      </Link>
      <Link href="/connect" className="inline-flex ml-4 border border-gray-300 px-6 py-3 rounded-lg font-medium">
        企业批量开通
      </Link>
    </ArticleLayout>
  );
}
