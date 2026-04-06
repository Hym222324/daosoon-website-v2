"use client";

import Link from "next/link";

const connectCards = [
  {
    title: "业务咨询",
    subtitle: "让供应链更智能",
    primary: "预约演示",
    secondary: "下载解决方案手册",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-1.009c.086.022.172.044.258.066m-9.345 8.334c-2.135.21-4.263.445-6.386.706a2.115 2.115 0 00-.825.242m9.345-8.334V20.25c0 .346-.045.684-.135 1.012m-9.345-8.334V20.25" />
      </svg>
    ),
  },
  {
    title: "加入团队",
    subtitle: "加入道生，一起创造价值",
    primary: "查看热招职位",
    secondary: "提交简历",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.063 2.531m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "生态合作",
    subtitle: "成为生态伙伴",
    primary: "申请合作",
    secondary: "API 接入申请",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "参与社区",
    subtitle: "供应链人的聚集地",
    primary: "前往论坛",
    secondary: "预约下次公开课",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

export default function Banner() {
  return (
    <section id="connect" className="section-spacing bg-surface-container-low">
      <div className="section-container">
        <div className="glass rounded-3xl p-8 md:p-16 text-center">
          <h2 className="display-md text-on-surface mb-6">连接道生，共创数智供应链</h2>
          <p className="body-lg text-on-surface/70 max-w-2xl mx-auto mb-12">
            无论您是寻求业务咨询、加入团队，还是探索生态合作，我们都期待与您合作
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectCards.map((card, index) => (
              <div
                key={card.title}
                className="glass rounded-2xl p-6 hover:bg-surface-container-high transition-colors cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="display-sm text-on-surface mb-2">{card.title}</h3>
                <p className="body-md text-on-surface/60 mb-6">{card.subtitle}</p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/connect"
                    className="btn-primary"
                  >
                    {card.primary}
                  </Link>
                  <Link
                    href="/connect"
                    className="body-sm text-on-surface/60 hover:text-primary transition-colors"
                  >
                    {card.secondary} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
