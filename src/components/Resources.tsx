"use client";

import Link from "next/link";

const resources = [
  {
    type: "白皮书",
    title: "2026 供应链 AI 应用白皮书",
    date: "2026-03-15",
    href: "/resources/whitepaper",
  },
  {
    type: "趋势解读",
    title: "供应链数智化转型的四个关键阶段",
    date: "2026-03-20",
    href: "/resources/trend",
  },
  {
    type: "公开课",
    title: "AI 在供应商寻源中的应用实战",
    date: "2026-03-25",
    href: "/resources/webinar",
  },
  {
    type: "工具模板",
    title: "采购成本分析模板分享",
    date: "2026-03-28",
    href: "/resources/template",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="section-spacing bg-surface">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="display-md text-on-surface mb-4">最新洞察与资源</h2>
            <p className="body-lg text-on-surface/70">获取供应链数字化转型的前沿洞察与实用工具</p>
          </div>
          <Link href="/resources" className="btn-tertiary">
            查看全部资源
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="card glass elevate-low hover:elevate-high block group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <span className="glass-chip px-4 py-2 rounded-xl text-xs mb-4 inline-block w-fit">
                  {item.type}
                </span>
                <h4 className="body-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="body-sm text-on-surface/50 mb-4">{item.date}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all mt-auto">
                  查看内容
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 glass rounded-3xl p-8 md:p-12 text-center">
          <h3 className="display-md text-on-surface mb-6">订阅我们的资讯</h3>
          <p className="body-lg text-on-surface/70 max-w-2xl mx-auto mb-8">
            订阅后每月接收一份供应链数字化转型洞察报告，第一时间获取行业前沿资讯与实用工具
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱地址"
              className="w-full px-6 py-4 rounded-xl bg-surface-container-high border border-transparent focus:border-primary/20 focus:bg-surface-container-lowest outline-none transition-all"
            />
            <button className="btn-primary w-full sm:w-auto whitespace-nowrap">
              订阅资讯
            </button>
          </div>
          <p className="body-sm text-on-surface/40 mt-4">每周更新，您可以随时取消订阅</p>
        </div>
      </div>
    </section>
  );
}
