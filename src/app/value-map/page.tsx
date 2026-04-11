import type { Metadata } from "next";
import ValueMapClient from "@/components/pages/ValueMapClient";

export const metadata: Metadata = {
  title: "企业数智化目标确认",
  description:
    "战略屋式方法论：愿景与战略意图、支柱能力、组织流程技术底座与战术分解，对齐管理层语言与落地路径。",
};

export default function ValueMapPage() {
  return <ValueMapClient />;
}
