import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "个人中心",
  description: "社区个人中心：我的帖子、收藏与积分（需登录后使用）。",
};

export default function ProfilePage() {
  return (
    <ArticleLayout
      title="个人中心"
      subtitle="登录后查看：我的帖子 · 我的收藏 · 积分记录"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "社区", href: "/community" },
        { label: "个人中心", href: "/profile" },
      ]}
      darkHero={false}
    >
      <p>
        依 PRD，个人中心在社区账号体系就绪后启用。您可先通过{" "}
        <Link href="/connect" className="text-[#1E88E5]">
          连接道生
        </Link>{" "}
        留下联系方式，获取社区内测或企业批量开通方案。
      </p>
    </ArticleLayout>
  );
}
