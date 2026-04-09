import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "自研软件产品 | 道生数智",
  description:
    "供应链协同与数字化自研工具，方法论沉淀为可配置能力；合作模式按场景洽谈。",
};

export default function SoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
