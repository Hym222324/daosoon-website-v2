"use client";

import Link from "next/link";

const industries = [
  {
    icon: "🏭",
    title: "离散制造",
    pain: "多品种小批量、BOM 复杂、变更频繁",
    solution: "AI 辅助需求预测 + SRM 供应商协同平台",
    href: "/discrete-manufacturing",
  },
  {
    icon: "⚙️",
    title: "流程制造",
    pain: "连续生产、配方管理、副产物多",
    solution: "MES 集成 + 供应链风险预警",
    href: "/process-manufacturing",
  },
  {
    icon: "🌾",
    title: "农业",
    pain: "季节性、产地分散、质量标准多样",
    solution: "数字化产地仓 + 供需匹配平台",
    href: "/agriculture",
  },
];

const caseStudies = [
  {
    name: "中联重科",
    desc: "工程机械龙头，供应商数千家",
    result: "采购周期缩短 25%，供应商响应速度提升 40%",
    href: "/case/zoomlion",
  },
  {
    name: "蔚来汽车",
    desc: "新能源车企，供应链复杂度高",
    result: "寻源效率提升 50%，库存周转率提高 30%",
    href: "/case/nio",
  },
  {
    name: "农业研究院中农机",
    desc: "农业装备研发机构，多品种小批量",
    result: "采购成本降低 18%，供应商准入周期缩短 60%",
    href: "/case/caas",
  },
];

const partners = ["SAP", "Oracle", "用友", "金蝶", "阿里云", "华为云"];

export default function Industries() {
  return (
    <section id="insights" className="section-spacing bg-[#F0F4F8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            我们懂您的行业
          </h2>
        </div>

        {/* Industry Insights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="bg-white p-6 rounded-xl card-hover cursor-pointer"
            >
              <div className="text-3xl mb-3">{industry.icon}</div>
              <h3 className="font-bold text-xl mb-2">{industry.title}</h3>
              <p className="text-[#666666] text-sm mb-3">{industry.pain}</p>
              <p className="text-sm text-[#1E88E5]">{industry.solution}</p>
            </Link>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-12">
          <h3 className="font-bold text-xl mb-6 text-center text-[#1A1A1A]">
            成功实践
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white p-6 rounded-xl card-hover cursor-pointer"
              >
                <h4 className="font-bold text-lg mb-2 text-[#1A1A1A]">
                  {item.name}
                </h4>
                <p className="text-[#666666] text-sm mb-3">{item.desc}</p>
                <p className="text-[#FF9800] font-semibold text-sm">
                  {item.result}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center mb-8">
          <p className="text-[#666666] mb-4">我们的实施伙伴：</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-lg font-medium text-[#1A1A1A]"
              >
                {partner}
                {partner !== "华为云" && " · "}
              </span>
            ))}
          </div>
          <Link
            href="/connect"
            className="bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all"
          >
            预约专家咨询
          </Link>
        </div>
      </div>
    </section>
  );
}
