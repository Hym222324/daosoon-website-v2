import type { Metadata } from "next";
import ResourceArticleClient from "@/components/pages/ResourceArticleClient";

export const metadata: Metadata = {
  title: "2026 供应链 AI 应用白皮书",
  description: "供应链 AI 应用场景、方法论与实施路径白皮书摘要页（完整版可留资下载）。",
};

export default function WhitepaperPage() {
  return <ResourceArticleClient slug="whitepaper" />;
}
