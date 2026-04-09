"use client";

import Link from "next/link";

const connectCards = [
  {
    title: "业务咨询",
    subtitle: "让供应链更智能",
    primary: "预约演示",
    secondary: "下载解决方案手册",
  },
  {
    title: "加入团队",
    subtitle: "加入道生，一起创造价值",
    primary: "查看热招职位",
    secondary: "提交简历",
  },
  {
    title: "生态合作",
    subtitle: "成为生态伙伴",
    primary: "申请合作",
    secondary: "API 接入申请",
  },
  {
    title: "参与社区",
    subtitle: "供应链人的聚集地",
    primary: "前往论坛",
    secondary: "预约下次公开课",
  },
];

export default function Banner() {
  return (
    <section
      id="connect"
      className="section-spacing relative overflow-hidden text-[#1A1A1A] bg-[#EAF4FF]"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            连接道生，共创数智供应链
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {connectCards.map((card) => (
            <div
              key={card.title}
              className="bg-white/90 p-6 rounded-xl card-hover cursor-pointer border border-[#D5E7FB] shadow-sm"
            >
              <h3 className="font-bold text-xl mb-2">{card.title}</h3>
              <p className="text-[#5B6473] text-sm mb-4">{card.subtitle}</p>
              <Link
                href="/connect"
                className="block bg-[#FF9800] text-white text-center px-6 py-2 rounded-lg font-medium hover:bg-[#F57C00] transition-all mb-2"
              >
                {card.primary}
              </Link>
              <Link
                href="/connect"
                className="block text-[#5B6473] text-sm text-center hover:text-[#1A1A1A] transition-colors"
              >
                {card.secondary}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
