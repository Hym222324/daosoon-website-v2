import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "论坛",
  description: "道生数智社区论坛入口——登录后可发帖与回复（建设中）。",
};

export default function ForumPage() {
  return (
    <ArticleLayout
      title="论坛"
      subtitle="发帖需登录（PRD：手机号注册）· 帖子详情页可按需配置 noindex"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "社区", href: "/community" },
        { label: "论坛", href: "/forum" },
      ]}
      darkHero={false}
    >
      <p>
        论坛与{" "}
        <Link href="/community" className="text-[#1E88E5]">
          社区首页
        </Link>{" "}
        同属社区模块。当前静态站不提供真实登录；对接系统后可在此展示分版列表与最新主题。
      </p>
      <Link
        href="/connect"
        className="inline-flex bg-[#FF9800] text-white px-6 py-3 rounded-lg font-medium"
      >
        申请内测 / 企业入驻
      </Link>
    </ArticleLayout>
  );
}
