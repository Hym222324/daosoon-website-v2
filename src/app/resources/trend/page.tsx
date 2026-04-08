import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "供应链数智化转型的四个关键阶段",
  description: "从诊断到持续优化的四阶段模型：道生方法论文摘与 /roadmap 呼应。",
};

export default function TrendPage() {
  return (
    <ArticleLayout
      title="供应链数智化转型的四个关键阶段"
      subtitle="趋势解读 · 2026-03-20"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "资源", href: "/resources" },
        { label: "趋势解读", href: "/resources/trend" },
      ]}
    >
      <p>
        本文用「诊断—搭建—试点推广—持续优化」四阶段概括大多数制造企业的数智化节奏；每一阶段的关键里程碑与常见雷区可与{" "}
        <Link href="/roadmap" className="text-[#1E88E5]">
          实施路线图
        </Link>{" "}
        对照阅读。
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>阶段 1：统一语言与基线评估</li>
        <li>阶段 2：数据与流程最小可行闭环</li>
        <li>阶段 3：场景扩展与供应网络协同</li>
        <li>阶段 4：指标运营与持续迭代</li>
      </ul>
      <Link href="/connect" className="inline-flex bg-[#1E88E5] text-white px-6 py-3 rounded-lg font-medium">
        联系顾问获取解读材料
      </Link>
    </ArticleLayout>
  );
}
