import type { Metadata } from "next";
import ResourceArticleClient from "@/components/pages/ResourceArticleClient";

export const metadata: Metadata = {
  title: "供应链数智化转型的四个关键阶段",
  description: "从诊断到持续优化的四阶段模型：道生方法论文摘与 /roadmap 呼应。",
};

export default function TrendPage() {
  return <ResourceArticleClient slug="trend" />;
}
