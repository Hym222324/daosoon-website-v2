import type { Metadata } from "next";
import ResourcesIndexClient from "@/components/pages/ResourcesIndexClient";

export const metadata: Metadata = {
  title: "资讯与资源",
  description:
    "白皮书、趋势解读、公开课回放与论坛精选——内容由 content/resources.json 维护，支持后台编辑与资料上传。",
};

export default function ResourcesPage() {
  return <ResourcesIndexClient />;
}
