import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "行业洞察",
  description:
    "离散制造、流程制造与农业等领域的供应链数智化洞察，深度解析挑战与道生应对思路。",
};

const industries = [
  {
    title: "离散制造",
    href: "/discrete-manufacturing",
    desc: "多品种小批量、BOM 复杂、变更频繁下的协同与计划挑战。",
  },
  {
    title: "流程制造",
    href: "/process-manufacturing",
    desc: "连续生产、配方与批次追溯、设备效率与原料波动。",
  },
  {
    title: "农业与产地供应链",
    href: "/agriculture",
    desc: "季节性、产地分散与质量标准化，产销协同与冷链。",
  },
];

export default function InsightsPage() {
  return (
    <ArticleLayout
      title="行业洞察"
      subtitle="以行业深度分析建立信任——用洞察替代空泛口号，用可落地的路径替代泛泛而谈。"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "行业洞察", href: "/insights" },
      ]}
    >
      <p>
        行业洞察与首页「我们懂您的行业」模块呼应。以下三个领域为重点深耕方向，正文按 PRD
        建议扩展至约 1500–2000 字，并可持续接入 CMS。
      </p>

      <ul className="space-y-6 not-prose">
        {industries.map((x) => (
          <li
            key={x.href}
            className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition-shadow"
          >
            <Link href={x.href} className="text-lg font-bold text-[#1A1A1A] hover:text-[#1E88E5]">
              {x.title}
            </Link>
            <p className="text-gray-600 mt-2 text-sm">{x.desc}</p>
            <Link href={x.href} className="inline-block mt-3 text-[#1E88E5] text-sm font-medium">
              阅读全文 →
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">
        后续可对接 CMS，按「行业 / 主题 / 时间」筛选并扩展更多长文与白皮书摘要。
      </p>
    </ArticleLayout>
  );
}
