import type { Metadata } from "next";
import ForumClient from "@/components/pages/ForumClient";

export const metadata: Metadata = {
  title: "论坛",
  description: "道生数智社区论坛入口——登录后可发帖与回复（建设中）。",
};

export default function ForumPage() {
  return <ForumClient />;
}
