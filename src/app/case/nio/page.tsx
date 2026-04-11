import type { Metadata } from "next";
import CaseStudyClient from "@/components/pages/CaseStudyClient";

export const metadata: Metadata = {
  title: "蔚来汽车：寻源与库存优化实践",
  description:
    "新能源汽车复杂供应链下的寻源效率与库存周转优化实践摘要。",
};

export default function NioCasePage() {
  return <CaseStudyClient slug="nio" />;
}
