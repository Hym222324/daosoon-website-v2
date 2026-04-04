"use client";

import Link from "next/link";

const resources = [
  {
    type: "白皮书",
    title: "2026 供应链 AI 应用白皮书",
    date: "2026-03-15",
    href: "/resources/whitepaper",
    color: "from-[#9C27B0] to-[#7B1FA2]",
  },
  {
    type: "趋势解读",
    title: "供应链数智化转型的四个关键阶段",
    date: "2026-03-20",
    href: "/resources/trend",
    color: "from-[#1E88E5] to-[#1565C0]",
  },
  {
    type: "公开课",
    title: "AI 在供应商寻源中的应用实战",
    date: "2026-03-25",
    href: "/resources/webinar",
    color: "from-[#FF9800] to-[#F57C00]",
  },
  {
    type: "论坛精选",
    title: "采购成本分析模板分享",
    date: "2026-03-28",
    href: "/resources/forum",
    color: "from-[#666666] to-[#4A4A4A]",
  },
];

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
          {resources.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-[#F5F5F5] rounded-xl p-5 card-hover cursor-pointer"
            >
              <span
                className={`inline-block px-2 py-1 bg-gradient-to-r ${item.color} text-white text-xs rounded mb-3`}
              >
                {item.type}
              </span>
              <h4 className="font-bold mb-2 text-[#1A1A1A]">
                {item.title}
              </h4>
              <p className="text-[#666666] text-sm mb-3">{item.date}</p>
              <button className="text-[#1E88E5] text-sm font-medium">
                查看内容 →
              </button>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-transparent text-[#1A1A1A] px-8 py-3.5 rounded-lg font-medium border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all">
            订阅资讯
          </button>
        </div>
      </div>
    </section>
  );
}
