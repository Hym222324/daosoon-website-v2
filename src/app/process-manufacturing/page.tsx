import type { Metadata } from "next";
import IndustryInsightClient from "@/components/pages/IndustryInsightClient";

export const metadata: Metadata = {
  title: "流程制造供应链洞察",
  description:
    "连续生产、配方与批次追溯、副产物与设备效率——流程制造供应链数智化挑战与 MES 集成、风险预警思路。",
};

export default function ProcessManufacturingPage() {
  return <IndustryInsightClient slug="process" />;
}
