import type { Metadata } from "next";
import InsightsClient from "@/components/pages/InsightsClient";

export const metadata: Metadata = {
  title: "行业洞察",
  description:
    "离散制造、流程制造与农业等领域的供应链数智化洞察，深度解析挑战与道生应对思路。",
};

export default function InsightsPage() {
  return <InsightsClient />;
}
