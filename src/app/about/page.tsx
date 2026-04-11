import type { Metadata } from "next";
import AboutClient from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "公司介绍",
  description:
    "道生数智科技（苏州）有限公司——端到端供应链 AI 应用服务商，专注制造与供应链数智化咨询、实施与自研产品。",
};

export default function AboutPage() {
  return <AboutClient />;
}
