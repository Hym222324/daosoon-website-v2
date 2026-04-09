"use client";

import Link from "next/link";
import { Factory, Cog, Sprout, Building2, type LucideIcon } from "lucide-react";

const industries: {
  Icon: LucideIcon;
  title: string;
  pain: string;
  solution: string;
  href: string;
  caseLabel?: string;
}[] = [
  {
    Icon: Factory,
    title: "离散制造",
    pain: "多品种小批量、BOM 复杂、变更频繁",
    solution: "计划协同、供应商协同与履约一体的数智化方案",
    href: "/cases",
    caseLabel: "案例",
  },
  {
    Icon: Cog,
    title: "流程制造",
    pain: "连续生产、配方管理、副产物多",
    solution: "制造执行与供应链风险联动的可视化运营",
    href: "/process-manufacturing",
  },
  {
    Icon: Sprout,
    title: "农业",
    pain: "季节性、产地分散、质量标准多样",
    solution: "产地数字化与供需匹配的协同网络",
    href: "/agriculture",
  },
  {
    Icon: Building2,
    title: "其他行业",
    pain: "不同细分行业在计划、采购、制造与履约上的共性难题",
    solution: "与我们联系，讨论定制化的行业解法与实施路径",
    href: "/connect",
    caseLabel: "联系我们",
  },
];

export default function Industries() {
  return (
    <section id="insights" className="section-spacing bg-[#F0F4F8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            行业解决方案
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map(({ Icon, href, title, pain, solution, caseLabel }) => (
            <Link
              key={href + title}
              href={href}
              className="bg-white p-6 rounded-xl card-hover cursor-pointer flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5] mb-3">
                <Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p className="text-[#666666] text-sm mb-3 flex-1">{pain}</p>
              <p className="text-sm text-[#1E88E5] mb-2">{solution}</p>
              {caseLabel && (
                <span className="text-xs font-medium text-[#FF9800]">{caseLabel} →</span>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/connect"
            className="bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all inline-block"
          >
            预约专家咨询
          </Link>
        </div>
      </div>
    </section>
  );
}
