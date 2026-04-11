import type { Metadata } from "next";
import IndustryInsightClient from "@/components/pages/IndustryInsightClient";

export const metadata: Metadata = {
  title: "离散制造供应链洞察",
  description:
    "多品种小批量、BOM 复杂与变更频繁下的齐套、排程与供应商协同挑战，及 AI 辅助预测与 SRM 协同应对思路。",
};

export default function DiscreteManufacturingPage() {
  return <IndustryInsightClient slug="discrete" />;
}
