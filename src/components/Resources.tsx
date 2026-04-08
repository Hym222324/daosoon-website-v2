"use client";

import Link from "next/link";
import { getHomepageResourceItems } from "@/lib/resources-data";
import { withBasePath } from "@/lib/public-path";

const homepageResources = getHomepageResourceItems();

export default function Resources() {
  return (
    <section id="resources" className="section-spacing bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">
            最新洞察与资源
          </h2>
          <Link href="/resources" className="text-[#1E88E5] font-medium">
            查看全部 →
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {homepageResources.map((item) => (
            <div
              key={item.href}
              className="bg-[#F5F5F5] rounded-xl p-5 card-hover cursor-pointer flex flex-col"
            >
              <Link href={item.href} className="block flex-1">
                <span
                  className={`inline-block px-2 py-1 bg-gradient-to-r ${item.typeClass} text-white text-xs rounded mb-3`}
                >
                  {item.type}
                </span>
                <h4 className="font-bold mb-2 text-[#1A1A1A]">
                  {item.title}
                </h4>
                <p className="text-[#666666] text-sm mb-3">{item.date}</p>
                <span className="text-[#1E88E5] text-sm font-medium">
                  查看内容 →
                </span>
              </Link>
              {item.downloadUrl ? (
                <a
                  href={withBasePath(item.downloadUrl)}
                  className="text-[#FF9800] text-sm font-medium mt-2 hover:underline"
                  download
                  onClick={(e) => e.stopPropagation()}
                >
                  资料下载
                </a>
              ) : null}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/connect"
            className="inline-block bg-transparent text-[#1A1A1A] px-8 py-3.5 rounded-lg font-medium border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
          >
            订阅资讯
          </Link>
        </div>
      </div>
    </section>
  );
}
