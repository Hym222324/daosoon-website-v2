"use client";

import Link from "next/link";

const coreServices = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "端到端供应链咨询",
    subtitle: "行业洞察·体系建设·业务辅导",
    tags: ["行业洞察力", "体系建设", "业务辅导"],
    gradient: "from-[#1E88E5] to-[#1565C0]",
    href: "/solutions/consulting",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: "端到端供应链实施",
    subtitle: "全线软件选型与项目交付",
    tags: ["APS", "ERP", "MOM/WMS", "TMS"],
    gradient: "from-[#FF9800] to-[#F57C00]",
    href: "/solutions/implementation",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "自研软件产品",
    subtitle: "自主可控的供应链 SaaS",
    tags: ["研发能力", "业务沉淀", "工具专区"],
    gradient: "from-[#9C27B0] to-[#7B1FA2]",
    href: "/solutions/software",
  },
];

const extendedServices = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      </svg>
    ),
    title: "技术服务",
    href: "/solutions/tech-services",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "AI 应用服务",
    href: "/solutions/ai-services",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "采购业务服务",
    href: "/solutions/procurement-services",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#1E88E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "专业人才库",
    href: "/solutions/talent",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: "商业网络平台",
    href: "/solutions/platform",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            我们提供什么？
          </h2>
          <p className="text-[#666666] text-lg">
            聚焦两大核心能力：供应链数智化服务 + 落地执行
          </p>
        </div>

        {/* Core Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {coreServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-[#F0F4F8] p-6 rounded-xl card-hover cursor-pointer border-2 border-transparent hover:border-[#1E88E5]"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1E88E5]/10 to-[#9C27B0]/10 rounded-xl flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-[#666666] text-sm mb-3">
                {service.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 rounded text-xs text-[#666666]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[#1E88E5] font-medium">
                了解详情 →
              </span>
            </Link>
          ))}
        </div>

        {/* Extended Services */}
        <div className="grid md:grid-cols-5 gap-4">
          {extendedServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-[#F5F5F5] p-4 rounded-lg card-hover cursor-pointer text-center"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                {service.icon}
              </div>
              <h4 className="font-medium text-sm">{service.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
