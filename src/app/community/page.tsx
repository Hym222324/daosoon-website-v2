import type { Metadata } from "next";
import CommunityClient from "@/components/pages/CommunityClient";

export const metadata: Metadata = {
  title: "社区",
  description:
    "供应链人的交流社区：问题求助、经验分享、资源下载与行业动态（论坛能力将逐步开通）。",
};

export default function CommunityPage() {
  return <CommunityClient />;
}
