import type { Metadata } from "next";
import CaseStudyClient from "@/components/pages/CaseStudyClient";

export const metadata: Metadata = {
  title: "农业装备研发机构采购数字化实践",
  description:
    "多品种小批量研发采购场景下成本与准入周期优化实践摘要。",
};

export default function CaasCasePage() {
  return <CaseStudyClient slug="caas" />;
}
