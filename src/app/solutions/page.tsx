"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const services = [
  {
    id: "consulting",
    title: "端到端供应链咨询",
    icon: (
      <svg className="w-7 h-7 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    subtitle: "行业洞察·体系建设·业务辅导",
    details: ["业务诊断与规划", "体系建设与优化", "实施辅导与落地", "AI 应用咨询"],
    badge: "热门",
    href: "/solutions/consulting",
  },
  {
    id: "implementation",
    title: "端到端供应链实施",
    icon: (
      <svg className="w-7 h-7 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    subtitle: "全线软件选型与项目交付",
    details: ["APS 高级计划排产", "SRM 供应商关系管理", "WMS 仓储管理系统", "MOM 制造运营管理系统"],
    href: "/solutions/implementation",
  },
  {
    id: "software",
    title: "自研软件产品",
    icon: (
      <svg className="w-7 h-7 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    subtitle: "自主可控的供应链 SaaS",
    details: ["供应协同平台", "智能寻源引擎", "供应计划 AI", "供应商绩效平台"],
    badge: "新品",
    href: "/solutions/software",
  },
  {
    id: "tech-services",
    title: "技术服务",
    icon: (
      <svg className="w-7 h-7 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
    subtitle: "系统托管、迁移、运维保障",
    details: ["系统托管服务", "数据迁移服务", "系统优化服务", "7x24 运维保障"],
    href: "/solutions/tech-services",
  },
  {
    id: "ai-services",
    title: "AI 应用服务",
    icon: (
      <svg className="w-7 h-7 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    subtitle: "AI 咨询、智能分析、场景落地",
    details: ["AI 供应咨询", "智能分析引擎", "智能寻源匹配", "智能计划排产"],
    badge: "AI",
    href: "/solutions/ai-services",
  },
  {
    id: "procurement-services",
    title: "采购业务服务",
    icon: (
      <svg className="w-7 h-7 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    subtitle: "供应寻源对接、采购服务、协同执行",
    details: ["供应寻源对接", "供应采购服务", "供应商协同执行", "供应绩效管理"],
    href: "/solutions/procurement-services",
  },
  {
    id: "talent",
    title: "专业人才库",
    icon: (
      <svg className="w-7 h-7 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    subtitle: "人才培训、企业招聘、匹配服务",
    details: ["供应人才培训", "供应人才招聘", "人才灵活用工", "数字人才转型"],
    href: "/solutions/talent",
  },
  {
    id: "platform",
    title: "商业网络平台",
    icon: (
      <svg className="w-7 h-7 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    subtitle: "专属定制、系统对接、协同网络",
    details: ["专属定制服务", "系统对接服务", "协同网络搭建", "数据中台建设"],
    badge: "VIP",
    href: "/solutions/platform",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                供应协同<span className="text-[#1E88E5]">解决方案</span>
              </h1>
              <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
                一站式供应协同服务，从咨询规划到实施落地
                <br />
                助力企业供应链数字化转型
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "100+", label: "成功实施项目" },
                { value: "10 年 +", label: "行业经验" },
                { value: "98%", label: "客户满意度" },
                { value: "8", label: "核心服务领域" },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-center">
                  <div className="text-4xl font-bold text-[#1E88E5] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#666666]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
              八大核心服务
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-[#F0F4F8] p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">
                          {service.title}
                        </h3>
                        <p className="text-[#666666] text-sm">
                          {service.subtitle}
                        </p>
                        {service.badge && (
                          <span className="inline-block mt-2 px-3 py-1 bg-[#1E88E5] text-white text-xs font-medium rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#F5F5F5]">
                    <h4 className="font-semibold text-[#1A1A1A] mb-3">
                      服务覆盖
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.details.map((detail, index) => (
                        <div key={index} className="flex items-center text-sm text-[#666666]">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center text-[#1E88E5] font-medium">
                      了解更多
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
              为什么选择道生数智？
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: "🎯", title: "专业专注", desc: "专注供应协同领域，深耕行业 10 年+" },
                { icon: "👨‍💼", title: "资深团队", desc: "平均 10 年 + 行业经验的专家队伍" },
                { icon: "📊", title: "数据驱动", desc: "基于数据的科学决策和效果验证" },
                { icon: "🤝", title: "陪伴式服务", desc: "全程伴随，确保项目成功落地" },
              ].map((item, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#666666]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              需要更详细的解决方案？
            </h2>
            <p className="text-[#666666] mb-8 max-w-xl mx-auto">
              预约专家咨询，获取定制化方案与案例分享
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all duration-300 transform hover:scale-105"
            >
              预约演示
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
