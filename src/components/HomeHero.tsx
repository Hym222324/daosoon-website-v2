"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A] pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#1E88E5]/20 to-[#9C27B0]/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(30,136,229,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(156,39,176,0.4) 0%, transparent 50%)",
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          端到端供应链{" "}
          <span className="text-[#1E88E5]">AI</span> 应用服务商
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          为制造及供应链企业提供
          <span className="text-[#FF9800] font-semibold">
            AI 驱动的协同平台
          </span>{" "}
          与 SRM 实施服务。降低采购成本，提升协同效率，规避供应链风险。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/connect"
            className="bg-[#FF9800] text-white px-10 py-4 rounded-lg font-medium hover:bg-[#F57C00] transition-all whitespace-nowrap"
          >
            预约演示
          </Link>
          <Link
            href="#services"
            className="bg-transparent text-white px-10 py-4 rounded-lg font-medium border-2 border-white hover:bg-white hover:text-[#1A1A1A] transition-all whitespace-nowrap"
          >
            探索解决方案
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#1E88E5]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>核心团队深耕制造业信息化 20 年</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#1E88E5]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>服务工程机械、汽车零部件、农业装备头部客户</span>
          </div>
        </div>
      </div>
    </section>
  );
}
