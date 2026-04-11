import type { Metadata } from "next";
import ResourceArticleClient from "@/components/pages/ResourceArticleClient";

export const metadata: Metadata = {
  title: "论坛精选：采购成本分析模板分享",
  description: "社区论坛精选帖子摘要，完整讨论需登录社区查看。",
};

export default function ForumResourcePage() {
  return <ResourceArticleClient slug="forum" />;
}
