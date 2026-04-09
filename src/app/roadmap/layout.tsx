import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "如何达成数智化目标 | 数据·流程·组织·制度·决策 | 道生数智",
  description:
    "从数据、流程、组织、制度到决策五个维度，分阶段推进供应链数智化落地，对应企业常见的转型节奏。",
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
