import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "连接道生",
  description:
    "业务咨询、加入团队、生态合作与参与社区——道生数智统一转化枢纽。",
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
