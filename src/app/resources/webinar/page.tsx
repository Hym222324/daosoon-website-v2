import type { Metadata } from "next";
import ResourceArticleClient from "@/components/pages/ResourceArticleClient";

export const metadata: Metadata = {
  title: "公开课：AI 在供应商寻源中的应用实战",
  description: "供应商寻源场景下的 AI 应用实战公开课摘要与回放指引。",
};

export default function WebinarPage() {
  return <ResourceArticleClient slug="webinar" />;
}
