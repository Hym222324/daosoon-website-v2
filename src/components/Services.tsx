"use client";

import Link from "next/link";

const coreServices = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "端到端供应链咨询",
    subtitle: "行业洞察·体系建设·业务辅导",
    description: "基于制造业数字化转型经验，提供从战略规划到落地实施的全链条咨询服务，帮助客户构建可持续的竞争优势。",
    tags: ["行业洞察力", "体系建设", "业务辅导"],
    href: "/solutions/consulting",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "端到端供应链实施",
    subtitle: "全线软件选型与项目交付",
    description: "提供 APS、SRM、WMS、TMS、MOM、ERP 等系统的选型、实施与集成服务，确保系统与业务流程无缝匹配。",
    tags: ["APS", "ERP", "MOM/WMS", "TMS"],
    href: "/solutions/implementation",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "自研软件产品",
    subtitle: "自主可控的供应链 SaaS",
    description: "基于多年行业实践沉淀的自研软件产品，结合 AI 能力，为制造企业提供开箱即用的数字化解决方案。",
    tags: ["研发能力", "业务沉淀", "工具专区"],
    href: "/solutions/software",
  },
];

const extendedServices = [
  {
    title: "AI 应用服务",
    description: "大模型驱动的智能寻源、智能谈判、智能预警等 AI 应用服务",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.962 12.962c.765-.765 2.021-.765 2.786 0l.91.91c.765.765.765 2.021 0 2.786l-.91.91c-.765.765-2.021.765-2.786 0l-.91-.91c-.765-.765-.765-2.021 0-2.786l.91-.91z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.638 6.638c.765-.765 2.021-.765 2.786 0l.91.91c.765.765.765 2.021 0 2.786l-.91.91c-.765.765-2.021.765-2.786 0l-.91-.91c-.765-.765-.765-2.021 0-2.786l.91-.91z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.364 19.364c.765-.765 2.021-.765 2.786 0l.91.91c.765.765.765 2.021 0 2.786l-.91.91c-.765.765-2.021.765-2.786 0l-.91-.91c-.765-.765-.765-2.021 0-2.786l.91-.91z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
      </svg>
    ),
    href: "/solutions/ai-services",
  },
  {
    title: "采购业务服务",
    description: "采购流程优化、供应商管理、成本分析等专业采购咨询服务",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    href: "/solutions/procurement-services",
  },
  {
    title: "专业人才服务",
    description: "供应链数字化人才猎头、培训与组织咨询服务",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    href: "/solutions/talent",
  },
  {
    title: "商业网络平台",
    description: "连接供应商、制造商、服务商的商业生态网络平台",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-7.5-10.5h2.25a2.625 2.625 0 012.625 2.625v1.5a2.625 2.625 0 11-5.25 0v-1.5a2.625 2.625 0 012.625-2.625z" />
      </svg>
    ),
    href: "/solutions/platform",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing bg-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="display-md text-on-surface mb-6">我们提供什么？</h2>
          <p className="body-lg text-on-surface/70 max-w-2xl mx-auto">
            聚焦两大核心能力：供应链数智化服务 + 落地执行
          </p>
        </div>

        {/* Core Services - Intentional Asymmetry */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {coreServices.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="card elevate-low hover:elevate-high block group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="display-sm text-on-surface mb-3">{service.title}</h3>
                <p className="body-md text-on-surface/60 mb-6 flex-1">{service.subtitle}</p>
                <div className="mb-6">
                  <p className="body-sm text-on-surface/50 mb-3">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass-chip px-4 py-2 rounded-xl text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all mt-auto">
                  了解详情
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Extended Services - Glassmorphism Cards */}
        <div className="glass rounded-3xl p-8 md:p-12">
          <h3 className="display-sm text-on-surface mb-8 text-center">扩展服务能力</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extendedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="glass rounded-2xl p-6 hover:bg-surface-container-high transition-colors block group"
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-2">{service.title}</h4>
                <p className="body-sm text-on-surface/60 line-clamp-2">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
