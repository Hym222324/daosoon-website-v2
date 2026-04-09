import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "企业数智化目标确认方法论 | 道生数智",
  description:
    "以战略屋思路对齐愿景、支柱能力与战术分解，帮助企业确认数智化目标与落地路径（定性描述）。",
};

export default function ValueMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
