import type { Metadata } from "next";
import ConnectClient from "@/components/pages/ConnectClient";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "业务咨询、加入团队、生态合作与社区入口——预约演示、提交简历与合作申请。",
};

export default function ConnectPage() {
  return <ConnectClient />;
}
