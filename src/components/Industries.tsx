"use client";

import Link from "next/link";

const industries = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.875 2.036-1.968 2.188a16.983 16.983 0 00-3.463 1.353c-.633.36-1.34.667-2.112.916a16.978 16.978 0 01-2.055-.36c-.93-.33-1.733-.868-2.438-1.553a16.967 16.967 0 01-2.823-3.686c-.666-.86-1.13-1.84-1.367-2.893a16.983 16.983 0 00-1.736-4.952m16.925-3.077a16.97 16.97 0 01-2.658-2.842 16.98 16.98 0 00-2.862-3.687m12.45-2.733a16.975 16.975 0 01-4.952-1.736c-1.054-.38-2.147-.656-3.26-.817m4.32 20.016c.584.176 1.195.306 1.82.387a16.96 16.96 0 003.686.75m-12.12-20.25a16.97 16.97 0 01-4.952-1.736 16.97 16.97 0 00-3.687-.633m19.695 15.225a16.98 16.98 0 00-3.687-.75 16.98 16.98 0 01-4.952-1.736m-5.963 5.283c-1.032-.346-2.025-.765-2.973-1.254m13.268 2.49a16.97 16.97 0 00-4.28-1.197m-11.092 1.48a16.97 16.97 0 01-4.28-1.197m15.372-2.04a16.97 16.97 0 00-3.687-.633m-1.963 4.36a16.97 16.97 0 00-2.438-1.553m0 0a16.97 16.97 0 01-2.823-3.686m6.666 4.323a16.98 16.98 0 00-3.687-.75" />
      </svg>
    ),
    title: "离散制造",
    pain: "多品种小批量、BOM 复杂、变更频繁",
    solution: "AI 辅助需求预测 + SRM 供应商协同平台",
    href: "/discrete-manufacturing",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 002.25 2.25H15a3.375 3.375 0 003.375-3.375V6.104M9.75 3.104c-.271-.366-.62-.644-1-.644h-2.375c-.552 0-1 .448-1 1v9.75c0 .552.448 1 1 1h2.375c.38 0 .742-.257.92-.644m13.125 2.626c-.271.366-.62.644-1 .644h-2.375c-.552 0-1-.448-1-1V9.375c0-.552.448-1 1-1h2.375c.38 0 .742.257.92.644m2.625 8.326c-.271.366-.62.644-1 .644h-2.375c-.552 0-1-.448-1-1v-5.714c0-.552.448-1 1-1h2.375c.38 0 .742.257.92.644" />
      </svg>
    ),
    title: "流程制造",
    pain: "连续生产、配方管理、副产物多",
    solution: "MES 集成 + 供应链风险预警",
    href: "/process-manufacturing",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "农业数字化",
    pain: "季节性、产地分散、质量标准多样",
    solution: "数字化产地仓 + 供需匹配平台",
    href: "/agriculture",
  },
];

const caseStudies = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    name: "中联重科",
    desc: "工程机械龙头，供应商数千家",
    result: "采购周期缩短 25%，供应商响应速度提升 40%",
    href: "/case/zoomlion",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
      </svg>
    ),
    name: "蔚来汽车",
    desc: "新能源车企，供应链复杂度高",
    result: "寻源效率提升 50%，库存周转率提高 30%",
    href: "/case/nio",
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    name: "农业科学院",
    desc: "农业装备研发机构，多品种小批量",
    result: "采购成本降低 18%，供应商准入周期缩短 60%",
    href: "/case/caas",
  },
];

const partners = ["SAP", "Oracle", "用友", "金蝶", "阿里云", "华为云"];

export default function Industries() {
  return (
    <section id="industries" className="section-spacing bg-surface-container-low">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="display-md text-on-surface mb-6">我们懂您的行业</h2>
          <p className="body-lg text-on-surface/70 max-w-2xl mx-auto">
            深耕制造业数字化转型，为不同行业提供定制化解决方案
          </p>
        </div>

        {/* Industry Cards - Glassmorphism */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="card glass elevate-low hover:elevate-high block group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="display-sm text-on-surface mb-4">{industry.title}</h3>
                <div className="mb-4">
                  <span className="text-xs font-bold text-on-surface/40 uppercase tracking-wider mb-2 block">业务痛点</span>
                  <p className="body-sm text-red-500/80 bg-red-500/5 px-4 py-3 rounded-xl">{industry.pain}</p>
                </div>
                <div className="mb-6 flex-1">
                  <span className="text-xs font-bold text-on-surface/40 uppercase tracking-wider mb-2 block">解决方案</span>
                  <p className="body-sm text-primary">{industry.solution}</p>
                </div>
                <span className="inline-flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all mt-auto">
                  了解更多
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="display-md text-on-surface mb-4">成功实践</h3>
            <p className="body-lg text-on-surface/70">为行业龙头提供数字化转型服务</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="card elevate-low hover:elevate-high block group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="display-sm text-on-surface mb-2">{item.name}</h4>
                    <p className="body-md text-on-surface/60">{item.desc}</p>
                  </div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <span className="font-bold text-secondary">成果亮点</span>
                  </div>
                  <p className="body-md text-on-surface/80">{item.result}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="glass rounded-3xl p-12 text-center">
          <p className="text-on-surface/60 mb-8 font-medium">我们的实施伙伴</p>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-xl font-bold text-on-surface font-display hover:text-primary transition-colors cursor-pointer"
              >
                {partner}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/connect" className="btn-primary">
              预约专家咨询
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
