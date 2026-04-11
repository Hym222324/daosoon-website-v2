import type { Metadata } from "next";
import CaseStudyClient from "@/components/pages/CaseStudyClient";

export const metadata: Metadata = {
  title: "中联重科：SRM 与协同实践",
  description:
    "工程机械龙头数千家供应商网络下的采购周期与响应速度优化实践摘要。",
};

export default function ZoomlionCasePage() {
  return <CaseStudyClient slug="zoomlion" />;
}
