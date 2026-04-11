import type { Metadata } from "next";
import IndustryInsightClient from "@/components/pages/IndustryInsightClient";

export const metadata: Metadata = {
  title: "农业供应链数字化洞察",
  description:
    "季节性、产地分散与质量标准多样下的冷链与产销协同挑战，及数字化产地仓与供需匹配平台思路。",
};

export default function AgriculturePage() {
  return <IndustryInsightClient slug="agriculture" />;
}
