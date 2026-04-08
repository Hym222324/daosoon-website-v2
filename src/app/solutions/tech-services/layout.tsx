import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "技术服务",
  description:
    "定制开发、云迁移与运维服务，支撑供应链系统长期稳定运行。道生数智端到端技术服务。",
};

export default function TechServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
