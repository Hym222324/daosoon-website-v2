import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";
import { getAllResourceItems } from "@/lib/resources-data";
import { withBasePath } from "@/lib/public-path";

export const metadata: Metadata = {
  title: "资讯与资源",
  description:
    "白皮书、趋势解读、公开课回放与论坛精选——内容由 content/resources.json 维护，支持后台编辑与资料上传。",
};

export default function ResourcesPage() {
  const items = getAllResourceItems();
  return (
    <ArticleLayout
      title="最新洞察与资源"
      subtitle="列表数据来自 content/resources.json，可在 /admin 后台或 GitHub 上编辑；发布后开始构建部署。"
      breadcrumb={[
        { label: "首页", href: "/" },
        { label: "资源", href: "/resources" },
      ]}
      darkHero={false}
    >
      <div className="flex flex-wrap gap-2 mb-8 not-prose text-sm">
        <span className="px-3 py-1 rounded-full bg-white border border-gray-200">
          筛选：全部
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500">
          报告 · 趋势 · 公开课 · 论坛
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 not-prose">
        {items.map((it) => (
          <div
            key={it.href}
            className="rounded-xl border border-gray-200 p-5 bg-white hover:shadow-md transition-shadow"
          >
            <Link href={it.href} className="block">
              <span
                className={`inline-block px-2 py-1 text-xs text-white rounded mb-3 bg-gradient-to-r ${it.typeClass}`}
              >
                {it.type}
              </span>
              <h2 className="text-lg font-bold text-[#1A1A1A]">{it.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{it.date}</p>
              <p className="text-[#1E88E5] text-sm font-medium mt-3">{it.action} →</p>
            </Link>
            {it.downloadUrl ? (
              <a
                href={withBasePath(it.downloadUrl)}
                className="mt-4 inline-flex items-center text-sm font-medium text-[#FF9800] hover:underline"
                download
              >
                资料下载
              </a>
            ) : null}
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-gray-200 not-prose flex flex-wrap gap-4">
        <Link
          href="/connect"
          className="inline-flex bg-[#1E88E5] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1565C0]"
        >
          订阅资讯
        </Link>
      </div>
    </ArticleLayout>
  );
}
