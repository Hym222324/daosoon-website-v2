import type { Metadata } from "next";
import ProfileClient from "@/components/pages/ProfileClient";

export const metadata: Metadata = {
  title: "个人中心",
  description: "社区个人中心：我的帖子、收藏与积分（需登录后使用）。",
};

export default function ProfilePage() {
  return <ProfileClient />;
}
